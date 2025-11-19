// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPoolAllocationsRequest, GetIpamPoolAllocationsResult } from "../models/models_5";
import { GetIpamPoolAllocations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPoolAllocationsCommand}.
 */
export interface GetIpamPoolAllocationsCommandInput extends GetIpamPoolAllocationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPoolAllocationsCommand}.
 */
export interface GetIpamPoolAllocationsCommandOutput extends GetIpamPoolAllocationsResult, __MetadataBearer {}

/**
 * <p>Get a list of all the CIDR allocations in an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations.</p>
 *          <note>
 *             <p>If you use this action after <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateIpamPoolCidr.html">AllocateIpamPoolCidr</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>, note that all EC2 API actions follow an <a href="https://docs.aws.amazon.com/ec2/latest/devguide/eventual-consistency.html">eventual consistency</a> model.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPoolAllocationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPoolAllocationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPoolAllocationsRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   IpamPoolAllocationId: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamPoolAllocationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPoolAllocationsResult
 * //   IpamPoolAllocations: [ // IpamPoolAllocationSet
 * //     { // IpamPoolAllocation
 * //       Cidr: "STRING_VALUE",
 * //       IpamPoolAllocationId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom" || "subnet" || "eip",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPoolAllocationsCommandInput - {@link GetIpamPoolAllocationsCommandInput}
 * @returns {@link GetIpamPoolAllocationsCommandOutput}
 * @see {@link GetIpamPoolAllocationsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPoolAllocationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPoolAllocationsCommand extends $Command
  .classBuilder<
    GetIpamPoolAllocationsCommandInput,
    GetIpamPoolAllocationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPoolAllocations", {})
  .n("EC2Client", "GetIpamPoolAllocationsCommand")
  .sc(GetIpamPoolAllocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPoolAllocationsRequest;
      output: GetIpamPoolAllocationsResult;
    };
    sdk: {
      input: GetIpamPoolAllocationsCommandInput;
      output: GetIpamPoolAllocationsCommandOutput;
    };
  };
}
