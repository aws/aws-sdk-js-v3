// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateFindingsRequest, BatchUpdateFindingsResponse } from "../models/models_2";
import { BatchUpdateFindings$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateFindingsCommand}.
 */
export interface BatchUpdateFindingsCommandInput extends BatchUpdateFindingsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateFindingsCommand}.
 */
export interface BatchUpdateFindingsCommandOutput extends BatchUpdateFindingsResponse, __MetadataBearer {}

/**
 * <p>
 *          Used by Security Hub customers to update information about their investigation into one or more findings.
 *          Requested by administrator accounts or member accounts.
 *          Administrator accounts can update findings for their account and their member accounts.
 *          A member account can update findings only for their own account.
 *          Administrator and member accounts can use this operation to update the following fields and objects for one or more findings:
 *       </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Note</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UserDefinedFields</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VerificationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Workflow</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *          If you use this operation to update a finding, your updates don’t affect the value for the <code>UpdatedAt</code> field of the finding.
 *          Also note that it can take several minutes for Security Hub to process your request and update each finding specified in the request.
 *       </p>
 *          <p>
 *          You can configure IAM policies to restrict access to fields and field values.
 *          For example, you might not want member accounts to be able to suppress findings or change the finding severity.
 *          For more information see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchUpdateFindingsRequest
 *   FindingIdentifiers: [ // AwsSecurityFindingIdentifierList // required
 *     { // AwsSecurityFindingIdentifier
 *       Id: "STRING_VALUE", // required
 *       ProductArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Note: { // NoteUpdate
 *     Text: "STRING_VALUE", // required
 *     UpdatedBy: "STRING_VALUE", // required
 *   },
 *   Severity: { // SeverityUpdate
 *     Normalized: Number("int"),
 *     Product: Number("double"),
 *     Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *   },
 *   VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 *   Confidence: Number("int"),
 *   Criticality: Number("int"),
 *   Types: [ // TypeList
 *     "STRING_VALUE",
 *   ],
 *   UserDefinedFields: { // FieldMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Workflow: { // WorkflowUpdate
 *     Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 *   },
 *   RelatedFindings: [ // RelatedFindingList
 *     { // RelatedFinding
 *       ProductArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateFindingsResponse
 * //   ProcessedFindings: [ // AwsSecurityFindingIdentifierList // required
 * //     { // AwsSecurityFindingIdentifier
 * //       Id: "STRING_VALUE", // required
 * //       ProductArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   UnprocessedFindings: [ // BatchUpdateFindingsUnprocessedFindingsList // required
 * //     { // BatchUpdateFindingsUnprocessedFinding
 * //       FindingIdentifier: {
 * //         Id: "STRING_VALUE", // required
 * //         ProductArn: "STRING_VALUE", // required
 * //       },
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateFindingsCommandInput - {@link BatchUpdateFindingsCommandInput}
 * @returns {@link BatchUpdateFindingsCommandOutput}
 * @see {@link BatchUpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To update Security Hub findings
 * ```javascript
 * // The following example updates Security Hub findings. The finding identifier parameter specifies which findings to update. Only specific finding fields can be updated with this operation.
 * const input = {
 *   Confidence: 80,
 *   Criticality: 80,
 *   FindingIdentifiers: [
 *     {
 *       Id: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       ProductArn: "arn:aws:securityhub:us-west-1::product/aws/securityhub"
 *     },
 *     {
 *       Id: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       ProductArn: "arn:aws:securityhub:us-west-1::product/aws/securityhub"
 *     }
 *   ],
 *   Note: {
 *     Text: "Known issue that is not a risk.",
 *     UpdatedBy: "user1"
 *   },
 *   RelatedFindings: [
 *     {
 *       Id: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
 *       ProductArn: "arn:aws:securityhub:us-west-1::product/aws/securityhub"
 *     }
 *   ],
 *   Severity: {
 *     Label: "LOW"
 *   },
 *   Types: [
 *     "Software and Configuration Checks/Vulnerabilities/CVE"
 *   ],
 *   UserDefinedFields: {
 *     reviewedByCio: "true"
 *   },
 *   VerificationState: "TRUE_POSITIVE",
 *   Workflow: {
 *     Status: "RESOLVED"
 *   }
 * };
 * const command = new BatchUpdateFindingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcessedFindings: [
 *     {
 *       Id: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       ProductArn: "arn:aws:securityhub:us-west-1::product/aws/securityhub"
 *     },
 *     {
 *       Id: "arn:aws:securityhub:us-west-1:123456789012:subscription/pci-dss/v/3.2.1/PCI.Lambda.2/finding/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       ProductArn: "arn:aws:securityhub:us-west-1::product/aws/securityhub"
 *     }
 *   ],
 *   UnprocessedFindings:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchUpdateFindingsCommand extends $Command
  .classBuilder<
    BatchUpdateFindingsCommandInput,
    BatchUpdateFindingsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "BatchUpdateFindings", {})
  .n("SecurityHubClient", "BatchUpdateFindingsCommand")
  .sc(BatchUpdateFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateFindingsRequest;
      output: BatchUpdateFindingsResponse;
    };
    sdk: {
      input: BatchUpdateFindingsCommandInput;
      output: BatchUpdateFindingsCommandOutput;
    };
  };
}
