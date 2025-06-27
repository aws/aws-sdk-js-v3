// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeServiceLinkVirtualInterfacesRequest,
  DescribeServiceLinkVirtualInterfacesResult,
} from "../models/models_5";
import {
  de_DescribeServiceLinkVirtualInterfacesCommand,
  se_DescribeServiceLinkVirtualInterfacesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceLinkVirtualInterfacesCommand}.
 */
export interface DescribeServiceLinkVirtualInterfacesCommandInput extends DescribeServiceLinkVirtualInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceLinkVirtualInterfacesCommand}.
 */
export interface DescribeServiceLinkVirtualInterfacesCommandOutput
  extends DescribeServiceLinkVirtualInterfacesResult,
    __MetadataBearer {}

/**
 * <p>Describes the Outpost service link virtual interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeServiceLinkVirtualInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeServiceLinkVirtualInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeServiceLinkVirtualInterfacesRequest
 *   ServiceLinkVirtualInterfaceIds: [ // ServiceLinkVirtualInterfaceIdSet
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
 * const command = new DescribeServiceLinkVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceLinkVirtualInterfacesResult
 * //   ServiceLinkVirtualInterfaces: [ // ServiceLinkVirtualInterfaceSet
 * //     { // ServiceLinkVirtualInterface
 * //       ServiceLinkVirtualInterfaceId: "STRING_VALUE",
 * //       ServiceLinkVirtualInterfaceArn: "STRING_VALUE",
 * //       OutpostId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       LocalAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       PeerBgpAsn: Number("long"),
 * //       Vlan: Number("int"),
 * //       OutpostLagId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ConfigurationState: "pending" || "available" || "deleting" || "deleted",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServiceLinkVirtualInterfacesCommandInput - {@link DescribeServiceLinkVirtualInterfacesCommandInput}
 * @returns {@link DescribeServiceLinkVirtualInterfacesCommandOutput}
 * @see {@link DescribeServiceLinkVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceLinkVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeServiceLinkVirtualInterfacesCommand extends $Command
  .classBuilder<
    DescribeServiceLinkVirtualInterfacesCommandInput,
    DescribeServiceLinkVirtualInterfacesCommandOutput,
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
  .s("AmazonEC2", "DescribeServiceLinkVirtualInterfaces", {})
  .n("EC2Client", "DescribeServiceLinkVirtualInterfacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceLinkVirtualInterfacesCommand)
  .de(de_DescribeServiceLinkVirtualInterfacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceLinkVirtualInterfacesRequest;
      output: DescribeServiceLinkVirtualInterfacesResult;
    };
    sdk: {
      input: DescribeServiceLinkVirtualInterfacesCommandInput;
      output: DescribeServiceLinkVirtualInterfacesCommandOutput;
    };
  };
}
