// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { MoveAddressToVpcRequest, MoveAddressToVpcResult } from "../models/models_7";
import { MoveAddressToVpc$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MoveAddressToVpcCommand}.
 */
export interface MoveAddressToVpcCommandInput extends MoveAddressToVpcRequest {}
/**
 * @public
 *
 * The output of {@link MoveAddressToVpcCommand}.
 */
export interface MoveAddressToVpcCommandOutput extends MoveAddressToVpcResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
 *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
 *       be associated with an instance. After the Elastic IP address is moved, it is no longer
 *       available for use in the EC2-Classic platform. You cannot move an Elastic IP address that was
 *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveAddressToVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveAddressToVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // MoveAddressToVpcRequest
 *   DryRun: true || false,
 *   PublicIp: "STRING_VALUE", // required
 * };
 * const command = new MoveAddressToVpcCommand(input);
 * const response = await client.send(command);
 * // { // MoveAddressToVpcResult
 * //   AllocationId: "STRING_VALUE",
 * //   Status: "MoveInProgress" || "InVpc" || "InClassic",
 * // };
 *
 * ```
 *
 * @param MoveAddressToVpcCommandInput - {@link MoveAddressToVpcCommandInput}
 * @returns {@link MoveAddressToVpcCommandOutput}
 * @see {@link MoveAddressToVpcCommandInput} for command's `input` shape.
 * @see {@link MoveAddressToVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To move an address to EC2-VPC
 * ```javascript
 * // This example moves the specified Elastic IP address to the EC2-VPC platform.
 * const input = {
 *   PublicIp: "54.123.4.56"
 * };
 * const command = new MoveAddressToVpcCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Status: "MoveInProgress"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class MoveAddressToVpcCommand extends $Command
  .classBuilder<
    MoveAddressToVpcCommandInput,
    MoveAddressToVpcCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "MoveAddressToVpc", {})
  .n("EC2Client", "MoveAddressToVpcCommand")
  .sc(MoveAddressToVpc$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MoveAddressToVpcRequest;
      output: MoveAddressToVpcResult;
    };
    sdk: {
      input: MoveAddressToVpcCommandInput;
      output: MoveAddressToVpcCommandOutput;
    };
  };
}
