// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse } from "../models/models_0";
import { DisassociateVPCFromHostedZone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateVPCFromHostedZoneCommand}.
 */
export interface DisassociateVPCFromHostedZoneCommandInput extends DisassociateVPCFromHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVPCFromHostedZoneCommand}.
 */
export interface DisassociateVPCFromHostedZoneCommandOutput extends DisassociateVPCFromHostedZoneResponse, __MetadataBearer {}

/**
 * Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following:
 *
 * - You can't disassociate the last Amazon VPC from a private hosted zone.
 * - You can't convert a private hosted zone into a public hosted zone.
 * - You can submit a `DisassociateVPCFromHostedZone` request using either the account that created the hosted zone or the account that created the Amazon VPC.
 * - Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account.
 *
 *   When you run [DisassociateVPCFromHostedZone](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html), if the hosted zone has a value for `OwningAccount`, you can use `DisassociateVPCFromHostedZone`. If the hosted zone has a value for `OwningService`, you can't use `DisassociateVPCFromHostedZone`.
 *
 * > **Note:**
 * >
 * > When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition.
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
 * import { Route53Client, DisassociateVPCFromHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisassociateVPCFromHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DisassociateVPCFromHostedZoneRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "cn-northwest-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1" || "ca-west-1" || "ap-southeast-5" || "mx-central-1" || "us-isof-south-1" || "us-isof-east-1" || "ap-southeast-7" || "ap-east-2" || "eu-isoe-west-1" || "ap-southeast-6" || "us-isob-west-1" || "eusc-de-east-1",
 *     VPCId: "STRING_VALUE",
 *   },
 *   Comment: "STRING_VALUE",
 * };
 * const command = new DisassociateVPCFromHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateVPCFromHostedZoneResponse
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
 * @param DisassociateVPCFromHostedZoneCommandInput - {@link DisassociateVPCFromHostedZoneCommandInput}
 * @returns {@link DisassociateVPCFromHostedZoneCommandOutput}
 * @see {@link DisassociateVPCFromHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DisassociateVPCFromHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link InvalidVPCId} (client fault)
 *
 * The VPC ID that you specified either isn't a valid ID or the current account is not authorized to access this VPC.
 *
 * @throws {@link LastVPCAssociation} (client fault)
 *
 * The VPC that you're trying to disassociate from the private hosted zone is the last VPC that is associated with the hosted zone. Amazon Route 53 doesn't support disassociating the last VPC from a hosted zone.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link VPCAssociationNotFound} (client fault)
 *
 * The specified VPC and hosted zone are not currently associated.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class DisassociateVPCFromHostedZoneCommand extends command<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateVPCFromHostedZone",
  DisassociateVPCFromHostedZone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateVPCFromHostedZoneRequest;
      output: DisassociateVPCFromHostedZoneResponse;
    };
    sdk: {
      input: DisassociateVPCFromHostedZoneCommandInput;
      output: DisassociateVPCFromHostedZoneCommandOutput;
    };
  };
}
