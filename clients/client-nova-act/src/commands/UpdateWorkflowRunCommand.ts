// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkflowRunRequest, UpdateWorkflowRunResponse } from "../models/models_0";
import { UpdateWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowRunCommand}.
 */
export interface UpdateWorkflowRunCommandInput extends UpdateWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowRunCommand}.
 */
export interface UpdateWorkflowRunCommandOutput extends UpdateWorkflowRunResponse, __MetadataBearer {}

/**
 * Updates the configuration or state of an active workflow run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, UpdateWorkflowRunCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, UpdateWorkflowRunCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // UpdateWorkflowRunRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 *   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "DELETING", // required
 * };
 * const command = new UpdateWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkflowRunCommandInput - {@link UpdateWorkflowRunCommandInput}
 * @returns {@link UpdateWorkflowRunCommandOutput}
 * @see {@link UpdateWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Please try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters for the request are invalid.
 *
 * @throws {@link NovaActServiceException}
 *
 * Base exception class for all service exceptions from NovaAct service.
 *
 * @public
 */
export class UpdateWorkflowRunCommand extends command<UpdateWorkflowRunCommandInput, UpdateWorkflowRunCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkflowRun",
  UpdateWorkflowRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowRunRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkflowRunCommandInput;
      output: UpdateWorkflowRunCommandOutput;
    };
  };
}
