// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/models_0";
import { DescribeAssessmentRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssessmentRunsCommand}.
 */
export interface DescribeAssessmentRunsCommandInput extends DescribeAssessmentRunsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssessmentRunsCommand}.
 */
export interface DescribeAssessmentRunsCommandOutput extends DescribeAssessmentRunsResponse, __MetadataBearer {}

/**
 * <p>Describes the assessment runs that are specified by the ARNs of the assessment
 *          runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeAssessmentRunsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeAssessmentRunsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // DescribeAssessmentRunsRequest
 *   assessmentRunArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssessmentRunsResponse
 * //   assessmentRuns: [ // AssessmentRunList // required
 * //     { // AssessmentRun
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       assessmentTemplateArn: "STRING_VALUE", // required
 * //       state: "CREATED" || "START_DATA_COLLECTION_PENDING" || "START_DATA_COLLECTION_IN_PROGRESS" || "COLLECTING_DATA" || "STOP_DATA_COLLECTION_PENDING" || "DATA_COLLECTED" || "START_EVALUATING_RULES_PENDING" || "EVALUATING_RULES" || "FAILED" || "ERROR" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELED", // required
 * //       durationInSeconds: Number("int"), // required
 * //       rulesPackageArns: [ // AssessmentRulesPackageArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       userAttributesForFindings: [ // UserAttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       completedAt: new Date("TIMESTAMP"),
 * //       stateChangedAt: new Date("TIMESTAMP"), // required
 * //       dataCollected: true || false, // required
 * //       stateChanges: [ // AssessmentRunStateChangeList // required
 * //         { // AssessmentRunStateChange
 * //           stateChangedAt: new Date("TIMESTAMP"), // required
 * //           state: "CREATED" || "START_DATA_COLLECTION_PENDING" || "START_DATA_COLLECTION_IN_PROGRESS" || "COLLECTING_DATA" || "STOP_DATA_COLLECTION_PENDING" || "DATA_COLLECTED" || "START_EVALUATING_RULES_PENDING" || "EVALUATING_RULES" || "FAILED" || "ERROR" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELED", // required
 * //         },
 * //       ],
 * //       notifications: [ // AssessmentRunNotificationList // required
 * //         { // AssessmentRunNotification
 * //           date: new Date("TIMESTAMP"), // required
 * //           event: "ASSESSMENT_RUN_STARTED" || "ASSESSMENT_RUN_COMPLETED" || "ASSESSMENT_RUN_STATE_CHANGED" || "FINDING_REPORTED" || "OTHER", // required
 * //           message: "STRING_VALUE",
 * //           error: true || false, // required
 * //           snsTopicArn: "STRING_VALUE",
 * //           snsPublishStatusCode: "SUCCESS" || "TOPIC_DOES_NOT_EXIST" || "ACCESS_DENIED" || "INTERNAL_ERROR",
 * //         },
 * //       ],
 * //       findingCounts: { // AssessmentRunFindingCounts // required
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAssessmentRunsCommandInput - {@link DescribeAssessmentRunsCommandInput}
 * @returns {@link DescribeAssessmentRunsCommandOutput}
 * @see {@link DescribeAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class DescribeAssessmentRunsCommand extends $Command
  .classBuilder<
    DescribeAssessmentRunsCommandInput,
    DescribeAssessmentRunsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "DescribeAssessmentRuns", {})
  .n("InspectorClient", "DescribeAssessmentRunsCommand")
  .sc(DescribeAssessmentRuns$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssessmentRunsRequest;
      output: DescribeAssessmentRunsResponse;
    };
    sdk: {
      input: DescribeAssessmentRunsCommandInput;
      output: DescribeAssessmentRunsCommandOutput;
    };
  };
}
