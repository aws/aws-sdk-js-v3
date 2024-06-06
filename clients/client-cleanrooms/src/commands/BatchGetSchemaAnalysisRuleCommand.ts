// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSchemaAnalysisRuleInput, BatchGetSchemaAnalysisRuleOutput } from "../models/models_0";
import { de_BatchGetSchemaAnalysisRuleCommand, se_BatchGetSchemaAnalysisRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSchemaAnalysisRuleCommand}.
 */
export interface BatchGetSchemaAnalysisRuleCommandInput extends BatchGetSchemaAnalysisRuleInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSchemaAnalysisRuleCommand}.
 */
export interface BatchGetSchemaAnalysisRuleCommandOutput extends BatchGetSchemaAnalysisRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves multiple analysis rule schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, BatchGetSchemaAnalysisRuleCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, BatchGetSchemaAnalysisRuleCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // BatchGetSchemaAnalysisRuleInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   schemaAnalysisRuleRequests: [ // SchemaAnalysisRuleRequestList // required
 *     { // SchemaAnalysisRuleRequest
 *       name: "STRING_VALUE", // required
 *       type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetSchemaAnalysisRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSchemaAnalysisRuleOutput
 * //   analysisRules: [ // SchemaAnalysisRuleList // required
 * //     { // AnalysisRule
 * //       collaborationId: "STRING_VALUE", // required
 * //       type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //       name: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       policy: { // AnalysisRulePolicy Union: only one key present
 * //         v1: { // AnalysisRulePolicyV1 Union: only one key present
 * //           list: { // AnalysisRuleList
 * //             joinColumns: [ // AnalysisRuleColumnList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedJoinOperators: [ // JoinOperatorsList
 * //               "STRING_VALUE",
 * //             ],
 * //             listColumns: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           aggregation: { // AnalysisRuleAggregation
 * //             aggregateColumns: [ // AggregateColumnList // required
 * //               { // AggregateColumn
 * //                 columnNames: [ // AnalysisRuleColumnNameList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 function: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             joinColumns: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             joinRequired: "STRING_VALUE",
 * //             allowedJoinOperators: [
 * //               "STRING_VALUE",
 * //             ],
 * //             dimensionColumns: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             scalarFunctions: [ // ScalarFunctionsList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             outputConstraints: [ // AggregationConstraints // required
 * //               { // AggregationConstraint
 * //                 columnName: "STRING_VALUE", // required
 * //                 minimum: Number("int"), // required
 * //                 type: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           custom: { // AnalysisRuleCustom
 * //             allowedAnalyses: [ // AllowedAnalysesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             allowedAnalysisProviders: [ // AllowedAnalysisProviderList
 * //               "STRING_VALUE",
 * //             ],
 * //             differentialPrivacy: { // DifferentialPrivacyConfiguration
 * //               columns: [ // DifferentialPrivacyColumnList // required
 * //                 { // DifferentialPrivacyColumn
 * //                   name: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSchemaAnalysisRuleErrorList // required
 * //     { // BatchGetSchemaAnalysisRuleError
 * //       name: "STRING_VALUE", // required
 * //       type: "AGGREGATION" || "LIST" || "CUSTOM", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSchemaAnalysisRuleCommandInput - {@link BatchGetSchemaAnalysisRuleCommandInput}
 * @returns {@link BatchGetSchemaAnalysisRuleCommandOutput}
 * @see {@link BatchGetSchemaAnalysisRuleCommandInput} for command's `input` shape.
 * @see {@link BatchGetSchemaAnalysisRuleCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchGetSchemaAnalysisRuleCommand extends $Command
  .classBuilder<
    BatchGetSchemaAnalysisRuleCommandInput,
    BatchGetSchemaAnalysisRuleCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "BatchGetSchemaAnalysisRule", {})
  .n("CleanRoomsClient", "BatchGetSchemaAnalysisRuleCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetSchemaAnalysisRuleCommand)
  .de(de_BatchGetSchemaAnalysisRuleCommand)
  .build() {}
