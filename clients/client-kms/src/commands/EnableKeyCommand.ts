// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableKeyRequest } from "../models/models_0";
import { EnableKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableKeyCommand}.
 */
export interface EnableKeyCommandInput extends EnableKeyRequest {}
/**
 * @public
 *
 * The output of {@link EnableKeyCommand}.
 */
export interface EnableKeyCommandOutput extends __MetadataBearer {}

/**
 * Sets the key state of a KMS key to enabled. This allows you to use the KMS key for [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/kms-cryptography.html#cryptographic-operations).
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:EnableKey](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**: DisableKey
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, EnableKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EnableKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // EnableKeyRequest
 *   KeyId: "STRING_VALUE", // required
 * };
 * const command = new EnableKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableKeyCommandInput - {@link EnableKeyCommandInput}
 * @returns {@link EnableKeyCommandOutput}
 * @see {@link EnableKeyCommandInput} for command's `input` shape.
 * @see {@link EnableKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To enable a KMS key
 * ```javascript
 * // The following example enables the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new EnableKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableKeyCommand extends command<EnableKeyCommandInput, EnableKeyCommandOutput>(
  _ep0,
  _mw0,
  "EnableKey",
  EnableKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableKeyRequest;
      output: {};
    };
    sdk: {
      input: EnableKeyCommandInput;
      output: EnableKeyCommandOutput;
    };
  };
}
