// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTrunkInterfaceRequest, DisassociateTrunkInterfaceResult } from "../models/models_6";
import { DisassociateTrunkInterface } from "../schemas/schemas_131_Trunk";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTrunkInterfaceCommand}.
 */
export interface DisassociateTrunkInterfaceCommandInput extends DisassociateTrunkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrunkInterfaceCommand}.
 */
export interface DisassociateTrunkInterfaceCommandOutput extends DisassociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * <p>Removes an association between a branch network interface with a trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateTrunkInterfaceRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTrunkInterfaceResult
 * //   Return: true || false,
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateTrunkInterfaceCommandInput - {@link DisassociateTrunkInterfaceCommandInput}
 * @returns {@link DisassociateTrunkInterfaceCommandOutput}
 * @see {@link DisassociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateTrunkInterfaceCommand extends $Command
  .classBuilder<
    DisassociateTrunkInterfaceCommandInput,
    DisassociateTrunkInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisassociateTrunkInterface", {})
  .n("EC2Client", "DisassociateTrunkInterfaceCommand")
  .sc(DisassociateTrunkInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTrunkInterfaceRequest;
      output: DisassociateTrunkInterfaceResult;
    };
    sdk: {
      input: DisassociateTrunkInterfaceCommandInput;
      output: DisassociateTrunkInterfaceCommandOutput;
    };
  };
}
