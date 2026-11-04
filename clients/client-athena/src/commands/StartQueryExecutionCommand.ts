// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import { StartQueryExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryExecutionCommand}.
 */
export interface StartQueryExecutionCommandInput extends StartQueryExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartQueryExecutionCommand}.
 */
export interface StartQueryExecutionCommandOutput extends StartQueryExecutionOutput, __MetadataBearer {}

/**
 * Runs the SQL query statements contained in the `Query`. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires GetDataCatalog permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see [Examples and Code Samples](http://docs.aws.amazon.com/athena/latest/ug/code-samples.html) in the *Amazon Athena User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, StartQueryExecutionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, StartQueryExecutionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // StartQueryExecutionInput
 *   QueryString: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   QueryExecutionContext: { // QueryExecutionContext
 *     Database: "STRING_VALUE",
 *     Catalog: "STRING_VALUE",
 *   },
 *   ResultConfiguration: { // ResultConfiguration
 *     OutputLocation: "STRING_VALUE",
 *     EncryptionConfiguration: { // EncryptionConfiguration
 *       EncryptionOption: "SSE_S3" || "SSE_KMS" || "CSE_KMS", // required
 *       KmsKey: "STRING_VALUE",
 *     },
 *     ExpectedBucketOwner: "STRING_VALUE",
 *     AclConfiguration: { // AclConfiguration
 *       S3AclOption: "BUCKET_OWNER_FULL_CONTROL", // required
 *     },
 *   },
 *   WorkGroup: "STRING_VALUE",
 *   ExecutionParameters: [ // ExecutionParameters
 *     "STRING_VALUE",
 *   ],
 *   ResultReuseConfiguration: { // ResultReuseConfiguration
 *     ResultReuseByAgeConfiguration: { // ResultReuseByAgeConfiguration
 *       Enabled: true || false, // required
 *       MaxAgeInMinutes: Number("int"),
 *     },
 *   },
 *   EngineConfiguration: { // EngineConfiguration
 *     CoordinatorDpuSize: Number("int"),
 *     MaxConcurrentDpus: Number("int"),
 *     DefaultExecutorDpuSize: Number("int"),
 *     AdditionalConfigs: { // ParametersMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SparkProperties: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Classifications: [ // ClassificationList
 *       { // Classification
 *         Name: "STRING_VALUE",
 *         Properties: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new StartQueryExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryExecutionOutput
 * //   QueryExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartQueryExecutionCommandInput - {@link StartQueryExecutionCommandInput}
 * @returns {@link StartQueryExecutionCommandOutput}
 * @see {@link StartQueryExecutionCommandInput} for command's `input` shape.
 * @see {@link StartQueryExecutionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Indicates that the request was throttled.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class StartQueryExecutionCommand extends command<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartQueryExecution",
  StartQueryExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryExecutionInput;
      output: StartQueryExecutionOutput;
    };
    sdk: {
      input: StartQueryExecutionCommandInput;
      output: StartQueryExecutionCommandOutput;
    };
  };
}
