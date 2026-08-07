// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamInternetRegistryAssociationCidrsRequest,
  GetIpamInternetRegistryAssociationCidrsResult,
} from "../models/models_6";
import { GetIpamInternetRegistryAssociationCidrs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamInternetRegistryAssociationCidrsCommand}.
 */
export interface GetIpamInternetRegistryAssociationCidrsCommandInput extends GetIpamInternetRegistryAssociationCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamInternetRegistryAssociationCidrsCommand}.
 */
export interface GetIpamInternetRegistryAssociationCidrsCommandOutput extends GetIpamInternetRegistryAssociationCidrsResult, __MetadataBearer {}

/**
 * <p>Retrieves IP address CIDRs registered with an internet registry for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamInternetRegistryAssociationCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamInternetRegistryAssociationCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamInternetRegistryAssociationCidrsRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new GetIpamInternetRegistryAssociationCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamInternetRegistryAssociationCidrsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamInternetRegistryAssociationCidrs: [ // IpamInternetRegistryAssociationCidrSet
 * //     { // IpamInternetRegistryAssociationCidr
 * //       Cidr: "STRING_VALUE",
 * //       LastObservedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIpamInternetRegistryAssociationCidrsCommandInput - {@link GetIpamInternetRegistryAssociationCidrsCommandInput}
 * @returns {@link GetIpamInternetRegistryAssociationCidrsCommandOutput}
 * @see {@link GetIpamInternetRegistryAssociationCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamInternetRegistryAssociationCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamInternetRegistryAssociationCidrsCommand extends command<GetIpamInternetRegistryAssociationCidrsCommandInput, GetIpamInternetRegistryAssociationCidrsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamInternetRegistryAssociationCidrs",
  GetIpamInternetRegistryAssociationCidrs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamInternetRegistryAssociationCidrsRequest;
      output: GetIpamInternetRegistryAssociationCidrsResult;
    };
    sdk: {
      input: GetIpamInternetRegistryAssociationCidrsCommandInput;
      output: GetIpamInternetRegistryAssociationCidrsCommandOutput;
    };
  };
}
