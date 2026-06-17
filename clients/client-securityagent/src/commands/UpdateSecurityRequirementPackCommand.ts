// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSecurityRequirementPackInput, UpdateSecurityRequirementPackOutput } from "../models/models_0";
import { UpdateSecurityRequirementPack$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityRequirementPackCommand}.
 */
export interface UpdateSecurityRequirementPackCommandInput extends UpdateSecurityRequirementPackInput {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityRequirementPackCommand}.
 */
export interface UpdateSecurityRequirementPackCommandOutput extends UpdateSecurityRequirementPackOutput, __MetadataBearer {}

/**
 * <p>Updates a security requirement pack. For customer managed packs, both metadata and status can be updated. For AWS managed packs, only status can be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateSecurityRequirementPackCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateSecurityRequirementPackCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateSecurityRequirementPackInput
 *   packId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateSecurityRequirementPackCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityRequirementPackOutput
 * //   packId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param UpdateSecurityRequirementPackCommandInput - {@link UpdateSecurityRequirementPackCommandInput}
 * @returns {@link UpdateSecurityRequirementPackCommandOutput}
 * @see {@link UpdateSecurityRequirementPackCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityRequirementPackCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateSecurityRequirementPackCommand extends $Command
  .classBuilder<
    UpdateSecurityRequirementPackCommandInput,
    UpdateSecurityRequirementPackCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateSecurityRequirementPack", {})
  .n("SecurityAgentClient", "UpdateSecurityRequirementPackCommand")
  .sc(UpdateSecurityRequirementPack$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityRequirementPackInput;
      output: UpdateSecurityRequirementPackOutput;
    };
    sdk: {
      input: UpdateSecurityRequirementPackCommandInput;
      output: UpdateSecurityRequirementPackCommandOutput;
    };
  };
}
