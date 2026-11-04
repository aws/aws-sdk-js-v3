// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateDatasetKmsKeyInput, DisassociateDatasetKmsKeyOutput } from "../models/models_0";
import { DisassociateDatasetKmsKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDatasetKmsKeyCommand}.
 */
export interface DisassociateDatasetKmsKeyCommandInput extends DisassociateDatasetKmsKeyInput {}
/**
 * @public
 *
 * The output of {@link DisassociateDatasetKmsKeyCommand}.
 */
export interface DisassociateDatasetKmsKeyCommandOutput extends DisassociateDatasetKmsKeyOutput, __MetadataBearer {}

/**
 * Removes the customer managed Amazon Web Services Key Management Service (Amazon Web Services KMS) key association from the specified dataset. After this operation completes, data that you publish to the dataset is encrypted at rest using an Amazon Web Services owned key managed by Amazon CloudWatch.
 *
 * Only the `default` dataset is supported. To call this operation, the dataset must currently have a customer managed KMS key associated with it. If the dataset has no associated KMS key, the operation fails with `ResourceNotFoundException`.
 *
 * Amazon CloudWatch performs a dry-run `kms:Decrypt` call on the currently associated key as part of this operation. The caller must have `kms:Decrypt` permission on the currently associated key. If the key is accessible but the caller lacks `kms:Decrypt` permission, the operation fails with `AccessDeniedException`.
 *
 * > **Note:** If the currently associated key has been deleted, is scheduled for deletion, is pending import, is unavailable, or has been disabled, Amazon CloudWatch does not require `kms:Decrypt` permission on that key and the disassociation proceeds. If the key was only disabled, consider re-enabling it instead of disassociating, because re-enabling allows Amazon CloudWatch to resume decrypting your existing metric data.
 *
 * > **Important:** Disassociating a KMS key from a dataset does not immediately remove the `kms:Decrypt` requirement on data plane operations. For up to three hours after disassociation, callers must continue to have `kms:Decrypt` permission on the previously associated key. Some data might still be encrypted with that key during this window. After this enforcement window elapses, the `kms:Decrypt` requirement is lifted.
 *
 * For more information about using customer managed keys with Amazon CloudWatch, see [Encryption at rest with customer managed keys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cmk-encryption.html) in the *Amazon CloudWatch User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DisassociateDatasetKmsKeyCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DisassociateDatasetKmsKeyCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DisassociateDatasetKmsKeyInput
 *   DatasetIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDatasetKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDatasetKmsKeyCommandInput - {@link DisassociateDatasetKmsKeyCommandInput}
 * @returns {@link DisassociateDatasetKmsKeyCommandOutput}
 * @see {@link DisassociateDatasetKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateDatasetKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The named resource does not exist.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DisassociateDatasetKmsKeyCommand extends command<DisassociateDatasetKmsKeyCommandInput, DisassociateDatasetKmsKeyCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDatasetKmsKey",
  DisassociateDatasetKmsKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDatasetKmsKeyInput;
      output: {};
    };
    sdk: {
      input: DisassociateDatasetKmsKeyCommandInput;
      output: DisassociateDatasetKmsKeyCommandOutput;
    };
  };
}
