// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLaunchTemplateVersionsRequest, DeleteLaunchTemplateVersionsResult } from "../models/models_3";
import { DeleteLaunchTemplateVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteLaunchTemplateVersionsCommandOutput extends DeleteLaunchTemplateVersionsResult, __MetadataBearer {}

/**
 * Deletes one or more versions of a launch template.
 *
 * You can't delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using DeleteLaunchTemplate.
 *
 * You can delete up to 200 launch template versions in a single request. To delete more than 200 versions in a single request, use DeleteLaunchTemplate, which deletes the launch template and all of its versions.
 *
 * For more information, see [Delete a launch template version](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/delete-launch-template.html#delete-launch-template-version) in the *Amazon EC2 User Guide*.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
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
export class DeleteLaunchTemplateVersionsCommand extends command<DeleteLaunchTemplateVersionsCommandInput, DeleteLaunchTemplateVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLaunchTemplateVersions",
  DeleteLaunchTemplateVersions$
) {
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
