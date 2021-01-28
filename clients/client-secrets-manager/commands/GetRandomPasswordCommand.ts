import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { GetRandomPasswordRequest, GetRandomPasswordResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRandomPasswordCommand,
  serializeAws_json1_1GetRandomPasswordCommand,
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

export type GetRandomPasswordCommandInput = GetRandomPasswordRequest;
export type GetRandomPasswordCommandOutput = GetRandomPasswordResponse & __MetadataBearer;

/**
 * <p>Generates a random password of the specified complexity. This operation is intended for
 *       use in the Lambda rotation function. Per best practice, we recommend that you specify the
 *       maximum length and include every character type that the system you are generating a password
 *       for can support.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:GetRandomPassword</p>
 *             </li>
 *          </ul>
 */
export class GetRandomPasswordCommand extends $Command<
  GetRandomPasswordCommandInput,
  GetRandomPasswordCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRandomPasswordCommandInput) {
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
  ): Handler<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "GetRandomPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRandomPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRandomPasswordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRandomPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRandomPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRandomPasswordCommandOutput> {
    return deserializeAws_json1_1GetRandomPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
