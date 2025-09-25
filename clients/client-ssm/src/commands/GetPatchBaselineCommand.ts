// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPatchBaselineRequest, GetPatchBaselineResult } from "../models/models_1";
import { GetPatchBaseline } from "../schemas/schemas_4_Baseline";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPatchBaselineCommand}.
 */
export interface GetPatchBaselineCommandInput extends GetPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link GetPatchBaselineCommand}.
 */
export interface GetPatchBaselineCommandOutput extends GetPatchBaselineResult, __MetadataBearer {}

/**
 * <p>Retrieves information about a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // GetPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new GetPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // GetPatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * //   GlobalFilters: { // PatchFilterGroup
 * //     PatchFilters: [ // PatchFilterList // required
 * //       { // PatchFilter
 * //         Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 * //         Values: [ // PatchFilterValueList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   ApprovalRules: { // PatchRuleGroup
 * //     PatchRules: [ // PatchRuleList // required
 * //       { // PatchRule
 * //         PatchFilterGroup: {
 * //           PatchFilters: [ // required
 * //             {
 * //               Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //         ApproveAfterDays: Number("int"),
 * //         ApproveUntilDate: "STRING_VALUE",
 * //         EnableNonSecurity: true || false,
 * //       },
 * //     ],
 * //   },
 * //   ApprovedPatches: [ // PatchIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //   ApprovedPatchesEnableNonSecurity: true || false,
 * //   RejectedPatches: [
 * //     "STRING_VALUE",
 * //   ],
 * //   RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 * //   PatchGroups: [ // PatchGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   ModifiedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Sources: [ // PatchSourceList
 * //     { // PatchSource
 * //       Name: "STRING_VALUE", // required
 * //       Products: [ // PatchSourceProductList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Configuration: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   AvailableSecurityUpdatesComplianceStatus: "COMPLIANT" || "NON_COMPLIANT",
 * // };
 *
 * ```
 *
 * @param GetPatchBaselineCommandInput - {@link GetPatchBaselineCommandInput}
 * @returns {@link GetPatchBaselineCommandOutput}
 * @see {@link GetPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineCommandOutput} for command's `response` shape.
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
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetPatchBaselineCommand extends $Command
  .classBuilder<
    GetPatchBaselineCommandInput,
    GetPatchBaselineCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "GetPatchBaseline", {})
  .n("SSMClient", "GetPatchBaselineCommand")
  .sc(GetPatchBaseline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPatchBaselineRequest;
      output: GetPatchBaselineResult;
    };
    sdk: {
      input: GetPatchBaselineCommandInput;
      output: GetPatchBaselineCommandOutput;
    };
  };
}
