// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/models_1";
import { de_DescribePatchBaselinesCommand, se_DescribePatchBaselinesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchBaselinesCommand}.
 */
export interface DescribePatchBaselinesCommandInput extends DescribePatchBaselinesRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchBaselinesCommand}.
 */
export interface DescribePatchBaselinesCommandOutput extends DescribePatchBaselinesResult, __MetadataBearer {}

/**
 * <p>Lists the patch baselines in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchBaselinesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchBaselinesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // DescribePatchBaselinesRequest
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePatchBaselinesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchBaselinesResult
 * //   BaselineIdentities: [ // PatchBaselineIdentityList
 * //     { // PatchBaselineIdentity
 * //       BaselineId: "STRING_VALUE",
 * //       BaselineName: "STRING_VALUE",
 * //       OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * //       BaselineDescription: "STRING_VALUE",
 * //       DefaultBaseline: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePatchBaselinesCommandInput - {@link DescribePatchBaselinesCommandInput}
 * @returns {@link DescribePatchBaselinesCommandOutput}
 * @see {@link DescribePatchBaselinesCommandInput} for command's `input` shape.
 * @see {@link DescribePatchBaselinesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DescribePatchBaselinesCommand extends $Command
  .classBuilder<
    DescribePatchBaselinesCommandInput,
    DescribePatchBaselinesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribePatchBaselines", {})
  .n("SSMClient", "DescribePatchBaselinesCommand")
  .f(void 0, void 0)
  .ser(se_DescribePatchBaselinesCommand)
  .de(de_DescribePatchBaselinesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePatchBaselinesRequest;
      output: DescribePatchBaselinesResult;
    };
    sdk: {
      input: DescribePatchBaselinesCommandInput;
      output: DescribePatchBaselinesCommandOutput;
    };
  };
}
