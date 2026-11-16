// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateKmsKeyIdRequest, AssociateKmsKeyIdResult } from "../models/models_0";
import { AssociateKmsKeyId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateKmsKeyIdCommand}.
 */
export interface AssociateKmsKeyIdCommandInput extends AssociateKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link AssociateKmsKeyIdCommand}.
 */
export interface AssociateKmsKeyIdCommandOutput extends AssociateKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Associates an additional KMS key with an encrypted Amazon EBS snapshot. With the
 *       associated key, you have a second, independent way to access the snapshot's data, in
 *       addition to the key the snapshot is already encrypted under. Associating a key doesn't
 *       re-encrypt the snapshot or grant access to its original key.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/associated-kms-keys.html">Associated
 *       KMS keys</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateKmsKeyIdRequest
 *   SnapshotId: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // AssociateKmsKeyIdResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param AssociateKmsKeyIdCommandInput - {@link AssociateKmsKeyIdCommandInput}
 * @returns {@link AssociateKmsKeyIdCommandOutput}
 * @see {@link AssociateKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link AssociateKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateKmsKeyIdCommand extends command<AssociateKmsKeyIdCommandInput, AssociateKmsKeyIdCommandOutput>(
  _ep0,
  _mw0,
  "AssociateKmsKeyId",
  AssociateKmsKeyId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateKmsKeyIdRequest;
      output: AssociateKmsKeyIdResult;
    };
    sdk: {
      input: AssociateKmsKeyIdCommandInput;
      output: AssociateKmsKeyIdCommandOutput;
    };
  };
}
