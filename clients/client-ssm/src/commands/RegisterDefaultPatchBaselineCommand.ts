// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import { RegisterDefaultPatchBaseline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterDefaultPatchBaselineCommand}.
 */
export interface RegisterDefaultPatchBaselineCommandInput extends RegisterDefaultPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDefaultPatchBaselineCommand}.
 */
export interface RegisterDefaultPatchBaselineCommandOutput extends RegisterDefaultPatchBaselineResult, __MetadataBearer {}

/**
 * Defines the default patch baseline for the relevant operating system.
 *
 * To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify `arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed` instead of `pb-0574b43a65ea646ed`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterDefaultPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new RegisterDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDefaultPatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterDefaultPatchBaselineCommandInput - {@link RegisterDefaultPatchBaselineCommandInput}
 * @returns {@link RegisterDefaultPatchBaselineCommandOutput}
 * @see {@link RegisterDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidResourceId} (client fault)
 *
 * The resource ID isn't valid. Verify that you entered the correct ID and try again.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class RegisterDefaultPatchBaselineCommand extends command<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput>(
  _ep0,
  _mw0,
  "RegisterDefaultPatchBaseline",
  RegisterDefaultPatchBaseline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDefaultPatchBaselineRequest;
      output: RegisterDefaultPatchBaselineResult;
    };
    sdk: {
      input: RegisterDefaultPatchBaselineCommandInput;
      output: RegisterDefaultPatchBaselineCommandOutput;
    };
  };
}
