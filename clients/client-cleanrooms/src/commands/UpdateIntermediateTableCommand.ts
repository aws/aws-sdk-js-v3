// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIntermediateTableInput, UpdateIntermediateTableOutput } from "../models/models_0";
import { UpdateIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIntermediateTableCommand}.
 */
export interface UpdateIntermediateTableCommandInput extends UpdateIntermediateTableInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntermediateTableCommand}.
 */
export interface UpdateIntermediateTableCommandOutput extends UpdateIntermediateTableOutput, __MetadataBearer {}

/**
 * <p>Updates an intermediate table. You can update the description, KMS key ARN, and column types of existing columns. Only the intermediate table owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateIntermediateTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateIntermediateTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateIntermediateTableInput
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   columns: [ // IntermediateTableColumnList
 *     { // IntermediateTableColumn
 *       name: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateIntermediateTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntermediateTableOutput
 * //   intermediateTable: { // IntermediateTable
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     membershipArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     childResources: [ // ChildResourceList
 * //       { // ChildResource
 * //         resourceId: "STRING_VALUE",
 * //         resourceType: "INTERMEDIATE_TABLE", // required
 * //         resourceName: "STRING_VALUE", // required
 * //         ownerAccountId: "STRING_VALUE", // required
 * //         resourceStatus: "CREATED" || "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "DISALLOWED_BY_DATA_PROVIDER" || "BASE_TABLE_REMOVED" || "RETENTION_PERIOD_EXPIRED",
 * //       },
 * //     ],
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "CREATED" || "POPULATE_STARTED" || "POPULATE_SUCCESS" || "POPULATE_FAILED" || "DISALLOWED_BY_DATA_PROVIDER" || "BASE_TABLE_REMOVED" || "RETENTION_PERIOD_EXPIRED", // required
 * //     statusReason: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     populationAnalysisConfiguration: { // PopulationAnalysisConfiguration Union: only one key present
 * //       sqlParameters: { // PopulationAnalysisSqlParameters
 * //         queryString: "STRING_VALUE",
 * //         analysisTemplateArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     retentionInDays: Number("int"),
 * //     tableDependencies: [ // DependencyList
 * //       { // IntermediateTableDependency
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         type: "TABLE" || "INTERMEDIATE_TABLE" || "ID_MAPPING_TABLE", // required
 * //         parentType: "DIRECT" || "INDIRECT", // required
 * //         creatorAccountId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     intermediateTableVersion: { // IntermediateTableActiveVersion
 * //       versionId: "STRING_VALUE", // required
 * //       analysisId: "STRING_VALUE", // required
 * //       analysisType: "QUERY", // required
 * //       kmsKeyArn: "STRING_VALUE",
 * //       parameters: { // ParameterMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       inheritedConstraints: { // IntermediateTableInheritedConstraints
 * //         additionalAnalyses: { // InheritedAdditionalAnalyses
 * //           value: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED", // required
 * //           sources: [ // InheritedAdditionalAnalysesSourceList // required
 * //             { // InheritedAdditionalAnalysesSource
 * //               name: "STRING_VALUE", // required
 * //               id: "STRING_VALUE", // required
 * //               type: "TABLE" || "INTERMEDIATE_TABLE" || "ID_MAPPING_TABLE", // required
 * //               value: "ALLOWED" || "REQUIRED" || "NOT_ALLOWED", // required
 * //               sourceAccountId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         allowedAdditionalAnalyses: { // InheritedAllowedAdditionalAnalyses
 * //           value: [ // AllowedAdditionalAnalyses // required
 * //             "STRING_VALUE",
 * //           ],
 * //           sources: [ // InheritedAllowedAdditionalAnalysesSourceList // required
 * //             { // InheritedAllowedAdditionalAnalysesSource
 * //               name: "STRING_VALUE", // required
 * //               id: "STRING_VALUE", // required
 * //               type: "TABLE" || "INTERMEDIATE_TABLE" || "ID_MAPPING_TABLE", // required
 * //               value: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               sourceAccountId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         allowedResultReceivers: { // InheritedAllowedResultReceivers
 * //           value: [ // AccountIdList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           sources: [ // InheritedAllowedResultReceiversSourceList // required
 * //             { // InheritedAllowedResultReceiversSource
 * //               name: "STRING_VALUE", // required
 * //               id: "STRING_VALUE", // required
 * //               type: "TABLE" || "INTERMEDIATE_TABLE" || "ID_MAPPING_TABLE", // required
 * //               value: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               sourceAccountId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         disallowedOutputColumns: { // InheritedDisallowedOutputColumns
 * //           value: [ // AnalysisRuleColumnNameList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           columnLineage: [ // ColumnLineageList // required
 * //             { // ColumnLineageEntry
 * //               column: "STRING_VALUE", // required
 * //               sourceColumn: "STRING_VALUE", // required
 * //               sourceName: "STRING_VALUE", // required
 * //               sourceId: "STRING_VALUE", // required
 * //               sourceType: "TABLE" || "INTERMEDIATE_TABLE" || "ID_MAPPING_TABLE", // required
 * //               sourceAccountId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       expirationTime: new Date("TIMESTAMP"),
 * //     },
 * //     analysisRuleTypes: [ // IntermediateTableAnalysisRuleTypeList
 * //       "CUSTOM",
 * //     ],
 * //     schema: { // IntermediateTableSchema
 * //       columns: [ // ColumnList // required
 * //         { // Column
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIntermediateTableCommandInput - {@link UpdateIntermediateTableCommandInput}
 * @returns {@link UpdateIntermediateTableCommandOutput}
 * @see {@link UpdateIntermediateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateIntermediateTableCommandOutput} for command's `response` shape.
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
export class UpdateIntermediateTableCommand extends command<UpdateIntermediateTableCommandInput, UpdateIntermediateTableCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIntermediateTable",
  UpdateIntermediateTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntermediateTableInput;
      output: UpdateIntermediateTableOutput;
    };
    sdk: {
      input: UpdateIntermediateTableCommandInput;
      output: UpdateIntermediateTableCommandOutput;
    };
  };
}
