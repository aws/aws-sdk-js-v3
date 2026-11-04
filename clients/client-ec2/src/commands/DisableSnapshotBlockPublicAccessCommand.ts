// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisableSnapshotBlockPublicAccessRequest,
  DisableSnapshotBlockPublicAccessResult,
} from "../models/models_5";
import { DisableSnapshotBlockPublicAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableSnapshotBlockPublicAccessCommand}.
 */
export interface DisableSnapshotBlockPublicAccessCommandInput extends DisableSnapshotBlockPublicAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableSnapshotBlockPublicAccessCommand}.
 */
export interface DisableSnapshotBlockPublicAccessCommandOutput extends DisableSnapshotBlockPublicAccessResult, __MetadataBearer {}

/**
 * Disables the *block public access for snapshots* setting at the account level for the specified Amazon Web Services Region. After you disable block public access for snapshots in a Region, users can publicly share snapshots in that Region.
 *
 * > **Important:**
 * >
 * > Enabling block public access for snapshots in *block-all-sharing* mode does not change the permissions for snapshots that are already publicly shared. Instead, it prevents these snapshots from be publicly visible and publicly accessible. Therefore, the attributes for these snapshots still indicate that they are publicly shared, even though they are not publicly available.
 * >
 * > If you disable block public access , these snapshots will become publicly available again.
 *
 * For more information, see [Block public access for snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/block-public-access-snapshots.html) in the *Amazon EBS User Guide* .
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableSnapshotBlockPublicAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableSnapshotBlockPublicAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableSnapshotBlockPublicAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableSnapshotBlockPublicAccessCommand(input);
 * const response = await client.send(command);
 * // { // DisableSnapshotBlockPublicAccessResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * // };
 *
 * ```
 *
 * @param DisableSnapshotBlockPublicAccessCommandInput - {@link DisableSnapshotBlockPublicAccessCommandInput}
 * @returns {@link DisableSnapshotBlockPublicAccessCommandOutput}
 * @see {@link DisableSnapshotBlockPublicAccessCommandInput} for command's `input` shape.
 * @see {@link DisableSnapshotBlockPublicAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DisableSnapshotBlockPublicAccessCommand extends command<DisableSnapshotBlockPublicAccessCommandInput, DisableSnapshotBlockPublicAccessCommandOutput>(
  _ep0,
  _mw0,
  "DisableSnapshotBlockPublicAccess",
  DisableSnapshotBlockPublicAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableSnapshotBlockPublicAccessRequest;
      output: DisableSnapshotBlockPublicAccessResult;
    };
    sdk: {
      input: DisableSnapshotBlockPublicAccessCommandInput;
      output: DisableSnapshotBlockPublicAccessCommandOutput;
    };
  };
}
