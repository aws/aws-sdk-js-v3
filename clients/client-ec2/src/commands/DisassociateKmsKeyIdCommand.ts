// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateKmsKeyIdRequest, DisassociateKmsKeyIdResult } from "../models/models_6";
import { DisassociateKmsKeyId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateKmsKeyIdCommand}.
 */
export interface DisassociateKmsKeyIdCommandInput extends DisassociateKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateKmsKeyIdCommand}.
 */
export interface DisassociateKmsKeyIdCommandOutput extends DisassociateKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Removes an associated KMS key from an Amazon EBS snapshot. After you disassociate the
 *       key, it can no longer be used to access the snapshot's data. The snapshot's original
 *       encryption key is unaffected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateKmsKeyIdRequest
 *   SnapshotId: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateKmsKeyIdResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisassociateKmsKeyIdCommandInput - {@link DisassociateKmsKeyIdCommandInput}
 * @returns {@link DisassociateKmsKeyIdCommandOutput}
 * @see {@link DisassociateKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateKmsKeyIdCommand extends command<DisassociateKmsKeyIdCommandInput, DisassociateKmsKeyIdCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateKmsKeyId",
  DisassociateKmsKeyId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateKmsKeyIdRequest;
      output: DisassociateKmsKeyIdResult;
    };
    sdk: {
      input: DisassociateKmsKeyIdCommandInput;
      output: DisassociateKmsKeyIdCommandOutput;
    };
  };
}
