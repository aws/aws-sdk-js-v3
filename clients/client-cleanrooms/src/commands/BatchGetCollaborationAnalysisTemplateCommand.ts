// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  BatchGetCollaborationAnalysisTemplateInput,
  BatchGetCollaborationAnalysisTemplateOutput,
} from "../models/models_0";
import { BatchGetCollaborationAnalysisTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCollaborationAnalysisTemplateCommand}.
 */
export interface BatchGetCollaborationAnalysisTemplateCommandInput extends BatchGetCollaborationAnalysisTemplateInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCollaborationAnalysisTemplateCommand}.
 */
export interface BatchGetCollaborationAnalysisTemplateCommandOutput
  extends BatchGetCollaborationAnalysisTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves multiple analysis templates within a collaboration by their Amazon Resource Names (ARNs).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, BatchGetCollaborationAnalysisTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, BatchGetCollaborationAnalysisTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // BatchGetCollaborationAnalysisTemplateInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   analysisTemplateArns: [ // AnalysisTemplateArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCollaborationAnalysisTemplateCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCollaborationAnalysisTemplateOutput
 * //   collaborationAnalysisTemplates: [ // CollaborationAnalysisTemplateList // required
 * //     { // CollaborationAnalysisTemplate
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       schema: { // AnalysisSchema
 * //         referencedTables: [ // QueryTables
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       format: "SQL" || "PYSPARK_1_0", // required
 * //       source: { // AnalysisSource Union: only one key present
 * //         text: "STRING_VALUE",
 * //         artifacts: { // AnalysisTemplateArtifacts
 * //           entryPoint: { // AnalysisTemplateArtifact
 * //             location: { // S3Location
 * //               bucket: "STRING_VALUE", // required
 * //               key: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           additionalArtifacts: [ // AnalysisTemplateArtifactList
 * //             {
 * //               location: {
 * //                 bucket: "STRING_VALUE", // required
 * //                 key: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       sourceMetadata: { // AnalysisSourceMetadata Union: only one key present
 * //         artifacts: { // AnalysisTemplateArtifactMetadata
 * //           entryPointHash: { // Hash
 * //             sha256: "STRING_VALUE",
 * //           },
 * //           additionalArtifactHashes: [ // HashList
 * //             {
 * //               sha256: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       analysisParameters: [ // AnalysisParameterList
 * //         { // AnalysisParameter
 * //           name: "STRING_VALUE", // required
 * //           type: "SMALLINT" || "INTEGER" || "BIGINT" || "DECIMAL" || "REAL" || "DOUBLE_PRECISION" || "BOOLEAN" || "CHAR" || "VARCHAR" || "DATE" || "TIMESTAMP" || "TIMESTAMPTZ" || "TIME" || "TIMETZ" || "VARBYTE" || "BINARY" || "BYTE" || "CHARACTER" || "DOUBLE" || "FLOAT" || "INT" || "LONG" || "NUMERIC" || "SHORT" || "STRING" || "TIMESTAMP_LTZ" || "TIMESTAMP_NTZ" || "TINYINT", // required
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       validations: [ // AnalysisTemplateValidationStatusDetailList
 * //         { // AnalysisTemplateValidationStatusDetail
 * //           type: "DIFFERENTIAL_PRIVACY", // required
 * //           status: "VALID" || "INVALID" || "UNABLE_TO_VALIDATE", // required
 * //           reasons: [ // AnalysisTemplateValidationStatusReasonList
 * //             { // AnalysisTemplateValidationStatusReason
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       errorMessageConfiguration: { // ErrorMessageConfiguration
 * //         type: "DETAILED", // required
 * //       },
 * //       syntheticDataParameters: { // SyntheticDataParameters Union: only one key present
 * //         mlSyntheticDataParameters: { // MLSyntheticDataParameters
 * //           epsilon: Number("double"), // required
 * //           maxMembershipInferenceAttackScore: Number("double"), // required
 * //           columnClassification: { // ColumnClassificationDetails
 * //             columnMapping: [ // ColumnMappingList // required
 * //               { // SyntheticDataColumnProperties
 * //                 columnName: "STRING_VALUE", // required
 * //                 columnType: "CATEGORICAL" || "NUMERICAL", // required
 * //                 isPredictiveValue: true || false, // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetCollaborationAnalysisTemplateErrorList // required
 * //     { // BatchGetCollaborationAnalysisTemplateError
 * //       arn: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCollaborationAnalysisTemplateCommandInput - {@link BatchGetCollaborationAnalysisTemplateCommandInput}
 * @returns {@link BatchGetCollaborationAnalysisTemplateCommandOutput}
 * @see {@link BatchGetCollaborationAnalysisTemplateCommandInput} for command's `input` shape.
 * @see {@link BatchGetCollaborationAnalysisTemplateCommandOutput} for command's `response` shape.
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
export class BatchGetCollaborationAnalysisTemplateCommand extends $Command
  .classBuilder<
    BatchGetCollaborationAnalysisTemplateCommandInput,
    BatchGetCollaborationAnalysisTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "BatchGetCollaborationAnalysisTemplate", {})
  .n("CleanRoomsClient", "BatchGetCollaborationAnalysisTemplateCommand")
  .sc(BatchGetCollaborationAnalysisTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCollaborationAnalysisTemplateInput;
      output: BatchGetCollaborationAnalysisTemplateOutput;
    };
    sdk: {
      input: BatchGetCollaborationAnalysisTemplateCommandInput;
      output: BatchGetCollaborationAnalysisTemplateCommandOutput;
    };
  };
}
