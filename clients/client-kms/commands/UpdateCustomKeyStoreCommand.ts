import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateCustomKeyStoreRequest, UpdateCustomKeyStoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomKeyStoreCommand,
  serializeAws_json1_1UpdateCustomKeyStoreCommand,
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

export type UpdateCustomKeyStoreCommandInput = UpdateCustomKeyStoreRequest;
export type UpdateCustomKeyStoreCommandOutput = UpdateCustomKeyStoreResponse & __MetadataBearer;

/**
 * <p>Changes the properties of a custom key store. Use the <code>CustomKeyStoreId</code>
 *       parameter to identify the custom key store you want to edit. Use the remaining parameters to
 *       change the properties of the custom key store.</p>
 *          <p>You can only update a custom key store that is disconnected. To disconnect the custom key
 *       store, use <a>DisconnectCustomKeyStore</a>. To reconnect the custom key store after
 *       the update completes, use <a>ConnectCustomKeyStore</a>. To find the connection
 *       state of a custom key store, use the <a>DescribeCustomKeyStores</a>
 *       operation.</p>
 *          <p>Use the parameters of <code>UpdateCustomKeyStore</code> to edit your keystore
 *       settings.</p>
 *          <ul>
 *             <li>
 *                <p>Use the <b>NewCustomKeyStoreName</b> parameter to change the
 *           friendly name of the custom key store to the value that you specify.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <b>KeyStorePassword</b> parameter tell AWS KMS the
 *           current password of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                      <code>kmsuser</code> crypto
 *             user (CU)</a> in the associated AWS CloudHSM cluster. You can use this parameter to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-password">fix
 *             connection failures</a> that occur when AWS KMS cannot log into the associated cluster
 *           because the <code>kmsuser</code> password has changed. This value does not change the
 *           password in the AWS CloudHSM cluster.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <b>CloudHsmClusterId</b> parameter to associate the
 *           custom key store with a different, but related, AWS CloudHSM cluster. You can use this parameter
 *           to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when
 *           you need to create or restore a cluster from a backup. </p>
 *             </li>
 *          </ul>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">Custom Key Store feature</a> feature in AWS KMS, which
 * combines the convenience and extensive integration of AWS KMS with the isolation and control of a
 * single-tenant key store.</p>
 */
export class UpdateCustomKeyStoreCommand extends $Command<
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomKeyStoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomKeyStoreResponse.filterSensitiveLog,
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
