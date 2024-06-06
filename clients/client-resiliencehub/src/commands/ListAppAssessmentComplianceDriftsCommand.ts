// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppAssessmentComplianceDriftsRequest,
  ListAppAssessmentComplianceDriftsResponse,
} from "../models/models_0";
import {
  de_ListAppAssessmentComplianceDriftsCommand,
  se_ListAppAssessmentComplianceDriftsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppAssessmentComplianceDriftsCommand}.
 */
export interface ListAppAssessmentComplianceDriftsCommandInput extends ListAppAssessmentComplianceDriftsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAssessmentComplianceDriftsCommand}.
 */
export interface ListAppAssessmentComplianceDriftsCommandOutput
  extends ListAppAssessmentComplianceDriftsResponse,
    __MetadataBearer {}

/**
 * <p>List of compliance drifts that were detected while running an assessment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppAssessmentComplianceDriftsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppAssessmentComplianceDriftsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppAssessmentComplianceDriftsRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppAssessmentComplianceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAssessmentComplianceDriftsResponse
 * //   complianceDrifts: [ // ComplianceDriftList // required
 * //     { // ComplianceDrift
 * //       entityId: "STRING_VALUE",
 * //       entityType: "STRING_VALUE",
 * //       driftType: "STRING_VALUE",
 * //       appId: "STRING_VALUE",
 * //       appVersion: "STRING_VALUE",
 * //       expectedReferenceId: "STRING_VALUE",
 * //       expectedValue: { // AssessmentCompliance
 * //         "<keys>": { // DisruptionCompliance
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "STRING_VALUE", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       actualReferenceId: "STRING_VALUE",
 * //       actualValue: {
 * //         "<keys>": {
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "STRING_VALUE", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       diffType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppAssessmentComplianceDriftsCommandInput - {@link ListAppAssessmentComplianceDriftsCommandInput}
 * @returns {@link ListAppAssessmentComplianceDriftsCommandOutput}
 * @see {@link ListAppAssessmentComplianceDriftsCommandInput} for command's `input` shape.
 * @see {@link ListAppAssessmentComplianceDriftsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class ListAppAssessmentComplianceDriftsCommand extends $Command
  .classBuilder<
    ListAppAssessmentComplianceDriftsCommandInput,
    ListAppAssessmentComplianceDriftsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppAssessmentComplianceDrifts", {})
  .n("ResiliencehubClient", "ListAppAssessmentComplianceDriftsCommand")
  .f(void 0, void 0)
  .ser(se_ListAppAssessmentComplianceDriftsCommand)
  .de(de_ListAppAssessmentComplianceDriftsCommand)
  .build() {}
