import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DescribeCustomKeyStoresRequest, DescribeCustomKeyStoresResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCustomKeyStoresCommand,
  serializeAws_json1_1DescribeCustomKeyStoresCommand,
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

export interface DescribeCustomKeyStoresCommandInput extends DescribeCustomKeyStoresRequest {}
export interface DescribeCustomKeyStoresCommandOutput extends DescribeCustomKeyStoresResponse, __MetadataBearer {}

/**
 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and Region.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * single-tenant key store.</p>
 *          <p>By default, this operation returns information about all custom key stores in the account and
 *       Region. To get only information about a particular custom key store, use either the
 *         <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but not
 *       both).</p>
 *          <p>To determine whether the custom key store is connected to its CloudHSM cluster, use the
 *         <code>ConnectionState</code> element in the response. If an attempt to connect the custom
 *       key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the
 *         <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure.
 *       For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has
 *       never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect it. If your custom key store state is <code>CONNECTED</code> but you are having
 *       trouble using it, make sure that its associated CloudHSM cluster is active and contains the
 *       minimum number of HSMs required for the operation, if any.</p>
 *          <p> For help repairing your custom key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> topic in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DescribeCustomKeyStores</a> (IAM policy)</p>
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
 * import { KMSClient, DescribeCustomKeyStoresCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DescribeCustomKeyStoresCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DescribeCustomKeyStoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomKeyStoresCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomKeyStoresCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCustomKeyStoresCommand extends $Command<
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomKeyStoresCommandInput) {
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
  ): Handler<DescribeCustomKeyStoresCommandInput, DescribeCustomKeyStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DescribeCustomKeyStoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomKeyStoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomKeyStoresResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCustomKeyStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomKeyStoresCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomKeyStoresCommandOutput> {
    return deserializeAws_json1_1DescribeCustomKeyStoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
