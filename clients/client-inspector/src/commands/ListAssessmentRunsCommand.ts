// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunsRequest, ListAssessmentRunsResponse } from "../models/models_0";
import { ListAssessmentRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentRunsCommand}.
 */
export interface ListAssessmentRunsCommandInput extends ListAssessmentRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentRunsCommand}.
 */
export interface ListAssessmentRunsCommandOutput extends ListAssessmentRunsResponse, __MetadataBearer {}

/**
 * <p>Lists the assessment runs that correspond to the assessment templates that are
 *          specified by the ARNs of the assessment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentRunsRequest
 *   assessmentTemplateArns: [ // ListParentArnList
 *     "STRING_VALUE",
 *   ],
 *   filter: { // AssessmentRunFilter
 *     namePattern: "STRING_VALUE",
 *     states: [ // AssessmentRunStateList
 *       "CREATED" || "START_DATA_COLLECTION_PENDING" || "START_DATA_COLLECTION_IN_PROGRESS" || "COLLECTING_DATA" || "STOP_DATA_COLLECTION_PENDING" || "DATA_COLLECTED" || "START_EVALUATING_RULES_PENDING" || "EVALUATING_RULES" || "FAILED" || "ERROR" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELED",
 *     ],
 *     durationRange: { // DurationRange
 *       minSeconds: Number("int"),
 *       maxSeconds: Number("int"),
 *     },
 *     rulesPackageArns: [ // FilterRulesPackageArnList
 *       "STRING_VALUE",
 *     ],
 *     startTimeRange: { // TimestampRange
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *     completionTimeRange: {
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *     stateChangeTimeRange: {
 *       beginDate: new Date("TIMESTAMP"),
 *       endDate: new Date("TIMESTAMP"),
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentRunsResponse
 * //   assessmentRunArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentRunsCommandInput - {@link ListAssessmentRunsCommandInput}
 * @returns {@link ListAssessmentRunsCommandOutput}
 * @see {@link ListAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example List assessment runs
 * ```javascript
 * // Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
 * const input = {
 *   assessmentTemplateArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw"
 *   ],
 *   maxResults: 123
 * };
 * const command = new ListAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   assessmentRunArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-v5D6fI3v"
 *   ],
 *   nextToken: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAssessmentRunsCommand extends $Command
  .classBuilder<
    ListAssessmentRunsCommandInput,
    ListAssessmentRunsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "ListAssessmentRuns", {})
  .n("InspectorClient", "ListAssessmentRunsCommand")
  .sc(ListAssessmentRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentRunsRequest;
      output: ListAssessmentRunsResponse;
    };
    sdk: {
      input: ListAssessmentRunsCommandInput;
      output: ListAssessmentRunsCommandOutput;
    };
  };
}
