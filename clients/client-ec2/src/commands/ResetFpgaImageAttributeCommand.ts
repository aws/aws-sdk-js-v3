// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetFpgaImageAttributeRequest, ResetFpgaImageAttributeResult } from "../models/models_7";
import { ResetFpgaImageAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetFpgaImageAttributeCommand}.
 */
export interface ResetFpgaImageAttributeCommandInput extends ResetFpgaImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetFpgaImageAttributeCommand}.
 */
export interface ResetFpgaImageAttributeCommandOutput extends ResetFpgaImageAttributeResult, __MetadataBearer {}

/**
 * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
 * 		    You can only reset the load permission attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ResetFpgaImageAttributeRequest
 *   DryRun: true || false,
 *   FpgaImageId: "STRING_VALUE", // required
 *   Attribute: "loadPermission",
 * };
 * const command = new ResetFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ResetFpgaImageAttributeResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ResetFpgaImageAttributeCommandInput - {@link ResetFpgaImageAttributeCommandInput}
 * @returns {@link ResetFpgaImageAttributeCommandOutput}
 * @see {@link ResetFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ResetFpgaImageAttributeCommand extends command<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ResetFpgaImageAttribute",
  ResetFpgaImageAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetFpgaImageAttributeRequest;
      output: ResetFpgaImageAttributeResult;
    };
    sdk: {
      input: ResetFpgaImageAttributeCommandInput;
      output: ResetFpgaImageAttributeCommandOutput;
    };
  };
}
