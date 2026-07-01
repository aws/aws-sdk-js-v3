// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartMaterializedViewRefreshTaskRunRequest,
  StartMaterializedViewRefreshTaskRunResponse,
} from "../models/models_3";
import { StartMaterializedViewRefreshTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMaterializedViewRefreshTaskRunCommand}.
 */
export interface StartMaterializedViewRefreshTaskRunCommandInput extends StartMaterializedViewRefreshTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartMaterializedViewRefreshTaskRunCommand}.
 */
export interface StartMaterializedViewRefreshTaskRunCommandOutput extends StartMaterializedViewRefreshTaskRunResponse, __MetadataBearer {}

/**
 * <p>Starts a materialized view refresh task run, for a specified table and columns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMaterializedViewRefreshTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMaterializedViewRefreshTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartMaterializedViewRefreshTaskRunRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   FullRefresh: true || false,
 * };
 * const command = new StartMaterializedViewRefreshTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartMaterializedViewRefreshTaskRunResponse
 * //   MaterializedViewRefreshTaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMaterializedViewRefreshTaskRunCommandInput - {@link StartMaterializedViewRefreshTaskRunCommandInput}
 * @returns {@link StartMaterializedViewRefreshTaskRunCommandOutput}
 * @see {@link StartMaterializedViewRefreshTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMaterializedViewRefreshTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link MaterializedViewRefreshTaskRunningException} (client fault)
 *  <p>Exception thrown when a task is already in running state.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartMaterializedViewRefreshTaskRunCommand extends command<StartMaterializedViewRefreshTaskRunCommandInput, StartMaterializedViewRefreshTaskRunCommandOutput>(
  _ep0,
  _mw0,
  "StartMaterializedViewRefreshTaskRun",
  StartMaterializedViewRefreshTaskRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMaterializedViewRefreshTaskRunRequest;
      output: StartMaterializedViewRefreshTaskRunResponse;
    };
    sdk: {
      input: StartMaterializedViewRefreshTaskRunCommandInput;
      output: StartMaterializedViewRefreshTaskRunCommandOutput;
    };
  };
}
