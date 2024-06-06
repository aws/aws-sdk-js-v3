// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DisconnectCustomKeyStoreRequest, DisconnectCustomKeyStoreResponse } from "../models/models_0";
import { de_DisconnectCustomKeyStoreCommand, se_DisconnectCustomKeyStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisconnectCustomKeyStoreCommand}.
 */
export interface DisconnectCustomKeyStoreCommandInput extends DisconnectCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link DisconnectCustomKeyStoreCommand}.
 */
export interface DisconnectCustomKeyStoreCommandOutput extends DisconnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Disconnects the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> from its backing key store. This operation disconnects an
 *       CloudHSM key store from its associated CloudHSM cluster or disconnects an external key store from
 *       the external key store proxy that communicates with your external key manager.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>While a custom key store is disconnected, you can manage the custom key store and its KMS
 *       keys, but you cannot create or use its KMS keys. You can reconnect the custom key store at any
 *       time.</p>
 *          <note>
 *             <p>While a custom key store is disconnected, all attempts to create KMS keys in the custom key store or to use existing KMS keys in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> will
 *         fail. This action can prevent users from storing and accessing sensitive data.</p>
 *          </note>
 *          <p>When you disconnect a custom key store, its <code>ConnectionState</code> changes to
 *         <code>Disconnected</code>. To find the connection state of a custom key store, use the <a>DescribeCustomKeyStores</a> operation. To reconnect a custom key store, use the
 *         <a>ConnectCustomKeyStore</a> operation.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DisconnectCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ConnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DisconnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DisconnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // DisconnectCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new DisconnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisconnectCustomKeyStoreCommandInput - {@link DisconnectCustomKeyStoreCommandInput}
 * @returns {@link DisconnectCustomKeyStoreCommandOutput}
 * @see {@link DisconnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DisconnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CustomKeyStoreInvalidStateException} (client fault)
 *  <p>The request was rejected because of the <code>ConnectionState</code> of the custom key
 *       store. To get the <code>ConnectionState</code> of a custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p>This exception is thrown under the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>You requested the <a>ConnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>FAILED</code>. This operation is valid for all other <code>ConnectionState</code>
 *           values. To reconnect a custom key store in a <code>FAILED</code> state, disconnect it
 *             (<a>DisconnectCustomKeyStore</a>), then connect it
 *             (<code>ConnectCustomKeyStore</code>).</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>CreateKey</a> operation in a custom key store that is
 *           not connected. This operations is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>DisconnectCustomKeyStore</a> operation on a custom key
 *           store with a <code>ConnectionState</code> of <code>DISCONNECTING</code> or
 *             <code>DISCONNECTED</code>. This operation is valid for all other
 *             <code>ConnectionState</code> values.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>UpdateCustomKeyStore</a> or <a>DeleteCustomKeyStore</a> operation on a custom key store that is not
 *           disconnected. This operation is valid only when the custom key store
 *             <code>ConnectionState</code> is <code>DISCONNECTED</code>.</p>
 *             </li>
 *             <li>
 *                <p>You requested the <a>GenerateRandom</a> operation in an CloudHSM key store
 *           that is not connected. This operation is valid only when the CloudHSM key store
 *             <code>ConnectionState</code> is <code>CONNECTED</code>. </p>
 *             </li>
 *          </ul>
 *
 * @throws {@link CustomKeyStoreNotFoundException} (client fault)
 *  <p>The request was rejected because KMS cannot find a custom key store with the specified
 *       key store name or ID.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @public
 * @example To disconnect a custom key store from its CloudHSM cluster
 * ```javascript
 * // This example disconnects an AWS KMS custom key store from its backing key store. For an AWS CloudHSM key store, it disconnects the key store from its AWS CloudHSM cluster. For an external key store, it disconnects the key store from the external key store proxy that communicates with your external key manager. This operation doesn't return any data. To verify that the custom key store is disconnected, use the <code>DescribeCustomKeyStores</code> operation.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * };
 * const command = new DisconnectCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-disconnect-a-custom-key-store-from-its-cloudhsm-cluster-234abcdefABC
 * ```
 *
 */
export class DisconnectCustomKeyStoreCommand extends $Command
  .classBuilder<
    DisconnectCustomKeyStoreCommandInput,
    DisconnectCustomKeyStoreCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "DisconnectCustomKeyStore", {})
  .n("KMSClient", "DisconnectCustomKeyStoreCommand")
  .f(void 0, void 0)
  .ser(se_DisconnectCustomKeyStoreCommand)
  .de(de_DisconnectCustomKeyStoreCommand)
  .build() {}
