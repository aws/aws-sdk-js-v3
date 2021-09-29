import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminUpdateUserAttributesCommand,
  serializeAws_json1_1AdminUpdateUserAttributesCommand,
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

export interface AdminUpdateUserAttributesCommandInput extends AdminUpdateUserAttributesRequest {}
export interface AdminUpdateUserAttributesCommandOutput extends AdminUpdateUserAttributesResponse, __MetadataBearer {}

/**
 * <p>Updates the specified user's attributes, including developer attributes, as an
 *             administrator. Works on any user.</p>
 *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
 *             attribute name.</p>
 *         <p>In addition to updating user attributes, this API can also be used to mark phone and
 *             email as verified.</p>
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
 * import { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUpdateUserAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUpdateUserAttributesCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AdminUpdateUserAttributesCommand extends $Command<
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminUpdateUserAttributesCommandInput) {
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
  ): Handler<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUpdateUserAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUpdateUserAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminUpdateUserAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUpdateUserAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUpdateUserAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminUpdateUserAttributesCommandOutput> {
    return deserializeAws_json1_1AdminUpdateUserAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
