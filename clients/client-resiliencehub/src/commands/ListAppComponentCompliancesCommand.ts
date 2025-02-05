// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppComponentCompliancesRequest, ListAppComponentCompliancesResponse } from "../models/models_0";
import {
  de_ListAppComponentCompliancesCommand,
  se_ListAppComponentCompliancesCommand,
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
 * The input for {@link ListAppComponentCompliancesCommand}.
 */
export interface ListAppComponentCompliancesCommandInput extends ListAppComponentCompliancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppComponentCompliancesCommand}.
 */
export interface ListAppComponentCompliancesCommandOutput
  extends ListAppComponentCompliancesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the compliances for an Resilience Hub Application Component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppComponentCompliancesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppComponentCompliancesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppComponentCompliancesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assessmentArn: "STRING_VALUE", // required
 * };
 * const command = new ListAppComponentCompliancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppComponentCompliancesResponse
 * //   componentCompliances: [ // ComponentCompliancesList // required
 * //     { // AppComponentCompliance
 * //       cost: { // Cost
 * //         amount: Number("double"), // required
 * //         currency: "STRING_VALUE", // required
 * //         frequency: "Hourly" || "Daily" || "Monthly" || "Yearly", // required
 * //       },
 * //       appComponentName: "STRING_VALUE",
 * //       compliance: { // AssessmentCompliance
 * //         "<keys>": { // DisruptionCompliance
 * //           achievableRtoInSecs: Number("int"),
 * //           currentRtoInSecs: Number("int"),
 * //           rtoReferenceId: "STRING_VALUE",
 * //           rtoDescription: "STRING_VALUE",
 * //           currentRpoInSecs: Number("int"),
 * //           rpoReferenceId: "STRING_VALUE",
 * //           rpoDescription: "STRING_VALUE",
 * //           complianceStatus: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy", // required
 * //           achievableRpoInSecs: Number("int"),
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //       message: "STRING_VALUE",
 * //       status: "PolicyBreached" || "PolicyMet" || "NotApplicable" || "MissingPolicy",
 * //       resiliencyScore: { // ResiliencyScore
 * //         score: Number("double"), // required
 * //         disruptionScore: { // DisruptionResiliencyScore // required
 * //           "<keys>": Number("double"),
 * //         },
 * //         componentScore: { // ScoringComponentResiliencyScores
 * //           "<keys>": { // ScoringComponentResiliencyScore
 * //             score: Number("double"),
 * //             possibleScore: Number("double"),
 * //             outstandingCount: Number("long"),
 * //             excludedCount: Number("long"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppComponentCompliancesCommandInput - {@link ListAppComponentCompliancesCommandInput}
 * @returns {@link ListAppComponentCompliancesCommandOutput}
 * @see {@link ListAppComponentCompliancesCommandInput} for command's `input` shape.
 * @see {@link ListAppComponentCompliancesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
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
export class ListAppComponentCompliancesCommand extends $Command
  .classBuilder<
    ListAppComponentCompliancesCommandInput,
    ListAppComponentCompliancesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppComponentCompliances", {})
  .n("ResiliencehubClient", "ListAppComponentCompliancesCommand")
  .f(void 0, void 0)
  .ser(se_ListAppComponentCompliancesCommand)
  .de(de_ListAppComponentCompliancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppComponentCompliancesRequest;
      output: ListAppComponentCompliancesResponse;
    };
    sdk: {
      input: ListAppComponentCompliancesCommandInput;
      output: ListAppComponentCompliancesCommandOutput;
    };
  };
}
