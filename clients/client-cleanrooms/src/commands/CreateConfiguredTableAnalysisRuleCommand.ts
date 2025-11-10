// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfiguredTableAnalysisRuleInput, CreateConfiguredTableAnalysisRuleOutput } from "../models/models_0";
import { CreateConfiguredTableAnalysisRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAnalysisRuleCommandInput extends CreateConfiguredTableAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableAnalysisRuleCommand}.
 */
export interface CreateConfiguredTableAnalysisRuleCommandOutput
  extends CreateConfiguredTableAnalysisRuleOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableAnalysisRuleInput
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM", // required
 *   analysisRulePolicy: { // ConfiguredTableAnalysisRulePolicy Union: only one key present
 *     v1: { // ConfiguredTableAnalysisRulePolicyV1 Union: only one key present
 *       list: { // AnalysisRuleList
 *         joinColumns: [ // AnalysisRuleColumnList // required
 *           "STRING_VALUE",
 *         ],
 *         allowedJoinOperators: [ // JoinOperatorsList
 *           "STRING_VALUE",
 *         ],
 *         listColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 *       },
 *       aggregation: { // AnalysisRuleAggregation
 *         aggregateColumns: [ // AggregateColumnList // required
 *           { // AggregateColumn
 *             columnNames: [ // AnalysisRuleColumnNameList // required
 *               "STRING_VALUE",
 *             ],
 *             function: "STRING_VALUE", // required
 *           },
 *         ],
 *         joinColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         joinRequired: "STRING_VALUE",
 *         allowedJoinOperators: [
 *           "STRING_VALUE",
 *         ],
 *         dimensionColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *         scalarFunctions: [ // ScalarFunctionsList // required
 *           "STRING_VALUE",
 *         ],
 *         outputConstraints: [ // AggregationConstraints // required
 *           { // AggregationConstraint
 *             columnName: "STRING_VALUE", // required
 *             minimum: Number("int"), // required
 *             type: "STRING_VALUE", // required
 *           },
 *         ],
 *         additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 *       },
 *       custom: { // AnalysisRuleCustom
 *         allowedAnalyses: [ // AllowedAnalysesList // required
 *           "STRING_VALUE",
 *         ],
 *         allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 *           "STRING_VALUE",
 *         ],
 *         additionalAnalyses: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED",
 *         disallowedOutputColumns: [
 *           "STRING_VALUE",
 *         ],
 *         differentialPrivacy: { // DifferentialPrivacyConfiguration
 *           columns: [ // DifferentialPrivacyColumnList // required
 *             { // DifferentialPrivacyColumn
 *               name: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new CreateConfiguredTableAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableAnalysisRuleOutput
 * //   analysisRule: { // ConfiguredTableAnalysisRule
 * //     configuredTableId: "STRING_VALUE", // required
 * //     configuredTableArn: "STRING_VALUE", // required
 * //     policy: { // ConfiguredTableAnalysisRulePolicy Union: only one key present
 * //       v1: { // ConfiguredTableAnalysisRulePolicyV1 Union: only one key present
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
 * //       },
 * //     },
 * //     type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfiguredTableAnalysisRuleCommandInput - {@link CreateConfiguredTableAnalysisRuleCommandInput}
 * @returns {@link CreateConfiguredTableAnalysisRuleCommandOutput}
 * @see {@link CreateConfiguredTableAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAnalysisRuleCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateConfiguredTableAnalysisRuleCommand extends $Command
  .classBuilder<
    CreateConfiguredTableAnalysisRuleCommandInput,
    CreateConfiguredTableAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateConfiguredTableAnalysisRule", {})
  .n("CleanRoomsClient", "CreateConfiguredTableAnalysisRuleCommand")
  .sc(CreateConfiguredTableAnalysisRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredTableAnalysisRuleInput;
      output: CreateConfiguredTableAnalysisRuleOutput;
    };
    sdk: {
      input: CreateConfiguredTableAnalysisRuleCommandInput;
      output: CreateConfiguredTableAnalysisRuleCommandOutput;
    };
  };
}
