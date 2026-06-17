// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSecurityRequirementPackInput, CreateSecurityRequirementPackOutput } from "../models/models_0";
import { CreateSecurityRequirementPack$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityRequirementPackCommand}.
 */
export interface CreateSecurityRequirementPackCommandInput extends CreateSecurityRequirementPackInput {}
/**
 * @public
 *
 * The output of {@link CreateSecurityRequirementPackCommand}.
 */
export interface CreateSecurityRequirementPackCommandOutput extends CreateSecurityRequirementPackOutput, __MetadataBearer {}

/**
 * <p>Creates a customer managed security requirement pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateSecurityRequirementPackCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateSecurityRequirementPackCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateSecurityRequirementPackInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "ENABLED" || "DISABLED",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSecurityRequirementPackCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityRequirementPackOutput
 * //   packId: "STRING_VALUE", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   kmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityRequirementPackCommandInput - {@link CreateSecurityRequirementPackCommandInput}
 * @returns {@link CreateSecurityRequirementPackCommandOutput}
 * @see {@link CreateSecurityRequirementPackCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityRequirementPackCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota. Review your current usage and request a quota increase if needed.</p>
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
export class CreateSecurityRequirementPackCommand extends $Command
  .classBuilder<
    CreateSecurityRequirementPackCommandInput,
    CreateSecurityRequirementPackCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "CreateSecurityRequirementPack", {})
  .n("SecurityAgentClient", "CreateSecurityRequirementPackCommand")
  .sc(CreateSecurityRequirementPack$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityRequirementPackInput;
      output: CreateSecurityRequirementPackOutput;
    };
    sdk: {
      input: CreateSecurityRequirementPackCommandInput;
      output: CreateSecurityRequirementPackCommandOutput;
    };
  };
}
