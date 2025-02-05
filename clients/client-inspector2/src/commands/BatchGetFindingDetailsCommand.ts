// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { BatchGetFindingDetailsRequest, BatchGetFindingDetailsResponse } from "../models/models_0";
import { de_BatchGetFindingDetailsCommand, se_BatchGetFindingDetailsCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "BatchGetFindingDetails", {})
  .n("Inspector2Client", "BatchGetFindingDetailsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetFindingDetailsCommand)
  .de(de_BatchGetFindingDetailsCommand)
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
