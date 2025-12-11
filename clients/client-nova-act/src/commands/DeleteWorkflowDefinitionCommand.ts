// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkflowDefinitionRequest, DeleteWorkflowDefinitionResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { DeleteWorkflowDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a workflow definition and all associated resources. This operation cannot be undone.</p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class DeleteWorkflowDefinitionCommand extends $Command
  .classBuilder<
    DeleteWorkflowDefinitionCommandInput,
    DeleteWorkflowDefinitionCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "DeleteWorkflowDefinition", {})
  .n("NovaActClient", "DeleteWorkflowDefinitionCommand")
  .sc(DeleteWorkflowDefinition)
  .build() {
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
