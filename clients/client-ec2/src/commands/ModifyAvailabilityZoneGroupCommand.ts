// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_6";
import { de_ModifyAvailabilityZoneGroupCommand, se_ModifyAvailabilityZoneGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyAvailabilityZoneGroupCommand}.
 */
export interface ModifyAvailabilityZoneGroupCommandInput extends ModifyAvailabilityZoneGroupRequest {}
/**
 * @public
 *
 * The output of {@link ModifyAvailabilityZoneGroupCommand}.
 */
export interface ModifyAvailabilityZoneGroupCommandOutput extends ModifyAvailabilityZoneGroupResult, __MetadataBearer {}

/**
 * <p>Changes the opt-in status of the specified zone group for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAvailabilityZoneGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAvailabilityZoneGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyAvailabilityZoneGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   OptInStatus: "opted-in" || "not-opted-in", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyAvailabilityZoneGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAvailabilityZoneGroupResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyAvailabilityZoneGroupCommandInput - {@link ModifyAvailabilityZoneGroupCommandInput}
 * @returns {@link ModifyAvailabilityZoneGroupCommandOutput}
 * @see {@link ModifyAvailabilityZoneGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyAvailabilityZoneGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyAvailabilityZoneGroupCommand extends $Command
  .classBuilder<
    ModifyAvailabilityZoneGroupCommandInput,
    ModifyAvailabilityZoneGroupCommandOutput,
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
  .s("AmazonEC2", "ModifyAvailabilityZoneGroup", {})
  .n("EC2Client", "ModifyAvailabilityZoneGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyAvailabilityZoneGroupCommand)
  .de(de_ModifyAvailabilityZoneGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAvailabilityZoneGroupRequest;
      output: ModifyAvailabilityZoneGroupResult;
    };
    sdk: {
      input: ModifyAvailabilityZoneGroupCommandInput;
      output: ModifyAvailabilityZoneGroupCommandOutput;
    };
  };
}
