// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamInternetRegistryAssociationAsnsRequest,
  GetIpamInternetRegistryAssociationAsnsResult,
} from "../models/models_6";
import { GetIpamInternetRegistryAssociationAsns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamInternetRegistryAssociationAsnsCommand}.
 */
export interface GetIpamInternetRegistryAssociationAsnsCommandInput extends GetIpamInternetRegistryAssociationAsnsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamInternetRegistryAssociationAsnsCommand}.
 */
export interface GetIpamInternetRegistryAssociationAsnsCommandOutput extends GetIpamInternetRegistryAssociationAsnsResult, __MetadataBearer {}

/**
 * <p>Retrieves Autonomous System Numbers (ASNs) registered with an internet registry for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamInternetRegistryAssociationAsnsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamInternetRegistryAssociationAsnsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamInternetRegistryAssociationAsnsRequest
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
 * const command = new GetIpamInternetRegistryAssociationAsnsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamInternetRegistryAssociationAsnsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamInternetRegistryAssociationAsns: [ // IpamInternetRegistryAssociationAsnSet
 * //     { // IpamInternetRegistryAssociationAsn
 * //       Asn: "STRING_VALUE",
 * //       LastObservedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIpamInternetRegistryAssociationAsnsCommandInput - {@link GetIpamInternetRegistryAssociationAsnsCommandInput}
 * @returns {@link GetIpamInternetRegistryAssociationAsnsCommandOutput}
 * @see {@link GetIpamInternetRegistryAssociationAsnsCommandInput} for command's `input` shape.
 * @see {@link GetIpamInternetRegistryAssociationAsnsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamInternetRegistryAssociationAsnsCommand extends command<GetIpamInternetRegistryAssociationAsnsCommandInput, GetIpamInternetRegistryAssociationAsnsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamInternetRegistryAssociationAsns",
  GetIpamInternetRegistryAssociationAsns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamInternetRegistryAssociationAsnsRequest;
      output: GetIpamInternetRegistryAssociationAsnsResult;
    };
    sdk: {
      input: GetIpamInternetRegistryAssociationAsnsCommandInput;
      output: GetIpamInternetRegistryAssociationAsnsCommandOutput;
    };
  };
}
