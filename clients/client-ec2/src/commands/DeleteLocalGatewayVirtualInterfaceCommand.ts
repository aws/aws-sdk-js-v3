// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteLocalGatewayVirtualInterfaceRequest,
  DeleteLocalGatewayVirtualInterfaceResult,
} from "../models/models_3";
import { DeleteLocalGatewayVirtualInterface } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayVirtualInterfaceCommand}.
 */
export interface DeleteLocalGatewayVirtualInterfaceCommandInput extends DeleteLocalGatewayVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayVirtualInterfaceCommand}.
 */
export interface DeleteLocalGatewayVirtualInterfaceCommandOutput
  extends DeleteLocalGatewayVirtualInterfaceResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified local gateway virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayVirtualInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayVirtualInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayVirtualInterfaceRequest
 *   LocalGatewayVirtualInterfaceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayVirtualInterfaceResult
 * //   LocalGatewayVirtualInterface: { // LocalGatewayVirtualInterface
 * //     LocalGatewayVirtualInterfaceId: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceArn: "STRING_VALUE",
 * //     OutpostLagId: "STRING_VALUE",
 * //     Vlan: Number("int"),
 * //     LocalAddress: "STRING_VALUE",
 * //     PeerAddress: "STRING_VALUE",
 * //     LocalBgpAsn: Number("int"),
 * //     PeerBgpAsn: Number("int"),
 * //     PeerBgpAsnExtended: Number("long"),
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConfigurationState: "pending" || "available" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayVirtualInterfaceCommandInput - {@link DeleteLocalGatewayVirtualInterfaceCommandInput}
 * @returns {@link DeleteLocalGatewayVirtualInterfaceCommandOutput}
 * @see {@link DeleteLocalGatewayVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteLocalGatewayVirtualInterfaceCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayVirtualInterfaceCommandInput,
    DeleteLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteLocalGatewayVirtualInterface", {})
  .n("EC2Client", "DeleteLocalGatewayVirtualInterfaceCommand")
  .sc(DeleteLocalGatewayVirtualInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocalGatewayVirtualInterfaceRequest;
      output: DeleteLocalGatewayVirtualInterfaceResult;
    };
    sdk: {
      input: DeleteLocalGatewayVirtualInterfaceCommandInput;
      output: DeleteLocalGatewayVirtualInterfaceCommandOutput;
    };
  };
}
