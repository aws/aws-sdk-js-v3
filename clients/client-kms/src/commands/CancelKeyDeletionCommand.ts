// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelKeyDeletionRequest, CancelKeyDeletionResponse } from "../models/models_0";
import { CancelKeyDeletion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelKeyDeletionCommand}.
 */
export interface CancelKeyDeletionCommandInput extends CancelKeyDeletionRequest {}
/**
 * @public
 *
 * The output of {@link CancelKeyDeletionCommand}.
 */
export interface CancelKeyDeletionCommandOutput extends CancelKeyDeletionResponse, __MetadataBearer {}

/**
 * Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is `Disabled`. To enable the KMS key, use EnableKey.
 *
 * For more information about scheduling and canceling deletion of a KMS key, see [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the *Key Management Service Developer Guide*.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:CancelKeyDeletion](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**: ScheduleKeyDeletion
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, CancelKeyDeletionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CancelKeyDeletionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // CancelKeyDeletionRequest
 *   KeyId: "STRING_VALUE", // required
 * };
 * const command = new CancelKeyDeletionCommand(input);
 * const response = await client.send(command);
 * // { // CancelKeyDeletionResponse
 * //   KeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelKeyDeletionCommandInput - {@link CancelKeyDeletionCommandInput}
 * @returns {@link CancelKeyDeletionCommandOutput}
 * @see {@link CancelKeyDeletionCommandInput} for command's `input` shape.
 * @see {@link CancelKeyDeletionCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To cancel deletion of a KMS key
 * ```javascript
 * // The following example cancels deletion of the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new CancelKeyDeletionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelKeyDeletionCommand extends command<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput>(
  _ep0,
  _mw0,
  "CancelKeyDeletion",
  CancelKeyDeletion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelKeyDeletionRequest;
      output: CancelKeyDeletionResponse;
    };
    sdk: {
      input: CancelKeyDeletionCommandInput;
      output: CancelKeyDeletionCommandOutput;
    };
  };
}
