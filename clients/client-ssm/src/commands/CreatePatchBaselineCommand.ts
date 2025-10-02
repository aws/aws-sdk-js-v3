// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePatchBaselineRequest,
  CreatePatchBaselineRequestFilterSensitiveLog,
  CreatePatchBaselineResult,
} from "../models/models_0";
import { de_CreatePatchBaselineCommand, se_CreatePatchBaselineCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePatchBaselineCommand}.
 */
export interface CreatePatchBaselineCommandInput extends CreatePatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePatchBaselineCommand}.
 */
export interface CreatePatchBaselineCommandOutput extends CreatePatchBaselineResult, __MetadataBearer {}

/**
 * <p>Creates a patch baseline.</p>
 *          <note>
 *             <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported
 *     operating system type, see <a>PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreatePatchBaselineRequest
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 *   Name: "STRING_VALUE", // required
 *   GlobalFilters: { // PatchFilterGroup
 *     PatchFilters: [ // PatchFilterList // required
 *       { // PatchFilter
 *         Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *         Values: [ // PatchFilterValueList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ApprovalRules: { // PatchRuleGroup
 *     PatchRules: [ // PatchRuleList // required
 *       { // PatchRule
 *         PatchFilterGroup: {
 *           PatchFilters: [ // required
 *             {
 *               Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *               Values: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *         ApproveAfterDays: Number("int"),
 *         ApproveUntilDate: "STRING_VALUE",
 *         EnableNonSecurity: true || false,
 *       },
 *     ],
 *   },
 *   ApprovedPatches: [ // PatchIdList
 *     "STRING_VALUE",
 *   ],
 *   ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *   ApprovedPatchesEnableNonSecurity: true || false,
 *   RejectedPatches: [
 *     "STRING_VALUE",
 *   ],
 *   RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 *   Description: "STRING_VALUE",
 *   Sources: [ // PatchSourceList
 *     { // PatchSource
 *       Name: "STRING_VALUE", // required
 *       Products: [ // PatchSourceProductList // required
 *         "STRING_VALUE",
 *       ],
 *       Configuration: "STRING_VALUE", // required
 *     },
 *   ],
 *   AvailableSecurityUpdatesComplianceStatus: "COMPLIANT" || "NON_COMPLIANT",
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePatchBaselineCommandInput - {@link CreatePatchBaselineCommandInput}
 * @returns {@link CreatePatchBaselineCommandOutput}
 * @see {@link CreatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link CreatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class CreatePatchBaselineCommand extends $Command
  .classBuilder<
    CreatePatchBaselineCommandInput,
    CreatePatchBaselineCommandOutput,
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
  .s("AmazonSSM", "CreatePatchBaseline", {})
  .n("SSMClient", "CreatePatchBaselineCommand")
  .f(CreatePatchBaselineRequestFilterSensitiveLog, void 0)
  .ser(se_CreatePatchBaselineCommand)
  .de(de_CreatePatchBaselineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePatchBaselineRequest;
      output: CreatePatchBaselineResult;
    };
    sdk: {
      input: CreatePatchBaselineCommandInput;
      output: CreatePatchBaselineCommandOutput;
    };
  };
}
