// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHostedZoneRequest, CreateHostedZoneResponse } from "../models/models_0";
import { CreateHostedZone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHostedZoneCommand}.
 */
export interface CreateHostedZoneCommandInput extends CreateHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link CreateHostedZoneCommand}.
 */
export interface CreateHostedZoneCommandOutput extends CreateHostedZoneResponse, __MetadataBearer {}

/**
 * Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).
 *
 * > **Important:** You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.
 *
 * For more information about charges for hosted zones, see [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
 *
 * Note the following:
 *
 * - You can't create a hosted zone for a top-level domain (TLD) such as .com.
 * - For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see [NS and SOA Records that Route 53 Creates for a Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html) in the *Amazon Route 53 Developer Guide*.
 *
 *   If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the `DelegationSetId` element.
 * - If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see [Migrating DNS Service for an Existing Domain to Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html) in the *Amazon Route 53 Developer Guide*.
 *
 * When you submit a `CreateHostedZone` request, the initial status of the hosted zone is `PENDING`. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to `INSYNC`.
 *
 * The `CreateHostedZone` request requires the caller to have an `ec2:DescribeVpcs` permission.
 *
 * > **Note:**
 * >
 * > When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
 * >
 * > The following are the supported partitions:
 * >
 * > - `aws` - Amazon Web Services Regions
 * > - `aws-cn` - China Regions
 * > - `aws-us-gov` - Amazon Web Services GovCloud (US) Region
 * >
 * > For more information, see [Access Management](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateHostedZoneRequest
 *   Name: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1" || "eusc-de-east-1",
 *     VPCId: "STRING_VALUE",
 *   },
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneConfig: { // HostedZoneConfig
 *     Comment: "STRING_VALUE",
 *     PrivateZone: true || false,
 *   },
 *   DelegationSetId: "STRING_VALUE",
 * };
 * const command = new CreateHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // CreateHostedZoneResponse
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
 * //     Features: { // HostedZoneFeatures
 * //       AcceleratedRecoveryStatus: "ENABLING" || "ENABLE_FAILED" || "ENABLING_HOSTED_ZONE_LOCKED" || "ENABLED" || "DISABLING" || "DISABLE_FAILED" || "DISABLED" || "DISABLING_HOSTED_ZONE_LOCKED",
 * //       FailureReasons: { // HostedZoneFailureReasons
 * //         AcceleratedRecovery: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   VPC: { // VPC
 * //     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1" || "eusc-de-east-1",
 * //     VPCId: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHostedZoneCommandInput - {@link CreateHostedZoneCommandInput}
 * @returns {@link CreateHostedZoneCommandOutput}
 * @see {@link CreateHostedZoneCommandInput} for command's `input` shape.
 * @see {@link CreateHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConflictingDomainExists} (client fault)
 *
 * The cause of this error depends on the operation that you're performing:
 *
 * - **Create a public hosted zone:** Two hosted zones that have the same name or that have a parent/child relationship (example.com and test.example.com) can't have any common name servers. You tried to create a hosted zone that has the same name as an existing hosted zone or that's the parent or child of an existing hosted zone, and you specified a delegation set that shares one or more name servers with the existing hosted zone. For more information, see [CreateReusableDelegationSet](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html).
 * - **Create a private hosted zone:** A hosted zone with the specified name already exists and is already associated with the Amazon VPC that you specified.
 * - **Associate VPCs with a private hosted zone:** The VPC that you specified is already associated with another hosted zone that has the same name.
 *
 * @throws {@link DelegationSetNotAvailable} (client fault)
 *
 * You can create a hosted zone that has the same name as an existing hosted zone (example.com is common), but there is a limit to the number of hosted zones that have the same name. If you get this error, Amazon Route 53 has reached that limit. If you own the domain name and Route 53 generates this error, contact Customer Support.
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *
 * A reusable delegation set with the specified ID does not exist.
 *
 * @throws {@link HostedZoneAlreadyExists} (client fault)
 *
 * The hosted zone you're trying to create already exists. Amazon Route 53 returns this error when a hosted zone has already been created with the specified `CallerReference`.
 *
 * @throws {@link InvalidDomainName} (client fault)
 *
 * The specified domain name is not valid.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidVPCId} (client fault)
 *
 * The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *
 * A reusable delegation set with the specified ID does not exist.
 *
 * @throws {@link TooManyHostedZones} (client fault)
 *
 * This operation can't be completed either because the current account has reached the limit on the number of hosted zones or because you've reached the limit on the number of hosted zones that can be associated with a reusable delegation set.
 *
 * For information about default limits, see [Limits](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html) in the *Amazon Route 53 Developer Guide*.
 *
 * To get the current limit on hosted zones that can be created by an account, see [GetAccountLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html).
 *
 * To get the current limit on hosted zones that can be associated with a reusable delegation set, see [GetReusableDelegationSetLimit](https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html).
 *
 * To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class CreateHostedZoneCommand extends command<CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput>(
  _ep0,
  _mw0,
  "CreateHostedZone",
  CreateHostedZone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHostedZoneRequest;
      output: CreateHostedZoneResponse;
    };
    sdk: {
      input: CreateHostedZoneCommandInput;
      output: CreateHostedZoneCommandOutput;
    };
  };
}
