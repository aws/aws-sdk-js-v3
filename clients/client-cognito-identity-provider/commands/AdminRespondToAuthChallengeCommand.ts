import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminRespondToAuthChallengeCommand,
  serializeAws_json1_1AdminRespondToAuthChallengeCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type AdminRespondToAuthChallengeCommandInput = AdminRespondToAuthChallengeRequest;
export type AdminRespondToAuthChallengeCommandOutput = AdminRespondToAuthChallengeResponse & __MetadataBearer;

/**
 * <p>Responds to an authentication challenge, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminRespondToAuthChallengeCommand extends $Command<
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminRespondToAuthChallengeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminRespondToAuthChallengeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminRespondToAuthChallengeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminRespondToAuthChallengeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminRespondToAuthChallengeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminRespondToAuthChallengeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminRespondToAuthChallengeCommandOutput> {
    return deserializeAws_json1_1AdminRespondToAuthChallengeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
