// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EntityResolutionClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EntityResolutionClient";
import type { DeleteIdMappingWorkflowInput, DeleteIdMappingWorkflowOutput } from "../models/models_0";
import { DeleteIdMappingWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the <code>IdMappingWorkflow</code> with a given name. This operation will succeed even if a workflow with the given name does not exist.</p>
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be processed because of conflict in the current state of the resource. Example: Workflow already exists, Schema already exists, Workflow is currently running, etc. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class DeleteIdMappingWorkflowCommand extends $Command
  .classBuilder<
    DeleteIdMappingWorkflowCommandInput,
    DeleteIdMappingWorkflowCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "DeleteIdMappingWorkflow", {})
  .n("EntityResolutionClient", "DeleteIdMappingWorkflowCommand")
  .sc(DeleteIdMappingWorkflow$)
  .build() {
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
