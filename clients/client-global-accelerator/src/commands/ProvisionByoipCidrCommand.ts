// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ProvisionByoipCidrRequest, ProvisionByoipCidrResponse } from "../models/models_0";
import { ProvisionByoipCidr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ProvisionByoipCidrCommand}.
 */
export interface ProvisionByoipCidrCommandInput extends ProvisionByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link ProvisionByoipCidrCommand}.
 */
export interface ProvisionByoipCidrCommandOutput extends ProvisionByoipCidrResponse, __MetadataBearer {}

/**
 * Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using [AdvertiseByoipCidr](https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html).
 *
 * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *Global Accelerator Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ProvisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ProvisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ProvisionByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   CidrAuthorizationContext: { // CidrAuthorizationContext
 *     Message: "STRING_VALUE", // required
 *     Signature: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // ProvisionByoipCidrResponse
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
 * @param ProvisionByoipCidrCommandInput - {@link ProvisionByoipCidrCommandInput}
 * @returns {@link ProvisionByoipCidrCommandOutput}
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * Processing your request would cause you to exceed an Global Accelerator limit.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class ProvisionByoipCidrCommand extends command<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput>(
  _ep0,
  _mw0,
  "ProvisionByoipCidr",
  ProvisionByoipCidr$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProvisionByoipCidrRequest;
      output: ProvisionByoipCidrResponse;
    };
    sdk: {
      input: ProvisionByoipCidrCommandInput;
      output: ProvisionByoipCidrCommandOutput;
    };
  };
}
