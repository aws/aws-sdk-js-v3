// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateGraphUsingImportTaskInput, CreateGraphUsingImportTaskOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { CreateGraphUsingImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGraphUsingImportTaskCommand}.
 */
export interface CreateGraphUsingImportTaskCommandInput extends CreateGraphUsingImportTaskInput {}
/**
 * @public
 *
 * The output of {@link CreateGraphUsingImportTaskCommand}.
 */
export interface CreateGraphUsingImportTaskCommandOutput extends CreateGraphUsingImportTaskOutput, __MetadataBearer {}

/**
 * <p>Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot.</p> <p>The data can be loaded from files in S3 that in either the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV format</a> or the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher load format</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreateGraphUsingImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreateGraphUsingImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreateGraphUsingImportTaskInput
 *   graphName: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   publicConnectivity: true || false,
 *   kmsKeyIdentifier: "STRING_VALUE",
 *   vectorSearchConfiguration: { // VectorSearchConfiguration
 *     dimension: Number("int"), // required
 *   },
 *   replicaCount: Number("int"),
 *   deletionProtection: true || false,
 *   importOptions: { // ImportOptions Union: only one key present
 *     neptune: { // NeptuneImportOptions
 *       s3ExportPath: "STRING_VALUE", // required
 *       s3ExportKmsKeyId: "STRING_VALUE", // required
 *       preserveDefaultVertexLabels: true || false,
 *       preserveEdgeIds: true || false,
 *     },
 *   },
 *   maxProvisionedMemory: Number("int"),
 *   minProvisionedMemory: Number("int"),
 *   failOnError: true || false,
 *   source: "STRING_VALUE", // required
 *   format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 *   parquetType: "COLUMNAR",
 *   blankNodeHandling: "convertToIri",
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateGraphUsingImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateGraphUsingImportTaskOutput
 * //   graphId: "STRING_VALUE",
 * //   taskId: "STRING_VALUE", // required
 * //   source: "STRING_VALUE", // required
 * //   format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 * //   parquetType: "COLUMNAR",
 * //   roleArn: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "ANALYZING_DATA" || "IMPORTING" || "REPROVISIONING" || "ROLLING_BACK" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //   importOptions: { // ImportOptions Union: only one key present
 * //     neptune: { // NeptuneImportOptions
 * //       s3ExportPath: "STRING_VALUE", // required
 * //       s3ExportKmsKeyId: "STRING_VALUE", // required
 * //       preserveDefaultVertexLabels: true || false,
 * //       preserveEdgeIds: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGraphUsingImportTaskCommandInput - {@link CreateGraphUsingImportTaskCommandInput}
 * @returns {@link CreateGraphUsingImportTaskCommandOutput}
 * @see {@link CreateGraphUsingImportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateGraphUsingImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class CreateGraphUsingImportTaskCommand extends $Command
  .classBuilder<
    CreateGraphUsingImportTaskCommandInput,
    CreateGraphUsingImportTaskCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "CreateGraphUsingImportTask", {})
  .n("NeptuneGraphClient", "CreateGraphUsingImportTaskCommand")
  .sc(CreateGraphUsingImportTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGraphUsingImportTaskInput;
      output: CreateGraphUsingImportTaskOutput;
    };
    sdk: {
      input: CreateGraphUsingImportTaskCommandInput;
      output: CreateGraphUsingImportTaskCommandOutput;
    };
  };
}
