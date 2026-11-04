// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdMappingWorkflowInput, DeleteIdMappingWorkflowOutput } from "../models/models_0";
import { DeleteIdMappingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdMappingWorkflowCommand}.
 */
export interface DeleteIdMappingWorkflowCommandInput extends DeleteIdMappingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdMappingWorkflowCommand}.
 */
export interface DeleteIdMappingWorkflowCommandOutput extends DeleteIdMappingWorkflowOutput, __MetadataBearer {}

/**
 * Deletes the `IdMappingWorkflow` with a given name. This operation returns a `ResourceNotFoundException` if a workflow with the given name does not exist.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteIdMappingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteIdMappingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteIdMappingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdMappingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdMappingWorkflowOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteIdMappingWorkflowCommandInput - {@link DeleteIdMappingWorkflowCommandInput}
 * @returns {@link DeleteIdMappingWorkflowCommandOutput}
 * @see {@link DeleteIdMappingWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteIdMappingWorkflowCommandOutput} for command's `response` shape.
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
export class DeleteIdMappingWorkflowCommand extends command<DeleteIdMappingWorkflowCommandInput, DeleteIdMappingWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdMappingWorkflow",
  DeleteIdMappingWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdMappingWorkflowInput;
      output: DeleteIdMappingWorkflowOutput;
    };
    sdk: {
      input: DeleteIdMappingWorkflowCommandInput;
      output: DeleteIdMappingWorkflowCommandOutput;
    };
  };
}
