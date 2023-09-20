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

import {
  ListServiceTemplatesInput,
  ListServiceTemplatesOutput,
  ListServiceTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListServiceTemplatesCommand, se_ListServiceTemplatesCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandInput extends ListServiceTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandOutput extends ListServiceTemplatesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List service templates with detail data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListServiceTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServiceTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // ServiceTemplateSummaryList // required
 * //     { // ServiceTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       pipelineProvisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceTemplatesCommandInput - {@link ListServiceTemplatesCommandInput}
 * @returns {@link ListServiceTemplatesCommandOutput}
 * @see {@link ListServiceTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class ListServiceTemplatesCommand extends $Command<
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: ListServiceTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServiceTemplatesCommandInput, ListServiceTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServiceTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListServiceTemplatesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsProton20200720",
        operation: "ListServiceTemplates",
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
  private serialize(input: ListServiceTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServiceTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceTemplatesCommandOutput> {
    return de_ListServiceTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
