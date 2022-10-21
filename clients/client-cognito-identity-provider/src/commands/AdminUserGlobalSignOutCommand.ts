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
  AdminUserGlobalSignOutRequest,
  AdminUserGlobalSignOutRequestFilterSensitiveLog,
  AdminUserGlobalSignOutResponse,
  AdminUserGlobalSignOutResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AdminUserGlobalSignOutCommand,
  serializeAws_json1_1AdminUserGlobalSignOutCommand,
} from "../protocols/Aws_json1_1";

export interface AdminUserGlobalSignOutCommandInput extends AdminUserGlobalSignOutRequest {}
export interface AdminUserGlobalSignOutCommandOutput extends AdminUserGlobalSignOutResponse, __MetadataBearer {}

/**
 * <p>Signs out a user from all devices. You must sign <code>AdminUserGlobalSignOut</code> requests
 *             with Amazon Web Services credentials. It also invalidates all refresh tokens that Amazon Cognito has issued to
 *             a user. The user's current access and ID tokens remain valid until they expire. By
 *             default, access and ID tokens expire one hour after they're issued. A user can still use
 *             a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period
 *             of 1 hour.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminUserGlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminUserGlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link AdminUserGlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class AdminUserGlobalSignOutCommand extends $Command<
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
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

  constructor(readonly input: AdminUserGlobalSignOutCommandInput) {
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
  ): Handler<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminUserGlobalSignOutCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUserGlobalSignOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUserGlobalSignOutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminUserGlobalSignOutResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminUserGlobalSignOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminUserGlobalSignOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminUserGlobalSignOutCommandOutput> {
    return deserializeAws_json1_1AdminUserGlobalSignOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
