// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartExportTaskInput, StartExportTaskOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_StartExportTaskCommand, se_StartExportTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandInput extends StartExportTaskInput {}
/**
 * @public
 *
 * The output of {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandOutput extends StartExportTaskOutput, __MetadataBearer {}

/**
 * <p>Export data from an existing Neptune Analytics graph to Amazon S3. The graph state should be <code>AVAILABLE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, StartExportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, StartExportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NeptuneGraphClient(config);
 * const input = { // StartExportTaskInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   format: "PARQUET" || "CSV", // required
 *   destination: "STRING_VALUE", // required
 *   kmsKeyIdentifier: "STRING_VALUE", // required
 *   parquetType: "COLUMNAR",
 *   exportFilter: { // ExportFilter
 *     vertexFilter: { // ExportFilterPerLabelMap
 *       "<keys>": { // ExportFilterElement
 *         properties: { // ExportFilterPropertyMap
 *           "<keys>": { // ExportFilterPropertyAttributes
 *             outputType: "STRING_VALUE",
 *             sourcePropertyName: "STRING_VALUE",
 *             multiValueHandling: "TO_LIST" || "PICK_FIRST",
 *           },
 *         },
 *       },
 *     },
 *     edgeFilter: {
 *       "<keys>": {
 *         properties: {
 *           "<keys>": {
 *             outputType: "STRING_VALUE",
 *             sourcePropertyName: "STRING_VALUE",
 *             multiValueHandling: "TO_LIST" || "PICK_FIRST",
 *           },
 *         },
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartExportTaskOutput
 * //   graphId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   taskId: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //   format: "PARQUET" || "CSV", // required
 * //   destination: "STRING_VALUE", // required
 * //   kmsKeyIdentifier: "STRING_VALUE", // required
 * //   parquetType: "COLUMNAR",
 * //   statusReason: "STRING_VALUE",
 * //   exportFilter: { // ExportFilter
 * //     vertexFilter: { // ExportFilterPerLabelMap
 * //       "<keys>": { // ExportFilterElement
 * //         properties: { // ExportFilterPropertyMap
 * //           "<keys>": { // ExportFilterPropertyAttributes
 * //             outputType: "STRING_VALUE",
 * //             sourcePropertyName: "STRING_VALUE",
 * //             multiValueHandling: "TO_LIST" || "PICK_FIRST",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     edgeFilter: {
 * //       "<keys>": {
 * //         properties: {
 * //           "<keys>": {
 * //             outputType: "STRING_VALUE",
 * //             sourcePropertyName: "STRING_VALUE",
 * //             multiValueHandling: "TO_LIST" || "PICK_FIRST",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartExportTaskCommandInput - {@link StartExportTaskCommandInput}
 * @returns {@link StartExportTaskCommandOutput}
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartExportTaskCommand extends $Command
  .classBuilder<
    StartExportTaskCommandInput,
    StartExportTaskCommandOutput,
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
  .s("AmazonNeptuneGraph", "StartExportTask", {})
  .n("NeptuneGraphClient", "StartExportTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartExportTaskCommand)
  .de(de_StartExportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExportTaskInput;
      output: StartExportTaskOutput;
    };
    sdk: {
      input: StartExportTaskCommandInput;
      output: StartExportTaskCommandOutput;
    };
  };
}
