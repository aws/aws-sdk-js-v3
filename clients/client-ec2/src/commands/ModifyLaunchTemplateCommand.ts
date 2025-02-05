// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLaunchTemplateRequest, ModifyLaunchTemplateResult } from "../models/models_7";
import { de_ModifyLaunchTemplateCommand, se_ModifyLaunchTemplateCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyLaunchTemplateCommand}.
 */
export interface ModifyLaunchTemplateCommandInput extends ModifyLaunchTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ModifyLaunchTemplateCommand}.
 */
export interface ModifyLaunchTemplateCommandOutput extends ModifyLaunchTemplateResult, __MetadataBearer {}

/**
 * <p>Modifies a launch template. You can specify which version of the launch template to
 *             set as the default version. When launching an instance, the default version applies when
 *             a launch template version is not specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyLaunchTemplateRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 *   DefaultVersion: "STRING_VALUE",
 * };
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLaunchTemplateResult
 * //   LaunchTemplate: { // LaunchTemplate
 * //     LaunchTemplateId: "STRING_VALUE",
 * //     LaunchTemplateName: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     CreatedBy: "STRING_VALUE",
 * //     DefaultVersionNumber: Number("long"),
 * //     LatestVersionNumber: Number("long"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Operator: { // OperatorResponse
 * //       Managed: true || false,
 * //       Principal: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyLaunchTemplateCommandInput - {@link ModifyLaunchTemplateCommandInput}
 * @returns {@link ModifyLaunchTemplateCommandOutput}
 * @see {@link ModifyLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link ModifyLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To change the default version of a launch template
 * ```javascript
 * // This example specifies version 2 as the default version of the specified launch template.
 * const input = {
 *   "DefaultVersion": "2",
 *   "LaunchTemplateId": "lt-0abcd290751193123"
 * };
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplate": {
 *     "CreateTime": "2017-12-01T13:35:46.000Z",
 *     "CreatedBy": "arn:aws:iam::123456789012:root",
 *     "DefaultVersionNumber": 2,
 *     "LatestVersionNumber": 2,
 *     "LaunchTemplateId": "lt-0abcd290751193123",
 *     "LaunchTemplateName": "WebServers"
 *   }
 * }
 * *\/
 * // example id: to-change-the-default-version-of-a-launch-template-1529358440364
 * ```
 *
 */
export class ModifyLaunchTemplateCommand extends $Command
  .classBuilder<
    ModifyLaunchTemplateCommandInput,
    ModifyLaunchTemplateCommandOutput,
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
  .s("AmazonEC2", "ModifyLaunchTemplate", {})
  .n("EC2Client", "ModifyLaunchTemplateCommand")
  .f(void 0, void 0)
  .ser(se_ModifyLaunchTemplateCommand)
  .de(de_ModifyLaunchTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyLaunchTemplateRequest;
      output: ModifyLaunchTemplateResult;
    };
    sdk: {
      input: ModifyLaunchTemplateCommandInput;
      output: ModifyLaunchTemplateCommandOutput;
    };
  };
}
