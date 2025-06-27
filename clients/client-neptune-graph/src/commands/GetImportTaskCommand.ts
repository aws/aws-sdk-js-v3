// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetImportTaskInput, GetImportTaskOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_GetImportTaskCommand, se_GetImportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImportTaskCommand}.
 */
export interface GetImportTaskCommandInput extends GetImportTaskInput {}
/**
 * @public
 *
 * The output of {@link GetImportTaskCommand}.
 */
export interface GetImportTaskCommandOutput extends GetImportTaskOutput, __MetadataBearer {}

/**
 * <p>Retrieves a specified import task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetImportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetImportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetImportTaskInput
 *   taskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetImportTaskOutput
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
 * //   importTaskDetails: { // ImportTaskDetails
 * //     status: "STRING_VALUE", // required
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     timeElapsedSeconds: Number("long"), // required
 * //     progressPercentage: Number("int"), // required
 * //     errorCount: Number("int"), // required
 * //     errorDetails: "STRING_VALUE",
 * //     statementCount: Number("long"), // required
 * //     dictionaryEntryCount: Number("long"), // required
 * //   },
 * //   attemptNumber: Number("int"),
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImportTaskCommandInput - {@link GetImportTaskCommandInput}
 * @returns {@link GetImportTaskCommandOutput}
 * @see {@link GetImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetImportTaskCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
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
export class GetImportTaskCommand extends $Command
  .classBuilder<
    GetImportTaskCommandInput,
    GetImportTaskCommandOutput,
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
  .s("AmazonNeptuneGraph", "GetImportTask", {})
  .n("NeptuneGraphClient", "GetImportTaskCommand")
  .f(void 0, void 0)
  .ser(se_GetImportTaskCommand)
  .de(de_GetImportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImportTaskInput;
      output: GetImportTaskOutput;
    };
    sdk: {
      input: GetImportTaskCommandInput;
      output: GetImportTaskCommandOutput;
    };
  };
}
