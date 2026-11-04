// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import { CreateGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandInput extends CreateGrantRequest {}
/**
 * @public
 *
 * The output of {@link CreateGrantCommand}.
 */
export interface CreateGrantCommandOutput extends CreateGrantResponse, __MetadataBearer {}

/**
 * Adds a grant to a KMS key.
 *
 * A *grant* is a policy instrument that allows Amazon Web Services principals to use KMS keys in cryptographic operations. It also can allow them to view a KMS key (DescribeKey) and create and manage grants. When authorizing access to a KMS key, grants are considered along with key policies and IAM policies. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies.
 *
 * You can create a grant for an Amazon Web Services principal (IAM user, IAM role, or Amazon Web Services account) by specifying the `GranteePrincipal` parameter. You can also create a grant for an Amazon Web Services service principal by specifying the `GranteeServicePrincipal` parameter.
 *
 * For detailed information about grants, including grant terminology, see [Grants in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/grants.html) in the **Key Management Service Developer Guide** . For examples of creating grants in several programming languages, see [Use CreateGrant with an Amazon Web Services SDK or CLI](https://docs.aws.amazon.com/kms/latest/developerguide/example_kms_CreateGrant_section.html).
 *
 * The `CreateGrant` operation returns a `GrantToken` and a `GrantId`.
 *
 * - When you create, retire, or revoke a grant, there might be a brief delay, usually less than five minutes, until the grant is available throughout KMS. This state is known as *eventual consistency*. Once the grant has achieved eventual consistency, the grantee principal can use the permissions in the grant without identifying the grant.
 *
 *   However, to use the permissions in the grant immediately, use the `GrantToken` that `CreateGrant` returns. For details, see [Using a grant token](https://docs.aws.amazon.com/kms/latest/developerguide/using-grant-token.html) in the **Key Management Service Developer Guide** .
 * - The `CreateGrant` operation also returns a `GrantId`. You can use the `GrantId` and a key identifier to identify the grant in the RetireGrant and RevokeGrant operations. To find the grant ID, use the ListGrants or ListRetirableGrants operations.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:CreateGrant](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - ListGrants
 * - ListRetirableGrants
 * - RetireGrant
 * - RevokeGrant
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CreateGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // CreateGrantRequest
 *   KeyId: "STRING_VALUE", // required
 *   GranteePrincipal: "STRING_VALUE",
 *   RetiringPrincipal: "STRING_VALUE",
 *   Operations: [ // GrantOperationList // required
 *     "Decrypt" || "Encrypt" || "GenerateDataKey" || "GenerateDataKeyWithoutPlaintext" || "ReEncryptFrom" || "ReEncryptTo" || "Sign" || "Verify" || "GetPublicKey" || "CreateGrant" || "RetireGrant" || "DescribeKey" || "GenerateDataKeyPair" || "GenerateDataKeyPairWithoutPlaintext" || "GenerateMac" || "VerifyMac" || "DeriveSharedSecret" || "Encapsulate" || "Decapsulate",
 *   ],
 *   Constraints: { // GrantConstraints
 *     EncryptionContextSubset: { // EncryptionContextType
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EncryptionContextEquals: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SourceArn: "STRING_VALUE",
 *   },
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   DryRun: true || false,
 *   GranteeServicePrincipal: "STRING_VALUE",
 *   RetiringServicePrincipal: "STRING_VALUE",
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * // { // CreateGrantResponse
 * //   GrantToken: "STRING_VALUE",
 * //   GrantId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGrantCommandInput - {@link CreateGrantCommandInput}
 * @returns {@link CreateGrantCommandOutput}
 * @see {@link CreateGrantCommandInput} for command's `input` shape.
 * @see {@link CreateGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link DisabledException} (client fault)
 *
 * The request was rejected because the specified KMS key is not enabled.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *
 * The request was rejected because the specified grant token is not valid.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To create a grant
 * ```javascript
 * // The following example creates a grant that allows the specified IAM role to encrypt data with the specified KMS key.
 * const input = {
 *   GranteePrincipal: "arn:aws:iam::111122223333:role/ExampleRole",
 *   KeyId: "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Operations: [
 *     "Encrypt",
 *     "Decrypt"
 *   ]
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GrantId: "0c237476b39f8bc44e45212e08498fbe3151305030726c0590dd8d3e9f3d6a60",
 *   GrantToken: "AQpAM2RhZTk1MGMyNTk2ZmZmMzEyYWVhOWViN2I1MWM4Mzc0MWFiYjc0ZDE1ODkyNGFlNTIzODZhMzgyZjBlNGY3NiKIAgEBAgB4Pa6VDCWW__MSrqnre1HIN0Grt00ViSSuUjhqOC8OT3YAAADfMIHcBgkqhkiG9w0BBwaggc4wgcsCAQAwgcUGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMmqLyBTAegIn9XlK5AgEQgIGXZQjkBcl1dykDdqZBUQ6L1OfUivQy7JVYO2-ZJP7m6f1g8GzV47HX5phdtONAP7K_HQIflcgpkoCqd_fUnE114mSmiagWkbQ5sqAVV3ov-VeqgrvMe5ZFEWLMSluvBAqdjHEdMIkHMlhlj4ENZbzBfo9Wxk8b8SnwP4kc4gGivedzFXo-dwN8fxjjq_ZZ9JFOj2ijIbj5FyogDCN0drOfi8RORSEuCEmPvjFRMFAwcmwFkN2NPp89amA"
 * }
 * *\/
 * ```
 *
 * @example To create a grant for a service principal
 * ```javascript
 * // The following example creates a grant that allows the specified AWS service principal to encrypt and decrypt data with the specified KMS key. The grant includes a SourceArn constraint that restricts the grant permissions to requests associated with the specified DynamoDB table.
 * const input = {
 *   Constraints: {
 *     SourceArn: "arn:aws:dynamodb:us-east-2:444455556666:table/ExampleTable"
 *   },
 *   GranteeServicePrincipal: "service-name.amazonaws.com",
 *   KeyId: "arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Operations: [
 *     "Encrypt",
 *     "Decrypt",
 *     "GenerateDataKey",
 *     "DescribeKey"
 *   ],
 *   RetiringServicePrincipal: "service-name.amazonaws.com"
 * };
 * const command = new CreateGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GrantId: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
 *   GrantToken: "AQpAM2RhZTk1MGMyNTk2ZmZmMzEyYWVhOWViN2I1MWM4Mzc0MWFiYjc0ZDE1ODkyNGFlNTIzODZhMzgyZjBlNGY3NiKIAgEBAgB4Pa6VDCWW..."
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateGrantCommand extends command<CreateGrantCommandInput, CreateGrantCommandOutput>(
  _ep0,
  _mw0,
  "CreateGrant",
  CreateGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGrantRequest;
      output: CreateGrantResponse;
    };
    sdk: {
      input: CreateGrantCommandInput;
      output: CreateGrantCommandOutput;
    };
  };
}
