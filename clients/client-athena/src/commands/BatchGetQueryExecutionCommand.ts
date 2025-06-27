// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput } from "../models/models_0";
import { de_BatchGetQueryExecutionCommand, se_BatchGetQueryExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetQueryExecutionCommand}.
 */
export interface BatchGetQueryExecutionCommandInput extends BatchGetQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link BatchGetQueryExecutionCommand}.
 */
export interface BatchGetQueryExecutionCommandOutput extends BatchGetQueryExecutionOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a single query execution or a list of up to 50 query
 *             executions, which you provide as an array of query execution ID strings. Requires you to
 *             have access to the workgroup in which the queries ran. To get a list of query execution
 *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
 *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
 *             about named queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // BatchGetQueryExecutionInput
 *   QueryExecutionIds: [ // QueryExecutionIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetQueryExecutionOutput
 * //   QueryExecutions: [ // QueryExecutionList
 * //     { // QueryExecution
 * //       QueryExecutionId: "STRING_VALUE",
 * //       Query: "STRING_VALUE",
 * //       StatementType: "DDL" || "DML" || "UTILITY",
 * //       ManagedQueryResultsConfiguration: { // ManagedQueryResultsConfiguration
 * //         Enabled: true || false, // required
 * //         EncryptionConfiguration: { // ManagedQueryResultsEncryptionConfiguration
 * //           KmsKey: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       ResultConfiguration: { // ResultConfiguration
 * //         OutputLocation: "STRING_VALUE",
 * //         EncryptionConfiguration: { // EncryptionConfiguration
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //           KmsKey: "STRING_VALUE",
 * //         },
 * //         ExpectedBucketOwner: "STRING_VALUE",
 * //         AclConfiguration: { // AclConfiguration
 * //           S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //         },
 * //       },
 * //       ResultReuseConfiguration: { // ResultReuseConfiguration
 * //         ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 * //           Enabled: true || false, // required
 * //           MaxAgeInMinutes: Number("int"),
 * //         },
 * //       },
 * //       QueryExecutionContext: { // QueryExecutionContext
 * //         Database: "STRING_VALUE",
 * //         Catalog: "STRING_VALUE",
 * //       },
 * //       Status: { // QueryExecutionStatus
 * //         State: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //         StateChangeReason: "STRING_VALUE",
 * //         SubmissionDateTime: new Date("TIMESTAMP"),
 * //         CompletionDateTime: new Date("TIMESTAMP"),
 * //         AthenaError: { // AthenaError
 * //           ErrorCategory: Number("int"),
 * //           ErrorType: Number("int"),
 * //           Retryable: true || false,
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //       Statistics: { // QueryExecutionStatistics
 * //         EngineExecutionTimeInMillis: Number("long"),
 * //         DataScannedInBytes: Number("long"),
 * //         DataManifestLocation: "STRING_VALUE",
 * //         TotalExecutionTimeInMillis: Number("long"),
 * //         QueryQueueTimeInMillis: Number("long"),
 * //         ServicePreProcessingTimeInMillis: Number("long"),
 * //         QueryPlanningTimeInMillis: Number("long"),
 * //         ServiceProcessingTimeInMillis: Number("long"),
 * //         ResultReuseInformation: { // ResultReuseInformation
 * //           ReusedPreviousResult: true || false, // required
 * //         },
 * //       },
 * //       WorkGroup: "STRING_VALUE",
 * //       EngineVersion: { // EngineVersion
 * //         SelectedEngineVersion: "STRING_VALUE",
 * //         EffectiveEngineVersion: "STRING_VALUE",
 * //       },
 * //       ExecutionParameters: [ // ExecutionParameters
 * //         "STRING_VALUE",
 * //       ],
 * //       SubstatementType: "STRING_VALUE",
 * //       QueryResultsS3AccessGrantsConfiguration: { // QueryResultsS3AccessGrantsConfiguration
 * //         EnableS3AccessGrants: true || false, // required
 * //         CreateUserLevelPrefix: true || false,
 * //         AuthenticationType: "DIRECTORY_IDENTITY", // required
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedQueryExecutionIds: [ // UnprocessedQueryExecutionIdList
 * //     { // UnprocessedQueryExecutionId
 * //       QueryExecutionId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetQueryExecutionCommandInput - {@link BatchGetQueryExecutionCommandInput}
 * @returns {@link BatchGetQueryExecutionCommandOutput}
 * @see {@link BatchGetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link BatchGetQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class BatchGetQueryExecutionCommand extends $Command
  .classBuilder<
    BatchGetQueryExecutionCommandInput,
    BatchGetQueryExecutionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "BatchGetQueryExecution", {})
  .n("AthenaClient", "BatchGetQueryExecutionCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetQueryExecutionCommand)
  .de(de_BatchGetQueryExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetQueryExecutionInput;
      output: BatchGetQueryExecutionOutput;
    };
    sdk: {
      input: BatchGetQueryExecutionCommandInput;
      output: BatchGetQueryExecutionCommandOutput;
    };
  };
}
