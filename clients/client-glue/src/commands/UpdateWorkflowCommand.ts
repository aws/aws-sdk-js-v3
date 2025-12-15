// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { UpdateWorkflowRequest, UpdateWorkflowResponse } from "../models/models_3";
import { UpdateWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandInput extends UpdateWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowCommand}.
 */
export interface UpdateWorkflowCommandOutput extends UpdateWorkflowResponse, __MetadataBearer {}

/**
 * <p>Updates an existing workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateWorkflowRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DefaultRunProperties: { // WorkflowRunProperties
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxConcurrentRuns: Number("int"),
 * };
 * const command = new UpdateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkflowResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWorkflowCommandInput - {@link UpdateWorkflowCommandInput}
 * @returns {@link UpdateWorkflowCommandOutput}
 * @see {@link UpdateWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class UpdateWorkflowCommand extends $Command
  .classBuilder<
    UpdateWorkflowCommandInput,
    UpdateWorkflowCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateWorkflow", {})
  .n("GlueClient", "UpdateWorkflowCommand")
  .sc(UpdateWorkflow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowRequest;
      output: UpdateWorkflowResponse;
    };
    sdk: {
      input: UpdateWorkflowCommandInput;
      output: UpdateWorkflowCommandOutput;
    };
  };
}
