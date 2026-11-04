// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StopMaterializedViewRefreshTaskRunRequest,
  StopMaterializedViewRefreshTaskRunResponse,
} from "../models/models_3";
import { StopMaterializedViewRefreshTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops a materialized view refresh task run for a specified materialized view.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link MaterializedViewRefreshTaskNotRunningException} (client fault)
 *
 * Exception thrown when stopping a task that is not in running state.
 *
 * @throws {@link MaterializedViewRefreshTaskStoppingException} (client fault)
 *
 * Exception thrown when a task is already in stopping state.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StopMaterializedViewRefreshTaskRunCommand extends command<StopMaterializedViewRefreshTaskRunCommandInput, StopMaterializedViewRefreshTaskRunCommandOutput>(
  _ep0,
  _mw0,
  "StopMaterializedViewRefreshTaskRun",
  StopMaterializedViewRefreshTaskRun$
) {
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
