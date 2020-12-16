import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartConfigurationRecorderRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StartConfigurationRecorderCommand,
  serializeAws_json1_1StartConfigurationRecorderCommand,
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

export type StartConfigurationRecorderCommandInput = StartConfigurationRecorderRequest;
export type StartConfigurationRecorderCommandOutput = __MetadataBearer;

/**
 * <p>Starts recording configurations of the AWS resources you have
 * 			selected to record in your AWS account.</p>
 * 		       <p>You must have created at least one delivery channel to
 * 			successfully start the configuration recorder.</p>
 */
export class StartConfigurationRecorderCommand extends $Command<
  StartConfigurationRecorderCommandInput,
  StartConfigurationRecorderCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartConfigurationRecorderCommandInput) {
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
  ): Handler<StartConfigurationRecorderCommandInput, StartConfigurationRecorderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartConfigurationRecorderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConfigurationRecorderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartConfigurationRecorderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartConfigurationRecorderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartConfigurationRecorderCommandOutput> {
    return deserializeAws_json1_1StartConfigurationRecorderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
