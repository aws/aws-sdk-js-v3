// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostedZonesRequest, ListHostedZonesResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZones } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZonesCommand}.
 */
export interface ListHostedZonesCommandInput extends ListHostedZonesRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesCommand}.
 */
export interface ListHostedZonesCommandOutput extends ListHostedZonesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the public and private hosted zones that are associated with the
 * 			current Amazon Web Services account. The response includes a <code>HostedZones</code>
 * 			child element for each hosted zone.</p>
 *          <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of
 * 			hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of
 * 			up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   DelegationSetId: "STRING_VALUE",
 *   HostedZoneType: "PrivateHostedZone",
 * };
 * const command = new ListHostedZonesCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesResponse
 * //   HostedZones: [ // HostedZones // required
 * //     { // HostedZone
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Config: { // HostedZoneConfig
 * //         Comment: "STRING_VALUE",
 * //         PrivateZone: true || false,
 * //       },
 * //       ResourceRecordSetCount: Number("long"),
 * //       LinkedService: { // LinkedService
 * //         ServicePrincipal: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       Features: { // HostedZoneFeatures
 * //         AcceleratedRecoveryStatus: "ENABLING" || "ENABLE_FAILED" || "ENABLING_HOSTED_ZONE_LOCKED" || "ENABLED" || "DISABLING" || "DISABLE_FAILED" || "DISABLED" || "DISABLING_HOSTED_ZONE_LOCKED",
 * //         FailureReasons: { // HostedZoneFailureReasons
 * //           AcceleratedRecovery: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE", // required
 * //   IsTruncated: true || false, // required
 * //   NextMarker: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListHostedZonesCommandInput - {@link ListHostedZonesCommandInput}
 * @returns {@link ListHostedZonesCommandOutput}
 * @see {@link ListHostedZonesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListHostedZonesCommand extends $Command
  .classBuilder<
    ListHostedZonesCommandInput,
    ListHostedZonesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "ListHostedZones", {})
  .n("Route53Client", "ListHostedZonesCommand")
  .sc(ListHostedZones)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZonesRequest;
      output: ListHostedZonesResponse;
    };
    sdk: {
      input: ListHostedZonesCommandInput;
      output: ListHostedZonesCommandOutput;
    };
  };
}
