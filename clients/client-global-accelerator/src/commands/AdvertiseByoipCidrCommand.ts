// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResponse } from "../models/models_0";
import { AdvertiseByoipCidr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays.
 *
 * To stop advertising the BYOIP address range, use [WithdrawByoipCidr](https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html).
 *
 * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
 *
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
 *
 * You don't have access permission.
 *
 * @throws {@link ByoipCidrNotFoundException} (client fault)
 *
 * The CIDR that you specified was not found or is incorrect.
 *
 * @throws {@link IncorrectCidrStateException} (client fault)
 *
 * The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be incorrect for this action.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class AdvertiseByoipCidrCommand extends command<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput>(
  _ep0,
  _mw0,
  "AdvertiseByoipCidr",
  AdvertiseByoipCidr$
) {
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
