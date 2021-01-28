import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminSetUserMFAPreferenceRequest, AdminSetUserMFAPreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminSetUserMFAPreferenceCommand,
  serializeAws_json1_1AdminSetUserMFAPreferenceCommand,
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

export type AdminSetUserMFAPreferenceCommandInput = AdminSetUserMFAPreferenceRequest;
export type AdminSetUserMFAPreferenceCommandOutput = AdminSetUserMFAPreferenceResponse & __MetadataBearer;

/**
 * <p>Sets the user's multi-factor authentication (MFA) preference, including which MFA
 *             options are enabled and if any are preferred. Only one factor can be set as preferred.
 *             The preferred MFA factor will be used to authenticate a user if multiple factors are
 *             enabled. If multiple options are enabled and no preference is set, a challenge to choose
 *             an MFA option will be returned during sign in.</p>
 */
export class AdminSetUserMFAPreferenceCommand extends $Command<
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminSetUserMFAPreferenceCommandInput) {
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
  ): Handler<AdminSetUserMFAPreferenceCommandInput, AdminSetUserMFAPreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserMFAPreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserMFAPreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminSetUserMFAPreferenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminSetUserMFAPreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminSetUserMFAPreferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminSetUserMFAPreferenceCommandOutput> {
    return deserializeAws_json1_1AdminSetUserMFAPreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
