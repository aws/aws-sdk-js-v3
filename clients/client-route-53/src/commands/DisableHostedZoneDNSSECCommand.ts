// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse } from "../models/models_0";
import { DisableHostedZoneDNSSEC$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableHostedZoneDNSSECCommand}.
 */
export interface DisableHostedZoneDNSSECCommandInput extends DisableHostedZoneDNSSECRequest {}
/**
 * @public
 *
 * The output of {@link DisableHostedZoneDNSSECCommand}.
 */
export interface DisableHostedZoneDNSSECCommandOutput extends DisableHostedZoneDNSSECResponse, __MetadataBearer {}

/**
 * Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DisableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DisableHostedZoneDNSSECRequest
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new DisableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * // { // DisableHostedZoneDNSSECResponse
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
 * @param DisableHostedZoneDNSSECCommandInput - {@link DisableHostedZoneDNSSECCommandInput}
 * @returns {@link DisableHostedZoneDNSSECCommandOutput}
 * @see {@link DisableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link DisableHostedZoneDNSSECCommandOutput} for command's `response` shape.
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
 * @throws {@link KeySigningKeyInParentDSRecord} (client fault)
 *
 * The key-signing key (KSK) is specified in a parent DS record.
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
export class DisableHostedZoneDNSSECCommand extends command<DisableHostedZoneDNSSECCommandInput, DisableHostedZoneDNSSECCommandOutput>(
  _ep0,
  _mw0,
  "DisableHostedZoneDNSSEC",
  DisableHostedZoneDNSSEC$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableHostedZoneDNSSECRequest;
      output: DisableHostedZoneDNSSECResponse;
    };
    sdk: {
      input: DisableHostedZoneDNSSECCommandInput;
      output: DisableHostedZoneDNSSECCommandOutput;
    };
  };
}
