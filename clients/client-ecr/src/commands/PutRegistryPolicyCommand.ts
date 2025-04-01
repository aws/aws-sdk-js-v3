// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRegistryPolicyRequest, PutRegistryPolicyResponse } from "../models/models_0";
import { de_PutRegistryPolicyCommand, se_PutRegistryPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRegistryPolicyCommand}.
 */
export interface PutRegistryPolicyCommandInput extends PutRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRegistryPolicyCommand}.
 */
export interface PutRegistryPolicyCommandOutput extends PutRegistryPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the permissions policy for your registry.</p>
 *          <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used
 *             when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // PutRegistryPolicyRequest
 *   policyText: "STRING_VALUE", // required
 * };
 * const command = new PutRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutRegistryPolicyCommandInput - {@link PutRegistryPolicyCommandInput}
 * @returns {@link PutRegistryPolicyCommandOutput}
 * @see {@link PutRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
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
export class PutRegistryPolicyCommand extends $Command
  .classBuilder<
    PutRegistryPolicyCommandInput,
    PutRegistryPolicyCommandOutput,
    ECRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerRegistry_V20150921", "PutRegistryPolicy", {})
  .n("ECRClient", "PutRegistryPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutRegistryPolicyCommand)
  .de(de_PutRegistryPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRegistryPolicyRequest;
      output: PutRegistryPolicyResponse;
    };
    sdk: {
      input: PutRegistryPolicyCommandInput;
      output: PutRegistryPolicyCommandOutput;
    };
  };
}
