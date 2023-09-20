// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListTemplateVersionsRequest, ListTemplateVersionsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_ListTemplateVersionsCommand, se_ListTemplateVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandInput extends ListTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandOutput extends ListTemplateVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about all the versions of a specific message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListTemplateVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListTemplateVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // ListTemplateVersionsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateType: "STRING_VALUE", // required
 * };
 * const command = new ListTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateVersionsResponse
 * //   TemplateVersionsResponse: { // TemplateVersionsResponse
 * //     Item: [ // ListOfTemplateVersionResponse // required
 * //       { // TemplateVersionResponse
 * //         CreationDate: "STRING_VALUE", // required
 * //         DefaultSubstitutions: "STRING_VALUE",
 * //         LastModifiedDate: "STRING_VALUE", // required
 * //         TemplateDescription: "STRING_VALUE",
 * //         TemplateName: "STRING_VALUE", // required
 * //         TemplateType: "STRING_VALUE", // required
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Message: "STRING_VALUE",
 * //     NextToken: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTemplateVersionsCommandInput - {@link ListTemplateVersionsCommandInput}
 * @returns {@link ListTemplateVersionsCommandOutput}
 * @see {@link ListTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class ListTemplateVersionsCommand extends $Command<
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListTemplateVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTemplateVersionsCommandInput, ListTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTemplateVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "ListTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "ListTemplateVersions",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListTemplateVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTemplateVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplateVersionsCommandOutput> {
    return de_ListTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
