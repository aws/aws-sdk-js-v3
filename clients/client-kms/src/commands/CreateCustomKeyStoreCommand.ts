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
  CreateCustomKeyStoreRequest,
  CreateCustomKeyStoreRequestFilterSensitiveLog,
  CreateCustomKeyStoreResponse,
  CreateCustomKeyStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomKeyStoreCommand,
  serializeAws_json1_1CreateCustomKeyStoreCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomKeyStoreCommandInput extends CreateCustomKeyStoreRequest {}
export interface CreateCustomKeyStoreCommandOutput extends CreateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a> backed by a key store that you own and manage. When you use a
 *       KMS key in a custom key store for a cryptographic operation, the cryptographic operation is
 *       actually performed in your key store using your keys. KMS supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-cloudhsm.html">CloudHSM key stores</a>
 *       backed by an <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html">CloudHSM cluster</a>
 *       and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html">external key stores</a> backed by an external key store proxy and
 *       external key manager outside of Amazon Web Services.</p>
 *          <p> This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * key store that you own and manage.</p>
 *          <p>Before you create the custom key store, the required elements must be in place and
 *       operational. We recommend that you use the test tools that KMS provides to verify the
 *       configuration your external key store proxy. For details about the required elements and
 *       verification tests, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keystore.html#before-keystore">Assemble the prerequisites (for
 *         CloudHSM key stores)</a> or <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-xks-keystore.html#xks-requirements">Assemble the prerequisites (for
 *         external key stores)</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>To create a custom key store, use the following parameters.</p>
 *          <ul>
 *             <li>
 *                <p>To create an CloudHSM key store, specify the <code>CustomKeyStoreName</code>,
 *             <code>CloudHsmClusterId</code>, <code>KeyStorePassword</code>, and
 *             <code>TrustAnchorCertificate</code>. The <code>CustomKeyStoreType</code> parameter is
 *           optional for CloudHSM key stores. If you include it, set it to the default value,
 *             <code>AWS_CLOUDHSM</code>. For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting an CloudHSM key store</a> in the
 *           <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>To create an external key store, specify the <code>CustomKeyStoreName</code> and a
 *             <code>CustomKeyStoreType</code> of <code>EXTERNAL_KEY_STORE</code>. Also, specify values
 *           for <code>XksProxyConnectivity</code>, <code>XksProxyAuthenticationCredential</code>,
 *             <code>XksProxyUriEndpoint</code>, and <code>XksProxyUriPath</code>. If your
 *             <code>XksProxyConnectivity</code> value is <code>VPC_ENDPOINT_SERVICE</code>, specify
 *           the <code>XksProxyVpcEndpointServiceName</code> parameter. For help with failures, see
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/xks-troubleshooting.html">Troubleshooting
 *             an external key store</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>For external key stores:</p>
 *             <p>Some external key managers provide a simpler method for creating an external key store.
 *         For details, see your external key manager documentation.</p>
 *             <p>When creating an external key store in the KMS console, you can upload a JSON-based
 *         proxy configuration file with the desired values. You cannot use a proxy configuration
 *         with the <code>CreateCustomKeyStore</code> operation. However, you can use the values in
 *         the file to help you determine the correct values for the <code>CreateCustomKeyStore</code>
 *         parameters.</p>
 *          </note>
 *          <p>When the operation completes successfully, it returns the ID of the new custom key store.
 *       Before you can use your new custom key store, you need to use the <a>ConnectCustomKeyStore</a> operation to connect a new CloudHSM key store to its CloudHSM
 *       cluster, or to connect a new external key store to the external key store proxy for your
 *       external key manager. Even if you are not going to use your custom key store immediately, you
 *       might want to connect it to verify that all settings are correct and then disconnect it until
 *       you are ready to use it.</p>
 *          <p>For help with failures, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting a custom key store</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateCustomKeyStore</a> (IAM policy).</p>
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
 * import { KMSClient, CreateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, CreateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new CreateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link CreateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class CreateCustomKeyStoreCommand extends $Command<
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
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

  constructor(readonly input: CreateCustomKeyStoreCommandInput) {
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
  ): Handler<CreateCustomKeyStoreCommandInput, CreateCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomKeyStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1CreateCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
