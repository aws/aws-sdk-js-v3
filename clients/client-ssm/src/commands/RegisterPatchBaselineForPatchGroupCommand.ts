// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterPatchBaselineForPatchGroupResult,
} from "../models/models_1";
import { RegisterPatchBaselineForPatchGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterPatchBaselineForPatchGroupCommand}.
 */
export interface RegisterPatchBaselineForPatchGroupCommandInput extends RegisterPatchBaselineForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link RegisterPatchBaselineForPatchGroupCommand}.
 */
export interface RegisterPatchBaselineForPatchGroupCommandOutput extends RegisterPatchBaselineForPatchGroupResult, __MetadataBearer {}

/**
 * Registers a patch baseline for a patch group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterPatchBaselineForPatchGroupRequest
 *   BaselineId: "STRING_VALUE", // required
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new RegisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // RegisterPatchBaselineForPatchGroupResult
 * //   BaselineId: "STRING_VALUE",
 * //   PatchGroup: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterPatchBaselineForPatchGroupCommandInput - {@link RegisterPatchBaselineForPatchGroupCommandInput}
 * @returns {@link RegisterPatchBaselineForPatchGroupCommandOutput}
 * @see {@link RegisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link RegisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * Error returned if an attempt is made to register a patch group with a patch baseline that is already registered with a different patch baseline.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Error returned when the caller has exceeded the default resource quotas. For example, too many maintenance windows or patch baselines have been created.
 *
 * For information about resource quotas in Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class RegisterPatchBaselineForPatchGroupCommand extends command<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput>(
  _ep0,
  _mw0,
  "RegisterPatchBaselineForPatchGroup",
  RegisterPatchBaselineForPatchGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterPatchBaselineForPatchGroupRequest;
      output: RegisterPatchBaselineForPatchGroupResult;
    };
    sdk: {
      input: RegisterPatchBaselineForPatchGroupCommandInput;
      output: RegisterPatchBaselineForPatchGroupCommandOutput;
    };
  };
}
