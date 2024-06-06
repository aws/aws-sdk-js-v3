// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTrunkInterfaceRequest, AssociateTrunkInterfaceResult } from "../models/models_0";
import { de_AssociateTrunkInterfaceCommand, se_AssociateTrunkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrunkInterfaceCommand}.
 */
export interface AssociateTrunkInterfaceCommandInput extends AssociateTrunkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrunkInterfaceCommand}.
 */
export interface AssociateTrunkInterfaceCommandOutput extends AssociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * <p>Associates a branch network interface with a trunk network interface.</p>
 *          <p>Before you create the association, run the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">create-network-interface</a> command and set
 *             <code>--interface-type</code> to <code>trunk</code>. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateTrunkInterfaceRequest
 *   BranchInterfaceId: "STRING_VALUE", // required
 *   TrunkInterfaceId: "STRING_VALUE", // required
 *   VlanId: Number("int"),
 *   GreKey: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AssociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTrunkInterfaceResult
 * //   InterfaceAssociation: { // TrunkInterfaceAssociation
 * //     AssociationId: "STRING_VALUE",
 * //     BranchInterfaceId: "STRING_VALUE",
 * //     TrunkInterfaceId: "STRING_VALUE",
 * //     InterfaceProtocol: "VLAN" || "GRE",
 * //     VlanId: Number("int"),
 * //     GreKey: Number("int"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTrunkInterfaceCommandInput - {@link AssociateTrunkInterfaceCommandInput}
 * @returns {@link AssociateTrunkInterfaceCommandOutput}
 * @see {@link AssociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssociateTrunkInterfaceCommand extends $Command
  .classBuilder<
    AssociateTrunkInterfaceCommandInput,
    AssociateTrunkInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssociateTrunkInterface", {})
  .n("EC2Client", "AssociateTrunkInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTrunkInterfaceCommand)
  .de(de_AssociateTrunkInterfaceCommand)
  .build() {}
