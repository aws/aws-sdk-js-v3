// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPoolCidrsRequest, GetIpamPoolCidrsResult } from "../models/models_6";
import { GetIpamPoolCidrs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPoolCidrsCommand}.
 */
export interface GetIpamPoolCidrsCommandInput extends GetIpamPoolCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPoolCidrsCommand}.
 */
export interface GetIpamPoolCidrsCommandOutput extends GetIpamPoolCidrsResult, __MetadataBearer {}

/**
 * <p>Get the CIDRs provisioned to an IPAM pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPoolCidrsRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
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
 * const command = new GetIpamPoolCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPoolCidrsResult
 * //   IpamPoolCidrs: [ // IpamPoolCidrSet
 * //     { // IpamPoolCidr
 * //       Cidr: "STRING_VALUE",
 * //       State: "pending-provision" || "provisioned" || "failed-provision" || "pending-deprovision" || "deprovisioned" || "failed-deprovision" || "pending-import" || "failed-import",
 * //       FailureReason: { // IpamPoolCidrFailureReason
 * //         Code: "cidr-not-available" || "limit-exceeded",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       IpamPoolCidrId: "STRING_VALUE",
 * //       NetmaskLength: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPoolCidrsCommandInput - {@link GetIpamPoolCidrsCommandInput}
 * @returns {@link GetIpamPoolCidrsCommandOutput}
 * @see {@link GetIpamPoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPoolCidrsCommand extends $Command
  .classBuilder<
    GetIpamPoolCidrsCommandInput,
    GetIpamPoolCidrsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPoolCidrs", {})
  .n("EC2Client", "GetIpamPoolCidrsCommand")
  .sc(GetIpamPoolCidrs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPoolCidrsRequest;
      output: GetIpamPoolCidrsResult;
    };
    sdk: {
      input: GetIpamPoolCidrsCommandInput;
      output: GetIpamPoolCidrsCommandOutput;
    };
  };
}
