// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteLocalGatewayVirtualInterfaceGroupRequest,
  DeleteLocalGatewayVirtualInterfaceGroupResult,
} from "../models/models_2";
import { DeleteLocalGatewayVirtualInterfaceGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayVirtualInterfaceGroupCommand}.
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupCommandInput
  extends DeleteLocalGatewayVirtualInterfaceGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayVirtualInterfaceGroupCommand}.
 */
export interface DeleteLocalGatewayVirtualInterfaceGroupCommandOutput
  extends DeleteLocalGatewayVirtualInterfaceGroupResult,
    __MetadataBearer {}

/**
 * <p>Delete the specified local gateway interface group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayVirtualInterfaceGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayVirtualInterfaceGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayVirtualInterfaceGroupRequest
 *   LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteLocalGatewayVirtualInterfaceGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayVirtualInterfaceGroupResult
 * //   LocalGatewayVirtualInterfaceGroup: { // LocalGatewayVirtualInterfaceGroup
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     LocalGatewayId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     LocalBgpAsn: Number("int"),
 * //     LocalBgpAsnExtended: Number("long"),
 * //     LocalGatewayVirtualInterfaceGroupArn: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConfigurationState: "pending" || "incomplete" || "available" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLocalGatewayVirtualInterfaceGroupCommandInput - {@link DeleteLocalGatewayVirtualInterfaceGroupCommandInput}
 * @returns {@link DeleteLocalGatewayVirtualInterfaceGroupCommandOutput}
 * @see {@link DeleteLocalGatewayVirtualInterfaceGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayVirtualInterfaceGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteLocalGatewayVirtualInterfaceGroupCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteLocalGatewayVirtualInterfaceGroup", {})
  .n("EC2Client", "DeleteLocalGatewayVirtualInterfaceGroupCommand")
  .sc(DeleteLocalGatewayVirtualInterfaceGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocalGatewayVirtualInterfaceGroupRequest;
      output: DeleteLocalGatewayVirtualInterfaceGroupResult;
    };
    sdk: {
      input: DeleteLocalGatewayVirtualInterfaceGroupCommandInput;
      output: DeleteLocalGatewayVirtualInterfaceGroupCommandOutput;
    };
  };
}
