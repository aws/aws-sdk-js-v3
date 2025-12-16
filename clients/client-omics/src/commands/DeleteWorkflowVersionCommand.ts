// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkflowVersionRequest } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteWorkflowVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowVersionCommand}.
 */
export interface DeleteWorkflowVersionCommandInput extends DeleteWorkflowVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowVersionCommand}.
 */
export interface DeleteWorkflowVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a workflow version. Deleting a workflow version doesn't affect any ongoing runs that are using the workflow version.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteWorkflowVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteWorkflowVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteWorkflowVersionRequest
 *   workflowId: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkflowVersionCommandInput - {@link DeleteWorkflowVersionCommandInput}
 * @returns {@link DeleteWorkflowVersionCommandOutput}
 * @see {@link DeleteWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowVersionCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowVersionCommand extends $Command
  .classBuilder<
    DeleteWorkflowVersionCommandInput,
    DeleteWorkflowVersionCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteWorkflowVersion", {})
  .n("OmicsClient", "DeleteWorkflowVersionCommand")
  .sc(DeleteWorkflowVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkflowVersionCommandInput;
      output: DeleteWorkflowVersionCommandOutput;
    };
  };
}
