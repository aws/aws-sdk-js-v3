import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigurationRecorderRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteConfigurationRecorderCommand,
  serializeAws_json1_1DeleteConfigurationRecorderCommand,
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

export type DeleteConfigurationRecorderCommandInput = DeleteConfigurationRecorderRequest;
export type DeleteConfigurationRecorderCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the configuration recorder.</p>
 * 		       <p>After the configuration recorder is deleted, AWS Config will
 * 			not record resource configuration changes until you create a new
 * 			configuration recorder.</p>
 * 		       <p>This action does not delete the configuration information that
 * 			was previously recorded. You will be able to access the previously
 * 			recorded information by using the
 * 				<code>GetResourceConfigHistory</code> action, but you will not
 * 			be able to access this information in the AWS Config console until
 * 			you create a new configuration recorder.</p>
 */
export class DeleteConfigurationRecorderCommand extends $Command<
  DeleteConfigurationRecorderCommandInput,
  DeleteConfigurationRecorderCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationRecorderCommandInput) {
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
  ): Handler<DeleteConfigurationRecorderCommandInput, DeleteConfigurationRecorderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteConfigurationRecorderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationRecorderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigurationRecorderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteConfigurationRecorderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationRecorderCommandOutput> {
    return deserializeAws_json1_1DeleteConfigurationRecorderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
