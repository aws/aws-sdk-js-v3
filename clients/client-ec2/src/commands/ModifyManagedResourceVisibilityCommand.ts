// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyManagedResourceVisibilityRequest, ModifyManagedResourceVisibilityResult } from "../models/models_7";
import { ModifyManagedResourceVisibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyManagedResourceVisibilityCommand}.
 */
export interface ModifyManagedResourceVisibilityCommandInput extends ModifyManagedResourceVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link ModifyManagedResourceVisibilityCommand}.
 */
export interface ModifyManagedResourceVisibilityCommandOutput extends ModifyManagedResourceVisibilityResult, __MetadataBearer {}

/**
 * <p>Modifies the managed resource visibility configuration for the account. Use this
 *             operation to control whether managed resources are hidden or visible by default.
 *             Visibility settings are account-wide and affect all IAM principals uniformly. Hidden
 *             resources remain fully operational and billable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyManagedResourceVisibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyManagedResourceVisibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyManagedResourceVisibilityRequest
 *   DryRun: true || false,
 *   DefaultVisibility: "hidden" || "visible", // required
 * };
 * const command = new ModifyManagedResourceVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // ModifyManagedResourceVisibilityResult
 * //   Visibility: { // ManagedResourceVisibilitySettings
 * //     DefaultVisibility: "hidden" || "visible",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyManagedResourceVisibilityCommandInput - {@link ModifyManagedResourceVisibilityCommandInput}
 * @returns {@link ModifyManagedResourceVisibilityCommandOutput}
 * @see {@link ModifyManagedResourceVisibilityCommandInput} for command's `input` shape.
 * @see {@link ModifyManagedResourceVisibilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyManagedResourceVisibilityCommand extends command<ModifyManagedResourceVisibilityCommandInput, ModifyManagedResourceVisibilityCommandOutput>(
  _ep0,
  _mw0,
  "ModifyManagedResourceVisibility",
  ModifyManagedResourceVisibility$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyManagedResourceVisibilityRequest;
      output: ModifyManagedResourceVisibilityResult;
    };
    sdk: {
      input: ModifyManagedResourceVisibilityCommandInput;
      output: ModifyManagedResourceVisibilityCommandOutput;
    };
  };
}
