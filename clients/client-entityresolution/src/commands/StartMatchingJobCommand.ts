// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMatchingJobInput, StartMatchingJobOutput } from "../models/models_0";
import { StartMatchingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMatchingJobCommand}.
 */
export interface StartMatchingJobCommandInput extends StartMatchingJobInput {}
/**
 * @public
 *
 * The output of {@link StartMatchingJobCommand}.
 */
export interface StartMatchingJobCommandOutput extends StartMatchingJobOutput, __MetadataBearer {}

/**
 * Starts the `MatchingJob` of a workflow. The workflow must have previously been created using the `CreateMatchingWorkflow` endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, StartMatchingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, StartMatchingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // StartMatchingJobInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new StartMatchingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMatchingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartMatchingJobCommandInput - {@link StartMatchingJobCommandInput}
 * @returns {@link StartMatchingJobCommandOutput}
 * @see {@link StartMatchingJobCommandInput} for command's `input` shape.
 * @see {@link StartMatchingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc.
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Entity Resolution account limits. The error message describes the limit exceeded.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class StartMatchingJobCommand extends command<StartMatchingJobCommandInput, StartMatchingJobCommandOutput>(
  _ep0,
  _mw0,
  "StartMatchingJob",
  StartMatchingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMatchingJobInput;
      output: StartMatchingJobOutput;
    };
    sdk: {
      input: StartMatchingJobCommandInput;
      output: StartMatchingJobCommandOutput;
    };
  };
}
