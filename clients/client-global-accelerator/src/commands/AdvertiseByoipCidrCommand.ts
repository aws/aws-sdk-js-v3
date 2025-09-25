// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResponse } from "../models/models_0";
import { AdvertiseByoipCidr } from "../schemas/schemas_3_Byoip";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandInput extends AdvertiseByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandOutput extends AdvertiseByoipCidrResponse, __MetadataBearer {}

/**
 * <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources
 * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
 * 			the specified addresses starts routing to Amazon Web Services because of propagation delays. </p>
 *          <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
 * 			WithdrawByoipCidr</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
 * 		    IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AdvertiseByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AdvertiseByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // AdvertiseByoipCidrResponse
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
 * @param AdvertiseByoipCidrCommandInput - {@link AdvertiseByoipCidrCommandInput}
 * @returns {@link AdvertiseByoipCidrCommandOutput}
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
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
export class AdvertiseByoipCidrCommand extends $Command
  .classBuilder<
    AdvertiseByoipCidrCommandInput,
    AdvertiseByoipCidrCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "AdvertiseByoipCidr", {})
  .n("GlobalAcceleratorClient", "AdvertiseByoipCidrCommand")
  .sc(AdvertiseByoipCidr)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdvertiseByoipCidrRequest;
      output: AdvertiseByoipCidrResponse;
    };
    sdk: {
      input: AdvertiseByoipCidrCommandInput;
      output: AdvertiseByoipCidrCommandOutput;
    };
  };
}
