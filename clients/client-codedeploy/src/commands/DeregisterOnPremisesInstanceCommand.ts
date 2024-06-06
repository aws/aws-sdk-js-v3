// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterOnPremisesInstanceInput } from "../models/models_0";
import {
  de_DeregisterOnPremisesInstanceCommand,
  se_DeregisterOnPremisesInstanceCommand,
} from "../protocols/Aws_json1_1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "DeregisterOnPremisesInstance", {})
  .n("CodeDeployClient", "DeregisterOnPremisesInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterOnPremisesInstanceCommand)
  .de(de_DeregisterOnPremisesInstanceCommand)
  .build() {}
