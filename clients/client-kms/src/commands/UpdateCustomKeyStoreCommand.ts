// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreRequestFilterSensitiveLog,
  UpdateCustomKeyStoreResponse,
  UpdateCustomKeyStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomKeyStoreCommand,
  serializeAws_json1_1UpdateCustomKeyStoreCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCustomKeyStoreCommandInput extends UpdateCustomKeyStoreRequest {}
export interface UpdateCustomKeyStoreCommandOutput extends UpdateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Changes the properties of a custom key store. You can use this operation to change the
 *       properties of an CloudHSM key store or an external key store.</p>
 *          <p>Use the required <code>CustomKeyStoreId</code> parameter to identify the custom key store.
 *       Use the remaining optional parameters to change its properties. This operation does not return
 *       any property values. To verify the updated property values, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <important>
 *             <p>When updating the properties of an external key store, verify that the updated settings
 *         connect your key store, via the external key store proxy, to the same external key manager
 *         as the previous settings, or to a backup or snapshot of the external key manager with the
 *         same cryptographic keys. If the updated connection settings fail, you can fix them and
 *         retry, although an extended delay might disrupt Amazon Web Services services. However, if KMS
 *         permanently loses its access to cryptographic keys, ciphertext encrypted under those keys is
 *         unrecoverable.</p>
 *          </important>
 *          <note>
 *             <p>For external key stores:</p>
 *             <p>Some external key managers provide a simpler method for updating an external key store.
 *         For details, see your external key manager documentation.</p>
 *             <p>When updating an external key store in the KMS console, you can upload a JSON-based
 *         proxy configuration file with the desired values. You cannot upload the proxy configuration
 *         file to the <code>UpdateCustomKeyStore</code> operation. However, you can use the file to
 *         help you determine the correct values for the <code>UpdateCustomKeyStore</code>
 *         parameters.</p>
 *          </note>
 *          <p>For an CloudHSM key store, you can use this operation to change the custom key store friendly
 *       name (<code>NewCustomKeyStoreName</code>), to tell KMS about a change to the
 *         <code>kmsuser</code> crypto user password (<code>KeyStorePassword</code>), or to associate
 *       the custom key store with a different, but related, CloudHSM cluster
 *         (<code>CloudHsmClusterId</code>). To update any property of an CloudHSM key store, the
 *         <code>ConnectionState</code> of the CloudHSM key store must be <code>DISCONNECTED</code>. </p>
 *          <p>For an external key store, you can use this operation to change the custom key store
 *       friendly name (<code>NewCustomKeyStoreName</code>), or to tell KMS about a change to the
 *       external key store proxy authentication credentials
 *         (<code>XksProxyAuthenticationCredential</code>), connection method
 *         (<code>XksProxyConnectivity</code>), external proxy endpoint
 *         (<code>XksProxyUriEndpoint</code>) and path (<code>XksProxyUriPath</code>). For external key
 *       stores with an <code>XksProxyConnectivity</code> of <code>VPC_ENDPOINT_SERVICE</code>, you can
 *       also update the Amazon VPC endpoint service name (<code>XksProxyVpcEndpointServiceName</code>). To
 *       update most properties of an external key store, the <code>ConnectionState</code> of the
 *       external key store must be <code>DISCONNECTED</code>. However, you can update the
 *         <code>CustomKeyStoreName</code>, <code>XksProxyAuthenticationCredential</code>, and
 *         <code>XksProxyUriPath</code> of an external key store when it is in the CONNECTED or
 *       DISCONNECTED state. </p>
 *          <p>If your update requires a <code>DISCONNECTED</code> state, before using
 *         <code>UpdateCustomKeyStore</code>, use the <a>DisconnectCustomKeyStore</a>
 *       operation to disconnect the custom key store. After the <code>UpdateCustomKeyStore</code>
 *       operation completes, use the <a>ConnectCustomKeyStore</a> to reconnect the custom
 *       key store. To find the <code>ConnectionState</code> of the custom key store, use the <a>DescribeCustomKeyStores</a> operation. </p>
 *          <p>
 *     </p>
 *          <p>Before updating the custom key store, verify that the new values allow KMS to connect
 *       the custom key store to its backing key store. For example, before you change the
 *         <code>XksProxyUriPath</code> value, verify that the external key store proxy is reachable at
 *       the new path.</p>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p>
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
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class UpdateCustomKeyStoreCommand extends $Command<
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
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

  constructor(readonly input: UpdateCustomKeyStoreCommandInput) {
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
  ): Handler<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomKeyStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1UpdateCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
