// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetMLTransformsRequest, GetMLTransformsResponse } from "../models/models_2";
import { GetMLTransforms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLTransformsCommand}.
 */
export interface GetMLTransformsCommandInput extends GetMLTransformsRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTransformsCommand}.
 */
export interface GetMLTransformsCommandOutput extends GetMLTransformsResponse, __MetadataBearer {}

/**
 * <p>Gets a sortable, filterable list of existing Glue machine learning transforms. Machine
 *       learning transforms are a special type of transform that use machine learning to learn the
 *       details of the transformation to be performed by learning from examples provided by humans.
 *       These transformations are then saved by Glue, and you can retrieve their metadata by
 *       calling <code>GetMLTransforms</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetMLTransformsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // TransformFilterCriteria
 *     Name: "STRING_VALUE",
 *     TransformType: "FIND_MATCHES",
 *     Status: "NOT_READY" || "READY" || "DELETING",
 *     GlueVersion: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     Schema: [ // TransformSchema
 *       { // SchemaColumn
 *         Name: "STRING_VALUE",
 *         DataType: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Sort: { // TransformSortCriteria
 *     Column: "NAME" || "TRANSFORM_TYPE" || "STATUS" || "CREATED" || "LAST_MODIFIED", // required
 *     SortDirection: "DESCENDING" || "ASCENDING", // required
 *   },
 * };
 * const command = new GetMLTransformsCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTransformsResponse
 * //   Transforms: [ // TransformList // required
 * //     { // MLTransform
 * //       TransformId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "NOT_READY" || "READY" || "DELETING",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       InputRecordTables: [ // GlueTables
 * //         { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Parameters: { // TransformParameters
 * //         TransformType: "FIND_MATCHES", // required
 * //         FindMatchesParameters: { // FindMatchesParameters
 * //           PrimaryKeyColumnName: "STRING_VALUE",
 * //           PrecisionRecallTradeoff: Number("double"),
 * //           AccuracyCostTradeoff: Number("double"),
 * //           EnforceProvidedLabels: true || false,
 * //         },
 * //       },
 * //       EvaluationMetrics: { // EvaluationMetrics
 * //         TransformType: "FIND_MATCHES", // required
 * //         FindMatchesMetrics: { // FindMatchesMetrics
 * //           AreaUnderPRCurve: Number("double"),
 * //           Precision: Number("double"),
 * //           Recall: Number("double"),
 * //           F1: Number("double"),
 * //           ConfusionMatrix: { // ConfusionMatrix
 * //             NumTruePositives: Number("long"),
 * //             NumFalsePositives: Number("long"),
 * //             NumTrueNegatives: Number("long"),
 * //             NumFalseNegatives: Number("long"),
 * //           },
 * //           ColumnImportances: [ // ColumnImportanceList
 * //             { // ColumnImportance
 * //               ColumnName: "STRING_VALUE",
 * //               Importance: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       LabelCount: Number("int"),
 * //       Schema: [ // TransformSchema
 * //         { // SchemaColumn
 * //           Name: "STRING_VALUE",
 * //           DataType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Role: "STRING_VALUE",
 * //       GlueVersion: "STRING_VALUE",
 * //       MaxCapacity: Number("double"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       NumberOfWorkers: Number("int"),
 * //       Timeout: Number("int"),
 * //       MaxRetries: Number("int"),
 * //       TransformEncryption: { // TransformEncryption
 * //         MlUserDataEncryption: { // MLUserDataEncryption
 * //           MlUserDataEncryptionMode: "DISABLED" || "SSE-KMS", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //         },
 * //         TaskRunSecurityConfigurationName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMLTransformsCommandInput - {@link GetMLTransformsCommandInput}
 * @returns {@link GetMLTransformsCommandOutput}
 * @see {@link GetMLTransformsCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetMLTransformsCommand extends $Command
  .classBuilder<
    GetMLTransformsCommandInput,
    GetMLTransformsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetMLTransforms", {})
  .n("GlueClient", "GetMLTransformsCommand")
  .sc(GetMLTransforms$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLTransformsRequest;
      output: GetMLTransformsResponse;
    };
    sdk: {
      input: GetMLTransformsCommandInput;
      output: GetMLTransformsCommandOutput;
    };
  };
}
