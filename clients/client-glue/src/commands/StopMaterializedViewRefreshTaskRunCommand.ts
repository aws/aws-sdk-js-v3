// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  StopMaterializedViewRefreshTaskRunRequest,
  StopMaterializedViewRefreshTaskRunResponse,
} from "../models/models_2";
import { StopMaterializedViewRefreshTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMaterializedViewRefreshTaskRunCommand}.
 */
export interface StopMaterializedViewRefreshTaskRunCommandInput extends StopMaterializedViewRefreshTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StopMaterializedViewRefreshTaskRunCommand}.
 */
export interface StopMaterializedViewRefreshTaskRunCommandOutput extends StopMaterializedViewRefreshTaskRunResponse, __MetadataBearer {}

/**
 * <p>Stops a materialized view refresh task run, for a specified table and columns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopMaterializedViewRefreshTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopMaterializedViewRefreshTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopMaterializedViewRefreshTaskRunRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new StopMaterializedViewRefreshTaskRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopMaterializedViewRefreshTaskRunCommandInput - {@link StopMaterializedViewRefreshTaskRunCommandInput}
 * @returns {@link StopMaterializedViewRefreshTaskRunCommandOutput}
 * @see {@link StopMaterializedViewRefreshTaskRunCommandInput} for command's `input` shape.
 * @see {@link StopMaterializedViewRefreshTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link MaterializedViewRefreshTaskNotRunningException} (client fault)
 *  <p>Exception thrown when stopping a task that is not in running state.</p>
 *
 * @throws {@link MaterializedViewRefreshTaskStoppingException} (client fault)
 *  <p>Exception thrown when a task is already in stopping state.</p>
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
export class StopMaterializedViewRefreshTaskRunCommand extends $Command
  .classBuilder<
    StopMaterializedViewRefreshTaskRunCommandInput,
    StopMaterializedViewRefreshTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StopMaterializedViewRefreshTaskRun", {})
  .n("GlueClient", "StopMaterializedViewRefreshTaskRunCommand")
  .sc(StopMaterializedViewRefreshTaskRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMaterializedViewRefreshTaskRunRequest;
      output: {};
    };
    sdk: {
      input: StopMaterializedViewRefreshTaskRunCommandInput;
      output: StopMaterializedViewRefreshTaskRunCommandOutput;
    };
  };
}
