import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutConfigurationRecorderRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutConfigurationRecorderCommand,
  serializeAws_json1_1PutConfigurationRecorderCommand,
} from "../protocols/Aws_json1_1";
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

export type PutConfigurationRecorderCommandInput = PutConfigurationRecorderRequest;
export type PutConfigurationRecorderCommandOutput = __MetadataBearer;

/**
 * <p>Creates a new configuration recorder to record the selected
 * 			resource configurations.</p>
 * 		       <p>You can use this action to change the role <code>roleARN</code>
 * 			or the <code>recordingGroup</code> of an existing recorder. To
 * 			change the role, call the action on the existing configuration
 * 			recorder and specify a role.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 			         <p>If <code>ConfigurationRecorder</code> does not have the
 * 					<b>recordingGroup</b> parameter
 * 				specified, the default is to record all supported resource
 * 				types.</p>
 * 		       </note>
 */
export class PutConfigurationRecorderCommand extends $Command<
  PutConfigurationRecorderCommandInput,
  PutConfigurationRecorderCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigurationRecorderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationRecorderCommandInput, PutConfigurationRecorderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutConfigurationRecorderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationRecorderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConfigurationRecorderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConfigurationRecorderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConfigurationRecorderCommandOutput> {
    return deserializeAws_json1_1PutConfigurationRecorderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
