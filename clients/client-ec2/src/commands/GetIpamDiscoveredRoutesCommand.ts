// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIpamDiscoveredRoutesRequest, GetIpamDiscoveredRoutesResult } from "../models/models_6";
import { GetIpamDiscoveredRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredRoutesCommand}.
 */
export interface GetIpamDiscoveredRoutesCommandInput extends GetIpamDiscoveredRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredRoutesCommand}.
 */
export interface GetIpamDiscoveredRoutesCommandOutput extends GetIpamDiscoveredRoutesResult, __MetadataBearer {}

/**
 * <p>Retrieves Border Gateway Protocol (BGP) routes discovered by IPAM resource discovery for a specified Region. Use this operation to view the Bring Your Own IP (BYOIP) address ranges that are currently advertised through BGP. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredRoutesRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   ResourceRegion: "STRING_VALUE", // required
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
 * const command = new GetIpamDiscoveredRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredRoutesResult
 * //   IpamDiscoveredRoutes: [ // IpamDiscoveredRouteSet
 * //     { // IpamDiscoveredRoute
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       Cidr: "STRING_VALUE",
 * //       Asn: "STRING_VALUE",
 * //       State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-advertising" || "pending-deprovision" || "pending-provision" || "pending-withdrawal" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //       AdvertisementType: "regional" || "global",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       SampleTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredRoutesCommandInput - {@link GetIpamDiscoveredRoutesCommandInput}
 * @returns {@link GetIpamDiscoveredRoutesCommandOutput}
 * @see {@link GetIpamDiscoveredRoutesCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamDiscoveredRoutesCommand extends command<GetIpamDiscoveredRoutesCommandInput, GetIpamDiscoveredRoutesCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamDiscoveredRoutes",
  GetIpamDiscoveredRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamDiscoveredRoutesRequest;
      output: GetIpamDiscoveredRoutesResult;
    };
    sdk: {
      input: GetIpamDiscoveredRoutesCommandInput;
      output: GetIpamDiscoveredRoutesCommandOutput;
    };
  };
}
