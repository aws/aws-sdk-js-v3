// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRegistryPolicyRequest, DeleteRegistryPolicyResponse } from "../models/models_0";
import { de_DeleteRegistryPolicyCommand, se_DeleteRegistryPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRegistryPolicyCommand}.
 */
export interface DeleteRegistryPolicyCommandInput extends DeleteRegistryPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRegistryPolicyCommand}.
 */
export interface DeleteRegistryPolicyCommandOutput extends DeleteRegistryPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the registry permissions policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * // import type { ECRClientConfig } from "@aws-sdk/client-ecr";
 * const config = {}; // type is ECRClientConfig
 * const client = new ECRClient(config);
 * const input = {};
 * const command = new DeleteRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRegistryPolicyResponse
 * //   registryId: "STRING_VALUE",
 * //   policyText: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteRegistryPolicyCommandInput - {@link DeleteRegistryPolicyCommandInput}
 * @returns {@link DeleteRegistryPolicyCommandOutput}
 * @see {@link DeleteRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryPolicyCommandOutput} for command's `response` shape.
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
export class DeleteRegistryPolicyCommand extends $Command
  .classBuilder<
    DeleteRegistryPolicyCommandInput,
    DeleteRegistryPolicyCommandOutput,
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
  .s("AmazonEC2ContainerRegistry_V20150921", "DeleteRegistryPolicy", {})
  .n("ECRClient", "DeleteRegistryPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRegistryPolicyCommand)
  .de(de_DeleteRegistryPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeleteRegistryPolicyResponse;
    };
    sdk: {
      input: DeleteRegistryPolicyCommandInput;
      output: DeleteRegistryPolicyCommandOutput;
    };
  };
}
