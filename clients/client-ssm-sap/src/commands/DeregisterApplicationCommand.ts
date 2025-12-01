// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterApplicationInput, DeregisterApplicationOutput } from "../models/models_0";
import { DeregisterApplication } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterApplicationCommand}.
 */
export interface DeregisterApplicationCommandInput extends DeregisterApplicationInput {}
/**
 * @public
 *
 * The output of {@link DeregisterApplicationCommand}.
 */
export interface DeregisterApplicationCommandOutput extends DeregisterApplicationOutput, __MetadataBearer {}

/**
 * <p>Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, DeregisterApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, DeregisterApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // DeregisterApplicationInput
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterApplicationCommandInput - {@link DeregisterApplicationCommandInput}
 * @returns {@link DeregisterApplicationCommandOutput}
 * @see {@link DeregisterApplicationCommandInput} for command's `input` shape.
 * @see {@link DeregisterApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is not authorized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class DeregisterApplicationCommand extends $Command
  .classBuilder<
    DeregisterApplicationCommandInput,
    DeregisterApplicationCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "DeregisterApplication", {})
  .n("SsmSapClient", "DeregisterApplicationCommand")
  .sc(DeregisterApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterApplicationInput;
      output: {};
    };
    sdk: {
      input: DeregisterApplicationCommandInput;
      output: DeregisterApplicationCommandOutput;
    };
  };
}
