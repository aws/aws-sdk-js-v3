// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteCustomKeyStoreRequest, DeleteCustomKeyStoreResponse } from "../models/models_0";
import { de_DeleteCustomKeyStoreCommand, se_DeleteCustomKeyStoreCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomKeyStoreCommand}.
 */
export interface DeleteCustomKeyStoreCommandInput extends DeleteCustomKeyStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomKeyStoreCommand}.
 */
export interface DeleteCustomKeyStoreCommandOutput extends DeleteCustomKeyStoreResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not affect any backing elements of the
 *       custom key store. It does not delete the CloudHSM cluster that is associated with an CloudHSM key
 *       store, or affect any users or keys in the cluster. For an external key store, it does not
 *       affect the external key store proxy, external key manager, or any external keys.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>The custom key store that you delete cannot contain any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a>. Before deleting the key store,
 *       verify that you will never need to use any of the KMS keys in the key store for any
 *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the KMS keys from the
 *       key store. After the required waiting period expires and all KMS keys are deleted from the
 *       custom key store, use <a>DisconnectCustomKeyStore</a> to disconnect the key store
 *       from KMS. Then, you can delete the custom key store.</p>
 *          <p>For keys in an CloudHSM key store, the <code>ScheduleKeyDeletion</code> operation makes a
 *       best effort to delete the key material from the associated cluster. However, you might need to
 *       manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key
 *         material</a> from the cluster and its backups. KMS never creates, manages, or deletes
 *       cryptographic keys in the external key manager associated with an external key store. You must
 *       manage them using your external key manager tools.</p>
 *          <p>Instead of deleting the custom key store, consider using the <a>DisconnectCustomKeyStore</a> operation to disconnect the custom key store from its
 *       backing key store. While the key store is disconnected, you cannot create or use the KMS keys
 *       in the key store. But, you do not need to delete KMS keys and you can reconnect a disconnected
 *       custom key store at any time.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeleteCustomKeyStore</a> (IAM policy)</p>
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
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeleteCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeleteCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // DeleteCustomKeyStoreRequest
 *   CustomKeyStoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomKeyStoreCommandInput - {@link DeleteCustomKeyStoreCommandInput}
 * @returns {@link DeleteCustomKeyStoreCommandOutput}
 * @see {@link DeleteCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link CustomKeyStoreHasCMKsException} (client fault)
 *  <p>The request was rejected because the custom key store contains KMS keys. After verifying
 *       that you do not need to use the KMS keys, use the <a>ScheduleKeyDeletion</a>
 *       operation to delete the KMS keys. After they are deleted, you can delete the custom key
 *       store.</p>
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
 * @example To delete a custom key store from AWS KMS
 * ```javascript
 * // This example deletes a custom key store from AWS KMS. This operation does not affect the backing key store, such as a CloudHSM cluster, external key store proxy, or your external key manager. This operation doesn't return any data. To verify that the operation was successful, use the DescribeCustomKeyStores operation.
 * const input = {
 *   "CustomKeyStoreId": "cks-1234567890abcdef0"
 * };
 * const command = new DeleteCustomKeyStoreCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-custom-key-store-from-aws-kms-1628630837145
 * ```
 *
 */
export class DeleteCustomKeyStoreCommand extends $Command<
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteCustomKeyStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomKeyStoreCommandInput, DeleteCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DeleteCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomKeyStoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomKeyStoreCommandOutput> {
    return de_DeleteCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
