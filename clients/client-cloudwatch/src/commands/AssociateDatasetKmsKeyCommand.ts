// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDatasetKmsKeyInput, AssociateDatasetKmsKeyOutput } from "../models/models_0";
import { AssociateDatasetKmsKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDatasetKmsKeyCommand}.
 */
export interface AssociateDatasetKmsKeyCommandInput extends AssociateDatasetKmsKeyInput {}
/**
 * @public
 *
 * The output of {@link AssociateDatasetKmsKeyCommand}.
 */
export interface AssociateDatasetKmsKeyCommandOutput extends AssociateDatasetKmsKeyOutput, __MetadataBearer {}

/**
 * <p>Associates an Amazon Web Services Key Management Service (Amazon Web Services KMS)
 *             customer managed key with the specified dataset. After this operation completes, all
 *             data published to the dataset is encrypted at rest using the specified KMS key.
 *             Callers must have <code>kms:Decrypt</code> permission on the key to read the
 *             encrypted data.</p>
 *          <p>Only the <code>default</code> dataset is supported. The <code>default</code> dataset
 *             is implicit for every account in every Region — you do not need to create it before
 *             calling this operation.</p>
 *          <p>You can call <code>AssociateDatasetKmsKey</code> on a dataset that is already
 *             associated with a KMS key to replace the existing key with a different one. To replace
 *             a key, the caller must have <code>kms:Decrypt</code> permission on both the current
 *             key and the new key.</p>
 *          <p>The KMS key that you specify must meet all of the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>It must be a symmetric encryption KMS key (key spec
 *                     <code>SYMMETRIC_DEFAULT</code>, key usage <code>ENCRYPT_DECRYPT</code>).
 *                     Asymmetric keys, HMAC keys, and key material types other than
 *                     <code>SYMMETRIC_DEFAULT</code> are not supported.</p>
 *             </li>
 *             <li>
 *                <p>It must be enabled and not pending deletion.</p>
 *             </li>
 *             <li>
 *                <p>Its key policy must grant the CloudWatch service principal
 *                     (<code>cloudwatch.amazonaws.com</code>) these permissions:
 *                     <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code>,
 *                     <code>kms:Encrypt</code>, <code>kms:Decrypt</code>, and
 *                     <code>kms:ReEncrypt*</code>. Amazon CloudWatch requires these permissions
 *                     to manage the data on your behalf.</p>
 *             </li>
 *             <li>
 *                <p>The calling principal must have <code>kms:Decrypt</code> permission on the
 *                     key.</p>
 *             </li>
 *             <li>
 *                <p>It must be specified as a fully qualified key ARN. Key IDs, aliases, and
 *                     alias ARNs are not accepted.</p>
 *             </li>
 *             <li>
 *                <p>It must be in the same Amazon Web Services Region as the dataset.</p>
 *             </li>
 *          </ul>
 *          <p>Before completing the association, Amazon CloudWatch validates the key by
 *             performing a series of dry-run KMS operations. Service-principal checks run first to
 *             verify that the key policy grants the required access to Amazon CloudWatch. These
 *             checks include <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code>,
 *             <code>kms:Encrypt</code>, <code>kms:Decrypt</code>, and <code>kms:ReEncrypt*</code>.
 *             After those succeed, a <code>kms:Decrypt</code> dry-run is run with the caller's
 *             credentials to verify that the calling principal can use the key. When you are
 *             replacing an existing key, the caller's <code>kms:Decrypt</code> dry-run is run on
 *             the current key first, and only then on the new key.</p>
 *          <p>If any of these checks fails, the operation fails and the existing key association
 *             (if any) remains unchanged. Common failure causes include the key being disabled, the
 *             key policy not granting the required permissions to Amazon CloudWatch, or the
 *             caller lacking <code>kms:Decrypt</code> permission on the key.</p>
 *          <p>For more information about using customer managed keys with Amazon CloudWatch,
 *             see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cmk-encryption.html">Encryption at rest
 *                 with customer managed keys</a> in the <i>Amazon CloudWatch User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, AssociateDatasetKmsKeyCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, AssociateDatasetKmsKeyCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // AssociateDatasetKmsKeyInput
 *   DatasetIdentifier: "STRING_VALUE", // required
 *   KmsKeyArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDatasetKmsKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDatasetKmsKeyCommandInput - {@link AssociateDatasetKmsKeyCommandInput}
 * @returns {@link AssociateDatasetKmsKeyCommandOutput}
 * @see {@link AssociateDatasetKmsKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateDatasetKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>The operation was denied because either the calling principal lacks the required
 *             Amazon Web Services Key Management Service (Amazon Web Services KMS) permission on the
 *             key, or the key policy does not grant Amazon CloudWatch the permissions it needs
 *             to use the key. Verify that the caller has <code>kms:Decrypt</code> permission on the
 *             key, and that the key policy grants the CloudWatch service principal the
 *             <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code>,
 *             <code>kms:Encrypt</code>, <code>kms:Decrypt</code>, and <code>kms:ReEncrypt*</code>
 *             permissions described in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_AssociateDatasetKmsKey.html">AssociateDatasetKmsKey</a>.</p>
 *
 * @throws {@link KmsKeyDisabledException} (client fault)
 *  <p>The specified Amazon Web Services Key Management Service (Amazon Web Services KMS) key
 *             is disabled or pending deletion. Re-enable the key (or restore it, if it is pending
 *             deletion) and retry the operation.</p>
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services Key Management Service (Amazon Web Services KMS) key
 *             could not be found. Verify that the key Amazon Resource Name (ARN) is correct, that
 *             the key exists, and that it is in the same Amazon Web Services Region as the
 *             resource.</p>
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
export class AssociateDatasetKmsKeyCommand extends command<AssociateDatasetKmsKeyCommandInput, AssociateDatasetKmsKeyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDatasetKmsKey",
  AssociateDatasetKmsKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDatasetKmsKeyInput;
      output: {};
    };
    sdk: {
      input: AssociateDatasetKmsKeyCommandInput;
      output: AssociateDatasetKmsKeyCommandOutput;
    };
  };
}
