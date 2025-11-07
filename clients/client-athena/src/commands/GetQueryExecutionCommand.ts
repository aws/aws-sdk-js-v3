// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueryExecutionInput, GetQueryExecutionOutput } from "../models/models_0";
import { GetQueryExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryExecutionCommand}.
 */
export interface GetQueryExecutionCommandInput extends GetQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link GetQueryExecutionCommand}.
 */
export interface GetQueryExecutionCommandOutput extends GetQueryExecutionOutput, __MetadataBearer {}

/**
 * <p>Returns information about a single execution of a query if you have access to the
 *             workgroup in which the query ran. Each time a query executes, information about the
 *             query execution is saved with a unique ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetQueryExecutionInput
 *   QueryExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryExecutionOutput
 * //   QueryExecution: { // QueryExecution
 * //     QueryExecutionId: "STRING_VALUE",
 * //     Query: "STRING_VALUE",
 * //     StatementType: "DDL" || "DML" || "UTILITY",
 * //     ManagedQueryResultsConfiguration: { // ManagedQueryResultsConfiguration
 * //       Enabled: true || false, // required
 * //       EncryptionConfiguration: { // ManagedQueryResultsEncryptionConfiguration
 * //         KmsKey: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     ResultConfiguration: { // ResultConfiguration
 * //       OutputLocation: "STRING_VALUE",
 * //       EncryptionConfiguration: { // EncryptionConfiguration
 * //         EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 * //         KmsKey: "STRING_VALUE",
 * //       },
 * //       ExpectedBucketOwner: "STRING_VALUE",
 * //       AclConfiguration: { // AclConfiguration
 * //         S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 * //       },
 * //     },
 * //     ResultReuseConfiguration: { // ResultReuseConfiguration
 * //       ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 * //         Enabled: true || false, // required
 * //         MaxAgeInMinutes: Number("int"),
 * //       },
 * //     },
 * //     QueryExecutionContext: { // QueryExecutionContext
 * //       Database: "STRING_VALUE",
 * //       Catalog: "STRING_VALUE",
 * //     },
 * //     Status: { // QueryExecutionStatus
 * //       State: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //       StateChangeReason: "STRING_VALUE",
 * //       SubmissionDateTime: new Date("TIMESTAMP"),
 * //       CompletionDateTime: new Date("TIMESTAMP"),
 * //       AthenaError: { // AthenaError
 * //         ErrorCategory: Number("int"),
 * //         ErrorType: Number("int"),
 * //         Retryable: true || false,
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //     Statistics: { // QueryExecutionStatistics
 * //       EngineExecutionTimeInMillis: Number("long"),
 * //       DataScannedInBytes: Number("long"),
 * //       DataManifestLocation: "STRING_VALUE",
 * //       TotalExecutionTimeInMillis: Number("long"),
 * //       QueryQueueTimeInMillis: Number("long"),
 * //       ServicePreProcessingTimeInMillis: Number("long"),
 * //       QueryPlanningTimeInMillis: Number("long"),
 * //       ServiceProcessingTimeInMillis: Number("long"),
 * //       ResultReuseInformation: { // ResultReuseInformation
 * //         ReusedPreviousResult: true || false, // required
 * //       },
 * //     },
 * //     WorkGroup: "STRING_VALUE",
 * //     EngineVersion: { // EngineVersion
 * //       SelectedEngineVersion: "STRING_VALUE",
 * //       EffectiveEngineVersion: "STRING_VALUE",
 * //     },
 * //     ExecutionParameters: [ // ExecutionParameters
 * //       "STRING_VALUE",
 * //     ],
 * //     SubstatementType: "STRING_VALUE",
 * //     QueryResultsS3AccessGrantsConfiguration: { // QueryResultsS3AccessGrantsConfiguration
 * //       EnableS3AccessGrants: true || false, // required
 * //       CreateUserLevelPrefix: true || false,
 * //       AuthenticationType: "DIRECTORY_IDENTITY", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueryExecutionCommandInput - {@link GetQueryExecutionCommandInput}
 * @returns {@link GetQueryExecutionCommandOutput}
 * @see {@link GetQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link GetQueryExecutionCommandOutput} for command's `response` shape.
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
export class GetQueryExecutionCommand extends $Command
  .classBuilder<
    GetQueryExecutionCommandInput,
    GetQueryExecutionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetQueryExecution", {})
  .n("AthenaClient", "GetQueryExecutionCommand")
  .sc(GetQueryExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryExecutionInput;
      output: GetQueryExecutionOutput;
    };
    sdk: {
      input: GetQueryExecutionCommandInput;
      output: GetQueryExecutionCommandOutput;
    };
  };
}
