// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import { de_EnableHostedZoneDNSSECCommand, se_EnableHostedZoneDNSSECCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Enables DNSSEC signing in a specific hosted zone.</p>
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
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link DNSSECNotFound} (client fault)
 *  <p>The hosted zone doesn't have any DNSSEC resources.</p>
 *
 * @throws {@link HostedZonePartiallyDelegated} (client fault)
 *  <p>The hosted zone nameservers don't match the parent nameservers. The hosted zone and
 * 			parent must have the same nameservers.</p>
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
 * @throws {@link KeySigningKeyWithActiveStatusNotFound} (client fault)
 *  <p>A key-signing key (KSK) with <code>ACTIVE</code> status wasn't found.</p>
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
export class EnableHostedZoneDNSSECCommand extends $Command
  .classBuilder<
    EnableHostedZoneDNSSECCommandInput,
    EnableHostedZoneDNSSECCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "EnableHostedZoneDNSSEC", {})
  .n("Route53Client", "EnableHostedZoneDNSSECCommand")
  .f(void 0, void 0)
  .ser(se_EnableHostedZoneDNSSECCommand)
  .de(de_EnableHostedZoneDNSSECCommand)
  .build() {
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
