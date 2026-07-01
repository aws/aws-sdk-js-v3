// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInstanceEventWindowRequest, DeleteInstanceEventWindowResult } from "../models/models_2";
import { DeleteInstanceEventWindow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInstanceEventWindowCommand}.
 */
export interface DeleteInstanceEventWindowCommandInput extends DeleteInstanceEventWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceEventWindowCommand}.
 */
export interface DeleteInstanceEventWindowCommandOutput extends DeleteInstanceEventWindowResult, __MetadataBearer {}

/**
 * <p>Deletes the specified event window.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInstanceEventWindowCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInstanceEventWindowCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteInstanceEventWindowRequest
 *   DryRun: true || false,
 *   ForceDelete: true || false,
 *   InstanceEventWindowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceEventWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceEventWindowResult
 * //   InstanceEventWindowState: { // InstanceEventWindowStateChange
 * //     InstanceEventWindowId: "STRING_VALUE",
 * //     State: "creating" || "deleting" || "active" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceEventWindowCommandInput - {@link DeleteInstanceEventWindowCommandInput}
 * @returns {@link DeleteInstanceEventWindowCommandOutput}
 * @see {@link DeleteInstanceEventWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceEventWindowCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteInstanceEventWindowCommand extends command<DeleteInstanceEventWindowCommandInput, DeleteInstanceEventWindowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInstanceEventWindow",
  DeleteInstanceEventWindow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstanceEventWindowRequest;
      output: DeleteInstanceEventWindowResult;
    };
    sdk: {
      input: DeleteInstanceEventWindowCommandInput;
      output: DeleteInstanceEventWindowCommandOutput;
    };
  };
}
