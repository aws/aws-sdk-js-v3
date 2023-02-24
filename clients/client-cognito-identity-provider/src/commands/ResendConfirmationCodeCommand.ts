// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  ResendConfirmationCodeRequest,
  ResendConfirmationCodeRequestFilterSensitiveLog,
  ResendConfirmationCodeResponse,
  ResendConfirmationCodeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ResendConfirmationCodeCommand,
  serializeAws_json1_1ResendConfirmationCodeCommand,
} from "../protocols/Aws_json1_1";

export interface ResendConfirmationCodeCommandInput extends ResendConfirmationCodeRequest {}
export interface ResendConfirmationCodeCommandOutput extends ResendConfirmationCodeResponse, __MetadataBearer {}

/**
 * <p>Resends the confirmation (for confirmation of registration) to a specific user in the
 *             user pool.</p>
 *
 *          <note>
 *             <p>This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers
 *                 require you to register an origination phone number before you can send SMS messages
 *                 to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a
 *                 phone number with <a href="https://console.aws.amazon.com/pinpoint/home/">Amazon Pinpoint</a>.
 *                 Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must
 *                 receive SMS messages might not be able to sign up, activate their accounts, or sign
 *                 in.</p>
 *             <p>If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Service,
 *                 Amazon Simple Notification Service might place your account in the SMS sandbox. In <i>
 *                   <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">sandbox
 *                         mode</a>
 *                </i>, you can send messages only to verified phone
 *                 numbers. After you test your app while in the sandbox environment, you can move out
 *                 of the sandbox and into production. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-sms-userpool-settings.html"> SMS message settings for Amazon Cognito user pools</a> in the <i>Amazon Cognito
 *                     Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ResendConfirmationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ResendConfirmationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ResendConfirmationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResendConfirmationCodeCommandInput} for command's `input` shape.
 * @see {@link ResendConfirmationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class ResendConfirmationCodeCommand extends $Command<
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ResendConfirmationCodeCommandInput) {
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
  ): Handler<ResendConfirmationCodeCommandInput, ResendConfirmationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResendConfirmationCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ResendConfirmationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResendConfirmationCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResendConfirmationCodeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResendConfirmationCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResendConfirmationCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResendConfirmationCodeCommandOutput> {
    return deserializeAws_json1_1ResendConfirmationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
