// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { GetAuthorizationToken } from "../schemas/schemas_9_GetAuthorizationToken";

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
 *          authentication credentials. You can use it to access any Amazon ECR registry that your IAM
 *          principal has access to. The authorization token is valid for 12 hours. This API requires
 *          the <code>ecr-public:GetAuthorizationToken</code> and
 *             <code>sts:GetServiceBearerToken</code> permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * // import type { ECRPUBLICClientConfig } from "@aws-sdk/client-ecr-public";
 * const config = {}; // type is ECRPUBLICClientConfig
 * const client = new ECRPUBLICClient(config);
 * const input = {};
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetAuthorizationTokenResponse
 * //   authorizationData: { // AuthorizationData
 * //     authorizationToken: "STRING_VALUE",
 * //     expiresAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAuthorizationTokenCommandInput - {@link GetAuthorizationTokenCommandInput}
 * @returns {@link GetAuthorizationTokenCommandOutput}
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for ECRPUBLICClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *          request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedCommandException} (client fault)
 *  <p>The action isn't supported in this Region.</p>
 *
 * @throws {@link ECRPUBLICServiceException}
 * <p>Base exception class for all service exceptions from ECRPUBLIC service.</p>
 *
 *
 * @public
 */
export class GetAuthorizationTokenCommand extends $Command
  .classBuilder<
    GetAuthorizationTokenCommandInput,
    GetAuthorizationTokenCommandOutput,
    ECRPUBLICClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRPUBLICClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SpencerFrontendService", "GetAuthorizationToken", {})
  .n("ECRPUBLICClient", "GetAuthorizationTokenCommand")
  .sc(GetAuthorizationToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAuthorizationTokenResponse;
    };
    sdk: {
      input: GetAuthorizationTokenCommandInput;
      output: GetAuthorizationTokenCommandOutput;
    };
  };
}
