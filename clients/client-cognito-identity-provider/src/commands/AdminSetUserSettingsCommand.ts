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
  AdminSetUserSettingsRequest,
  AdminSetUserSettingsRequestFilterSensitiveLog,
  AdminSetUserSettingsResponse,
} from "../models/models_0";
import { de_AdminSetUserSettingsCommand, se_AdminSetUserSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminSetUserSettingsCommand}.
 */
export interface AdminSetUserSettingsCommandInput extends AdminSetUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserSettingsCommand}.
 */
export interface AdminSetUserSettingsCommandOutput extends AdminSetUserSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <i>This action is no longer supported.</i> You can use it to configure
 *             only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software
 *             token MFA. To configure either type of MFA, use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html">AdminSetUserMFAPreference</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserSettingsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserSettingsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   MFAOptions: [ // MFAOptionListType // required
 *     { // MFAOptionType
 *       DeliveryMedium: "SMS" || "EMAIL",
 *       AttributeName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AdminSetUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminSetUserSettingsCommandInput - {@link AdminSetUserSettingsCommandInput}
 * @returns {@link AdminSetUserSettingsCommandOutput}
 * @see {@link AdminSetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminSetUserSettingsCommand extends $Command<
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: AdminSetUserSettingsCommandInput) {
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
  ): Handler<AdminSetUserSettingsCommandInput, AdminSetUserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminSetUserSettingsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: AdminSetUserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminSetUserSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminSetUserSettingsCommandOutput> {
    return de_AdminSetUserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
