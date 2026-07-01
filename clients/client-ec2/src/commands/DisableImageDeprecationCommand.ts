// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableImageDeprecationRequest, DisableImageDeprecationResult } from "../models/models_5";
import { DisableImageDeprecation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandInput extends DisableImageDeprecationRequest {}
/**
 * @public
 *
 * The output of {@link DisableImageDeprecationCommand}.
 */
export interface DisableImageDeprecationCommandOutput extends DisableImageDeprecationResult, __MetadataBearer {}

/**
 * <p>Cancels the deprecation of the specified AMI.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an Amazon EC2 AMI</a> in the
 *       <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableImageDeprecationRequest
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * // { // DisableImageDeprecationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableImageDeprecationCommandInput - {@link DisableImageDeprecationCommandInput}
 * @returns {@link DisableImageDeprecationCommandOutput}
 * @see {@link DisableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link DisableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableImageDeprecationCommand extends command<DisableImageDeprecationCommandInput, DisableImageDeprecationCommandOutput>(
  _ep0,
  _mw0,
  "DisableImageDeprecation",
  DisableImageDeprecation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableImageDeprecationRequest;
      output: DisableImageDeprecationResult;
    };
    sdk: {
      input: DisableImageDeprecationCommandInput;
      output: DisableImageDeprecationCommandOutput;
    };
  };
}
