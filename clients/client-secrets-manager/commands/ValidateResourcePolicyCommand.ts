import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ValidateResourcePolicyRequest, ValidateResourcePolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ValidateResourcePolicyCommand,
  serializeAws_json1_1ValidateResourcePolicyCommand,
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

export type ValidateResourcePolicyCommandInput = ValidateResourcePolicyRequest;
export type ValidateResourcePolicyCommandOutput = ValidateResourcePolicyResponse & __MetadataBearer;

/**
 * <p>Validates the JSON text of the resource-based policy document attached to the
 *       specified secret. The JSON request string input and response output displays formatted code
 *       with white space and line breaks for better readability. Submit your input as a single line
 *       JSON string. A resource-based
 *       policy is optional.</p>
 */
export class ValidateResourcePolicyCommand extends $Command<
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ValidateResourcePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateResourcePolicyCommandInput, ValidateResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ValidateResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateResourcePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ValidateResourcePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ValidateResourcePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateResourcePolicyCommandOutput> {
    return deserializeAws_json1_1ValidateResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
