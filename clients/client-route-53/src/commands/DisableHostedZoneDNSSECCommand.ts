// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableHostedZoneDNSSECRequest, DisableHostedZoneDNSSECResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DisableHostedZoneDNSSEC$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any
 * 			key-signing keys (KSKs) that are active in the hosted zone.</p>
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
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link DNSSECNotFound} (client fault)
 *  <p>The hosted zone doesn't have any DNSSEC resources.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *  <p>The key-signing key (KSK) status isn't valid or another KSK has the status
 * 				<code>INTERNAL_FAILURE</code>.</p>
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *  <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC
 * 			signing.</p>
 *
 * @throws {@link KeySigningKeyInParentDSRecord} (client fault)
 *  <p>The key-signing key (KSK) is specified in a parent DS record.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DisableHostedZoneDNSSECCommand extends $Command
  .classBuilder<
    DisableHostedZoneDNSSECCommandInput,
    DisableHostedZoneDNSSECCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DisableHostedZoneDNSSEC", {})
  .n("Route53Client", "DisableHostedZoneDNSSECCommand")
  .sc(DisableHostedZoneDNSSEC$)
  .build() {
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
