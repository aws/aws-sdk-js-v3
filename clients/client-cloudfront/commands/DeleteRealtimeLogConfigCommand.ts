import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteRealtimeLogConfigRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteRealtimeLogConfigCommand,
  serializeAws_restXmlDeleteRealtimeLogConfigCommand,
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

export type DeleteRealtimeLogConfigCommandInput = DeleteRealtimeLogConfigRequest;
export type DeleteRealtimeLogConfigCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a real-time log configuration.</p>
 * 		       <p>You cannot delete a real-time log configuration if it’s attached to a cache behavior.
 * 			First update your distributions to remove the real-time log configuration from all cache
 * 			behaviors, then delete the real-time log configuration.</p>
 * 		       <p>To delete a real-time log configuration, you can provide the configuration’s name or its
 * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
 * 			uses the name to identify the real-time log configuration to delete.</p>
 */
export class DeleteRealtimeLogConfigCommand extends $Command<
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRealtimeLogConfigCommandInput) {
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
  ): Handler<DeleteRealtimeLogConfigCommandInput, DeleteRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlDeleteRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
