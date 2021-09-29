import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteCustomKeyStoreRequest, DeleteCustomKeyStoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCustomKeyStoreCommand,
  serializeAws_json1_1DeleteCustomKeyStoreCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteCustomKeyStoreCommandInput extends DeleteCustomKeyStoreRequest {}
export interface DeleteCustomKeyStoreCommandOutput extends DeleteCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>. This operation does not delete the CloudHSM cluster that is
 *       associated with the custom key store, or affect any users or keys in the cluster.</p>
 *          <p>The custom key store that you delete cannot contain any KMS <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys">KMS keys</a>. Before
 *       deleting the key store, verify that you will never need to use any of the KMS keys in the key
 *       store for any <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>. Then, use <a>ScheduleKeyDeletion</a> to delete the
 *       KMS keys from the key store. When the scheduled waiting period
 *       expires, the <code>ScheduleKeyDeletion</code> operation deletes the KMS keys. Then it makes a best
 *       effort to delete the key material from the associated cluster. However, you might need to
 *       manually <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-orphaned-key">delete the orphaned key
 *         material</a> from the cluster and its backups.</p>
 *          <p>After all KMS keys are deleted from KMS, use <a>DisconnectCustomKeyStore</a> to
 *       disconnect the key store from KMS. Then, you can delete the custom key store.</p>
 *          <p>Instead of deleting the custom key store, consider using <a>DisconnectCustomKeyStore</a> to disconnect it from KMS. While the key store is
 *       disconnected, you cannot create or use the KMS keys in the key store. But, you do not need to
 *       delete KMS keys and you can reconnect a disconnected custom key store at any time.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * single-tenant key store.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *
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
 * const command = new DeleteCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCustomKeyStoreCommand extends $Command<
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DeleteCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomKeyStoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCustomKeyStoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1DeleteCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
