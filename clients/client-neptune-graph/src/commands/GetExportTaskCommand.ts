// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetExportTaskInput, GetExportTaskOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { GetExportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExportTaskCommand}.
 */
export interface GetExportTaskCommandInput extends GetExportTaskInput {}
/**
 * @public
 *
 * The output of {@link GetExportTaskCommand}.
 */
export interface GetExportTaskCommandOutput extends GetExportTaskOutput, __MetadataBearer {}

/**
 * <p>Retrieves a specified export task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetExportTaskCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetExportTaskCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetExportTaskInput
 *   taskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetExportTaskOutput
 * //   graphId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   taskId: "STRING_VALUE", // required
 * //   status: "INITIALIZING" || "EXPORTING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED" || "DELETED", // required
 * //   format: "PARQUET" || "CSV", // required
 * //   destination: "STRING_VALUE", // required
 * //   kmsKeyIdentifier: "STRING_VALUE", // required
 * //   parquetType: "COLUMNAR",
 * //   statusReason: "STRING_VALUE",
 * //   exportTaskDetails: { // ExportTaskDetails
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     timeElapsedSeconds: Number("long"), // required
 * //     progressPercentage: Number("int"), // required
 * //     numVerticesWritten: Number("long"),
 * //     numEdgesWritten: Number("long"),
 * //   },
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
 * @param GetExportTaskCommandInput - {@link GetExportTaskCommandInput}
 * @returns {@link GetExportTaskCommandOutput}
 * @see {@link GetExportTaskCommandInput} for command's `input` shape.
 * @see {@link GetExportTaskCommandOutput} for command's `response` shape.
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
export class GetExportTaskCommand extends $Command
  .classBuilder<
    GetExportTaskCommandInput,
    GetExportTaskCommandOutput,
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
  .s("AmazonNeptuneGraph", "GetExportTask", {})
  .n("NeptuneGraphClient", "GetExportTaskCommand")
  .sc(GetExportTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExportTaskInput;
      output: GetExportTaskOutput;
    };
    sdk: {
      input: GetExportTaskCommandInput;
      output: GetExportTaskCommandOutput;
    };
  };
}
