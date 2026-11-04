// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReleaseIpamPoolAllocationRequest, ReleaseIpamPoolAllocationResult } from "../models/models_8";
import { ReleaseIpamPoolAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReleaseIpamPoolAllocationCommand}.
 */
export interface ReleaseIpamPoolAllocationCommandInput extends ReleaseIpamPoolAllocationRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseIpamPoolAllocationCommand}.
 */
export interface ReleaseIpamPoolAllocationCommandOutput extends ReleaseIpamPoolAllocationResult, __MetadataBearer {}

/**
 * Release an allocation within an IPAM pool. The Region you use should be the IPAM pool locale. The locale is the Amazon Web Services Region where this IPAM pool is available for allocations. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using [ModifyIpamResourceCidr](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html). For more information, see [Release an allocation](https://docs.aws.amazon.com/vpc/latest/ipam/release-alloc-ipam.html) in the *Amazon VPC IPAM User Guide*.
 *
 * > **Note:** All EC2 API actions follow an [eventual consistency](https://docs.aws.amazon.com/ec2/latest/devguide/eventual-consistency.html) model.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseIpamPoolAllocationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseIpamPoolAllocationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReleaseIpamPoolAllocationRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 *   IpamPoolAllocationId: "STRING_VALUE", // required
 * };
 * const command = new ReleaseIpamPoolAllocationCommand(input);
 * const response = await client.send(command);
 * // { // ReleaseIpamPoolAllocationResult
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param ReleaseIpamPoolAllocationCommandInput - {@link ReleaseIpamPoolAllocationCommandInput}
 * @returns {@link ReleaseIpamPoolAllocationCommandOutput}
 * @see {@link ReleaseIpamPoolAllocationCommandInput} for command's `input` shape.
 * @see {@link ReleaseIpamPoolAllocationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class ReleaseIpamPoolAllocationCommand extends command<ReleaseIpamPoolAllocationCommandInput, ReleaseIpamPoolAllocationCommandOutput>(
  _ep0,
  _mw0,
  "ReleaseIpamPoolAllocation",
  ReleaseIpamPoolAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReleaseIpamPoolAllocationRequest;
      output: ReleaseIpamPoolAllocationResult;
    };
    sdk: {
      input: ReleaseIpamPoolAllocationCommandInput;
      output: ReleaseIpamPoolAllocationCommandOutput;
    };
  };
}
