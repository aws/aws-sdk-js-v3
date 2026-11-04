// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResponse } from "../models/models_0";
import { DeprovisionByoipCidr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.
 *
 * Before you can release an address range, you must stop advertising it by using [WithdrawByoipCidr](https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html) and you must not have any accelerators that are using static IP addresses allocated from its address range.
 *
 * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
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
export class DeprovisionByoipCidrCommand extends command<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput>(
  _ep0,
  _mw0,
  "DeprovisionByoipCidr",
  DeprovisionByoipCidr$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionByoipCidrRequest;
      output: DeprovisionByoipCidrResponse;
    };
    sdk: {
      input: DeprovisionByoipCidrCommandInput;
      output: DeprovisionByoipCidrCommandOutput;
    };
  };
}
