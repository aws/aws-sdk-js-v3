// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkflowRunRequest, DeleteWorkflowRunResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { DeleteWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowRunCommand}.
 */
export interface DeleteWorkflowRunCommandInput extends DeleteWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowRunCommand}.
 */
export interface DeleteWorkflowRunCommandOutput extends DeleteWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Terminates and cleans up a workflow run, stopping all associated acts and sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, DeleteWorkflowRunCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, DeleteWorkflowRunCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // DeleteWorkflowRunRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkflowRunResponse
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteWorkflowRunCommandInput - {@link DeleteWorkflowRunCommandInput}
 * @returns {@link DeleteWorkflowRunCommandOutput}
 * @see {@link DeleteWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowRunCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowRunCommand extends $Command
  .classBuilder<
    DeleteWorkflowRunCommandInput,
    DeleteWorkflowRunCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "DeleteWorkflowRun", {})
  .n("NovaActClient", "DeleteWorkflowRunCommand")
  .sc(DeleteWorkflowRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowRunRequest;
      output: DeleteWorkflowRunResponse;
    };
    sdk: {
      input: DeleteWorkflowRunCommandInput;
      output: DeleteWorkflowRunCommandOutput;
    };
  };
}
