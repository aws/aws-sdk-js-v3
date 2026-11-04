// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateLaunchConfigurationTemplateRequest,
  UpdateLaunchConfigurationTemplateResponse,
} from "../models/models_0";
import { UpdateLaunchConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandInput extends UpdateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandOutput extends UpdateLaunchConfigurationTemplateResponse, __MetadataBearer {}

/**
 * Updates an existing Launch Configuration Template by ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateLaunchConfigurationTemplateRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   exportBucketArn: "STRING_VALUE",
 *   postLaunchEnabled: true || false,
 *   launchIntoSourceInstance: true || false,
 *   recoveryMode: "STRING_VALUE",
 * };
 * const command = new UpdateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLaunchConfigurationTemplateResponse
 * //   launchConfigurationTemplate: { // LaunchConfigurationTemplate
 * //     launchConfigurationTemplateID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     launchDisposition: "STRING_VALUE",
 * //     targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //     copyPrivateIp: true || false,
 * //     copyTags: true || false,
 * //     licensing: { // Licensing
 * //       osByol: true || false,
 * //     },
 * //     exportBucketArn: "STRING_VALUE",
 * //     postLaunchEnabled: true || false,
 * //     launchIntoSourceInstance: true || false,
 * //     recoveryMode: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationTemplateCommandInput - {@link UpdateLaunchConfigurationTemplateCommandInput}
 * @returns {@link UpdateLaunchConfigurationTemplateCommandOutput}
 * @see {@link UpdateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class UpdateLaunchConfigurationTemplateCommand extends command<UpdateLaunchConfigurationTemplateCommandInput, UpdateLaunchConfigurationTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLaunchConfigurationTemplate",
  UpdateLaunchConfigurationTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchConfigurationTemplateRequest;
      output: UpdateLaunchConfigurationTemplateResponse;
    };
    sdk: {
      input: UpdateLaunchConfigurationTemplateCommandInput;
      output: UpdateLaunchConfigurationTemplateCommandOutput;
    };
  };
}
