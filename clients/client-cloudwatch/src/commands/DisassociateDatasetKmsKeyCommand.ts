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
 * <p>Removes the customer managed Amazon Web Services Key Management Service
 *             (Amazon Web Services KMS) key association from the specified dataset. After this
 *             operation completes, data that you publish to the dataset is encrypted at rest using
 *             an Amazon Web Services owned key managed by Amazon CloudWatch.</p>
 *          <p>Only the <code>default</code> dataset is supported. To call this operation, the
 *             dataset must currently have a customer managed KMS key associated with it. If the
 *             dataset has no associated KMS key, the operation fails with
 *             <code>ResourceNotFoundException</code>.</p>
 *          <p>Amazon CloudWatch performs a dry-run <code>kms:Decrypt</code> call on the key
 *             as part of this operation. This verifies that the caller is authorized to use the
 *             currently associated key. The caller must have <code>kms:Decrypt</code> permission on
 *             the currently associated key, and the key must be enabled and accessible. If the key
 *             has been disabled or scheduled for deletion, you must first re-enable or restore it
 *             before you can disassociate it from the dataset.</p>
 *          <important>
 *             <p>Disassociating a KMS key from a dataset does not immediately remove the
 *                 <code>kms:Decrypt</code> requirement on data plane operations. For up to three
 *                 hours after disassociation, callers must continue to have
 *                 <code>kms:Decrypt</code> permission on the previously associated key. Some data
 *                 may still be encrypted with that key during this window. After this enforcement
 *                 window elapses, the <code>kms:Decrypt</code> requirement is lifted.</p>
 *          </important>
 *          <p>For more information about using customer managed keys with Amazon CloudWatch,
 *             see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cmk-encryption.html">Encryption at rest
 *                 with customer managed keys</a> in the <i>Amazon CloudWatch User
 *                 Guide</i>.</p>
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
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
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
