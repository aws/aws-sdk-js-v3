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

import {
  EncryptDataInput,
  EncryptDataInputFilterSensitiveLog,
  EncryptDataOutput,
  EncryptDataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_EncryptDataCommand, se_EncryptDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EncryptDataCommand}.
 */
export interface EncryptDataCommandInput extends EncryptDataInput {}
/**
 * @public
 *
 * The output of {@link EncryptDataCommand}.
 */
export interface EncryptDataCommandOutput extends EncryptDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Encrypts plaintext data to ciphertext using symmetric, asymmetric, or DUKPT data encryption key. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/encrypt-data.html">Encrypt data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>You can generate an encryption key within Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>. You can import your own encryption key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. For this operation, the key must have <code>KeyModesOfUse</code> set to <code>Encrypt</code>. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>). </p>
 *          <p>for symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> algorithms. For asymmetric encryption, Amazon Web Services Payment Cryptography supports <code>RSA</code>. To encrypt using DUKPT, you must already have a DUKPT key in your account with <code>KeyModesOfUse</code> set to <code>DeriveKey</code>, or you can generate a new DUKPT key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a>.</p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DecryptData</a>
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
 *             <li>
 *                <p>
 *                   <a>ReEncryptData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, EncryptDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, EncryptDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // EncryptDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PlainText: "STRING_VALUE", // required
 *   EncryptionAttributes: { // EncryptionDecryptionAttributes Union: only one key present
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
 * const command = new EncryptDataCommand(input);
 * const response = await client.send(command);
 * // { // EncryptDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE",
 * //   CipherText: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EncryptDataCommandInput - {@link EncryptDataCommandInput}
 * @returns {@link EncryptDataCommandOutput}
 * @see {@link EncryptDataCommandInput} for command's `input` shape.
 * @see {@link EncryptDataCommandOutput} for command's `response` shape.
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
export class EncryptDataCommand extends $Command<
  EncryptDataCommandInput,
  EncryptDataCommandOutput,
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
  constructor(readonly input: EncryptDataCommandInput) {
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
  ): Handler<EncryptDataCommandInput, EncryptDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EncryptDataCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "EncryptDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EncryptDataInputFilterSensitiveLog,
      outputFilterSensitiveLog: EncryptDataOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyDataPlane",
        operation: "EncryptData",
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
  private serialize(input: EncryptDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EncryptDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EncryptDataCommandOutput> {
    return de_EncryptDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
