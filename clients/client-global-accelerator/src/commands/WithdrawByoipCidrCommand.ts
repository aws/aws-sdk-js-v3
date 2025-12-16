// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { WithdrawByoipCidrRequest, WithdrawByoipCidrResponse } from "../models/models_0";
import { WithdrawByoipCidr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link WithdrawByoipCidrCommand}.
 */
export interface WithdrawByoipCidrCommandInput extends WithdrawByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link WithdrawByoipCidrCommand}.
 */
export interface WithdrawByoipCidrCommandOutput extends WithdrawByoipCidrResponse, __MetadataBearer {}

/**
 * <p>Stops advertising an address range that is provisioned as an address pool.
 * 			You can perform this operation at most once every 10 seconds, even if you specify different address
 * 			ranges each time.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of
 * 			propagation delays.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 			IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, WithdrawByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, WithdrawByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // WithdrawByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // WithdrawByoipCidrResponse
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     State: "PENDING_PROVISIONING" || "READY" || "PENDING_ADVERTISING" || "ADVERTISING" || "PENDING_WITHDRAWING" || "PENDING_DEPROVISIONING" || "DEPROVISIONED" || "FAILED_PROVISION" || "FAILED_ADVERTISING" || "FAILED_WITHDRAW" || "FAILED_DEPROVISION",
 * //     Events: [ // ByoipCidrEvents
 * //       { // ByoipCidrEvent
 * //         Message: "STRING_VALUE",
 * //         Timestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param WithdrawByoipCidrCommandInput - {@link WithdrawByoipCidrCommandInput}
 * @returns {@link WithdrawByoipCidrCommandOutput}
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ByoipCidrNotFoundException} (client fault)
 *  <p>The CIDR that you specified was not found or is incorrect.</p>
 *
 * @throws {@link IncorrectCidrStateException} (client fault)
 *  <p>The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be
 * 		incorrect for this action.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class WithdrawByoipCidrCommand extends $Command
  .classBuilder<
    WithdrawByoipCidrCommandInput,
    WithdrawByoipCidrCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "WithdrawByoipCidr", {})
  .n("GlobalAcceleratorClient", "WithdrawByoipCidrCommand")
  .sc(WithdrawByoipCidr$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: WithdrawByoipCidrRequest;
      output: WithdrawByoipCidrResponse;
    };
    sdk: {
      input: WithdrawByoipCidrCommandInput;
      output: WithdrawByoipCidrCommandOutput;
    };
  };
}
