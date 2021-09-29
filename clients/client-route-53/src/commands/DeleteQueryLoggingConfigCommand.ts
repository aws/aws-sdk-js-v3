import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteQueryLoggingConfigCommand,
  serializeAws_restXmlDeleteQueryLoggingConfigCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteQueryLoggingConfigCommandInput extends DeleteQueryLoggingConfigRequest {}
export interface DeleteQueryLoggingConfigCommandOutput extends DeleteQueryLoggingConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs.
 * 			Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p>
 *
 * 		       <p>For more information about DNS query logs, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteQueryLoggingConfigCommand extends $Command<
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQueryLoggingConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DeleteQueryLoggingConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQueryLoggingConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteQueryLoggingConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueryLoggingConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteQueryLoggingConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueryLoggingConfigCommandOutput> {
    return deserializeAws_restXmlDeleteQueryLoggingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
