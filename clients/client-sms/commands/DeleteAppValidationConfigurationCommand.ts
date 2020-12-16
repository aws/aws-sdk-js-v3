import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppValidationConfigurationRequest, DeleteAppValidationConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAppValidationConfigurationCommand,
  serializeAws_json1_1DeleteAppValidationConfigurationCommand,
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

export type DeleteAppValidationConfigurationCommandInput = DeleteAppValidationConfigurationRequest;
export type DeleteAppValidationConfigurationCommandOutput = DeleteAppValidationConfigurationResponse & __MetadataBearer;

/**
 * <p>Deletes the validation configuration for the specified application.</p>
 */
export class DeleteAppValidationConfigurationCommand extends $Command<
  DeleteAppValidationConfigurationCommandInput,
  DeleteAppValidationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAppValidationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppValidationConfigurationCommandInput, DeleteAppValidationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "DeleteAppValidationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAppValidationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppValidationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAppValidationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAppValidationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAppValidationConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteAppValidationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
