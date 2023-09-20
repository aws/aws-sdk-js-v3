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
import { VerifyMacRequest, VerifyMacRequestFilterSensitiveLog, VerifyMacResponse } from "../models/models_0";
import { de_VerifyMacCommand, se_VerifyMacCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandInput extends VerifyMacRequest {}
/**
 * @public
 *
 * The output of {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandOutput extends VerifyMacResponse, __MetadataBearer {}

/**
 * @public
 * <p>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC
 *       KMS key, and MAC algorithm. To verify the HMAC, <code>VerifyMac</code> computes an HMAC using
 *       the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC
 *       to the HMAC that you specify. If the HMACs are identical, the verification succeeds;
 *       otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was
 *       calculated, and the specified key was used to generate and verify the HMAC.</p>
 *          <p>HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards
 *       defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
 *          <p>This operation is part of KMS support for HMAC KMS keys. For details, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:VerifyMac</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>GenerateMac</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, VerifyMacCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, VerifyMacCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // VerifyMacRequest
 *   Message: "BLOB_VALUE", // required
 *   KeyId: "STRING_VALUE", // required
 *   MacAlgorithm: "HMAC_SHA_224" || "HMAC_SHA_256" || "HMAC_SHA_384" || "HMAC_SHA_512", // required
 *   Mac: "BLOB_VALUE", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * // { // VerifyMacResponse
 * //   KeyId: "STRING_VALUE",
 * //   MacValid: true || false,
 * //   MacAlgorithm: "HMAC_SHA_224" || "HMAC_SHA_256" || "HMAC_SHA_384" || "HMAC_SHA_512",
 * // };
 *
 * ```
 *
 * @param VerifyMacCommandInput - {@link VerifyMacCommandInput}
 * @returns {@link VerifyMacCommandOutput}
 * @see {@link VerifyMacCommandInput} for command's `input` shape.
 * @see {@link VerifyMacCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>
 *       The request was rejected because the DryRun parameter was specified.
 *     </p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *  <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidMacException} (client fault)
 *  <p>The request was rejected because the HMAC verification failed. HMAC verification fails
 *       when the HMAC computed by using the specified message, HMAC KMS key, and MAC algorithm does
 *       not match the HMAC specified in the request.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To verify an HMAC
 * ```javascript
 * // This example verifies an HMAC for a particular message, HMAC KMS keys, and MAC algorithm. A value of 'true' in the MacValid value in the response indicates that the HMAC is valid.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Mac": "<HMAC_TAG>",
 *   "MacAlgorithm": "HMAC_SHA_384",
 *   "Message": "Hello World"
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "MacAlgorithm": "HMAC_SHA_384",
 *   "MacValid": true
 * }
 * *\/
 * // example id: to-verify-an-hmac-1631570863401
 * ```
 *
 */
export class VerifyMacCommand extends $Command<VerifyMacCommandInput, VerifyMacCommandOutput, KMSClientResolvedConfig> {
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
  constructor(readonly input: VerifyMacCommandInput) {
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
  ): Handler<VerifyMacCommandInput, VerifyMacCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, VerifyMacCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "VerifyMacCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyMacRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "VerifyMac",
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
  private serialize(input: VerifyMacCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyMacCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyMacCommandOutput> {
    return de_VerifyMacCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
