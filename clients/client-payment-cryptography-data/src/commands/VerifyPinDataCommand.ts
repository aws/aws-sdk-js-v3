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

import { VerifyPinDataInput, VerifyPinDataInputFilterSensitiveLog, VerifyPinDataOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_VerifyPinDataCommand, se_VerifyPinDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyPinDataCommand}.
 */
export interface VerifyPinDataCommandInput extends VerifyPinDataInput {}
/**
 * @public
 *
 * The output of {@link VerifyPinDataCommand}.
 */
export interface VerifyPinDataCommandOutput extends VerifyPinDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-pin-data.html">Verify PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography.  </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
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
 *                   <a>TranslatePinData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyPinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyPinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyPinDataInput
 *   VerificationKeyIdentifier: "STRING_VALUE", // required
 *   EncryptionKeyIdentifier: "STRING_VALUE", // required
 *   VerificationAttributes: { // PinVerificationAttributes Union: only one key present
 *     VisaPin: { // VisaPinVerification
 *       PinVerificationKeyIndex: Number("int"), // required
 *       VerificationValue: "STRING_VALUE", // required
 *     },
 *     Ibm3624Pin: { // Ibm3624PinVerification
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *       PinOffset: "STRING_VALUE", // required
 *     },
 *   },
 *   EncryptedPinBlock: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   PinBlockFormat: "STRING_VALUE", // required
 *   PinDataLength: Number("int"),
 *   DukptAttributes: { // DukptAttributes
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptDerivationType: "STRING_VALUE", // required
 *   },
 * };
 * const command = new VerifyPinDataCommand(input);
 * const response = await client.send(command);
 * // { // VerifyPinDataOutput
 * //   VerificationKeyArn: "STRING_VALUE", // required
 * //   VerificationKeyCheckValue: "STRING_VALUE", // required
 * //   EncryptionKeyArn: "STRING_VALUE", // required
 * //   EncryptionKeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyPinDataCommandInput - {@link VerifyPinDataCommandInput}
 * @returns {@link VerifyPinDataCommandOutput}
 * @see {@link VerifyPinDataCommandInput} for command's `input` shape.
 * @see {@link VerifyPinDataCommandOutput} for command's `response` shape.
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
 * @throws {@link VerificationFailedException} (client fault)
 *  <p>This request failed verification.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 */
export class VerifyPinDataCommand extends $Command<
  VerifyPinDataCommandInput,
  VerifyPinDataCommandOutput,
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
  constructor(readonly input: VerifyPinDataCommandInput) {
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
  ): Handler<VerifyPinDataCommandInput, VerifyPinDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, VerifyPinDataCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "VerifyPinDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyPinDataInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: VerifyPinDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyPinDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyPinDataCommandOutput> {
    return de_VerifyPinDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
