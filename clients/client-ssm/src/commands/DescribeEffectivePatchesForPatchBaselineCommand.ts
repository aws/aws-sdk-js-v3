// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeEffectivePatchesForPatchBaselineRequest,
  DescribeEffectivePatchesForPatchBaselineResult,
} from "../models/models_0";
import { DescribeEffectivePatchesForPatchBaseline$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEffectivePatchesForPatchBaselineCommand}.
 */
export interface DescribeEffectivePatchesForPatchBaselineCommandInput
  extends DescribeEffectivePatchesForPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEffectivePatchesForPatchBaselineCommand}.
 */
export interface DescribeEffectivePatchesForPatchBaselineCommandOutput
  extends DescribeEffectivePatchesForPatchBaselineResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
 *    patch baseline. Applies to patch baselines for Windows only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeEffectivePatchesForPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEffectivePatchesForPatchBaselineResult
 * //   EffectivePatches: [ // EffectivePatchList
 * //     { // EffectivePatch
 * //       Patch: { // Patch
 * //         Id: "STRING_VALUE",
 * //         ReleaseDate: new Date("TIMESTAMP"),
 * //         Title: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         ContentUrl: "STRING_VALUE",
 * //         Vendor: "STRING_VALUE",
 * //         ProductFamily: "STRING_VALUE",
 * //         Product: "STRING_VALUE",
 * //         Classification: "STRING_VALUE",
 * //         MsrcSeverity: "STRING_VALUE",
 * //         KbNumber: "STRING_VALUE",
 * //         MsrcNumber: "STRING_VALUE",
 * //         Language: "STRING_VALUE",
 * //         AdvisoryIds: [ // PatchAdvisoryIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         BugzillaIds: [ // PatchBugzillaIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         CVEIds: [ // PatchCVEIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         Name: "STRING_VALUE",
 * //         Epoch: Number("int"),
 * //         Version: "STRING_VALUE",
 * //         Release: "STRING_VALUE",
 * //         Arch: "STRING_VALUE",
 * //         Severity: "STRING_VALUE",
 * //         Repository: "STRING_VALUE",
 * //       },
 * //       PatchStatus: { // PatchStatus
 * //         DeploymentStatus: "APPROVED" || "PENDING_APPROVAL" || "EXPLICIT_APPROVED" || "EXPLICIT_REJECTED",
 * //         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //         ApprovalDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEffectivePatchesForPatchBaselineCommandInput - {@link DescribeEffectivePatchesForPatchBaselineCommandInput}
 * @returns {@link DescribeEffectivePatchesForPatchBaselineCommandOutput}
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link UnsupportedOperatingSystem} (client fault)
 *  <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeEffectivePatchesForPatchBaselineCommand extends $Command
  .classBuilder<
    DescribeEffectivePatchesForPatchBaselineCommandInput,
    DescribeEffectivePatchesForPatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeEffectivePatchesForPatchBaseline", {})
  .n("SSMClient", "DescribeEffectivePatchesForPatchBaselineCommand")
  .sc(DescribeEffectivePatchesForPatchBaseline$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEffectivePatchesForPatchBaselineRequest;
      output: DescribeEffectivePatchesForPatchBaselineResult;
    };
    sdk: {
      input: DescribeEffectivePatchesForPatchBaselineCommandInput;
      output: DescribeEffectivePatchesForPatchBaselineCommandOutput;
    };
  };
}
