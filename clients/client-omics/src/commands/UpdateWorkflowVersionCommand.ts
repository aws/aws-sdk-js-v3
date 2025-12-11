// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateWorkflowVersionRequest } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { UpdateWorkflowVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowVersionCommand}.
 */
export interface UpdateWorkflowVersionCommandInput extends UpdateWorkflowVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowVersionCommand}.
 */
export interface UpdateWorkflowVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates information about the workflow version. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateWorkflowVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateWorkflowVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateWorkflowVersionRequest
 *   workflowId: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   storageCapacity: Number("int"),
 *   readmeMarkdown: "STRING_VALUE",
 * };
 * const command = new UpdateWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkflowVersionCommandInput - {@link UpdateWorkflowVersionCommandInput}
 * @returns {@link UpdateWorkflowVersionCommandOutput}
 * @see {@link UpdateWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowVersionCommandOutput} for command's `response` shape.
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
export class UpdateWorkflowVersionCommand extends $Command
  .classBuilder<
    UpdateWorkflowVersionCommandInput,
    UpdateWorkflowVersionCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "UpdateWorkflowVersion", {})
  .n("OmicsClient", "UpdateWorkflowVersionCommand")
  .sc(UpdateWorkflowVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowVersionRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkflowVersionCommandInput;
      output: UpdateWorkflowVersionCommandOutput;
    };
  };
}
