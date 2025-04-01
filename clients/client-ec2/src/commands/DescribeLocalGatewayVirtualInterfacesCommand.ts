// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeLocalGatewayVirtualInterfacesRequest,
  DescribeLocalGatewayVirtualInterfacesResult,
} from "../models/models_4";
import {
  de_DescribeLocalGatewayVirtualInterfacesCommand,
  se_DescribeLocalGatewayVirtualInterfacesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocalGatewayVirtualInterfacesCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfacesCommandInput
  extends DescribeLocalGatewayVirtualInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocalGatewayVirtualInterfacesCommand}.
 */
export interface DescribeLocalGatewayVirtualInterfacesCommandOutput
  extends DescribeLocalGatewayVirtualInterfacesResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified local gateway virtual interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayVirtualInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLocalGatewayVirtualInterfacesRequest
 *   LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
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
 * const command = new DescribeLocalGatewayVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocalGatewayVirtualInterfacesResult
 * //   LocalGatewayVirtualInterfaces: [ // LocalGatewayVirtualInterfaceSet
 * //     { // LocalGatewayVirtualInterface
 * //       LocalGatewayVirtualInterfaceId: "STRING_VALUE",
 * //       LocalGatewayId: "STRING_VALUE",
 * //       Vlan: Number("int"),
 * //       LocalAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       LocalBgpAsn: Number("int"),
 * //       PeerBgpAsn: Number("int"),
 * //       OwnerId: "STRING_VALUE",
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
 * @param DescribeLocalGatewayVirtualInterfacesCommandInput - {@link DescribeLocalGatewayVirtualInterfacesCommandInput}
 * @returns {@link DescribeLocalGatewayVirtualInterfacesCommandOutput}
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeLocalGatewayVirtualInterfacesCommand extends $Command
  .classBuilder<
    DescribeLocalGatewayVirtualInterfacesCommandInput,
    DescribeLocalGatewayVirtualInterfacesCommandOutput,
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
  .s("AmazonEC2", "DescribeLocalGatewayVirtualInterfaces", {})
  .n("EC2Client", "DescribeLocalGatewayVirtualInterfacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLocalGatewayVirtualInterfacesCommand)
  .de(de_DescribeLocalGatewayVirtualInterfacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLocalGatewayVirtualInterfacesRequest;
      output: DescribeLocalGatewayVirtualInterfacesResult;
    };
    sdk: {
      input: DescribeLocalGatewayVirtualInterfacesCommandInput;
      output: DescribeLocalGatewayVirtualInterfacesCommandOutput;
    };
  };
}
