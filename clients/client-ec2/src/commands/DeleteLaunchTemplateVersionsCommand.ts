// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLaunchTemplateVersionsRequest, DeleteLaunchTemplateVersionsResult } from "../models/models_3";
import { DeleteLaunchTemplateVersions } from "../schemas/schemas_72_LaunchTemplateVersions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLaunchTemplateVersionsCommand}.
 */
export interface DeleteLaunchTemplateVersionsCommandInput extends DeleteLaunchTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchTemplateVersionsCommand}.
 */
export interface DeleteLaunchTemplateVersionsCommandOutput
  extends DeleteLaunchTemplateVersionsResult,
    __MetadataBearer {}

/**
 * <p>Deletes one or more versions of a launch template.</p>
 *          <p>You can't delete the default version of a launch template; you must first assign a
 *             different version as the default. If the default version is the only version for the
 *             launch template, you must delete the entire launch template using <a>DeleteLaunchTemplate</a>.</p>
 *          <p>You can delete up to 200 launch template versions in a single request. To delete more
 *             than 200 versions in a single request, use <a>DeleteLaunchTemplate</a>, which
 *             deletes the launch template and all of its versions.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/delete-launch-template.html#delete-launch-template-version">Delete a launch template version</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteLaunchTemplateVersionsRequest
 *   DryRun: true || false,
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 *   Versions: [ // VersionStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLaunchTemplateVersionsResult
 * //   SuccessfullyDeletedLaunchTemplateVersions: [ // DeleteLaunchTemplateVersionsResponseSuccessSet
 * //     { // DeleteLaunchTemplateVersionsResponseSuccessItem
 * //       LaunchTemplateId: "STRING_VALUE",
 * //       LaunchTemplateName: "STRING_VALUE",
 * //       VersionNumber: Number("long"),
 * //     },
 * //   ],
 * //   UnsuccessfullyDeletedLaunchTemplateVersions: [ // DeleteLaunchTemplateVersionsResponseErrorSet
 * //     { // DeleteLaunchTemplateVersionsResponseErrorItem
 * //       LaunchTemplateId: "STRING_VALUE",
 * //       LaunchTemplateName: "STRING_VALUE",
 * //       VersionNumber: Number("long"),
 * //       ResponseError: { // ResponseError
 * //         Code: "launchTemplateIdDoesNotExist" || "launchTemplateIdMalformed" || "launchTemplateNameDoesNotExist" || "launchTemplateNameMalformed" || "launchTemplateVersionDoesNotExist" || "unexpectedError",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteLaunchTemplateVersionsCommandInput - {@link DeleteLaunchTemplateVersionsCommandInput}
 * @returns {@link DeleteLaunchTemplateVersionsCommandOutput}
 * @see {@link DeleteLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a launch template version
 * ```javascript
 * // This example deletes the specified launch template version.
 * const input = {
 *   LaunchTemplateId: "lt-0abcd290751193123",
 *   Versions: [
 *     "1"
 *   ]
 * };
 * const command = new DeleteLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfullyDeletedLaunchTemplateVersions: [
 *     {
 *       LaunchTemplateId: "lt-0abcd290751193123",
 *       LaunchTemplateName: "my-template",
 *       VersionNumber: 1
 *     }
 *   ],
 *   UnsuccessfullyDeletedLaunchTemplateVersions:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteLaunchTemplateVersionsCommand extends $Command
  .classBuilder<
    DeleteLaunchTemplateVersionsCommandInput,
    DeleteLaunchTemplateVersionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteLaunchTemplateVersions", {})
  .n("EC2Client", "DeleteLaunchTemplateVersionsCommand")
  .sc(DeleteLaunchTemplateVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchTemplateVersionsRequest;
      output: DeleteLaunchTemplateVersionsResult;
    };
    sdk: {
      input: DeleteLaunchTemplateVersionsCommandInput;
      output: DeleteLaunchTemplateVersionsCommandOutput;
    };
  };
}
