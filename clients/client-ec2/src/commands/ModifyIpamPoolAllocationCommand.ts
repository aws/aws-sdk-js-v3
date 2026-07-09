// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyIpamPoolAllocationRequest, ModifyIpamPoolAllocationResult } from "../models/models_7";
import { ModifyIpamPoolAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyIpamPoolAllocationCommand}.
 */
export interface ModifyIpamPoolAllocationCommandInput extends ModifyIpamPoolAllocationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamPoolAllocationCommand}.
 */
export interface ModifyIpamPoolAllocationCommandOutput extends ModifyIpamPoolAllocationResult, __MetadataBearer {}

/**
 * <p>Modifies the description of an IPAM pool allocation. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/modify-alloc-ipam.html">Modify an IPAM pool allocation</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamPoolAllocationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamPoolAllocationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamPoolAllocationRequest
 *   DryRun: true || false,
 *   IpamPoolAllocationId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new ModifyIpamPoolAllocationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamPoolAllocationResult
 * //   IpamPoolAllocation: { // IpamPoolAllocation
 * //     Cidr: "STRING_VALUE",
 * //     IpamPoolAllocationId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "ipam-pool" || "vpc" || "ec2-public-ipv4-pool" || "custom" || "subnet" || "eip" || "anycast-ip-list",
 * //     ResourceRegion: "STRING_VALUE",
 * //     ResourceOwner: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamPoolAllocationCommandInput - {@link ModifyIpamPoolAllocationCommandInput}
 * @returns {@link ModifyIpamPoolAllocationCommandOutput}
 * @see {@link ModifyIpamPoolAllocationCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamPoolAllocationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamPoolAllocationCommand extends command<ModifyIpamPoolAllocationCommandInput, ModifyIpamPoolAllocationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIpamPoolAllocation",
  ModifyIpamPoolAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamPoolAllocationRequest;
      output: ModifyIpamPoolAllocationResult;
    };
    sdk: {
      input: ModifyIpamPoolAllocationCommandInput;
      output: ModifyIpamPoolAllocationCommandOutput;
    };
  };
}
