// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePrimaryRegionRequest } from "../models/models_0";
import { UpdatePrimaryRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePrimaryRegionCommand}.
 */
export interface UpdatePrimaryRegionCommandInput extends UpdatePrimaryRegionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePrimaryRegionCommand}.
 */
export interface UpdatePrimaryRegionCommandOutput extends __MetadataBearer {}

/**
 * Changes the primary key of a multi-Region key.
 *
 * This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in `us-east-1` and a replica key in `eu-west-2`. If you run `UpdatePrimaryRegion` with a `PrimaryRegion` value of `eu-west-2`, the primary key is now the key in `eu-west-2`, and the key in `us-east-1` becomes a replica key. For details, see [Change the primary key in a set of multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-update.html) in the *Key Management Service Developer Guide*.
 *
 * This operation supports *multi-Region keys*, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see [Multi-Region keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Key Management Service Developer Guide*.
 *
 * The *primary key* of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id), [key spec](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-spec), [key usage](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-usage), [key material origin](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-origin), and [automatic key rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html). It's the only key that can be replicated. You cannot [delete the primary key](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) until all replica keys are deleted.
 *
 * The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the DescribeKey operation on the primary key or any replica key. To create a replica key, use the ReplicateKey operation.
 *
 * You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations.
 *
 * Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as `DescribeKey` might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of `Updating`. The original key state is restored when the update is complete. While the key state is `Updating`, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the `Updating` key state, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation.
 *
 * **Cross-account use**: No. You cannot use this operation in a different Amazon Web Services account.
 *
 * **Required permissions**:
 *
 * - `kms:UpdatePrimaryRegion` on the current primary key (in the primary key's Region). Include this permission primary key's key policy.
 * - `kms:UpdatePrimaryRegion` on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy.
 *
 * **Related operations**
 *
 * - CreateKey
 * - ReplicateKey
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdatePrimaryRegionCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdatePrimaryRegionCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // UpdatePrimaryRegionRequest
 *   KeyId: "STRING_VALUE", // required
 *   PrimaryRegion: "STRING_VALUE", // required
 * };
 * const command = new UpdatePrimaryRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePrimaryRegionCommandInput - {@link UpdatePrimaryRegionCommandInput}
 * @returns {@link UpdatePrimaryRegionCommandOutput}
 * @see {@link UpdatePrimaryRegionCommandInput} for command's `input` shape.
 * @see {@link UpdatePrimaryRegionCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DisabledException} (client fault)
 *
 * The request was rejected because the specified KMS key is not enabled.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To update the primary Region of a multi-Region KMS key
 * ```javascript
 * // The following UpdatePrimaryRegion example changes the multi-Region replica key in the eu-central-1 Region to the primary key. The current primary key in the us-west-1 Region becomes a replica key.
 *
 * The KeyId parameter identifies the current primary key in the us-west-1 Region. The PrimaryRegion parameter indicates the Region of the replica key that will become the new primary key.
 *
 * This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-1:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab",
 *   PrimaryRegion: "eu-central-1"
 * };
 * const command = new UpdatePrimaryRegionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePrimaryRegionCommand extends command<UpdatePrimaryRegionCommandInput, UpdatePrimaryRegionCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePrimaryRegion",
  UpdatePrimaryRegion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePrimaryRegionRequest;
      output: {};
    };
    sdk: {
      input: UpdatePrimaryRegionCommandInput;
      output: UpdatePrimaryRegionCommandOutput;
    };
  };
}
