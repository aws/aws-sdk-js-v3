import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateRealtimeLogConfigCommand,
  serializeAws_restXmlUpdateRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
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

export type UpdateRealtimeLogConfigCommandInput = UpdateRealtimeLogConfigRequest;
export type UpdateRealtimeLogConfigCommandOutput = UpdateRealtimeLogConfigResult & __MetadataBearer;

/**
 * <p>Updates a real-time log configuration.</p>
 * 		       <p>When you update a real-time log configuration, all the parameters are updated with the
 * 			values provided in the request. You cannot update some parameters independent of others.
 * 			To update a real-time log configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
 * 					configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the parameters in the real-time log configuration that you want
 * 					to update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
 * 					real-time log configuration, including the parameters that you modified and
 * 					those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>You cannot update a real-time log configuration’s <code>Name</code> or
 * 			<code>ARN</code>.</p>
 */
export class UpdateRealtimeLogConfigCommand extends $Command<
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRealtimeLogConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRealtimeLogConfigCommandInput, UpdateRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRealtimeLogConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlUpdateRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
