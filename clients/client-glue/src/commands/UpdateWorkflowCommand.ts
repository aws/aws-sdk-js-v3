// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateWorkflowRequest, UpdateWorkflowResponse } from "../models/models_2";
import { de_UpdateWorkflowCommand, se_UpdateWorkflowCommand } from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "UpdateWorkflow", {})
  .n("GlueClient", "UpdateWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkflowCommand)
  .de(de_UpdateWorkflowCommand)
  .build() {}
