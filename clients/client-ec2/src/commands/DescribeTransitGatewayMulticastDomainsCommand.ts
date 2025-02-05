// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayMulticastDomainsRequest,
  DescribeTransitGatewayMulticastDomainsResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayMulticastDomainsCommand,
  se_DescribeTransitGatewayMulticastDomainsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayMulticastDomainsCommand}.
 */
export interface DescribeTransitGatewayMulticastDomainsCommandInput
  extends DescribeTransitGatewayMulticastDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayMulticastDomainsCommand}.
 */
export interface DescribeTransitGatewayMulticastDomainsCommandOutput
  extends DescribeTransitGatewayMulticastDomainsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more transit gateway multicast domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayMulticastDomainsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayMulticastDomainsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayMulticastDomainsRequest
 *   TransitGatewayMulticastDomainIds: [ // TransitGatewayMulticastDomainIdStringList
 *     "STRING_VALUE",
 *   ],
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeTransitGatewayMulticastDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayMulticastDomainsResult
 * //   TransitGatewayMulticastDomains: [ // TransitGatewayMulticastDomainList
 * //     { // TransitGatewayMulticastDomain
 * //       TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayMulticastDomainArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Options: { // TransitGatewayMulticastDomainOptions
 * //         Igmpv2Support: "enable" || "disable",
 * //         StaticSourcesSupport: "enable" || "disable",
 * //         AutoAcceptSharedAssociations: "enable" || "disable",
 * //       },
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
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
 * @param DescribeTransitGatewayMulticastDomainsCommandInput - {@link DescribeTransitGatewayMulticastDomainsCommandInput}
 * @returns {@link DescribeTransitGatewayMulticastDomainsCommandOutput}
 * @see {@link DescribeTransitGatewayMulticastDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayMulticastDomainsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayMulticastDomainsCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayMulticastDomainsCommandInput,
    DescribeTransitGatewayMulticastDomainsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeTransitGatewayMulticastDomains", {})
  .n("EC2Client", "DescribeTransitGatewayMulticastDomainsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayMulticastDomainsCommand)
  .de(de_DescribeTransitGatewayMulticastDomainsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayMulticastDomainsRequest;
      output: DescribeTransitGatewayMulticastDomainsResult;
    };
    sdk: {
      input: DescribeTransitGatewayMulticastDomainsCommandInput;
      output: DescribeTransitGatewayMulticastDomainsCommandOutput;
    };
  };
}
