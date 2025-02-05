// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/models_1";
import { de_DescribePatchGroupsCommand, se_DescribePatchGroupsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupsCommand}.
 */
export interface DescribePatchGroupsCommandInput extends DescribePatchGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupsCommand}.
 */
export interface DescribePatchGroupsCommandOutput extends DescribePatchGroupsResult, __MetadataBearer {}

/**
 * <p>Lists all patch groups that have been registered with patch baselines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupsRequest
 *   MaxResults: Number("int"),
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePatchGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupsResult
 * //   Mappings: [ // PatchGroupPatchBaselineMappingList
 * //     { // PatchGroupPatchBaselineMapping
 * //       PatchGroup: "STRING_VALUE",
 * //       BaselineIdentity: { // PatchBaselineIdentity
 * //         BaselineId: "STRING_VALUE",
 * //         BaselineName: "STRING_VALUE",
 * //         OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * //         BaselineDescription: "STRING_VALUE",
 * //         DefaultBaseline: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupsCommandInput - {@link DescribePatchGroupsCommandInput}
 * @returns {@link DescribePatchGroupsCommandOutput}
 * @see {@link DescribePatchGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupsCommandOutput} for command's `response` shape.
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
export class DescribePatchGroupsCommand extends $Command
  .classBuilder<
    DescribePatchGroupsCommandInput,
    DescribePatchGroupsCommandOutput,
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
  .s("AmazonSSM", "DescribePatchGroups", {})
  .n("SSMClient", "DescribePatchGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePatchGroupsCommand)
  .de(de_DescribePatchGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePatchGroupsRequest;
      output: DescribePatchGroupsResult;
    };
    sdk: {
      input: DescribePatchGroupsCommandInput;
      output: DescribePatchGroupsCommandOutput;
    };
  };
}
