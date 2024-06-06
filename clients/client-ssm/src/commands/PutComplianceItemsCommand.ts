// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutComplianceItemsRequest, PutComplianceItemsResult } from "../models/models_1";
import { de_PutComplianceItemsCommand, se_PutComplianceItemsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutComplianceItemsCommand}.
 */
export interface PutComplianceItemsCommandInput extends PutComplianceItemsRequest {}
/**
 * @public
 *
 * The output of {@link PutComplianceItemsCommand}.
 */
export interface PutComplianceItemsCommandOutput extends PutComplianceItemsResult, __MetadataBearer {}

/**
 * <p>Registers a compliance type and other compliance details on a designated resource. This
 *    operation lets you register custom compliance details with a resource. This call overwrites
 *    existing compliance information on the resource, so you must provide a full list of compliance
 *    items each time that you send the request.</p>
 *          <p>ComplianceType can be one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>ExecutionId: The execution ID when the patch, association, or custom compliance item was
 *      applied.</p>
 *             </li>
 *             <li>
 *                <p>ExecutionType: Specify patch, association, or Custom:<code>string</code>.</p>
 *             </li>
 *             <li>
 *                <p>ExecutionTime. The time the patch, association, or custom compliance item was applied to
 *      the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Id: The patch, association, or custom compliance ID.</p>
 *             </li>
 *             <li>
 *                <p>Title: A title.</p>
 *             </li>
 *             <li>
 *                <p>Status: The status of the compliance item. For example, <code>approved</code> for patches,
 *      or <code>Failed</code> for associations.</p>
 *             </li>
 *             <li>
 *                <p>Severity: A patch severity. For example, <code>Critical</code>.</p>
 *             </li>
 *             <li>
 *                <p>DocumentName: An SSM document name. For example, <code>AWS-RunPatchBaseline</code>.</p>
 *             </li>
 *             <li>
 *                <p>DocumentVersion: An SSM document version number. For example, 4.</p>
 *             </li>
 *             <li>
 *                <p>Classification: A patch classification. For example, <code>security updates</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchBaselineId: A patch baseline ID.</p>
 *             </li>
 *             <li>
 *                <p>PatchSeverity: A patch severity. For example, <code>Critical</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchState: A patch state. For example, <code>InstancesWithFailedPatches</code>.</p>
 *             </li>
 *             <li>
 *                <p>PatchGroup: The name of a patch group.</p>
 *             </li>
 *             <li>
 *                <p>InstalledTime: The time the association, patch, or custom compliance item was applied to
 *      the resource. Specify the time by using the following format:
 *       <code>yyyy-MM-dd'T'HH:mm:ss'Z'</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // PutComplianceItemsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   ComplianceType: "STRING_VALUE", // required
 *   ExecutionSummary: { // ComplianceExecutionSummary
 *     ExecutionTime: new Date("TIMESTAMP"), // required
 *     ExecutionId: "STRING_VALUE",
 *     ExecutionType: "STRING_VALUE",
 *   },
 *   Items: [ // ComplianceItemEntryList // required
 *     { // ComplianceItemEntry
 *       Id: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED", // required
 *       Status: "COMPLIANT" || "NON_COMPLIANT", // required
 *       Details: { // ComplianceItemDetails
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ItemContentHash: "STRING_VALUE",
 *   UploadType: "COMPLETE" || "PARTIAL",
 * };
 * const command = new PutComplianceItemsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutComplianceItemsCommandInput - {@link PutComplianceItemsCommandInput}
 * @returns {@link PutComplianceItemsCommandOutput}
 * @see {@link PutComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link PutComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link ComplianceTypeCountLimitExceededException} (client fault)
 *  <p>You specified too many custom compliance types. You can specify a maximum of 10 different
 *    types. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidItemContentException} (client fault)
 *  <p>One or more content items isn't valid.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link InvalidResourceType} (client fault)
 *  <p>The resource type isn't valid. For example, if you are attempting to tag an EC2 instance,
 *    the instance must be a registered managed node.</p>
 *
 * @throws {@link ItemSizeLimitExceededException} (client fault)
 *  <p>The inventory item size has exceeded the size limit.</p>
 *
 * @throws {@link TotalSizeLimitExceededException} (client fault)
 *  <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class PutComplianceItemsCommand extends $Command
  .classBuilder<
    PutComplianceItemsCommandInput,
    PutComplianceItemsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "PutComplianceItems", {})
  .n("SSMClient", "PutComplianceItemsCommand")
  .f(void 0, void 0)
  .ser(se_PutComplianceItemsCommand)
  .de(de_PutComplianceItemsCommand)
  .build() {}
