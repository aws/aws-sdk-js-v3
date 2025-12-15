// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { DeleteImportedKeyMaterialRequest, DeleteImportedKeyMaterialResponse } from "../models/models_0";
import { DeleteImportedKeyMaterial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImportedKeyMaterialCommand}.
 */
export interface DeleteImportedKeyMaterialCommandInput extends DeleteImportedKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImportedKeyMaterialCommand}.
 */
export interface DeleteImportedKeyMaterialCommandOutput extends DeleteImportedKeyMaterialResponse, __MetadataBearer {}

/**
 * <p>Deletes key material that was previously imported. This operation makes the specified KMS
 *       key temporarily unusable. To restore the usability of the KMS key, reimport the same key
 *       material. For more information about importing key material into KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a>
 *       in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>When the specified KMS key is in the <code>PendingDeletion</code> state, this operation
 *       does not change the KMS key's state. Otherwise, it changes the KMS key's state to
 *         <code>PendingImport</code>.</p>
 *          <p class="title">
 *             <b>Considerations for multi-Region symmetric encryption keys</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>When you delete the key material of a primary Region key that is in
 *             <code>PENDING_ROTATION</code> or <code>PENDING_MULTI_REGION_IMPORT_AND_ROTATION</code>state,
 *             you'll also be deleting the key materials for the replica Region keys.</p>
 *             </li>
 *             <li>
 *                <p>If you delete any key material of a replica Region key, the primary Region key and
 *           other replica Region keys remain unchanged.</p>
 *             </li>
 *          </ul>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteImportedKeyMaterial</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetParametersForImport</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeyRotations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeleteImportedKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeleteImportedKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DeleteImportedKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   KeyMaterialId: "STRING_VALUE",
 * };
 * const command = new DeleteImportedKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImportedKeyMaterialResponse
 * //   KeyId: "STRING_VALUE",
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteImportedKeyMaterialCommandInput - {@link DeleteImportedKeyMaterialCommandInput}
 * @returns {@link DeleteImportedKeyMaterialCommandOutput}
 * @see {@link DeleteImportedKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link DeleteImportedKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To delete imported key material
 * ```javascript
 * // The following example deletes the imported key material from the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6"
 * };
 * const command = new DeleteImportedKeyMaterialCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteImportedKeyMaterialCommand extends $Command
  .classBuilder<
    DeleteImportedKeyMaterialCommandInput,
    DeleteImportedKeyMaterialCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "DeleteImportedKeyMaterial", {})
  .n("KMSClient", "DeleteImportedKeyMaterialCommand")
  .sc(DeleteImportedKeyMaterial$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImportedKeyMaterialRequest;
      output: DeleteImportedKeyMaterialResponse;
    };
    sdk: {
      input: DeleteImportedKeyMaterialCommandInput;
      output: DeleteImportedKeyMaterialCommandOutput;
    };
  };
}
