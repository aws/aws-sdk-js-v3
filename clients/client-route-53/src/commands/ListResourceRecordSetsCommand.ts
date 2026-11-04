// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceRecordSetsRequest, ListResourceRecordSetsResponse } from "../models/models_0";
import { ListResourceRecordSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceRecordSetsCommand}.
 */
export interface ListResourceRecordSetsCommandInput extends ListResourceRecordSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceRecordSetsCommand}.
 */
export interface ListResourceRecordSetsCommandOutput extends ListResourceRecordSetsResponse, __MetadataBearer {}

/**
 * Lists the resource record sets in a specified hosted zone.
 *
 * `ListResourceRecordSets` returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the `name` and `type` elements.
 *
 * **Sort order**
 *
 * `ListResourceRecordSets` sorts results first by DNS name with the labels reversed, for example:
 *
 * `com.example.www.`
 *
 * Note the trailing dot, which can change the sort order when the record name contains characters that appear before `.` (decimal 46) in the ASCII table. These characters include the following: `! " # $ % & ' ( ) * + , -`
 *
 * When multiple records have the same DNS name, `ListResourceRecordSets` sorts results by the record type.
 *
 * **Specifying where to start listing records**
 *
 * You can use the name and type elements to specify the resource record set that the list begins with:
 *
 * - **If you do not specify Name or Type**
 *
 *   The results begin with the first resource record set that the hosted zone contains.
 *
 * - **If you specify Name but not Type**
 *
 *   The results begin with the first resource record set in the list whose name is greater than or equal to `Name`.
 *
 * - **If you specify Type but not Name**
 *
 *   Amazon Route 53 returns the `InvalidInput` error.
 *
 * - **If you specify both Name and Type**
 *
 *   The results begin with the first resource record set in the list whose name is greater than or equal to `Name`, and whose type is greater than or equal to `Type`.
 *
 *   > **Note:** Type is only used to sort between records with the same record Name.
 *
 * **Resource record sets that are PENDING**
 *
 * This action returns the most current version of the records. This includes records that are `PENDING`, and that are not yet available on all Route 53 DNS servers.
 *
 * **Changing resource record sets**
 *
 * To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a `ChangeResourceRecordSets` request while you're paging through the results of a `ListResourceRecordSets` request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.
 *
 * **Displaying the next page of results**
 *
 * If a `ListResourceRecordSets` command returns more than one page of results, the value of `IsTruncated` is `true`. To display the next page of results, get the values of `NextRecordName`, `NextRecordType`, and `NextRecordIdentifier` (if any) from the response. Then submit another `ListResourceRecordSets` request, and specify those values for `StartRecordName`, `StartRecordType`, and `StartRecordIdentifier`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListResourceRecordSetsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListResourceRecordSetsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListResourceRecordSetsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   StartRecordName: "STRING_VALUE",
 *   StartRecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 *   StartRecordIdentifier: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListResourceRecordSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceRecordSetsResponse
 * //   ResourceRecordSets: [ // ResourceRecordSets // required
 * //     { // ResourceRecordSet
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //       SetIdentifier: "STRING_VALUE",
 * //       Weight: Number("long"),
 * //       Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-north-1" || "cn-northwest-1" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "ap-southeast-7" || "us-gov-east-1" || "us-gov-west-1" || "ap-east-2" || "ap-southeast-6" || "eusc-de-east-1",
 * //       GeoLocation: { // GeoLocation
 * //         ContinentCode: "STRING_VALUE",
 * //         CountryCode: "STRING_VALUE",
 * //         SubdivisionCode: "STRING_VALUE",
 * //       },
 * //       Failover: "PRIMARY" || "SECONDARY",
 * //       MultiValueAnswer: true || false,
 * //       TTL: Number("long"),
 * //       ResourceRecords: [ // ResourceRecords
 * //         { // ResourceRecord
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AliasTarget: { // AliasTarget
 * //         HostedZoneId: "STRING_VALUE", // required
 * //         DNSName: "STRING_VALUE", // required
 * //         EvaluateTargetHealth: true || false, // required
 * //       },
 * //       HealthCheckId: "STRING_VALUE",
 * //       TrafficPolicyInstanceId: "STRING_VALUE",
 * //       CidrRoutingConfig: { // CidrRoutingConfig
 * //         CollectionId: "STRING_VALUE", // required
 * //         LocationName: "STRING_VALUE", // required
 * //       },
 * //       GeoProximityLocation: { // GeoProximityLocation
 * //         AWSRegion: "STRING_VALUE",
 * //         LocalZoneGroup: "STRING_VALUE",
 * //         Coordinates: { // Coordinates
 * //           Latitude: "STRING_VALUE", // required
 * //           Longitude: "STRING_VALUE", // required
 * //         },
 * //         Bias: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   NextRecordName: "STRING_VALUE",
 * //   NextRecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 * //   NextRecordIdentifier: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListResourceRecordSetsCommandInput - {@link ListResourceRecordSetsCommandInput}
 * @returns {@link ListResourceRecordSetsCommandOutput}
 * @see {@link ListResourceRecordSetsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRecordSetsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
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
export class ListResourceRecordSetsCommand extends command<ListResourceRecordSetsCommandInput, ListResourceRecordSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceRecordSets",
  ListResourceRecordSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceRecordSetsRequest;
      output: ListResourceRecordSetsResponse;
    };
    sdk: {
      input: ListResourceRecordSetsCommandInput;
      output: ListResourceRecordSetsCommandOutput;
    };
  };
}
