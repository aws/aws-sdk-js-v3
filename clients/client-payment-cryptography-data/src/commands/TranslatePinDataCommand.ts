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
  TranslatePinDataInput,
  TranslatePinDataInputFilterSensitiveLog,
  TranslatePinDataOutput,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_TranslatePinDataCommand, se_TranslatePinDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TranslatePinDataCommand}.
 */
export interface TranslatePinDataCommandInput extends TranslatePinDataInput {}
/**
 * @public
 *
 * The output of {@link TranslatePinDataCommand}.
 */
export interface TranslatePinDataCommandOutput extends TranslatePinDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/translate-pin-data.html">Translate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>PIN block translation involves changing the encrytion of PIN block from one encryption key to another encryption key and changing PIN block format from one to another without PIN block data leaving Amazon Web Services Payment Cryptography. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> key derivation type for DUKPT tranlations. You can use this operation for P2PE (Point to Point Encryption) use cases where the encryption keys should change but the processing system either does not need to, or is not permitted to, decrypt the data.</p>
 *          <p>The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <note>
 *             <p>At this time, Amazon Web Services Payment Cryptography does not support translations to PIN format 4.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GeneratePinData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifyPinData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, TranslatePinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, TranslatePinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // TranslatePinDataInput
 *   IncomingKeyIdentifier: "STRING_VALUE", // required
 *   OutgoingKeyIdentifier: "STRING_VALUE", // required
 *   IncomingTranslationAttributes: { // TranslationIsoFormats Union: only one key present
 *     IsoFormat0: { // TranslationPinDataIsoFormat034
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat1: {},
 *     IsoFormat3: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat4: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *   },
 *   OutgoingTranslationAttributes: {//  Union: only one key present
 *     IsoFormat0: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat1: {},
 *     IsoFormat3: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat4: "<TranslationPinDataIsoFormat034>",
 *   },
 *   EncryptedPinBlock: "STRING_VALUE", // required
 *   IncomingDukptAttributes: { // DukptDerivationAttributes
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptKeyDerivationType: "STRING_VALUE",
 *     DukptKeyVariant: "STRING_VALUE",
 *   },
 *   OutgoingDukptAttributes: {
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptKeyDerivationType: "STRING_VALUE",
 *     DukptKeyVariant: "STRING_VALUE",
 *   },
 * };
 * const command = new TranslatePinDataCommand(input);
 * const response = await client.send(command);
 * // { // TranslatePinDataOutput
 * //   PinBlock: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TranslatePinDataCommandInput - {@link TranslatePinDataCommandInput}
 * @returns {@link TranslatePinDataCommandOutput}
 * @see {@link TranslatePinDataCommandInput} for command's `input` shape.
 * @see {@link TranslatePinDataCommandOutput} for command's `response` shape.
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
export class TranslatePinDataCommand extends $Command<
  TranslatePinDataCommandInput,
  TranslatePinDataCommandOutput,
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
  constructor(readonly input: TranslatePinDataCommandInput) {
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
  ): Handler<TranslatePinDataCommandInput, TranslatePinDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TranslatePinDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "TranslatePinDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TranslatePinDataInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyDataPlane",
        operation: "TranslatePinData",
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
  private serialize(input: TranslatePinDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TranslatePinDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TranslatePinDataCommandOutput> {
    return de_TranslatePinDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
