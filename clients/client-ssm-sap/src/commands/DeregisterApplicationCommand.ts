// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterApplicationInput, DeregisterApplicationOutput } from "../models/models_0";
import { DeregisterApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
 *
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
 *
 * An internal error has occurred.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The request is not authorized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link SsmSapServiceException}
 *
 * Base exception class for all service exceptions from SsmSap service.
 *
 * @public
 */
export class DeregisterApplicationCommand extends command<DeregisterApplicationCommandInput, DeregisterApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterApplication",
  DeregisterApplication$
) {
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
