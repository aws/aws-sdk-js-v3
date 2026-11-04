// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateRandomRequest, GenerateRandomResponse } from "../models/models_0";
import { GenerateRandom$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateRandomCommand}.
 */
export interface GenerateRandomCommandInput extends GenerateRandomRequest {}
/**
 * @public
 *
 * The output of {@link GenerateRandomCommand}.
 */
export interface GenerateRandomCommandOutput extends GenerateRandomResponse, __MetadataBearer {}

/**
 * Returns a random byte string that is cryptographically secure.
 *
 * You must use the `NumberOfBytes` parameter to specify the length of the random byte string. There is no default value for string length.
 *
 * By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the `CustomKeyStoreId` parameter.
 *
 * `GenerateRandom` also supports [Amazon Web Services Nitro Enclaves](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html), which provide an isolated compute environment in Amazon EC2. To call `GenerateRandom` for a Nitro enclave or NitroTPM, use the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK. Use the `Recipient` parameter to provide the attestation document for the attested environment. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (`CiphertextForRecipient`). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
 *
 * For more information about entropy and random number generation, see [Entropy and random number generation](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#entropy-and-random-numbers) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Not applicable. `GenerateRandom` does not use any account-specific resources, such as KMS keys.
 *
 * **Required permissions**: [kms:GenerateRandom](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (IAM policy)
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateRandomCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateRandomCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GenerateRandomRequest
 *   NumberOfBytes: Number("int"),
 *   CustomKeyStoreId: "STRING_VALUE",
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 * };
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * // { // GenerateRandomResponse
 * //   Plaintext: new Uint8Array(),
 * //   CiphertextForRecipient: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GenerateRandomCommandInput - {@link GenerateRandomCommandInput}
 * @returns {@link GenerateRandomCommandOutput}
 * @see {@link GenerateRandomCommandInput} for command's `input` shape.
 * @see {@link GenerateRandomCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CustomKeyStoreInvalidStateException} (client fault)
 *
 * The request was rejected because of the `ConnectionState` of the custom key store. To get the `ConnectionState` of a custom key store, use the DescribeCustomKeyStores operation.
 *
 * This exception is thrown under the following conditions:
 *
 * - You requested the ConnectCustomKeyStore operation on a custom key store with a `ConnectionState` of `DISCONNECTING` or `FAILED`. This operation is valid for all other `ConnectionState` values. To reconnect a custom key store in a `FAILED` state, disconnect it (DisconnectCustomKeyStore), then connect it (`ConnectCustomKeyStore`).
 * - You requested the CreateKey operation in a custom key store that is not connected. This operations is valid only when the custom key store `ConnectionState` is `CONNECTED`.
 * - You requested the DisconnectCustomKeyStore operation on a custom key store with a `ConnectionState` of `DISCONNECTING` or `DISCONNECTED`. This operation is valid for all other `ConnectionState` values.
 * - You requested the UpdateCustomKeyStore or DeleteCustomKeyStore operation on a custom key store that is not disconnected. `UpdateCustomKeyStore` can be called on a custom key store in the `CONNECTED` state only to update `NewCustomKeyStoreName`. For all other properties, the custom key store `ConnectionState` must be `DISCONNECTED`.
 * - You requested the GenerateRandom operation in an CloudHSM key store that is not connected. This operation is valid only when the CloudHSM key store `ConnectionState` is `CONNECTED`.
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *
 * The request was rejected because KMS cannot find a custom key store with the specified key store name or ID.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To generate random data
 * ```javascript
 * // The following example generates 32 bytes of random data.
 * const input = {
 *   NumberOfBytes: 32
 * };
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Plaintext: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateRandomCommand extends command<GenerateRandomCommandInput, GenerateRandomCommandOutput>(
  _ep0,
  _mw0,
  "GenerateRandom",
  GenerateRandom$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateRandomRequest;
      output: GenerateRandomResponse;
    };
    sdk: {
      input: GenerateRandomCommandInput;
      output: GenerateRandomCommandOutput;
    };
  };
}
