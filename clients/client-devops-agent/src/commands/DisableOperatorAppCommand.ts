// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableOperatorAppInput } from "../models/models_0";
import { DisableOperatorApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOperatorAppCommand}.
 */
export interface DisableOperatorAppCommandInput extends DisableOperatorAppInput {}
/**
 * @public
 *
 * The output of {@link DisableOperatorAppCommand}.
 */
export interface DisableOperatorAppCommandOutput extends __MetadataBearer {}

/**
 * Disable the Operator App for the specified AgentSpace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, DisableOperatorAppCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, DisableOperatorAppCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // DisableOperatorAppInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   authFlow: "iam" || "idc" || "idp",
 * };
 * const command = new DisableOperatorAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOperatorAppCommandInput - {@link DisableOperatorAppCommandInput}
 * @returns {@link DisableOperatorAppCommandOutput}
 * @see {@link DisableOperatorAppCommandInput} for command's `input` shape.
 * @see {@link DisableOperatorAppCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link IdentityCenterServiceException} (client fault)
 *  Calls to the customer Identity Center have failed
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class DisableOperatorAppCommand extends $Command
  .classBuilder<
    DisableOperatorAppCommandInput,
    DisableOperatorAppCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "DisableOperatorApp", {})
  .n("DevOpsAgentClient", "DisableOperatorAppCommand")
  .sc(DisableOperatorApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableOperatorAppInput;
      output: {};
    };
    sdk: {
      input: DisableOperatorAppCommandInput;
      output: DisableOperatorAppCommandOutput;
    };
  };
}
