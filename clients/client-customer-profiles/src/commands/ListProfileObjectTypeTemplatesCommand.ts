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
} from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_0";
import {
  de_ListProfileObjectTypeTemplatesCommand,
  se_ListProfileObjectTypeTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProfileObjectTypeTemplatesCommand}.
 */
export interface ListProfileObjectTypeTemplatesCommandInput extends ListProfileObjectTypeTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileObjectTypeTemplatesCommand}.
 */
export interface ListProfileObjectTypeTemplatesCommandOutput
  extends ListProfileObjectTypeTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileObjectTypeTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileObjectTypeTemplatesResponse
 * //   Items: [ // ProfileObjectTypeTemplateList
 * //     { // ListProfileObjectTypeTemplateItem
 * //       TemplateId: "STRING_VALUE",
 * //       SourceName: "STRING_VALUE",
 * //       SourceObject: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileObjectTypeTemplatesCommandInput - {@link ListProfileObjectTypeTemplatesCommandInput}
 * @returns {@link ListProfileObjectTypeTemplatesCommandOutput}
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class ListProfileObjectTypeTemplatesCommand extends $Command<
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: ListProfileObjectTypeTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfileObjectTypeTemplatesCommandInput, ListProfileObjectTypeTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProfileObjectTypeTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "ListProfileObjectTypeTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: ListProfileObjectTypeTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListProfileObjectTypeTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProfileObjectTypeTemplatesCommandOutput> {
    return de_ListProfileObjectTypeTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
