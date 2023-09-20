// smithy-typescript generated code
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
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/models_0";
import { de_GetCredentialsForIdentityCommand, se_GetCredentialsForIdentityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandInput extends GetCredentialsForIdentityInput {}
/**
 * @public
 *
 * The output of {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandOutput extends GetCredentialsForIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetCredentialsForIdentityInput
 *   IdentityId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CustomRoleArn: "STRING_VALUE",
 * };
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialsForIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCredentialsForIdentityCommandInput - {@link GetCredentialsForIdentityCommandInput}
 * @returns {@link GetCredentialsForIdentityCommandOutput}
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *  <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidIdentityPoolConfigurationException} (client fault)
 *  <p>Thrown if the identity pool has no role associated for the given auth type
 *          (auth/unauth) or if the AssumeRole fails.</p>
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
export class GetCredentialsForIdentityCommand extends $Command<
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
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
  constructor(readonly input: GetCredentialsForIdentityCommandInput) {
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
  ): Handler<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCredentialsForIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetCredentialsForIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityService",
        operation: "GetCredentialsForIdentity",
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
  private serialize(input: GetCredentialsForIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCredentialsForIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCredentialsForIdentityCommandOutput> {
    return de_GetCredentialsForIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
