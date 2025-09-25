// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetSchemaInput, BatchGetSchemaOutput } from "../models/models_0";
import { BatchGetSchema } from "../schemas/schemas_13_IdNamespace";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandInput extends BatchGetSchemaInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandOutput extends BatchGetSchemaOutput, __MetadataBearer {}

/**
 * <p>Retrieves multiple schemas by their identifiers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, BatchGetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, BatchGetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // BatchGetSchemaInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   names: [ // TableAliasList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSchemaOutput
 * //   schemas: [ // SchemaList // required
 * //     { // Schema
 * //       columns: [ // ColumnList // required
 * //         { // Column
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       partitionKeys: [ // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       analysisRuleTypes: [ // AnalysisRuleTypeList // required
 * //         "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE",
 * //       ],
 * //       analysisMethod: "DIRECT_QUERY" || "DIRECT_JOB" || "MULTIPLE",
 * //       selectedAnalysisMethods: [ // SelectedAnalysisMethods
 * //         "DIRECT_QUERY" || "DIRECT_JOB",
 * //       ],
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       type: "TABLE" || "ID_MAPPING_TABLE", // required
 * //       schemaStatusDetails: [ // SchemaStatusDetailList // required
 * //         { // SchemaStatusDetail
 * //           status: "READY" || "NOT_READY", // required
 * //           reasons: [ // SchemaStatusReasonList
 * //             { // SchemaStatusReason
 * //               code: "ANALYSIS_RULE_MISSING" || "ANALYSIS_TEMPLATES_NOT_CONFIGURED" || "ANALYSIS_PROVIDERS_NOT_CONFIGURED" || "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED" || "ID_MAPPING_TABLE_NOT_POPULATED" || "COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED" || "ADDITIONAL_ANALYSES_NOT_CONFIGURED" || "RESULT_RECEIVERS_NOT_CONFIGURED" || "ADDITIONAL_ANALYSES_NOT_ALLOWED" || "RESULT_RECEIVERS_NOT_ALLOWED" || "ANALYSIS_RULE_TYPES_NOT_COMPATIBLE", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE",
 * //           configurations: [ // SchemaConfigurationList
 * //             "DIFFERENTIAL_PRIVACY",
 * //           ],
 * //           analysisType: "DIRECT_ANALYSIS" || "ADDITIONAL_ANALYSIS", // required
 * //         },
 * //       ],
 * //       schemaTypeProperties: { // SchemaTypeProperties Union: only one key present
 * //         idMappingTable: { // IdMappingTableSchemaTypeProperties
 * //           idMappingTableInputSource: [ // IdMappingTableInputSourceList // required
 * //             { // IdMappingTableInputSource
 * //               idNamespaceAssociationId: "STRING_VALUE", // required
 * //               type: "SOURCE" || "TARGET", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSchemaErrorList // required
 * //     { // BatchGetSchemaError
 * //       name: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSchemaCommandInput - {@link BatchGetSchemaCommandInput}
 * @returns {@link BatchGetSchemaCommandOutput}
 * @see {@link BatchGetSchemaCommandInput} for command's `input` shape.
 * @see {@link BatchGetSchemaCommandOutput} for command's `response` shape.
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
export class BatchGetSchemaCommand extends $Command
  .classBuilder<
    BatchGetSchemaCommandInput,
    BatchGetSchemaCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "BatchGetSchema", {})
  .n("CleanRoomsClient", "BatchGetSchemaCommand")
  .sc(BatchGetSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSchemaInput;
      output: BatchGetSchemaOutput;
    };
    sdk: {
      input: BatchGetSchemaCommandInput;
      output: BatchGetSchemaCommandOutput;
    };
  };
}
