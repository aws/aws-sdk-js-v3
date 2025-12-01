// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRegistryPolicyRequest, GetRegistryPolicyResponse } from "../models/models_0";
import { GetRegistryPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryPolicyCommand}.
 */
export interface GetRegistryPolicyCommandInput extends GetRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryPolicyCommand}.
 */
export interface GetRegistryPolicyCommandOutput extends GetRegistryPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the permissions policy for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new GetRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegistryPolicyCommandInput - {@link GetRegistryPolicyCommandInput}
 * @returns {@link GetRegistryPolicyCommandOutput}
 * @see {@link GetRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RegistryPolicyNotFoundException} (client fault)
 *  <p>The registry doesn't have an associated registry policy.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 *
 * @public
 */
export class GetRegistryPolicyCommand extends $Command
  .classBuilder<
    GetRegistryPolicyCommandInput,
    GetRegistryPolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "GetRegistryPolicy", {})
  .n("ECRClient", "GetRegistryPolicyCommand")
  .sc(GetRegistryPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetRegistryPolicyResponse;
    };
    sdk: {
      input: GetRegistryPolicyCommandInput;
      output: GetRegistryPolicyCommandOutput;
    };
  };
}
