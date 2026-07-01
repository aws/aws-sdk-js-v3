// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIpamPoolAllocationsRequest, DescribeIpamPoolAllocationsResult } from "../models/models_4";
import { DescribeIpamPoolAllocations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIpamPoolAllocationsCommand}.
 */
export interface DescribeIpamPoolAllocationsCommandInput extends DescribeIpamPoolAllocationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPoolAllocationsCommand}.
 */
export interface DescribeIpamPoolAllocationsCommandOutput extends DescribeIpamPoolAllocationsResult, __MetadataBearer {}

/**
 * <p>Describes IPAM pool allocations. You can describe all allocations owned by you across all pools, or you can describe specific allocations by ID.</p>
 *          <p>If you specify <code>IpamPoolAllocationIds</code>, the results include only the specified allocations. If you do not specify <code>IpamPoolAllocationIds</code>, the results include all allocations owned by you. You can use <code>Filters</code> to narrow the results.</p>
 *          <note>
 *             <p>This action returns only allocations directly owned by you. To view all allocations in a pool you own or that has been shared with you, including allocations owned by other accounts, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetIpamPoolAllocations.html">GetIpamPoolAllocations</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPoolAllocationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPoolAllocationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPoolAllocationsRequest
 *   DryRun: true || false,
 *   IpamPoolAllocationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeIpamPoolAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPoolAllocationsResult
 * //   IpamPoolAllocations: [ // IpamPoolAllocationSet
 * //     { // IpamPoolAllocation
 * //       Cidr: "STRING_VALUE",
 * //       IpamPoolAllocationId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom" || "subnet" || "eip" || "anycast-ip-list",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIpamPoolAllocationsCommandInput - {@link DescribeIpamPoolAllocationsCommandInput}
 * @returns {@link DescribeIpamPoolAllocationsCommandOutput}
 * @see {@link DescribeIpamPoolAllocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPoolAllocationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamPoolAllocationsCommand extends command<DescribeIpamPoolAllocationsCommandInput, DescribeIpamPoolAllocationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIpamPoolAllocations",
  DescribeIpamPoolAllocations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamPoolAllocationsRequest;
      output: DescribeIpamPoolAllocationsResult;
    };
    sdk: {
      input: DescribeIpamPoolAllocationsCommandInput;
      output: DescribeIpamPoolAllocationsCommandOutput;
    };
  };
}
