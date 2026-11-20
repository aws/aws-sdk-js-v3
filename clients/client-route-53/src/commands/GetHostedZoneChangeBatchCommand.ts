// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHostedZoneChangeBatchRequest, GetHostedZoneChangeBatchResponse } from "../models/models_0";
import { GetHostedZoneChangeBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHostedZoneChangeBatchCommand}.
 */
export interface GetHostedZoneChangeBatchCommandInput extends GetHostedZoneChangeBatchRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneChangeBatchCommand}.
 */
export interface GetHostedZoneChangeBatchCommandOutput extends GetHostedZoneChangeBatchResponse, __MetadataBearer {}

/**
 * <p>Returns one change batch from the change history of a hosted zone, including every change in the batch. Each resource record set is in the same form that <code>ListResourceRecordSets</code> returns. For example, the name is in lowercase and ends with a dot. For an <code>UPSERT</code> or a <code>DELETE</code>, the response doesn't contain the values that the resource record set had before the change.</p>
 *          <p>If the change batch isn't in the hosted zone's retained change history, for example because it's in another hosted zone, it expired, or it's from before <code>RetentionStartsAt</code>, Route 53 returns a <code>NoSuchChange</code> error. If Change History isn't turned on for the hosted zone, Route 53 returns a <code>FeatureNotEnabled</code> error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneChangeBatchCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneChangeBatchCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetHostedZoneChangeBatchRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   ChangeId: "STRING_VALUE", // required
 * };
 * const command = new GetHostedZoneChangeBatchCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneChangeBatchResponse
 * //   ChangeBatchSummary: { // ChangeBatchSummary
 * //     ChangeId: "STRING_VALUE", // required
 * //     Operation: "CreateHostedZone" || "DeleteHostedZone" || "ChangeResourceRecordSets", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     SubmittedBy: "STRING_VALUE",
 * //     RequestId: "STRING_VALUE",
 * //     Comment: "STRING_VALUE",
 * //     ChangeCount: Number("long"), // required
 * //   },
 * //   ChangeBatch: { // ChangeBatch
 * //     Comment: "STRING_VALUE",
 * //     Changes: [ // Changes // required
 * //       { // Change
 * //         Action: "CREATE" || "DELETE" || "UPSERT", // required
 * //         ResourceRecordSet: { // ResourceRecordSet
 * //           Name: "STRING_VALUE", // required
 * //           Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //           SetIdentifier: "STRING_VALUE",
 * //           Weight: Number("long"),
 * //           Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-north-1" || "cn-northwest-1" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "ap-southeast-7" || "us-gov-east-1" || "us-gov-west-1" || "ap-east-2" || "ap-southeast-6" || "eusc-de-east-1",
 * //           GeoLocation: { // GeoLocation
 * //             ContinentCode: "STRING_VALUE",
 * //             CountryCode: "STRING_VALUE",
 * //             SubdivisionCode: "STRING_VALUE",
 * //           },
 * //           Failover: "PRIMARY" || "SECONDARY",
 * //           MultiValueAnswer: true || false,
 * //           TTL: Number("long"),
 * //           ResourceRecords: [ // ResourceRecords
 * //             { // ResourceRecord
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           AliasTarget: { // AliasTarget
 * //             HostedZoneId: "STRING_VALUE", // required
 * //             DNSName: "STRING_VALUE", // required
 * //             EvaluateTargetHealth: true || false, // required
 * //           },
 * //           HealthCheckId: "STRING_VALUE",
 * //           TrafficPolicyInstanceId: "STRING_VALUE",
 * //           CidrRoutingConfig: { // CidrRoutingConfig
 * //             CollectionId: "STRING_VALUE", // required
 * //             LocationName: "STRING_VALUE", // required
 * //           },
 * //           GeoProximityLocation: { // GeoProximityLocation
 * //             AWSRegion: "STRING_VALUE",
 * //             LocalZoneGroup: "STRING_VALUE",
 * //             Coordinates: { // Coordinates
 * //               Latitude: "STRING_VALUE", // required
 * //               Longitude: "STRING_VALUE", // required
 * //             },
 * //             Bias: Number("int"),
 * //           },
 * //           AZAffinity: { // AZAffinity
 * //             LocationType: "AvailabilityZone" || "AvailabilityZoneGroup" || "Region" || "Partition" || "Global",
 * //             LocationId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHostedZoneChangeBatchCommandInput - {@link GetHostedZoneChangeBatchCommandInput}
 * @returns {@link GetHostedZoneChangeBatchCommandOutput}
 * @see {@link GetHostedZoneChangeBatchCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneChangeBatchCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link FeatureNotEnabled} (client fault)
 *  <p>This error occurs when a feature that the operation requires isn't turned on for the hosted zone. For example, the tier of the hosted zone doesn't include Change History. To resolve this error, turn on the feature, or move the hosted zone to a tier that includes it.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchChange} (client fault)
 *  <p>A change with the specified change ID does not exist.</p>
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
export class GetHostedZoneChangeBatchCommand extends command<GetHostedZoneChangeBatchCommandInput, GetHostedZoneChangeBatchCommandOutput>(
  _ep0,
  _mw0,
  "GetHostedZoneChangeBatch",
  GetHostedZoneChangeBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHostedZoneChangeBatchRequest;
      output: GetHostedZoneChangeBatchResponse;
    };
    sdk: {
      input: GetHostedZoneChangeBatchCommandInput;
      output: GetHostedZoneChangeBatchCommandOutput;
    };
  };
}
