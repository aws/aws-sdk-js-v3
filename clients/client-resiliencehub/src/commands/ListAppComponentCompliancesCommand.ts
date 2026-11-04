// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAppComponentCompliancesRequest, ListAppComponentCompliancesResponse } from "../models/models_0";
import { ListAppComponentCompliances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListAppComponentCompliancesCommandOutput extends ListAppComponentCompliancesResponse, __MetadataBearer {}

/**
 * Lists the compliances for an Resilience Hub Application Component.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppComponentCompliancesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppComponentCompliancesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
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
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Resilience Hub service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception occurs when the specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception occurs when you have exceeded the limit on the number of requests per second.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This exception occurs when a request is not valid.
 *
 * @throws {@link ResiliencehubServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehub service.
 *
 * @public
 */
export class ListAppComponentCompliancesCommand extends command<ListAppComponentCompliancesCommandInput, ListAppComponentCompliancesCommandOutput>(
  _ep0,
  _mw0,
  "ListAppComponentCompliances",
  ListAppComponentCompliances$
) {
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
