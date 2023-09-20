// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetIdentityPoolRolesInput } from "../models/models_0";
import { de_SetIdentityPoolRolesCommand, se_SetIdentityPoolRolesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandInput extends SetIdentityPoolRolesInput {}
/**
 * @public
 *
 * The output of {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetIdentityPoolRolesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   Roles: { // RolesMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleMappings: { // RoleMappingMap
 *     "<keys>": { // RoleMapping
 *       Type: "Token" || "Rules", // required
 *       AmbiguousRoleResolution: "AuthenticatedRole" || "Deny",
 *       RulesConfiguration: { // RulesConfigurationType
 *         Rules: [ // MappingRulesList // required
 *           { // MappingRule
 *             Claim: "STRING_VALUE", // required
 *             MatchType: "Equals" || "Contains" || "StartsWith" || "NotEqual", // required
 *             Value: "STRING_VALUE", // required
 *             RoleARN: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityPoolRolesCommandInput - {@link SetIdentityPoolRolesCommandInput}
 * @returns {@link SetIdentityPoolRolesCommandOutput}
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export class SetIdentityPoolRolesCommand extends $Command<
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
  CognitoIdentityClientResolvedConfig
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
  constructor(readonly input: SetIdentityPoolRolesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetIdentityPoolRolesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "SetIdentityPoolRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityService",
        operation: "SetIdentityPoolRoles",
      },
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
  private serialize(input: SetIdentityPoolRolesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetIdentityPoolRolesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIdentityPoolRolesCommandOutput> {
    return de_SetIdentityPoolRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
