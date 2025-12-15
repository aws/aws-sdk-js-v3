// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDNSSECRequest, GetDNSSECResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetDNSSEC$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDNSSECCommand}.
 */
export interface GetDNSSECCommandInput extends GetDNSSECRequest {}
/**
 * @public
 *
 * The output of {@link GetDNSSECCommand}.
 */
export interface GetDNSSECCommandOutput extends GetDNSSECResponse, __MetadataBearer {}

/**
 * <p>Returns information about DNSSEC for a specific hosted zone, including the key-signing
 * 			keys (KSKs) in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetDNSSECRequest
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new GetDNSSECCommand(input);
 * const response = await client.send(command);
 * // { // GetDNSSECResponse
 * //   Status: { // DNSSECStatus
 * //     ServeSignature: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * //   KeySigningKeys: [ // KeySigningKeys // required
 * //     { // KeySigningKey
 * //       Name: "STRING_VALUE",
 * //       KmsArn: "STRING_VALUE",
 * //       Flag: Number("int"),
 * //       SigningAlgorithmMnemonic: "STRING_VALUE",
 * //       SigningAlgorithmType: Number("int"),
 * //       DigestAlgorithmMnemonic: "STRING_VALUE",
 * //       DigestAlgorithmType: Number("int"),
 * //       KeyTag: Number("int"),
 * //       DigestValue: "STRING_VALUE",
 * //       PublicKey: "STRING_VALUE",
 * //       DSRecord: "STRING_VALUE",
 * //       DNSKEYRecord: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDNSSECCommandInput - {@link GetDNSSECCommandInput}
 * @returns {@link GetDNSSECCommandOutput}
 * @see {@link GetDNSSECCommandInput} for command's `input` shape.
 * @see {@link GetDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
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
export class GetDNSSECCommand extends $Command
  .classBuilder<
    GetDNSSECCommandInput,
    GetDNSSECCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "GetDNSSEC", {})
  .n("Route53Client", "GetDNSSECCommand")
  .sc(GetDNSSEC$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDNSSECRequest;
      output: GetDNSSECResponse;
    };
    sdk: {
      input: GetDNSSECCommandInput;
      output: GetDNSSECCommandOutput;
    };
  };
}
