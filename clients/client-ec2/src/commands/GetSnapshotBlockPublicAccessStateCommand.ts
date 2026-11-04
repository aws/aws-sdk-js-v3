// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetSnapshotBlockPublicAccessStateRequest,
  GetSnapshotBlockPublicAccessStateResult,
} from "../models/models_6";
import { GetSnapshotBlockPublicAccessState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandInput extends GetSnapshotBlockPublicAccessStateRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandOutput extends GetSnapshotBlockPublicAccessStateResult, __MetadataBearer {}

/**
 * Gets the current state of *block public access for snapshots* setting for the account and Region.
 *
 * For more information, see [Block public access for snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/block-public-access-snapshots.html) in the *Amazon EBS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSnapshotBlockPublicAccessStateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSnapshotBlockPublicAccessStateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetSnapshotBlockPublicAccessStateRequest
 *   DryRun: true || false,
 * };
 * const command = new GetSnapshotBlockPublicAccessStateCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotBlockPublicAccessStateResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * //   ManagedBy: "account" || "declarative-policy",
 * // };
 *
 * ```
 *
 * @param GetSnapshotBlockPublicAccessStateCommandInput - {@link GetSnapshotBlockPublicAccessStateCommandInput}
 * @returns {@link GetSnapshotBlockPublicAccessStateCommandOutput}
 * @see {@link GetSnapshotBlockPublicAccessStateCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockPublicAccessStateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class GetSnapshotBlockPublicAccessStateCommand extends command<GetSnapshotBlockPublicAccessStateCommandInput, GetSnapshotBlockPublicAccessStateCommandOutput>(
  _ep0,
  _mw0,
  "GetSnapshotBlockPublicAccessState",
  GetSnapshotBlockPublicAccessState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSnapshotBlockPublicAccessStateRequest;
      output: GetSnapshotBlockPublicAccessStateResult;
    };
    sdk: {
      input: GetSnapshotBlockPublicAccessStateCommandInput;
      output: GetSnapshotBlockPublicAccessStateCommandOutput;
    };
  };
}
