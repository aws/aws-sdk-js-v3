// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWorkflowDefinitionRequest, DeleteWorkflowDefinitionResponse } from "../models/models_0";
import { DeleteWorkflowDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowDefinitionCommand}.
 */
export interface DeleteWorkflowDefinitionCommandInput extends DeleteWorkflowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowDefinitionCommand}.
 */
export interface DeleteWorkflowDefinitionCommandOutput extends DeleteWorkflowDefinitionResponse, __MetadataBearer {}

/**
 * Deletes a workflow definition and all associated resources. This operation cannot be undone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, DeleteWorkflowDefinitionCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, DeleteWorkflowDefinitionCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // DeleteWorkflowDefinitionRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkflowDefinitionResponse
 * //   status: "ACTIVE" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkflowDefinitionCommandInput - {@link DeleteWorkflowDefinitionCommandInput}
 * @returns {@link DeleteWorkflowDefinitionCommandOutput}
 * @see {@link DeleteWorkflowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowDefinitionCommand extends command<DeleteWorkflowDefinitionCommandInput, DeleteWorkflowDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWorkflowDefinition",
  DeleteWorkflowDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowDefinitionRequest;
      output: DeleteWorkflowDefinitionResponse;
    };
    sdk: {
      input: DeleteWorkflowDefinitionCommandInput;
      output: DeleteWorkflowDefinitionCommandOutput;
    };
  };
}
