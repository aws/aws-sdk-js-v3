// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopWorkflowRunRequest, StopWorkflowRunResponse } from "../models/models_3";
import { StopWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopWorkflowRunCommand}.
 */
export interface StopWorkflowRunCommandInput extends StopWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkflowRunCommand}.
 */
export interface StopWorkflowRunCommandOutput extends StopWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Stops the execution of the specified workflow run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopWorkflowRunRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new StopWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopWorkflowRunCommandInput - {@link StopWorkflowRunCommandInput}
 * @returns {@link StopWorkflowRunCommandOutput}
 * @see {@link StopWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StopWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link IllegalWorkflowStateException} (client fault)
 *  <p>The workflow is in an invalid state to perform a requested operation.</p>
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
export class StopWorkflowRunCommand extends command<StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput>(
  _ep0,
  _mw0,
  "StopWorkflowRun",
  StopWorkflowRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopWorkflowRunRequest;
      output: {};
    };
    sdk: {
      input: StopWorkflowRunCommandInput;
      output: StopWorkflowRunCommandOutput;
    };
  };
}
