import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateRealtimeLogConfigRequest, CreateRealtimeLogConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateRealtimeLogConfigCommand,
  serializeAws_restXmlCreateRealtimeLogConfigCommand,
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

export type CreateRealtimeLogConfigCommandInput = CreateRealtimeLogConfigRequest;
export type CreateRealtimeLogConfigCommandOutput = CreateRealtimeLogConfigResult & __MetadataBearer;

/**
 * <p>Creates a real-time log configuration.</p>
 * 		       <p>After you create a real-time log configuration, you can attach it to one or more cache
 * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
 * 		       <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CreateRealtimeLogConfigCommand extends $Command<
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRealtimeLogConfigCommandInput) {
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
  ): Handler<CreateRealtimeLogConfigCommandInput, CreateRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRealtimeLogConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateRealtimeLogConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRealtimeLogConfigCommandOutput> {
    return deserializeAws_restXmlCreateRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
