// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartExportLabelsTaskRunRequest, StartExportLabelsTaskRunResponse } from "../models/models_3";
import { StartExportLabelsTaskRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExportLabelsTaskRunCommand}.
 */
export interface StartExportLabelsTaskRunCommandInput extends StartExportLabelsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartExportLabelsTaskRunCommand}.
 */
export interface StartExportLabelsTaskRunCommandOutput extends StartExportLabelsTaskRunResponse, __MetadataBearer {}

/**
 * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
 *       task is the only label-related API call that is not part of the typical active learning
 *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
 *       all of your existing labels at the same time, such as when you want to remove or change labels
 *       that were previously submitted as truth. This API operation accepts the
 *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
 *       Service (Amazon S3) path to export the labels to. The operation returns a
 *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
 *         <code>GetMLTaskRun</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartExportLabelsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartExportLabelsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartExportLabelsTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 *   OutputS3Path: "STRING_VALUE", // required
 * };
 * const command = new StartExportLabelsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartExportLabelsTaskRunResponse
 * //   TaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartExportLabelsTaskRunCommandInput - {@link StartExportLabelsTaskRunCommandInput}
 * @returns {@link StartExportLabelsTaskRunCommandOutput}
 * @see {@link StartExportLabelsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartExportLabelsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartExportLabelsTaskRunCommand extends $Command
  .classBuilder<
    StartExportLabelsTaskRunCommandInput,
    StartExportLabelsTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartExportLabelsTaskRun", {})
  .n("GlueClient", "StartExportLabelsTaskRunCommand")
  .sc(StartExportLabelsTaskRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExportLabelsTaskRunRequest;
      output: StartExportLabelsTaskRunResponse;
    };
    sdk: {
      input: StartExportLabelsTaskRunCommandInput;
      output: StartExportLabelsTaskRunCommandOutput;
    };
  };
}
