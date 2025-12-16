// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCollaborationMLInputChannelRequest, GetCollaborationMLInputChannelResponse } from "../models/models_0";
import { GetCollaborationMLInputChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationMLInputChannelCommand}.
 */
export interface GetCollaborationMLInputChannelCommandInput extends GetCollaborationMLInputChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetCollaborationMLInputChannelCommand}.
 */
export interface GetCollaborationMLInputChannelCommandOutput
  extends GetCollaborationMLInputChannelResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a specific ML input channel in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetCollaborationMLInputChannelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetCollaborationMLInputChannelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetCollaborationMLInputChannelRequest
 *   mlInputChannelArn: "STRING_VALUE", // required
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationMLInputChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationMLInputChannelResponse
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   mlInputChannelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   retentionInDays: Number("int"), // required
 * //   numberOfRecords: Number("long"),
 * //   privacyBudgets: { // PrivacyBudgets Union: only one key present
 * //     accessBudgets: [ // AccessBudgets
 * //       { // AccessBudget
 * //         resourceArn: "STRING_VALUE", // required
 * //         details: [ // AccessBudgetDetailsList // required
 * //           { // AccessBudgetDetails
 * //             startTime: new Date("TIMESTAMP"), // required
 * //             endTime: new Date("TIMESTAMP"),
 * //             remainingBudget: Number("int"), // required
 * //             budget: Number("int"), // required
 * //             budgetType: "CALENDAR_DAY" || "CALENDAR_MONTH" || "CALENDAR_WEEK" || "LIFETIME", // required
 * //             autoRefresh: "ENABLED" || "DISABLED",
 * //           },
 * //         ],
 * //         aggregateRemainingBudget: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * //   description: "STRING_VALUE",
 * //   syntheticDataConfiguration: { // SyntheticDataConfiguration
 * //     syntheticDataParameters: { // MLSyntheticDataParameters
 * //       epsilon: Number("double"), // required
 * //       maxMembershipInferenceAttackScore: Number("double"), // required
 * //       columnClassification: { // ColumnClassificationDetails
 * //         columnMapping: [ // ColumnMappingList // required
 * //           { // SyntheticDataColumnProperties
 * //             columnName: "STRING_VALUE", // required
 * //             columnType: "CATEGORICAL" || "NUMERICAL", // required
 * //             isPredictiveValue: true || false, // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     syntheticDataEvaluationScores: { // SyntheticDataEvaluationScores
 * //       dataPrivacyScores: { // DataPrivacyScores
 * //         membershipInferenceAttackScores: [ // MembershipInferenceAttackScoreList // required
 * //           { // MembershipInferenceAttackScore
 * //             attackVersion: "DISTANCE_TO_CLOSEST_RECORD_V1", // required
 * //             score: Number("double"), // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   creatorAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCollaborationMLInputChannelCommandInput - {@link GetCollaborationMLInputChannelCommandInput}
 * @returns {@link GetCollaborationMLInputChannelCommandOutput}
 * @see {@link GetCollaborationMLInputChannelCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationMLInputChannelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetCollaborationMLInputChannelCommand extends $Command
  .classBuilder<
    GetCollaborationMLInputChannelCommandInput,
    GetCollaborationMLInputChannelCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "GetCollaborationMLInputChannel", {})
  .n("CleanRoomsMLClient", "GetCollaborationMLInputChannelCommand")
  .sc(GetCollaborationMLInputChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationMLInputChannelRequest;
      output: GetCollaborationMLInputChannelResponse;
    };
    sdk: {
      input: GetCollaborationMLInputChannelCommandInput;
      output: GetCollaborationMLInputChannelCommandOutput;
    };
  };
}
