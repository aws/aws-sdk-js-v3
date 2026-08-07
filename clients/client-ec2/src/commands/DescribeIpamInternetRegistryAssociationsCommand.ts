// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeIpamInternetRegistryAssociationsRequest,
  DescribeIpamInternetRegistryAssociationsResult,
} from "../models/models_4";
import { DescribeIpamInternetRegistryAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIpamInternetRegistryAssociationsCommand}.
 */
export interface DescribeIpamInternetRegistryAssociationsCommandInput extends DescribeIpamInternetRegistryAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamInternetRegistryAssociationsCommand}.
 */
export interface DescribeIpamInternetRegistryAssociationsCommandOutput extends DescribeIpamInternetRegistryAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes one or more IPAM internet registry associations. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamInternetRegistryAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamInternetRegistryAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamInternetRegistryAssociationsRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIpamInternetRegistryAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamInternetRegistryAssociationsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamInternetRegistryAssociations: [ // IpamInternetRegistryAssociationSet
 * //     { // IpamInternetRegistryAssociation
 * //       OwnerId: "STRING_VALUE",
 * //       IpamInternetRegistryAssociationId: "STRING_VALUE",
 * //       IpamInternetRegistryAssociationArn: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       Rir: "ripe" || "apnic" || "arin" || "lacnic",
 * //       OrganizationHandle: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       State: "pending-enable" || "create-in-progress" || "create-failed" || "enable-in-progress" || "enable-complete" || "enable-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //       ChildRequestXml: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamInternetRegistryAssociationsCommandInput - {@link DescribeIpamInternetRegistryAssociationsCommandInput}
 * @returns {@link DescribeIpamInternetRegistryAssociationsCommandOutput}
 * @see {@link DescribeIpamInternetRegistryAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamInternetRegistryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamInternetRegistryAssociationsCommand extends command<DescribeIpamInternetRegistryAssociationsCommandInput, DescribeIpamInternetRegistryAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIpamInternetRegistryAssociations",
  DescribeIpamInternetRegistryAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamInternetRegistryAssociationsRequest;
      output: DescribeIpamInternetRegistryAssociationsResult;
    };
    sdk: {
      input: DescribeIpamInternetRegistryAssociationsCommandInput;
      output: DescribeIpamInternetRegistryAssociationsCommandOutput;
    };
  };
}
