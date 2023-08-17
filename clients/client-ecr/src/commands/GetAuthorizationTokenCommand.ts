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
} from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { de_GetAuthorizationTokenCommand, se_GetAuthorizationTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandInput extends GetAuthorizationTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizationTokenCommand}.
 */
export interface GetAuthorizationTokenCommandOutput extends GetAuthorizationTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *             authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *             principal has access to. The authorization token is valid for 12 hours.</p>
 *         <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be
 *             decoded and used in a <code>docker login</code> command to authenticate to a registry.
 *             The CLI offers an <code>get-login-password</code> command that simplifies the login
 *             process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry
 *                 authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // GetAuthorizationTokenRequest
 *   registryIds: [ // GetAuthorizationTokenRegistryIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizationTokenResponse
 * //   authorizationData: [ // AuthorizationDataList
 * //     { // AuthorizationData
 * //       authorizationToken: "STRING_VALUE",
 * //       expiresAt: new Date("TIMESTAMP"),
 * //       proxyEndpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAuthorizationTokenCommandInput - {@link GetAuthorizationTokenCommandInput}
 * @returns {@link GetAuthorizationTokenCommandOutput}
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 * @example To obtain an authorization token
 * ```javascript
 * // This example gets an authorization token for your default registry.
 * const input = {};
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "authorizationData": [
 *     {
 *       "authorizationToken": "QVdTOkN...",
 *       "expiresAt": "1470951892432",
 *       "proxyEndpoint": "https://012345678901.dkr.ecr.us-west-2.amazonaws.com"
 *     }
 *   ]
 * }
 * *\/
 * // example id: getauthorizationtoken-example-1470867047084
 * ```
 *
 */
export class GetAuthorizationTokenCommand extends $Command<
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: GetAuthorizationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAuthorizationTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetAuthorizationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetAuthorizationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAuthorizationTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizationTokenCommandOutput> {
    return de_GetAuthorizationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
