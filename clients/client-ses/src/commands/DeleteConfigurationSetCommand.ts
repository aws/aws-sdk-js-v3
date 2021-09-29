import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteConfigurationSetRequest, DeleteConfigurationSetResponse } from "../models/models_0";
import {
  deserializeAws_queryDeleteConfigurationSetCommand,
  serializeAws_queryDeleteConfigurationSetCommand,
} from "../protocols/Aws_query";
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

export interface DeleteConfigurationSetCommandInput extends DeleteConfigurationSetRequest {}
export interface DeleteConfigurationSetCommandOutput extends DeleteConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Deletes a configuration set. Configuration sets enable you to publish email sending
 *             events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteConfigurationSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteConfigurationSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteConfigurationSetCommand extends $Command<
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteConfigurationSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConfigurationSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteConfigurationSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteConfigurationSetCommandOutput> {
    return deserializeAws_queryDeleteConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
