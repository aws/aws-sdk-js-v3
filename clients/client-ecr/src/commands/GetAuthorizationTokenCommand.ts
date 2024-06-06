// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { de_GetAuthorizationTokenCommand, se_GetAuthorizationTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *             authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *             principal has access to. The authorization token is valid for 12 hours.</p>
 *          <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be
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
 * @public
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
 *       "authorizationToken": "QVdTOkNEXAMPLE",
 *       "expiresAt": "2022-05-17T06:56:13.652000+00:00",
 *       "proxyEndpoint": "https://012345678901.dkr.ecr.us-west-2.amazonaws.com"
 *     }
 *   ]
 * }
 * *\/
 * // example id: getauthorizationtoken-example-1470867047084
 * ```
 *
 */
export class GetAuthorizationTokenCommand extends $Command
  .classBuilder<
    GetAuthorizationTokenCommandInput,
    GetAuthorizationTokenCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetAuthorizationToken", {})
  .n("ECRClient", "GetAuthorizationTokenCommand")
  .f(void 0, void 0)
  .ser(se_GetAuthorizationTokenCommand)
  .de(de_GetAuthorizationTokenCommand)
  .build() {}
