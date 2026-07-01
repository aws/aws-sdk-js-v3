// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/models_2";
import { DeleteLaunchTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 * //     Operator: { // OperatorResponse
 * //       Managed: true || false,
 * //       Principal: "STRING_VALUE",
 * //       HiddenByDefault: true || false,
 * //     },
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
 *
 * @example To delete a launch template
 * ```javascript
 * // This example deletes the specified launch template.
 * const input = {
 *   LaunchTemplateId: "lt-0abcd290751193123"
 * };
 * const command = new DeleteLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LaunchTemplate: {
 *     CreateTime: "2017-11-23T16:46:25.000Z",
 *     CreatedBy: "arn:aws:iam::123456789012:root",
 *     DefaultVersionNumber: 2,
 *     LatestVersionNumber: 2,
 *     LaunchTemplateId: "lt-0abcd290751193123",
 *     LaunchTemplateName: "my-template"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLaunchTemplateCommand extends command<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLaunchTemplate",
  DeleteLaunchTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchTemplateRequest;
      output: DeleteLaunchTemplateResult;
    };
    sdk: {
      input: DeleteLaunchTemplateCommandInput;
      output: DeleteLaunchTemplateCommandOutput;
    };
  };
}
