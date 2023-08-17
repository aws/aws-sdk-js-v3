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

import {
  DecryptDataInput,
  DecryptDataInputFilterSensitiveLog,
  DecryptDataOutput,
  DecryptDataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_DecryptDataCommand, se_DecryptDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DecryptDataCommand}.
 */
export interface DecryptDataCommandInput extends DecryptDataInput {}
/**
 * @public
 *
 * The output of {@link DecryptDataCommand}.
 */
export interface DecryptDataCommandOutput extends DecryptDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Decrypts ciphertext data to plaintext using symmetric, asymmetric, or DUKPT data encryption key. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/decrypt-data.html">Decrypt data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>You can use an encryption key generated within Amazon Web Services Payment Cryptography, or you can import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. For this operation, the key must have <code>KeyModesOfUse</code> set to <code>Decrypt</code>. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a>.</p>
 *          <p>For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. When you use DUKPT, for <code>TDES</code> algorithm, the ciphertext data length must be a multiple of 16 bytes. For <code>AES</code> algorithm, the ciphertext data length must be a multiple of 32 bytes.</p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EncryptData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, DecryptDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, DecryptDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // DecryptDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   CipherText: "STRING_VALUE", // required
 *   DecryptionAttributes: { // EncryptionDecryptionAttributes Union: only one key present
 *     Symmetric: { // SymmetricEncryptionAttributes
 *       Mode: "STRING_VALUE", // required
 *       InitializationVector: "STRING_VALUE",
 *       PaddingType: "STRING_VALUE",
 *     },
 *     Asymmetric: { // AsymmetricEncryptionAttributes
 *       PaddingType: "STRING_VALUE",
 *     },
 *     Dukpt: { // DukptEncryptionAttributes
 *       KeySerialNumber: "STRING_VALUE", // required
 *       Mode: "STRING_VALUE",
 *       DukptKeyDerivationType: "STRING_VALUE",
 *       DukptKeyVariant: "STRING_VALUE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new DecryptDataCommand(input);
 * const response = await client.send(command);
 * // { // DecryptDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   PlainText: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DecryptDataCommandInput - {@link DecryptDataCommandInput}
 * @returns {@link DecryptDataCommandOutput}
 * @see {@link DecryptDataCommandInput} for command's `input` shape.
 * @see {@link DecryptDataCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyDataClientResolvedConfig | config} for PaymentCryptographyDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 */
export class DecryptDataCommand extends $Command<
  DecryptDataCommandInput,
  DecryptDataCommandOutput,
  PaymentCryptographyDataClientResolvedConfig
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
  constructor(readonly input: DecryptDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PaymentCryptographyDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DecryptDataCommandInput, DecryptDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DecryptDataCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "DecryptDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecryptDataInputFilterSensitiveLog,
      outputFilterSensitiveLog: DecryptDataOutputFilterSensitiveLog,
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
  private serialize(input: DecryptDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DecryptDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DecryptDataCommandOutput> {
    return de_DecryptDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
