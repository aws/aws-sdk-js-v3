// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResponse } from "../models/models_0";
import { de_DeprovisionByoipCidrCommand, se_DeprovisionByoipCidrCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResponse, __MetadataBearer {}

/**
 * <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources
 * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p>
 *          <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
 * 			any accelerators that are using static IP addresses allocated from its address range.
 * 		</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
 * 			your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeprovisionByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionByoipCidrResponse
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
 * @param DeprovisionByoipCidrCommandInput - {@link DeprovisionByoipCidrCommandInput}
 * @returns {@link DeprovisionByoipCidrCommandOutput}
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeprovisionByoipCidrCommand extends $Command
  .classBuilder<
    DeprovisionByoipCidrCommandInput,
    DeprovisionByoipCidrCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "DeprovisionByoipCidr", {})
  .n("GlobalAcceleratorClient", "DeprovisionByoipCidrCommand")
  .f(void 0, void 0)
  .ser(se_DeprovisionByoipCidrCommand)
  .de(de_DeprovisionByoipCidrCommand)
  .build() {}
