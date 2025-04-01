// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLineageGroupPolicyRequest, GetLineageGroupPolicyResponse } from "../models/models_3";
import { de_GetLineageGroupPolicyCommand, se_GetLineageGroupPolicyCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLineageGroupPolicyCommand}.
 */
export interface GetLineageGroupPolicyCommandInput extends GetLineageGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLineageGroupPolicyCommand}.
 */
export interface GetLineageGroupPolicyCommandOutput extends GetLineageGroupPolicyResponse, __MetadataBearer {}

/**
 * <p>The resource policy for the lineage group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetLineageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetLineageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // GetLineageGroupPolicyRequest
 *   LineageGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetLineageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLineageGroupPolicyResponse
 * //   LineageGroupArn: "STRING_VALUE",
 * //   ResourcePolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLineageGroupPolicyCommandInput - {@link GetLineageGroupPolicyCommandInput}
 * @returns {@link GetLineageGroupPolicyCommandOutput}
 * @see {@link GetLineageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLineageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class GetLineageGroupPolicyCommand extends $Command
  .classBuilder<
    GetLineageGroupPolicyCommandInput,
    GetLineageGroupPolicyCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "GetLineageGroupPolicy", {})
  .n("SageMakerClient", "GetLineageGroupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetLineageGroupPolicyCommand)
  .de(de_GetLineageGroupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLineageGroupPolicyRequest;
      output: GetLineageGroupPolicyResponse;
    };
    sdk: {
      input: GetLineageGroupPolicyCommandInput;
      output: GetLineageGroupPolicyCommandOutput;
    };
  };
}
