// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionPublicIpv4PoolCidrRequest, DeprovisionPublicIpv4PoolCidrResult } from "../models/models_3";
import { DeprovisionPublicIpv4PoolCidr } from "../schemas/schemas_133_PublicIpv";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionPublicIpv4PoolCidrCommand}.
 */
export interface DeprovisionPublicIpv4PoolCidrCommandInput extends DeprovisionPublicIpv4PoolCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionPublicIpv4PoolCidrCommand}.
 */
export interface DeprovisionPublicIpv4PoolCidrCommandOutput
  extends DeprovisionPublicIpv4PoolCidrResult,
    __MetadataBearer {}

/**
 * <p>Deprovision a CIDR from a public IPv4 pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeprovisionPublicIpv4PoolCidrRequest
 *   DryRun: true || false,
 *   PoolId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 * };
 * const command = new DeprovisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionPublicIpv4PoolCidrResult
 * //   PoolId: "STRING_VALUE",
 * //   DeprovisionedAddresses: [ // DeprovisionedAddressSet
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeprovisionPublicIpv4PoolCidrCommandInput - {@link DeprovisionPublicIpv4PoolCidrCommandInput}
 * @returns {@link DeprovisionPublicIpv4PoolCidrCommandOutput}
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeprovisionPublicIpv4PoolCidrCommand extends $Command
  .classBuilder<
    DeprovisionPublicIpv4PoolCidrCommandInput,
    DeprovisionPublicIpv4PoolCidrCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeprovisionPublicIpv4PoolCidr", {})
  .n("EC2Client", "DeprovisionPublicIpv4PoolCidrCommand")
  .sc(DeprovisionPublicIpv4PoolCidr)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionPublicIpv4PoolCidrRequest;
      output: DeprovisionPublicIpv4PoolCidrResult;
    };
    sdk: {
      input: DeprovisionPublicIpv4PoolCidrCommandInput;
      output: DeprovisionPublicIpv4PoolCidrCommandOutput;
    };
  };
}
