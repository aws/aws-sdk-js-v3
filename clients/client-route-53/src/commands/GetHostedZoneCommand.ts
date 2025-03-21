// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHostedZoneRequest, GetHostedZoneResponse } from "../models/models_0";
import { de_GetHostedZoneCommand, se_GetHostedZoneCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneCommand}.
 */
export interface GetHostedZoneCommandInput extends GetHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneCommand}.
 */
export interface GetHostedZoneCommandOutput extends GetHostedZoneResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified hosted zone including the four name servers
 * 			assigned to the hosted zone.</p>
 *          <p>
 *             <code></code> returns the VPCs associated with the specified hosted zone and does not reflect the VPC
 * 			associations by Route 53 Profiles. To get the associations to a Profile, call the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListProfileAssociations.html">ListProfileAssociations</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetHostedZoneRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneResponse
 * //   HostedZone: { // HostedZone
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     Config: { // HostedZoneConfig
 * //       Comment: "STRING_VALUE",
 * //       PrivateZone: true || false,
 * //     },
 * //     ResourceRecordSetCount: Number("long"),
 * //     LinkedService: { // LinkedService
 * //       ServicePrincipal: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   },
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   VPCs: [ // VPCs
 * //     { // VPC
 * //       VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7",
 * //       VPCId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetHostedZoneCommandInput - {@link GetHostedZoneCommandInput}
 * @returns {@link GetHostedZoneCommandOutput}
 * @see {@link GetHostedZoneCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
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
 * @public
 * @example To get information about a hosted zone
 * ```javascript
 * // The following example gets information about the Z3M3LMPEXAMPLE hosted zone.
 * const input = {
 *   "Id": "Z3M3LMPEXAMPLE"
 * };
 * const command = new GetHostedZoneCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DelegationSet": {
 *     "NameServers": [
 *       "ns-2048.awsdns-64.com",
 *       "ns-2049.awsdns-65.net",
 *       "ns-2050.awsdns-66.org",
 *       "ns-2051.awsdns-67.co.uk"
 *     ]
 *   },
 *   "HostedZone": {
 *     "CallerReference": "C741617D-04E4-F8DE-B9D7-0D150FC61C2E",
 *     "Config": {
 *       "PrivateZone": false
 *     },
 *     "Id": "/hostedzone/Z3M3LMPEXAMPLE",
 *     "Name": "myawsbucket.com.",
 *     "ResourceRecordSetCount": 8
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-a-hosted-zone-1481752361124
 * ```
 *
 */
export class GetHostedZoneCommand extends $Command
  .classBuilder<
    GetHostedZoneCommandInput,
    GetHostedZoneCommandOutput,
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
  .s("AWSDnsV20130401", "GetHostedZone", {})
  .n("Route53Client", "GetHostedZoneCommand")
  .f(void 0, void 0)
  .ser(se_GetHostedZoneCommand)
  .de(de_GetHostedZoneCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostedZoneRequest;
      output: GetHostedZoneResponse;
    };
    sdk: {
      input: GetHostedZoneCommandInput;
      output: GetHostedZoneCommandOutput;
    };
  };
}
