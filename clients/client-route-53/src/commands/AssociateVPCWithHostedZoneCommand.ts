// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateVPCWithHostedZoneRequest, AssociateVPCWithHostedZoneResponse } from "../models/models_0";
import { AssociateVPCWithHostedZone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateVPCWithHostedZoneCommand}.
 */
export interface AssociateVPCWithHostedZoneCommandInput extends AssociateVPCWithHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link AssociateVPCWithHostedZoneCommand}.
 */
export interface AssociateVPCWithHostedZoneCommandOutput extends AssociateVPCWithHostedZoneResponse, __MetadataBearer {}

/**
 * Associates an Amazon VPC with a private hosted zone.
 *
 * > **Important:** To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone.
 *
 * > **Note:** If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a `CreateVPCAssociationAuthorization` request. Then the account that created the VPC must submit an `AssociateVPCWithHostedZone` request.
 *
 * > **Note:**
 * >
 * > When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
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
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // AssociateVPCWithHostedZoneRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1" || "eusc-de-east-1",
 *     VPCId: "STRING_VALUE",
 *   },
 *   Comment: "STRING_VALUE",
 * };
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // AssociateVPCWithHostedZoneResponse
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
 * @param AssociateVPCWithHostedZoneCommandInput - {@link AssociateVPCWithHostedZoneCommandInput}
 * @returns {@link AssociateVPCWithHostedZoneCommandOutput}
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidVPCId} (client fault)
 *
 * The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.
 *
 * @throws {@link LimitsExceeded} (client fault)
 *
 * This operation can't be completed because the current account has reached the limit on the resource you are trying to create. To request a higher limit, [create a case](http://aws.amazon.com/route53-request) with the Amazon Web Services Support Center.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Associating the specified VPC with the specified hosted zone has not been authorized.
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *
 * If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an `HTTP 400 error` (`Bad request`). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
 *
 * @throws {@link PublicZoneVPCAssociation} (client fault)
 *
 * You're trying to associate a VPC with a public hosted zone. Amazon Route 53 doesn't support associating a VPC with a public hosted zone.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @example To associate a VPC with a hosted zone
 * ```javascript
 * // The following example associates the VPC with ID vpc-1a2b3c4d with the hosted zone with ID Z3M3LMPEXAMPLE.
 * const input = {
 *   Comment: "",
 *   HostedZoneId: "Z3M3LMPEXAMPLE",
 *   VPC: {
 *     VPCId: "vpc-1a2b3c4d",
 *     VPCRegion: "us-east-2"
 *   }
 * };
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChangeInfo: {
 *     Comment: "",
 *     Id: "/change/C3HC6WDB2UANE2",
 *     Status: "INSYNC",
 *     SubmittedAt: "2017-01-31T01:36:41.958Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateVPCWithHostedZoneCommand extends command<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput>(
  _ep0,
  _mw0,
  "AssociateVPCWithHostedZone",
  AssociateVPCWithHostedZone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateVPCWithHostedZoneRequest;
      output: AssociateVPCWithHostedZoneResponse;
    };
    sdk: {
      input: AssociateVPCWithHostedZoneCommandInput;
      output: AssociateVPCWithHostedZoneCommandOutput;
    };
  };
}
