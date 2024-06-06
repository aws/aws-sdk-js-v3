// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/models_2";
import { de_DeleteLaunchTemplateCommand, se_DeleteLaunchTemplateCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchTemplateCommand}.
 */
export interface DeleteLaunchTemplateCommandInput extends DeleteLaunchTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchTemplateCommand}.
 */
export interface DeleteLaunchTemplateCommandOutput extends DeleteLaunchTemplateResult, __MetadataBearer {}

/**
 * <p>Deletes a launch template. Deleting a launch template deletes all of its
 *             versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteLaunchTemplateRequest
 *   DryRun: true || false,
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 * };
 * const command = new DeleteLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLaunchTemplateResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteLaunchTemplateCommandInput - {@link DeleteLaunchTemplateCommandInput}
 * @returns {@link DeleteLaunchTemplateCommandOutput}
 * @see {@link DeleteLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a launch template
 * ```javascript
 * // This example deletes the specified launch template.
 * const input = {
 *   "LaunchTemplateId": "lt-0abcd290751193123"
 * };
 * const command = new DeleteLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplate": {
 *     "CreateTime": "2017-11-23T16:46:25.000Z",
 *     "CreatedBy": "arn:aws:iam::123456789012:root",
 *     "DefaultVersionNumber": 2,
 *     "LatestVersionNumber": 2,
 *     "LaunchTemplateId": "lt-0abcd290751193123",
 *     "LaunchTemplateName": "my-template"
 *   }
 * }
 * *\/
 * // example id: to-delete-a-launch-template-1529024658216
 * ```
 *
 */
export class DeleteLaunchTemplateCommand extends $Command
  .classBuilder<
    DeleteLaunchTemplateCommandInput,
    DeleteLaunchTemplateCommandOutput,
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
  .s("AmazonEC2", "DeleteLaunchTemplate", {})
  .n("EC2Client", "DeleteLaunchTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLaunchTemplateCommand)
  .de(de_DeleteLaunchTemplateCommand)
  .build() {}
