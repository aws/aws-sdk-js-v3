// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserMFAPreferenceRequestFilterSensitiveLog,
  AdminSetUserMFAPreferenceResponse,
  AdminSetUserMFAPreferenceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AdminSetUserMFAPreferenceCommand,
  serializeAws_json1_1AdminSetUserMFAPreferenceCommand,
} from "../protocols/Aws_json1_1";

export interface AdminSetUserMFAPreferenceCommandInput extends AdminSetUserMFAPreferenceRequest {}
export interface AdminSetUserMFAPreferenceCommandOutput extends AdminSetUserMFAPreferenceResponse, __MetadataBearer {}

/**
 * <p>The user's multi-factor authentication (MFA) preference, including which MFA options
 *             are activated, and if any are preferred. Only one factor can be set as preferred. The
 *             preferred MFA factor will be used to authenticate a user if multiple factors are
 *             activated. If multiple options are activated and no preference is set, a challenge to
 *             choose an MFA option will be returned during sign-in.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminSetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminSetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserMFAPreferenceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class AdminSetUserMFAPreferenceCommand extends $Command<
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminSetUserMFAPreferenceCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserMFAPreferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserMFAPreferenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminSetUserMFAPreferenceResponseFilterSensitiveLog,
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
