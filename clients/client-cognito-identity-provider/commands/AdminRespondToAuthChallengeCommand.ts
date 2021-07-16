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

export interface AdminRespondToAuthChallengeCommandInput extends AdminRespondToAuthChallengeRequest {}
export interface AdminRespondToAuthChallengeCommandOutput
  extends AdminRespondToAuthChallengeResponse,
    __MetadataBearer {}

/**
 * <p>Responds to an authentication challenge, as an administrator.</p>
 *
 *         <note>
 *             <p>This action might generate an SMS text message. Starting June 1, 2021, U.S.
 *                 telecom carriers require that you register an origination phone number before you can
 *                 send SMS messages to U.S. phone numbers. If you use SMS text messages in Amazon Cognito,
 *                 you must register a phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
 *                 Cognito  will use the the registered number automatically. Otherwise, Cognito users that must
 *                 receive SMS messages might be unable to sign up, activate their accounts, or sign
 *                 in.</p>
 *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service, Amazon SNS might place your account in SMS sandbox. In <i>
 *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
 *                     mode</a>
 *                </i>, you’ll have limitations, such as sending messages
 *                 to only verified phone numbers. After testing in the sandbox environment, you can
 *                 move out of the SMS sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Cognito User Pools</a> in the <i>Amazon
 *                         Cognito Developer Guide</i>. </p>
 *         </note>
 *
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminRespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminRespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link AdminRespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
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
