// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { BatchGetFindingDetailsRequest, BatchGetFindingDetailsResponse } from "../models/models_0";
import { BatchGetFindingDetails } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFindingDetailsCommand}.
 */
export interface BatchGetFindingDetailsCommandInput extends BatchGetFindingDetailsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFindingDetailsCommand}.
 */
export interface BatchGetFindingDetailsCommandOutput extends BatchGetFindingDetailsResponse, __MetadataBearer {}

/**
 * <p>Gets vulnerability details for findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetFindingDetailsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetFindingDetailsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetFindingDetailsRequest
 *   findingArns: [ // FindingArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetFindingDetailsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFindingDetailsResponse
 * //   findingDetails: [ // FindingDetails
 * //     { // FindingDetail
 * //       findingArn: "STRING_VALUE",
 * //       cisaData: { // CisaData
 * //         dateAdded: new Date("TIMESTAMP"),
 * //         dateDue: new Date("TIMESTAMP"),
 * //         action: "STRING_VALUE",
 * //       },
 * //       riskScore: Number("int"),
 * //       evidences: [ // EvidenceList
 * //         { // Evidence
 * //           evidenceRule: "STRING_VALUE",
 * //           evidenceDetail: "STRING_VALUE",
 * //           severity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ttps: [ // Ttps
 * //         "STRING_VALUE",
 * //       ],
 * //       tools: [ // Tools
 * //         "STRING_VALUE",
 * //       ],
 * //       exploitObserved: { // ExploitObserved
 * //         lastSeen: new Date("TIMESTAMP"),
 * //         firstSeen: new Date("TIMESTAMP"),
 * //       },
 * //       referenceUrls: [ // VulnerabilityReferenceUrls
 * //         "STRING_VALUE",
 * //       ],
 * //       cwes: [ // Cwes
 * //         "STRING_VALUE",
 * //       ],
 * //       epssScore: Number("double"),
 * //     },
 * //   ],
 * //   errors: [ // FindingDetailsErrorList
 * //     { // FindingDetailsError
 * //       findingArn: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFindingDetailsCommandInput - {@link BatchGetFindingDetailsCommandInput}
 * @returns {@link BatchGetFindingDetailsCommandOutput}
 * @see {@link BatchGetFindingDetailsCommandInput} for command's `input` shape.
 * @see {@link BatchGetFindingDetailsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example Sample BatchGetFindingDetails Call
 * ```javascript
 * //
 * const input = {
 *   findingArns: [
 *     "arn:aws:inspector2:eu-west-1:123456789012:finding/78b88cc9aa1d78b6e14fde90d774dde7",
 *     "arn:aws:inspector2:eu-west-1:111111111111:finding/78b88cc9aa1d78b6e14fde90d874dde7"
 *   ]
 * };
 * const command = new BatchGetFindingDetailsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors: [
 *     {
 *       errorCode: "ACCESS_DENIED",
 *       errorMessage: "You don't have permission to access this finding",
 *       findingArn: "arn:aws:inspector2:eu-west-1:111111111111:finding/78b88cc9aa1d78b6e14fde90d874dde7"
 *     }
 *   ],
 *   findingDetails: [
 *     {
 *       cisaData: {
 *         action: "For all affected software assets for which updates exist, the only acceptable remediation actions are: 1) Apply updates; OR 2) remove affected assets from agency networks.",
 *         dateAdded: 1688580990,
 *         dateDue: 1688580999
 *       },
 *       cwes: [
 *         "cwe-1234"
 *       ],
 *       epssScore: 0.85,
 *       evidences: [
 *         {
 *           evidenceDetail: "2 sightings on 1 source",
 *           evidenceRule: "Historically Linked to Penetration Testing Tools",
 *           severity: "Low"
 *         }
 *       ],
 *       exploitObserved: {
 *         firstSeen: 1688580800,
 *         lastSeen: 1688580990
 *       },
 *       findingArn: "arn:aws:inspector2:eu-west-1:123456789012:finding/78b88cc9aa1d78b6e14fde90d774dde7",
 *       referenceUrls: [
 *         "https://nvd.nist.gov/vuln/detail/CVE-2019-20367"
 *       ],
 *       riskScore: 66,
 *       tools: [
 *         "Metasploit"
 *       ],
 *       ttps: [
 *         "TA0001",
 *         "TA0002"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetFindingDetailsCommand extends $Command
  .classBuilder<
    BatchGetFindingDetailsCommandInput,
    BatchGetFindingDetailsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "BatchGetFindingDetails", {})
  .n("Inspector2Client", "BatchGetFindingDetailsCommand")
  .sc(BatchGetFindingDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetFindingDetailsRequest;
      output: BatchGetFindingDetailsResponse;
    };
    sdk: {
      input: BatchGetFindingDetailsCommandInput;
      output: BatchGetFindingDetailsCommandOutput;
    };
  };
}
