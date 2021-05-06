import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { GetUserAttributeVerificationCodeRequest, GetUserAttributeVerificationCodeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetUserAttributeVerificationCodeCommand,
  serializeAws_json1_1GetUserAttributeVerificationCodeCommand,
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

export interface GetUserAttributeVerificationCodeCommandInput extends GetUserAttributeVerificationCodeRequest {}
export interface GetUserAttributeVerificationCodeCommandOutput
  extends GetUserAttributeVerificationCodeResponse,
    __MetadataBearer {}

/**
 * <p>Gets the user attribute verification code for the specified attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserAttributeVerificationCodeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserAttributeVerificationCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserAttributeVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link GetUserAttributeVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetUserAttributeVerificationCodeCommand extends $Command<
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserAttributeVerificationCodeCommandInput) {
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
  ): Handler<GetUserAttributeVerificationCodeCommandInput, GetUserAttributeVerificationCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetUserAttributeVerificationCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserAttributeVerificationCodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserAttributeVerificationCodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetUserAttributeVerificationCodeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserAttributeVerificationCodeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUserAttributeVerificationCodeCommandOutput> {
    return deserializeAws_json1_1GetUserAttributeVerificationCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
