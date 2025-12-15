// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterOnPremisesInstanceInput } from "../models/models_0";
import { DeregisterOnPremisesInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterOnPremisesInstanceCommand}.
 */
export interface DeregisterOnPremisesInstanceCommandInput extends DeregisterOnPremisesInstanceInput {}
/**
 * @public
 *
 * The output of {@link DeregisterOnPremisesInstanceCommand}.
 */
export interface DeregisterOnPremisesInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters an on-premises instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeregisterOnPremisesInstanceCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeregisterOnPremisesInstanceCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // DeregisterOnPremisesInstanceInput
 *   instanceName: "STRING_VALUE", // required
 * };
 * const command = new DeregisterOnPremisesInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterOnPremisesInstanceCommandInput - {@link DeregisterOnPremisesInstanceCommandInput}
 * @returns {@link DeregisterOnPremisesInstanceCommandOutput}
 * @see {@link DeregisterOnPremisesInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterOnPremisesInstanceCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link InstanceNameRequiredException} (client fault)
 *  <p>An on-premises instance name was not specified.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class DeregisterOnPremisesInstanceCommand extends $Command
  .classBuilder<
    DeregisterOnPremisesInstanceCommandInput,
    DeregisterOnPremisesInstanceCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "DeregisterOnPremisesInstance", {})
  .n("CodeDeployClient", "DeregisterOnPremisesInstanceCommand")
  .sc(DeregisterOnPremisesInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterOnPremisesInstanceInput;
      output: {};
    };
    sdk: {
      input: DeregisterOnPremisesInstanceCommandInput;
      output: DeregisterOnPremisesInstanceCommandOutput;
    };
  };
}
