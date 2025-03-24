// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog,
  GetDeployablePatchSnapshotForInstanceResult,
} from "../models/models_1";
import {
  de_GetDeployablePatchSnapshotForInstanceCommand,
  se_GetDeployablePatchSnapshotForInstanceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeployablePatchSnapshotForInstanceCommand}.
 */
export interface GetDeployablePatchSnapshotForInstanceCommandInput
  extends GetDeployablePatchSnapshotForInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeployablePatchSnapshotForInstanceCommand}.
 */
export interface GetDeployablePatchSnapshotForInstanceCommandOutput
  extends GetDeployablePatchSnapshotForInstanceResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is
 *    primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p>
 *          <note>
 *             <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid
 *     this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a tool in Amazon Web Services Systems Manager,
 *     with an SSM document that enables you to target a managed node with a script or command. For
 *     example, run the command using the <code>AWS-RunShellScript</code> document or the
 *      <code>AWS-RunPowerShellScript</code> document.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetDeployablePatchSnapshotForInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   BaselineOverride: { // BaselineOverride
 *     OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 *     GlobalFilters: { // PatchFilterGroup
 *       PatchFilters: [ // PatchFilterList // required
 *         { // PatchFilter
 *           Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *           Values: [ // PatchFilterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     ApprovalRules: { // PatchRuleGroup
 *       PatchRules: [ // PatchRuleList // required
 *         { // PatchRule
 *           PatchFilterGroup: {
 *             PatchFilters: [ // required
 *               {
 *                 Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *           ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *           ApproveAfterDays: Number("int"),
 *           ApproveUntilDate: "STRING_VALUE",
 *           EnableNonSecurity: true || false,
 *         },
 *       ],
 *     },
 *     ApprovedPatches: [ // PatchIdList
 *       "STRING_VALUE",
 *     ],
 *     ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *     RejectedPatches: [
 *       "STRING_VALUE",
 *     ],
 *     RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 *     ApprovedPatchesEnableNonSecurity: true || false,
 *     Sources: [ // PatchSourceList
 *       { // PatchSource
 *         Name: "STRING_VALUE", // required
 *         Products: [ // PatchSourceProductList // required
 *           "STRING_VALUE",
 *         ],
 *         Configuration: "STRING_VALUE", // required
 *       },
 *     ],
 *     AvailableSecurityUpdatesComplianceStatus: "COMPLIANT" || "NON_COMPLIANT",
 *   },
 * };
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeployablePatchSnapshotForInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * //   SnapshotId: "STRING_VALUE",
 * //   SnapshotDownloadUrl: "STRING_VALUE",
 * //   Product: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeployablePatchSnapshotForInstanceCommandInput - {@link GetDeployablePatchSnapshotForInstanceCommandInput}
 * @returns {@link GetDeployablePatchSnapshotForInstanceCommandOutput}
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link UnsupportedFeatureRequiredException} (client fault)
 *  <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Turning on
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *
 * @throws {@link UnsupportedOperatingSystem} (client fault)
 *  <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetDeployablePatchSnapshotForInstanceCommand extends $Command
  .classBuilder<
    GetDeployablePatchSnapshotForInstanceCommandInput,
    GetDeployablePatchSnapshotForInstanceCommandOutput,
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
  .s("AmazonSSM", "GetDeployablePatchSnapshotForInstance", {})
  .n("SSMClient", "GetDeployablePatchSnapshotForInstanceCommand")
  .f(GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog, void 0)
  .ser(se_GetDeployablePatchSnapshotForInstanceCommand)
  .de(de_GetDeployablePatchSnapshotForInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeployablePatchSnapshotForInstanceRequest;
      output: GetDeployablePatchSnapshotForInstanceResult;
    };
    sdk: {
      input: GetDeployablePatchSnapshotForInstanceCommandInput;
      output: GetDeployablePatchSnapshotForInstanceCommandOutput;
    };
  };
}
