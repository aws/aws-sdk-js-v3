// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayConnectPeersRequest,
  DescribeTransitGatewayConnectPeersResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayConnectPeersCommand,
  se_DescribeTransitGatewayConnectPeersCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayConnectPeersCommand}.
 */
export interface DescribeTransitGatewayConnectPeersCommandInput extends DescribeTransitGatewayConnectPeersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayConnectPeersCommand}.
 */
export interface DescribeTransitGatewayConnectPeersCommandOutput
  extends DescribeTransitGatewayConnectPeersResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more Connect peers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayConnectPeersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayConnectPeersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayConnectPeersRequest
 *   TransitGatewayConnectPeerIds: [ // TransitGatewayConnectPeerIdStringList
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
 * const command = new DescribeTransitGatewayConnectPeersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayConnectPeersResult
 * //   TransitGatewayConnectPeers: [ // TransitGatewayConnectPeerList
 * //     { // TransitGatewayConnectPeer
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayConnectPeerId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ConnectPeerConfiguration: { // TransitGatewayConnectPeerConfiguration
 * //         TransitGatewayAddress: "STRING_VALUE",
 * //         PeerAddress: "STRING_VALUE",
 * //         InsideCidrBlocks: [ // InsideCidrBlocksStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         Protocol: "gre",
 * //         BgpConfigurations: [ // TransitGatewayAttachmentBgpConfigurationList
 * //           { // TransitGatewayAttachmentBgpConfiguration
 * //             TransitGatewayAsn: Number("long"),
 * //             PeerAsn: Number("long"),
 * //             TransitGatewayAddress: "STRING_VALUE",
 * //             PeerAddress: "STRING_VALUE",
 * //             BgpStatus: "up" || "down",
 * //           },
 * //         ],
 * //       },
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
 * @param DescribeTransitGatewayConnectPeersCommandInput - {@link DescribeTransitGatewayConnectPeersCommandInput}
 * @returns {@link DescribeTransitGatewayConnectPeersCommandOutput}
 * @see {@link DescribeTransitGatewayConnectPeersCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayConnectPeersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTransitGatewayConnectPeersCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayConnectPeersCommandInput,
    DescribeTransitGatewayConnectPeersCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayConnectPeers", {})
  .n("EC2Client", "DescribeTransitGatewayConnectPeersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayConnectPeersCommand)
  .de(de_DescribeTransitGatewayConnectPeersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayConnectPeersRequest;
      output: DescribeTransitGatewayConnectPeersResult;
    };
    sdk: {
      input: DescribeTransitGatewayConnectPeersCommandInput;
      output: DescribeTransitGatewayConnectPeersCommandOutput;
    };
  };
}
