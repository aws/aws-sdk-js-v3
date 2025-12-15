// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWorkflowRunRequest, UpdateWorkflowRunResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { UpdateWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the configuration or state of an active workflow run.</p>
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
export class UpdateWorkflowRunCommand extends $Command
  .classBuilder<
    UpdateWorkflowRunCommandInput,
    UpdateWorkflowRunCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "UpdateWorkflowRun", {})
  .n("NovaActClient", "UpdateWorkflowRunCommand")
  .sc(UpdateWorkflowRun$)
  .build() {
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
