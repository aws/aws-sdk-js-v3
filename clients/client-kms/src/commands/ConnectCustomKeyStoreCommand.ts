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
  ConnectCustomKeyStoreRequest,
  ConnectCustomKeyStoreRequestFilterSensitiveLog,
  ConnectCustomKeyStoreResponse,
  ConnectCustomKeyStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ConnectCustomKeyStoreCommand,
  serializeAws_json1_1ConnectCustomKeyStoreCommand,
} from "../protocols/Aws_json1_1";

export interface ConnectCustomKeyStoreCommandInput extends ConnectCustomKeyStoreRequest {}
export interface ConnectCustomKeyStoreCommandOutput extends ConnectCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Connects or reconnects a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> to its backing key store. For an CloudHSM key
 *       store, <code>ConnectCustomKeyStore</code> connects the key store to its associated CloudHSM
 *       cluster. For an external key store, <code>ConnectCustomKeyStore</code> connects the key store
 *       to the external key store proxy that communicates with your external key manager.</p>
 *          <p>The custom key store must be connected before you can create KMS keys in the key store or
 *       use the KMS keys it contains. You can disconnect and reconnect a custom key store at any
 *       time.</p>
 *          <p>The connection process for a custom key store can take an extended amount of time to
 *       complete. This operation starts the connection process, but it does not wait for it to
 *       complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON
 *       object with no properties. However, this response does not indicate that the custom key store
 *       is connected. To get the connection state of the custom key store, use the <a>DescribeCustomKeyStores</a> operation.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>The <code>ConnectCustomKeyStore</code> operation might fail for various reasons. To find
 *       the reason, use the <a>DescribeCustomKeyStores</a> operation and see the
 *         <code>ConnectionErrorCode</code> in the response. For help interpreting the
 *         <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>To fix the failure, use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect the custom key store, correct the error, use the <a>UpdateCustomKeyStore</a> operation if necessary, and then use
 *         <code>ConnectCustomKeyStore</code> again.</p>
 *          <p>
 *             <b>CloudHSM key store</b>
 *          </p>
 *          <p>During the connection process for an CloudHSM key store, KMS finds the CloudHSM cluster that
 *       is associated with the custom key store, creates the connection infrastructure, connects to
 *       the cluster, logs into the CloudHSM client as the <code>kmsuser</code> CU, and rotates its
 *       password.</p>
 *          <p>To connect an CloudHSM key store, its associated CloudHSM cluster must have at least one active
 *       HSM. To get the number of active HSMs in a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation. To add HSMs
 *       to the cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html">CreateHsm</a> operation. Also, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                <code>kmsuser</code> crypto
 *         user</a> (CU) must not be logged into the cluster. This prevents KMS from using this
 *       account to log in.</p>
 *          <p>If you are having trouble connecting or disconnecting a CloudHSM key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key
 *         store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>External key store</b>
 *          </p>
 *          <p>When you connect an external key store that uses public endpoint connectivity, KMS tests
 *       its ability to communicate with your external key manager by sending a request via the
 *       external key store proxy.</p>
 *          <p>When you connect to an external key store that uses VPC endpoint service connectivity,
 *       KMS establishes the networking elements that it needs to communicate with your external key
 *       manager via the external key store proxy. This includes creating an interface endpoint to the
 *       VPC endpoint service and a private hosted zone for traffic between KMS and the VPC endpoint
 *       service.</p>
 *          <p>To connect an external key store, KMS must be able to connect to the external key store
 *       proxy, the external key store proxy must be able to communicate with your external key
 *       manager, and the external key manager must be available for cryptographic operations.</p>
 *          <p>If you are having trouble connecting or disconnecting an external key store, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting an external
 *         key store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ConnectCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
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
 *             <li>
 *                <p>
 *                   <a>UpdateCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ConnectCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ConnectCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ConnectCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConnectCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link ConnectCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class ConnectCustomKeyStoreCommand extends $Command<
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
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

  constructor(readonly input: ConnectCustomKeyStoreCommandInput) {
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
  ): Handler<ConnectCustomKeyStoreCommandInput, ConnectCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConnectCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ConnectCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConnectCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConnectCustomKeyStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConnectCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConnectCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConnectCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1ConnectCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
