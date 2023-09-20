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
import {
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
} from "../models/models_0";
import {
  de_GetOpenIdTokenForDeveloperIdentityCommand,
  se_GetOpenIdTokenForDeveloperIdentityCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOpenIdTokenForDeveloperIdentityCommand}.
 */
export interface GetOpenIdTokenForDeveloperIdentityCommandInput extends GetOpenIdTokenForDeveloperIdentityInput {}
/**
 * @public
 *
 * The output of {@link GetOpenIdTokenForDeveloperIdentityCommand}.
 */
export interface GetOpenIdTokenForDeveloperIdentityCommandOutput
  extends GetOpenIdTokenForDeveloperIdentityResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect
 *          token for a user authenticated by your backend authentication process. Supplying multiple
 *          logins will create an implicit linked account. You can only specify one developer provider
 *          as part of the <code>Logins</code> map, which is linked to the identity pool. The developer
 *          provider is the "domain" by which Cognito will refer to your users.</p>
 *          <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity
 *          and to link new logins (that is, user credentials issued by a public provider or developer
 *          provider) to an existing identity. When you want to create a new identity, the
 *             <code>IdentityId</code> should be null. When you want to associate a new login with an
 *          existing authenticated/unauthenticated identity, you can do so by providing the existing
 *             <code>IdentityId</code>. This API will create the identity in the specified
 *             <code>IdentityPoolId</code>.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetOpenIdTokenForDeveloperIdentityInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   Logins: { // LoginsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PrincipalTags: { // PrincipalTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TokenDuration: Number("long"),
 * };
 * const command = new GetOpenIdTokenForDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetOpenIdTokenForDeveloperIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Token: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpenIdTokenForDeveloperIdentityCommandInput - {@link GetOpenIdTokenForDeveloperIdentityCommandInput}
 * @returns {@link GetOpenIdTokenForDeveloperIdentityCommandOutput}
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link DeveloperUserAlreadyRegisteredException} (client fault)
 *  <p>The provided developer user identifier is already registered with Cognito under a
 *          different identity ID.</p>
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
export class GetOpenIdTokenForDeveloperIdentityCommand extends $Command<
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
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
  constructor(readonly input: GetOpenIdTokenForDeveloperIdentityCommandInput) {
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
  ): Handler<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOpenIdTokenForDeveloperIdentityCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetOpenIdTokenForDeveloperIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityService",
        operation: "GetOpenIdTokenForDeveloperIdentity",
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
  private serialize(
    input: GetOpenIdTokenForDeveloperIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetOpenIdTokenForDeveloperIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> {
    return de_GetOpenIdTokenForDeveloperIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
