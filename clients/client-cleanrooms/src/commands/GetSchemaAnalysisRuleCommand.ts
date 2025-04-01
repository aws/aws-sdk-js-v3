// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSchemaAnalysisRuleInput, GetSchemaAnalysisRuleOutput } from "../models/models_0";
import { de_GetSchemaAnalysisRuleCommand, se_GetSchemaAnalysisRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaAnalysisRuleCommand}.
 */
export interface GetSchemaAnalysisRuleCommandInput extends GetSchemaAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaAnalysisRuleCommand}.
 */
export interface GetSchemaAnalysisRuleCommandOutput extends GetSchemaAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves a schema analysis rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetSchemaAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetSchemaAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetSchemaAnalysisRuleInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE", // required
 * };
 * const command = new GetSchemaAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaAnalysisRuleOutput
 * //   analysisRule: { // AnalysisRule
 * //     collaborationId: "STRING_VALUE", // required
 * //     type: "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE", // required
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     policy: { // AnalysisRulePolicy Union: only one key present
 * //       v1: { // AnalysisRulePolicyV1 Union: only one key present
 * //         list: { // AnalysisRuleList
 * //           joinColumns: [ // AnalysisRuleColumnList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedJoinOperators: [ // JoinOperatorsList
 * //             "STRING_VALUE",
 * //           ],
 * //           listColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //         },
 * //         aggregation: { // AnalysisRuleAggregation
 * //           aggregateColumns: [ // AggregateColumnList // required
 * //             { // AggregateColumn
 * //               columnNames: [ // AnalysisRuleColumnNameList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               function: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           joinColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           joinRequired: "STRING_VALUE",
 * //           allowedJoinOperators: [
 * //             "STRING_VALUE",
 * //           ],
 * //           dimensionColumns: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           scalarFunctions: [ // ScalarFunctionsList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           outputConstraints: [ // AggregationConstraints // required
 * //             { // AggregationConstraint
 * //               columnName: "STRING_VALUE", // required
 * //               minimum: Number("int"), // required
 * //               type: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //         },
 * //         custom: { // AnalysisRuleCustom
 * //           allowedAnalyses: [ // AllowedAnalysesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 * //             "STRING_VALUE",
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //           disallowedOutputColumns: [
 * //             "STRING_VALUE",
 * //           ],
 * //           differentialPrivacy: { // DifferentialPrivacyConfiguration
 * //             columns: [ // DifferentialPrivacyColumnList // required
 * //               { // DifferentialPrivacyColumn
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         idMappingTable: { // AnalysisRuleIdMappingTable
 * //           joinColumns: "<AnalysisRuleColumnList>", // required
 * //           queryConstraints: [ // QueryConstraintList // required
 * //             { // QueryConstraint Union: only one key present
 * //               requireOverlap: { // QueryConstraintRequireOverlap
 * //                 columns: "<AnalysisRuleColumnList>",
 * //               },
 * //             },
 * //           ],
 * //           dimensionColumns: "<AnalysisRuleColumnList>",
 * //         },
 * //       },
 * //     },
 * //     collaborationPolicy: { // ConfiguredTableAssociationAnalysisRulePolicy Union: only one key present
 * //       v1: { // ConfiguredTableAssociationAnalysisRulePolicyV1 Union: only one key present
 * //         list: { // ConfiguredTableAssociationAnalysisRuleList
 * //           allowedResultReceivers: [ // AllowedResultReceivers
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [ // AllowedAdditionalAnalyses
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregation: { // ConfiguredTableAssociationAnalysisRuleAggregation
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         custom: { // ConfiguredTableAssociationAnalysisRuleCustom
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     consolidatedPolicy: { // ConsolidatedPolicy Union: only one key present
 * //       v1: { // ConsolidatedPolicyV1 Union: only one key present
 * //         list: { // ConsolidatedPolicyList
 * //           joinColumns: "<AnalysisRuleColumnList>", // required
 * //           allowedJoinOperators: [
 * //             "STRING_VALUE",
 * //           ],
 * //           listColumns: "<AnalysisRuleColumnList>", // required
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         aggregation: { // ConsolidatedPolicyAggregation
 * //           aggregateColumns: [ // required
 * //             {
 * //               columnNames: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               function: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           joinColumns: "<AnalysisRuleColumnList>", // required
 * //           joinRequired: "STRING_VALUE",
 * //           allowedJoinOperators: [
 * //             "STRING_VALUE",
 * //           ],
 * //           dimensionColumns: "<AnalysisRuleColumnList>", // required
 * //           scalarFunctions: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           outputConstraints: [ // required
 * //             {
 * //               columnName: "STRING_VALUE", // required
 * //               minimum: Number("int"), // required
 * //               type: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //           allowedResultReceivers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAdditionalAnalyses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         custom: { // ConsolidatedPolicyCustom
 * //           allowedAnalyses: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           allowedAnalysisProviders: [
 * //             "STRING_VALUE",
 * //           ],
 * //           additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 * //           disallowedOutputColumns: "<AnalysisRuleColumnList>",
 * //           differentialPrivacy: {
 * //             columns: [ // required
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           allowedResultReceivers: "<AllowedResultReceivers>",
 * //           allowedAdditionalAnalyses: "<AllowedAdditionalAnalyses>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSchemaAnalysisRuleCommandInput - {@link GetSchemaAnalysisRuleCommandInput}
 * @returns {@link GetSchemaAnalysisRuleCommandOutput}
 * @see {@link GetSchemaAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link GetSchemaAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class GetSchemaAnalysisRuleCommand extends $Command
  .classBuilder<
    GetSchemaAnalysisRuleCommandInput,
    GetSchemaAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetSchemaAnalysisRule", {})
  .n("CleanRoomsClient", "GetSchemaAnalysisRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetSchemaAnalysisRuleCommand)
  .de(de_GetSchemaAnalysisRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaAnalysisRuleInput;
      output: GetSchemaAnalysisRuleOutput;
    };
    sdk: {
      input: GetSchemaAnalysisRuleCommandInput;
      output: GetSchemaAnalysisRuleCommandOutput;
    };
  };
}
