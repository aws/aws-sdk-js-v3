// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import { EnableHostedZoneDNSSEC$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableHostedZoneDNSSECCommand}.
 */
export interface EnableHostedZoneDNSSECCommandInput extends EnableHostedZoneDNSSECRequest {}
/**
 * @public
 *
 * The output of {@link EnableHostedZoneDNSSECCommand}.
 */
export interface EnableHostedZoneDNSSECCommandOutput extends EnableHostedZoneDNSSECResponse, __MetadataBearer {}

/**
 * Enables DNSSEC signing in a specific hosted zone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, EnableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, EnableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // EnableHostedZoneDNSSECRequest
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new EnableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * // { // EnableHostedZoneDNSSECResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableHostedZoneDNSSECCommandInput - {@link EnableHostedZoneDNSSECCommandInput}
 * @returns {@link EnableHostedZoneDNSSECCommandOutput}
 * @see {@link EnableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link EnableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *
 * Another user submitted a request to create, update, or delete the object at the same time that you did. Retry the request.
 *
 * @throws {@link DNSSECNotFound} (client fault)
 *
 * The hosted zone doesn't have any DNSSEC resources.
 *
 * @throws {@link HostedZonePartiallyDelegated} (client fault)
 *
 * The hosted zone nameservers don't match the parent nameservers. The hosted zone and parent must have the same nameservers.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * Parameter name is not valid.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *
 * The key-signing key (KSK) status isn't valid or another KSK has the status `INTERNAL_FAILURE`.
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *
 * The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC signing.
 *
 * @throws {@link KeySigningKeyWithActiveStatusNotFound} (client fault)
 *
 * A key-signing key (KSK) with `ACTIVE` status wasn't found.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class EnableHostedZoneDNSSECCommand extends command<EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput>(
  _ep0,
  _mw0,
  "EnableHostedZoneDNSSEC",
  EnableHostedZoneDNSSEC$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableHostedZoneDNSSECRequest;
      output: EnableHostedZoneDNSSECResponse;
    };
    sdk: {
      input: EnableHostedZoneDNSSECCommandInput;
      output: EnableHostedZoneDNSSECCommandOutput;
    };
  };
}
