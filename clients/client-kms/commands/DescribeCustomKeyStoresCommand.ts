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

export type DescribeCustomKeyStoresCommandInput = DescribeCustomKeyStoresRequest;
export type DescribeCustomKeyStoresCommandOutput = DescribeCustomKeyStoresResponse & __MetadataBearer;

/**
 * <p>Gets information about <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key stores</a> in the account and region.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 *          <p>By default, this operation returns information about all custom key
 *       stores in the account and region. To get only information about a particular custom key store,
 *       use either the <code>CustomKeyStoreName</code> or <code>CustomKeyStoreId</code> parameter (but
 *       not both).</p>
 *          <p>To determine whether the custom key store is connected to its AWS CloudHSM cluster, use the
 *         <code>ConnectionState</code> element in the response. If an attempt to connect the custom
 *       key store failed, the <code>ConnectionState</code> value is <code>FAILED</code> and the
 *         <code>ConnectionErrorCode</code> element in the response indicates the cause of the failure.
 *       For help interpreting the <code>ConnectionErrorCode</code>, see <a>CustomKeyStoresListEntry</a>.</p>
 *          <p>Custom key stores have a <code>DISCONNECTED</code> connection state if the key store has
 *       never been connected or you use the <a>DisconnectCustomKeyStore</a> operation to
 *       disconnect it. If your custom key store state is <code>CONNECTED</code> but you are having
 *       trouble using it, make sure that its associated AWS CloudHSM cluster is active and contains the
 *       minimum number of HSMs required for the operation, if any.</p>
 *          <p> For help repairing your custom key store, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html">Troubleshooting Custom Key Stores</a> topic in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
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
