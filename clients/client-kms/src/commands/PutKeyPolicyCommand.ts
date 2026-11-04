// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutKeyPolicyRequest } from "../models/models_0";
import { PutKeyPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutKeyPolicyCommand}.
 */
export interface PutKeyPolicyCommandInput extends PutKeyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutKeyPolicyCommand}.
 */
export interface PutKeyPolicyCommandOutput extends __MetadataBearer {}

/**
 * Attaches a key policy to the specified KMS key.
 *
 * For more information about key policies, see [Key Policies](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Key Management Service Developer Guide*. For help writing and formatting a JSON policy document, see the [IAM JSON Policy Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html) in the **Identity and Access Management User Guide** . For examples of adding a key policy in multiple programming languages, see [Use PutKeyPolicy with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_PutKeyPolicy_section.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**: GetKeyPolicy
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, PutKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, PutKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // PutKeyPolicyRequest
 *   KeyId: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 *   BypassPolicyLockoutSafetyCheck: true || false,
 * };
 * const command = new PutKeyPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutKeyPolicyCommandInput - {@link PutKeyPolicyCommandInput}
 * @returns {@link PutKeyPolicyCommandOutput}
 * @see {@link PutKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link PutKeyPolicyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a length constraint or quota was exceeded. For more information, see [Quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the *Key Management Service Developer Guide*.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the specified policy is not syntactically or semantically correct.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To attach a key policy to a KMS key
 * ```javascript
 * // The following example attaches a key policy to the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Policy: `{
 *     "Version": "2012-10-17",
 *     "Id": "custom-policy-2016-12-07",
 *     "Statement": [
 *         {
 *             "Sid": "Enable IAM User Permissions",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "AWS": "arn:aws:iam::111122223333:root"
 *             },
 *             "Action": "kms:*",
 *             "Resource": "*"
 *         },
 *         {
 *             "Sid": "Allow access for Key Administrators",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "AWS": [
 *                     "arn:aws:iam::111122223333:user/ExampleAdminUser",
 *                     "arn:aws:iam::111122223333:role/ExampleAdminRole"
 *                 ]
 *             },
 *             "Action": [
 *                 "kms:Create*",
 *                 "kms:Describe*",
 *                 "kms:Enable*",
 *                 "kms:List*",
 *                 "kms:Put*",
 *                 "kms:Update*",
 *                 "kms:Revoke*",
 *                 "kms:Disable*",
 *                 "kms:Get*",
 *                 "kms:Delete*",
 *                 "kms:ScheduleKeyDeletion",
 *                 "kms:CancelKeyDeletion"
 *             ],
 *             "Resource": "*"
 *         },
 *         {
 *             "Sid": "Allow use of the key",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "AWS": "arn:aws:iam::111122223333:role/ExamplePowerUserRole"
 *             },
 *             "Action": [
 *                 "kms:Encrypt",
 *                 "kms:Decrypt",
 *                 "kms:ReEncrypt*",
 *                 "kms:GenerateDataKey*",
 *                 "kms:DescribeKey"
 *             ],
 *             "Resource": "*"
 *         },
 *         {
 *             "Sid": "Allow attachment of persistent resources",
 *             "Effect": "Allow",
 *             "Principal": {
 *                 "AWS": "arn:aws:iam::111122223333:role/ExamplePowerUserRole"
 *             },
 *             "Action": [
 *                 "kms:CreateGrant",
 *                 "kms:ListGrants",
 *                 "kms:RevokeGrant"
 *             ],
 *             "Resource": "*",
 *             "Condition": {
 *                 "Bool": {
 *                     "kms:GrantIsForAWSResource": "true"
 *                 }
 *             }
 *         }
 *     ]
 * }
 * `,
 *   PolicyName: "default"
 * };
 * const command = new PutKeyPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutKeyPolicyCommand extends command<PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutKeyPolicy",
  PutKeyPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutKeyPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutKeyPolicyCommandInput;
      output: PutKeyPolicyCommandOutput;
    };
  };
}
