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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateRandomRequest,
  GenerateRandomResponse,
  GenerateRandomResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GenerateRandomCommand, se_GenerateRandomCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateRandomCommand}.
 */
export interface GenerateRandomCommandInput extends GenerateRandomRequest {}
/**
 * @public
 *
 * The output of {@link GenerateRandomCommand}.
 */
export interface GenerateRandomCommandOutput extends GenerateRandomResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a random byte string that is cryptographically secure.</p>
 *          <p>You must use the <code>NumberOfBytes</code> parameter to specify the length of the random
 *       byte string. There is no default value for string length.</p>
 *          <p>By default, the random byte string is generated in KMS. To generate the byte string in
 *       the CloudHSM cluster associated with an CloudHSM key store, use the <code>CustomKeyStoreId</code>
 *       parameter.</p>
 *          <p>
 *             <code>GenerateRandom</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an
 *       isolated compute environment in Amazon EC2. To call <code>GenerateRandom</code> for a Nitro
 *       enclave, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the <code>Recipient</code> parameter
 *       to provide the attestation document for the enclave. Instead of plaintext bytes, the response
 *       includes the plaintext bytes encrypted under the public key from the attestation document
 *         (<code>CiphertextForRecipient</code>).For information about the interaction between KMS and Amazon Web Services Nitro Enclaves, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves uses KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>For more information about entropy and random number generation, see
 *       <a href="https://docs.aws.amazon.com/kms/latest/cryptographic-details/">Key Management Service Cryptographic Details</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Not applicable.
 *         <code>GenerateRandom</code> does not use any account-specific resources, such as KMS
 *       keys.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateRandomCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateRandomCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GenerateRandomRequest
 *   NumberOfBytes: Number("int"),
 *   CustomKeyStoreId: "STRING_VALUE",
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: "BLOB_VALUE",
 *   },
 * };
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * // { // GenerateRandomResponse
 * //   Plaintext: "BLOB_VALUE",
 * //   CiphertextForRecipient: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateRandomCommandInput - {@link GenerateRandomCommandInput}
 * @returns {@link GenerateRandomCommandOutput}
 * @see {@link GenerateRandomCommandInput} for command's `input` shape.
 * @see {@link GenerateRandomCommandOutput} for command's `response` shape.
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
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To generate random data
 * ```javascript
 * // The following example generates 32 bytes of random data.
 * const input = {
 *   "NumberOfBytes": 32
 * };
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Plaintext": "<binary data>"
 * }
 * *\/
 * // example id: to-generate-random-data-1
 * ```
 *
 * @example To generate random data
 * ```javascript
 * // The following example includes the Recipient parameter with a signed attestation document from an AWS Nitro enclave. Instead of returning a plaintext (unencrypted) byte string, GenerateRandom returns the byte string encrypted by the public key from the enclave's attestation document.
 * const input = {
 *   "NumberOfBytes": 1024,
 *   "Recipient": {
 *     "AttestationDocument": "<attestation document>",
 *     "KeyEncryptionAlgorithm": "RSAES_OAEP_SHA_256"
 *   }
 * };
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextForRecipient": "<binary data>",
 *   "Plaintext": ""
 * }
 * *\/
 * // example id: to-generate-random-data-2
 * ```
 *
 */
export class GenerateRandomCommand extends $Command<
  GenerateRandomCommandInput,
  GenerateRandomCommandOutput,
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
  constructor(readonly input: GenerateRandomCommandInput) {
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
  ): Handler<GenerateRandomCommandInput, GenerateRandomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateRandomCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateRandomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GenerateRandomResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "GenerateRandom",
      },
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
  private serialize(input: GenerateRandomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateRandomCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateRandomCommandOutput> {
    return de_GenerateRandomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
