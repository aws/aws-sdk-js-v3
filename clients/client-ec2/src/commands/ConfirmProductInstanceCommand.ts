// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ConfirmProductInstanceRequest, ConfirmProductInstanceResult } from "../models/models_0";
import { ConfirmProductInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmProductInstanceCommand}.
 */
export interface ConfirmProductInstanceCommandInput extends ConfirmProductInstanceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmProductInstanceCommand}.
 */
export interface ConfirmProductInstanceCommandOutput extends ConfirmProductInstanceResult, __MetadataBearer {}

/**
 * <p>Determines whether a product code is associated with an instance. This action can only
 *             be used by the owner of the product code. It is useful when a product code owner must
 *             verify whether another user's instance is eligible for support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ConfirmProductInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ConfirmProductInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ConfirmProductInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ProductCode: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmProductInstanceResult
 * //   Return: true || false,
 * //   OwnerId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmProductInstanceCommandInput - {@link ConfirmProductInstanceCommandInput}
 * @returns {@link ConfirmProductInstanceCommandOutput}
 * @see {@link ConfirmProductInstanceCommandInput} for command's `input` shape.
 * @see {@link ConfirmProductInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To confirm the product instance
 * ```javascript
 * // This example determines whether the specified product code is associated with the specified instance.
 * const input = {
 *   InstanceId: "i-1234567890abcdef0",
 *   ProductCode: "774F4FF8"
 * };
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OwnerId: "123456789012"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ConfirmProductInstanceCommand extends $Command
  .classBuilder<
    ConfirmProductInstanceCommandInput,
    ConfirmProductInstanceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ConfirmProductInstance", {})
  .n("EC2Client", "ConfirmProductInstanceCommand")
  .sc(ConfirmProductInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmProductInstanceRequest;
      output: ConfirmProductInstanceResult;
    };
    sdk: {
      input: ConfirmProductInstanceCommandInput;
      output: ConfirmProductInstanceCommandOutput;
    };
  };
}
