// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetSnapshotAttributeRequest } from "../models/models_7";
import { ResetSnapshotAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandInput extends ResetSnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetSnapshotAttributeCommand}.
 */
export interface ResetSnapshotAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets permission settings for the specified snapshot.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the
 *         <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ResetSnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetSnapshotAttributeCommandInput - {@link ResetSnapshotAttributeCommandInput}
 * @returns {@link ResetSnapshotAttributeCommandOutput}
 * @see {@link ResetSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To reset a snapshot attribute
 * ```javascript
 * // This example resets the create volume permissions for snapshot ``snap-1234567890abcdef0``. If the command succeeds, no output is returned.
 * const input = {
 *   Attribute: "createVolumePermission",
 *   SnapshotId: "snap-1234567890abcdef0"
 * };
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ResetSnapshotAttributeCommand extends command<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ResetSnapshotAttribute",
  ResetSnapshotAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetSnapshotAttributeRequest;
      output: {};
    };
    sdk: {
      input: ResetSnapshotAttributeCommandInput;
      output: ResetSnapshotAttributeCommandOutput;
    };
  };
}
