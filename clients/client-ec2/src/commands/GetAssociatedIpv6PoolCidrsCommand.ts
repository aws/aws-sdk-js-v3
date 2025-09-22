// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssociatedIpv6PoolCidrsRequest, GetAssociatedIpv6PoolCidrsResult } from "../models/models_6";
import { GetAssociatedIpv6PoolCidrs } from "../schemas/schemas_64_Ipv6";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssociatedIpv6PoolCidrsCommand}.
 */
export interface GetAssociatedIpv6PoolCidrsCommandInput extends GetAssociatedIpv6PoolCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociatedIpv6PoolCidrsCommand}.
 */
export interface GetAssociatedIpv6PoolCidrsCommandOutput extends GetAssociatedIpv6PoolCidrsResult, __MetadataBearer {}

/**
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedIpv6PoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedIpv6PoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetAssociatedIpv6PoolCidrsRequest
 *   PoolId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new GetAssociatedIpv6PoolCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociatedIpv6PoolCidrsResult
 * //   Ipv6CidrAssociations: [ // Ipv6CidrAssociationSet
 * //     { // Ipv6CidrAssociation
 * //       Ipv6Cidr: "STRING_VALUE",
 * //       AssociatedResource: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssociatedIpv6PoolCidrsCommandInput - {@link GetAssociatedIpv6PoolCidrsCommandInput}
 * @returns {@link GetAssociatedIpv6PoolCidrsCommandOutput}
 * @see {@link GetAssociatedIpv6PoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedIpv6PoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetAssociatedIpv6PoolCidrsCommand extends $Command
  .classBuilder<
    GetAssociatedIpv6PoolCidrsCommandInput,
    GetAssociatedIpv6PoolCidrsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetAssociatedIpv6PoolCidrs", {})
  .n("EC2Client", "GetAssociatedIpv6PoolCidrsCommand")
  .sc(GetAssociatedIpv6PoolCidrs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssociatedIpv6PoolCidrsRequest;
      output: GetAssociatedIpv6PoolCidrsResult;
    };
    sdk: {
      input: GetAssociatedIpv6PoolCidrsCommandInput;
      output: GetAssociatedIpv6PoolCidrsCommandOutput;
    };
  };
}
