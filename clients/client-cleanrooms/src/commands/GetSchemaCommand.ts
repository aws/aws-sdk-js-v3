// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSchemaInput, GetSchemaOutput } from "../models/models_0";
import { GetSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandInput extends GetSchemaInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandOutput extends GetSchemaOutput, __MetadataBearer {}

/**
 * <p>Retrieves the schema for a relation within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetSchemaInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaOutput
 * //   schema: { // Schema
 * //     columns: [ // ColumnList // required
 * //       { // Column
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     partitionKeys: [ // required
 * //       {
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     analysisRuleTypes: [ // AnalysisRuleTypeList // required
 * //       "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE",
 * //     ],
 * //     analysisMethod: "DIRECT_QUERY" || "DIRECT_JOB" || "MULTIPLE",
 * //     selectedAnalysisMethods: [ // SelectedAnalysisMethods
 * //       "DIRECT_QUERY" || "DIRECT_JOB",
 * //     ],
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     type: "TABLE" || "ID_MAPPING_TABLE", // required
 * //     schemaStatusDetails: [ // SchemaStatusDetailList // required
 * //       { // SchemaStatusDetail
 * //         status: "READY" || "NOT_READY", // required
 * //         reasons: [ // SchemaStatusReasonList
 * //           { // SchemaStatusReason
 * //             code: "ANALYSIS_RULE_MISSING" || "ANALYSIS_TEMPLATES_NOT_CONFIGURED" || "ANALYSIS_PROVIDERS_NOT_CONFIGURED" || "DIFFERENTIAL_PRIVACY_POLICY_NOT_CONFIGURED" || "ID_MAPPING_TABLE_NOT_POPULATED" || "COLLABORATION_ANALYSIS_RULE_NOT_CONFIGURED" || "ADDITIONAL_ANALYSES_NOT_CONFIGURED" || "RESULT_RECEIVERS_NOT_CONFIGURED" || "ADDITIONAL_ANALYSES_NOT_ALLOWED" || "RESULT_RECEIVERS_NOT_ALLOWED" || "ANALYSIS_RULE_TYPES_NOT_COMPATIBLE", // required
 * //             message: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         analysisRuleType: "AGGREGATION" || "LIST" || "CUSTOM" || "ID_MAPPING_TABLE",
 * //         configurations: [ // SchemaConfigurationList
 * //           "DIFFERENTIAL_PRIVACY",
 * //         ],
 * //         analysisType: "DIRECT_ANALYSIS" || "ADDITIONAL_ANALYSIS", // required
 * //       },
 * //     ],
 * //     resourceArn: "STRING_VALUE",
 * //     schemaTypeProperties: { // SchemaTypeProperties Union: only one key present
 * //       idMappingTable: { // IdMappingTableSchemaTypeProperties
 * //         idMappingTableInputSource: [ // IdMappingTableInputSourceList // required
 * //           { // IdMappingTableInputSource
 * //             idNamespaceAssociationId: "STRING_VALUE", // required
 * //             type: "SOURCE" || "TARGET", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSchemaCommandInput - {@link GetSchemaCommandInput}
 * @returns {@link GetSchemaCommandOutput}
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
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
export class GetSchemaCommand extends $Command
  .classBuilder<
    GetSchemaCommandInput,
    GetSchemaCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetSchema", {})
  .n("CleanRoomsClient", "GetSchemaCommand")
  .sc(GetSchema$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaInput;
      output: GetSchemaOutput;
    };
    sdk: {
      input: GetSchemaCommandInput;
      output: GetSchemaCommandOutput;
    };
  };
}
