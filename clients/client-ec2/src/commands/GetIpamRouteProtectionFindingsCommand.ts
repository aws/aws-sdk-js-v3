// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIpamRouteProtectionFindingsRequest, GetIpamRouteProtectionFindingsResult } from "../models/models_6";
import { GetIpamRouteProtectionFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamRouteProtectionFindingsCommand}.
 */
export interface GetIpamRouteProtectionFindingsCommandInput extends GetIpamRouteProtectionFindingsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamRouteProtectionFindingsCommand}.
 */
export interface GetIpamRouteProtectionFindingsCommandOutput extends GetIpamRouteProtectionFindingsResult, __MetadataBearer {}

/**
 * <p>Retrieves route protection findings for an IPAM. Route protection findings show the Resource Public Key Infrastructure (RPKI) validation status of your Bring Your Own IP (BYOIP) routes. Findings identify routes that have valid, invalid, or unknown validation states. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamRouteProtectionFindingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamRouteProtectionFindingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamRouteProtectionFindingsRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamRouteProtectionFindingsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamRouteProtectionFindingsResult
 * //   IpamId: "STRING_VALUE",
 * //   RouteProtectionFindings: [ // IpamRouteProtectionFindingSet
 * //     { // IpamRouteProtectionFinding
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-advertising" || "pending-deprovision" || "pending-provision" || "pending-withdrawal" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //       AdvertisementType: "regional" || "global",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       Asn: "STRING_VALUE",
 * //       RpkiStatus: "valid" || "invalid" || "unknown",
 * //       RpkiStrength: "strict" || "permissive",
 * //       Roas: [ // IpamRouteOriginAuthorizationSet
 * //         { // IpamRouteOriginAuthorization
 * //           Asn: "STRING_VALUE",
 * //           Prefix: "STRING_VALUE",
 * //           MaxLength: Number("int"),
 * //           Match: true || false,
 * //           Expiration: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       RouteOverlaps: [ // IpamRouteOverlapSet
 * //         { // IpamRouteOverlap
 * //           Prefix: "STRING_VALUE",
 * //           Asn: "STRING_VALUE",
 * //           DetectedAt: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       SampleTime: new Date("TIMESTAMP"),
 * //       RoaSampleTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamRouteProtectionFindingsCommandInput - {@link GetIpamRouteProtectionFindingsCommandInput}
 * @returns {@link GetIpamRouteProtectionFindingsCommandOutput}
 * @see {@link GetIpamRouteProtectionFindingsCommandInput} for command's `input` shape.
 * @see {@link GetIpamRouteProtectionFindingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamRouteProtectionFindingsCommand extends command<GetIpamRouteProtectionFindingsCommandInput, GetIpamRouteProtectionFindingsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamRouteProtectionFindings",
  GetIpamRouteProtectionFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamRouteProtectionFindingsRequest;
      output: GetIpamRouteProtectionFindingsResult;
    };
    sdk: {
      input: GetIpamRouteProtectionFindingsCommandInput;
      output: GetIpamRouteProtectionFindingsCommandOutput;
    };
  };
}
