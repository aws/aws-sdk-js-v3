// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamScopeRequest, ModifyIpamScopeResult } from "../models/models_7";
import { de_ModifyIpamScopeCommand, se_ModifyIpamScopeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamScopeCommand}.
 */
export interface ModifyIpamScopeCommandInput extends ModifyIpamScopeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamScopeCommand}.
 */
export interface ModifyIpamScopeCommandOutput extends ModifyIpamScopeResult, __MetadataBearer {}

/**
 * <p>Modify an IPAM scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamScopeRequest
 *   DryRun: true || false,
 *   IpamScopeId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new ModifyIpamScopeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamScopeResult
 * //   IpamScope: { // IpamScope
 * //     OwnerId: "STRING_VALUE",
 * //     IpamScopeId: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IsDefault: true || false,
 * //     Description: "STRING_VALUE",
 * //     PoolCount: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamScopeCommandInput - {@link ModifyIpamScopeCommandInput}
 * @returns {@link ModifyIpamScopeCommandOutput}
 * @see {@link ModifyIpamScopeCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyIpamScopeCommand extends $Command
  .classBuilder<
    ModifyIpamScopeCommandInput,
    ModifyIpamScopeCommandOutput,
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
  .s("AmazonEC2", "ModifyIpamScope", {})
  .n("EC2Client", "ModifyIpamScopeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIpamScopeCommand)
  .de(de_ModifyIpamScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamScopeRequest;
      output: ModifyIpamScopeResult;
    };
    sdk: {
      input: ModifyIpamScopeCommandInput;
      output: ModifyIpamScopeCommandOutput;
    };
  };
}
