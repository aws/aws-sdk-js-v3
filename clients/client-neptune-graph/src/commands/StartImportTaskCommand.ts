// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartImportTaskInput, StartImportTaskOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_StartImportTaskCommand, se_StartImportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportTaskCommand}.
 */
export interface StartImportTaskCommandInput extends StartImportTaskInput {}
/**
 * @public
 *
 * The output of {@link StartImportTaskCommand}.
 */
export interface StartImportTaskCommandOutput extends StartImportTaskOutput, __MetadataBearer {}

/**
 * <p>Import data into existing Neptune Analytics graph from Amazon Simple Storage Service (S3). The graph needs to be empty and in the AVAILABLE state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, StartImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, StartImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // StartImportTaskInput
 *   importOptions: { // ImportOptions Union: only one key present
 *     neptune: { // NeptuneImportOptions
 *       s3ExportPath: "STRING_VALUE", // required
 *       s3ExportKmsKeyId: "STRING_VALUE", // required
 *       preserveDefaultVertexLabels: true || false,
 *       preserveEdgeIds: true || false,
 *     },
 *   },
 *   failOnError: true || false,
 *   source: "STRING_VALUE", // required
 *   format: "CSV" || "OPEN_CYPHER" || "PARQUET" || "NTRIPLES",
 *   parquetType: "COLUMNAR",
 *   blankNodeHandling: "convertToIri",
 *   graphIdentifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new StartImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartImportTaskOutput
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
 * @param StartImportTaskCommandInput - {@link StartImportTaskCommandInput}
 * @returns {@link StartImportTaskCommandOutput}
 * @see {@link StartImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
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
export class StartImportTaskCommand extends $Command
  .classBuilder<
    StartImportTaskCommandInput,
    StartImportTaskCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "StartImportTask", {})
  .n("NeptuneGraphClient", "StartImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartImportTaskCommand)
  .de(de_StartImportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportTaskInput;
      output: StartImportTaskOutput;
    };
    sdk: {
      input: StartImportTaskCommandInput;
      output: StartImportTaskCommandOutput;
    };
  };
}
