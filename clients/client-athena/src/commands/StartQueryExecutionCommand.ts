// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/models_0";
import { StartQueryExecution } from "../schemas/schemas_4_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
 *             have access to the workgroup in which the query ran. Running queries against an external
 *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
 *             samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
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
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class StartQueryExecutionCommand extends $Command
  .classBuilder<
    StartQueryExecutionCommandInput,
    StartQueryExecutionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "StartQueryExecution", {})
  .n("AthenaClient", "StartQueryExecutionCommand")
  .sc(StartQueryExecution)
  .build() {
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
