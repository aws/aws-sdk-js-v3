// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_3";
import { DescribeAddresses } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandInput extends DescribeAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandOutput extends DescribeAddressesResult, __MetadataBearer {}

/**
 * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeAddressesRequest
 *   PublicIps: [ // PublicIpStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AllocationIds: [ // AllocationIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressesResult
 * //   Addresses: [ // AddressList
 * //     { // Address
 * //       AllocationId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       Domain: "vpc" || "standard",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkInterfaceOwnerId: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PublicIpv4Pool: "STRING_VALUE",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       CustomerOwnedIp: "STRING_VALUE",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       CarrierIp: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       ServiceManaged: "alb" || "nlb" || "rnat",
 * //       InstanceId: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAddressesCommandInput - {@link DescribeAddressesCommandInput}
 * @returns {@link DescribeAddressesCommandOutput}
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe your Elastic IP addresses
 * ```javascript
 * // This example describes your Elastic IP addresses.
 * const input = { /* empty *\/ };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Addresses: [
 *     {
 *       Domain: "standard",
 *       InstanceId: "i-1234567890abcdef0",
 *       PublicIp: "198.51.100.0"
 *     },
 *     {
 *       AllocationId: "eipalloc-12345678",
 *       AssociationId: "eipassoc-12345678",
 *       Domain: "vpc",
 *       InstanceId: "i-1234567890abcdef0",
 *       NetworkInterfaceId: "eni-12345678",
 *       NetworkInterfaceOwnerId: "123456789012",
 *       PrivateIpAddress: "10.0.1.241",
 *       PublicIp: "203.0.113.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAddressesCommand extends $Command
  .classBuilder<
    DescribeAddressesCommandInput,
    DescribeAddressesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeAddresses", {})
  .n("EC2Client", "DescribeAddressesCommand")
  .sc(DescribeAddresses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAddressesRequest;
      output: DescribeAddressesResult;
    };
    sdk: {
      input: DescribeAddressesCommandInput;
      output: DescribeAddressesCommandOutput;
    };
  };
}
