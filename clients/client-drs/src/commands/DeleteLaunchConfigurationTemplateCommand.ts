// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteLaunchConfigurationTemplateRequest,
  DeleteLaunchConfigurationTemplateResponse,
} from "../models/models_0";
import { DeleteLaunchConfigurationTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLaunchConfigurationTemplateCommand}.
 */
export interface DeleteLaunchConfigurationTemplateCommandInput extends DeleteLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchConfigurationTemplateCommand}.
 */
export interface DeleteLaunchConfigurationTemplateCommandOutput extends DeleteLaunchConfigurationTemplateResponse, __MetadataBearer {}

/**
 * Deletes a single Launch Configuration Template by ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteLaunchConfigurationTemplateRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchConfigurationTemplateCommandInput - {@link DeleteLaunchConfigurationTemplateCommandInput}
 * @returns {@link DeleteLaunchConfigurationTemplateCommandOutput}
 * @see {@link DeleteLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
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
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class DeleteLaunchConfigurationTemplateCommand extends command<DeleteLaunchConfigurationTemplateCommandInput, DeleteLaunchConfigurationTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLaunchConfigurationTemplate",
  DeleteLaunchConfigurationTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchConfigurationTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteLaunchConfigurationTemplateCommandInput;
      output: DeleteLaunchConfigurationTemplateCommandOutput;
    };
  };
}
