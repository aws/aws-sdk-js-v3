// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkflowRequest } from "../models/models_1";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { UpdateWorkflow } from "../schemas/schemas_0";

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
export interface UpdateWorkflowCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates information about a workflow.</p> <p>You can update the following workflow information:</p> <ul> <li> <p>Name</p> </li> <li> <p>Description</p> </li> <li> <p>Default storage type</p> </li> <li> <p>Default storage capacity (with workflow ID)</p> </li> </ul> <p>This operation returns a response with no body if the operation is successful. You can check the workflow updates by calling the <code>GetWorkflow</code> API operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/update-private-workflow.html">Update a private workflow</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateWorkflowCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateWorkflowCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateWorkflowRequest
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   storageCapacity: Number("int"),
 *   readmeMarkdown: "STRING_VALUE",
 * };
 * const command = new UpdateWorkflowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkflowCommandInput - {@link UpdateWorkflowCommandInput}
 * @returns {@link UpdateWorkflowCommandOutput}
 * @see {@link UpdateWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class UpdateWorkflowCommand extends $Command
  .classBuilder<
    UpdateWorkflowCommandInput,
    UpdateWorkflowCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "UpdateWorkflow", {})
  .n("OmicsClient", "UpdateWorkflowCommand")
  .sc(UpdateWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkflowCommandInput;
      output: UpdateWorkflowCommandOutput;
    };
  };
}
