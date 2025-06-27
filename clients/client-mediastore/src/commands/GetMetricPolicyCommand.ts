// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { GetMetricPolicyInput, GetMetricPolicyOutput } from "../models/models_0";
import { de_GetMetricPolicyCommand, se_GetMetricPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetricPolicyCommand}.
 */
export interface GetMetricPolicyCommandInput extends GetMetricPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetMetricPolicyCommand}.
 */
export interface GetMetricPolicyCommandOutput extends GetMetricPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the metric policy for the specified container. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const input = { // GetMetricPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new GetMetricPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricPolicyOutput
 * //   MetricPolicy: { // MetricPolicy
 * //     ContainerLevelMetrics: "ENABLED" || "DISABLED", // required
 * //     MetricPolicyRules: [ // MetricPolicyRules
 * //       { // MetricPolicyRule
 * //         ObjectGroup: "STRING_VALUE", // required
 * //         ObjectGroupName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricPolicyCommandInput - {@link GetMetricPolicyCommandInput}
 * @returns {@link GetMetricPolicyCommandOutput}
 * @see {@link GetMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link GetMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>The policy that you specified in the request does not exist.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class GetMetricPolicyCommand extends $Command
  .classBuilder<
    GetMetricPolicyCommandInput,
    GetMetricPolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStore_20170901", "GetMetricPolicy", {})
  .n("MediaStoreClient", "GetMetricPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetMetricPolicyCommand)
  .de(de_GetMetricPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricPolicyInput;
      output: GetMetricPolicyOutput;
    };
    sdk: {
      input: GetMetricPolicyCommandInput;
      output: GetMetricPolicyCommandOutput;
    };
  };
}
