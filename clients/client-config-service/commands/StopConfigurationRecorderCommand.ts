import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StopConfigurationRecorderRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StopConfigurationRecorderCommand,
  serializeAws_json1_1StopConfigurationRecorderCommand,
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

export type StopConfigurationRecorderCommandInput = StopConfigurationRecorderRequest;
export type StopConfigurationRecorderCommandOutput = __MetadataBearer;

/**
 * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
 */
export class StopConfigurationRecorderCommand extends $Command<
  StopConfigurationRecorderCommandInput,
  StopConfigurationRecorderCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopConfigurationRecorderCommandInput) {
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
  ): Handler<StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StopConfigurationRecorderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopConfigurationRecorderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopConfigurationRecorderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopConfigurationRecorderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopConfigurationRecorderCommandOutput> {
    return deserializeAws_json1_1StopConfigurationRecorderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
