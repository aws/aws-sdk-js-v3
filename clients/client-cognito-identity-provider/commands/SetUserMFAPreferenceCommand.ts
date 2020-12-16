import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { SetUserMFAPreferenceRequest, SetUserMFAPreferenceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SetUserMFAPreferenceCommand,
  serializeAws_json1_1SetUserMFAPreferenceCommand,
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

export type SetUserMFAPreferenceCommandInput = SetUserMFAPreferenceRequest;
export type SetUserMFAPreferenceCommandOutput = SetUserMFAPreferenceResponse & __MetadataBearer;

/**
 * <p>Set the user's multi-factor authentication (MFA) method preference, including which
 *             MFA factors are enabled and if any are preferred. Only one factor can be set as
 *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
 *             factors are enabled. If multiple options are enabled and no preference is set, a
 *             challenge to choose an MFA option will be returned during sign in. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts,
 *             unless device tracking is turned on and the device has been trusted.
 *             If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts, disable MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export class SetUserMFAPreferenceCommand extends $Command<
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetUserMFAPreferenceCommandInput) {
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
  ): Handler<SetUserMFAPreferenceCommandInput, SetUserMFAPreferenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUserMFAPreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetUserMFAPreferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetUserMFAPreferenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetUserMFAPreferenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetUserMFAPreferenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUserMFAPreferenceCommandOutput> {
    return deserializeAws_json1_1SetUserMFAPreferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
