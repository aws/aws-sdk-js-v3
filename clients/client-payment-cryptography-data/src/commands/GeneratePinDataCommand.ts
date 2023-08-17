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
  GeneratePinDataInput,
  GeneratePinDataInputFilterSensitiveLog,
  GeneratePinDataOutput,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_GeneratePinDataCommand, se_GeneratePinDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GeneratePinDataCommand}.
 */
export interface GeneratePinDataCommandInput extends GeneratePinDataInput {}
/**
 * @public
 *
 * The output of {@link GeneratePinDataCommand}.
 */
export interface GeneratePinDataCommandOutput extends GeneratePinDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/generate-pin-data.html">Generate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GenerateCardValidationData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TranslatePinData</a>
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
 * import { PaymentCryptographyDataClient, GeneratePinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GeneratePinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GeneratePinDataInput
 *   GenerationKeyIdentifier: "STRING_VALUE", // required
 *   EncryptionKeyIdentifier: "STRING_VALUE", // required
 *   GenerationAttributes: { // PinGenerationAttributes Union: only one key present
 *     VisaPin: { // VisaPin
 *       PinVerificationKeyIndex: Number("int"), // required
 *     },
 *     VisaPinVerificationValue: { // VisaPinVerificationValue
 *       EncryptedPinBlock: "STRING_VALUE", // required
 *       PinVerificationKeyIndex: Number("int"), // required
 *     },
 *     Ibm3624PinOffset: { // Ibm3624PinOffset
 *       EncryptedPinBlock: "STRING_VALUE", // required
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *     },
 *     Ibm3624NaturalPin: { // Ibm3624NaturalPin
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *     },
 *     Ibm3624RandomPin: { // Ibm3624RandomPin
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *     },
 *     Ibm3624PinFromOffset: { // Ibm3624PinFromOffset
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *       PinOffset: "STRING_VALUE", // required
 *     },
 *   },
 *   PinDataLength: Number("int"),
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   PinBlockFormat: "STRING_VALUE", // required
 * };
 * const command = new GeneratePinDataCommand(input);
 * const response = await client.send(command);
 * // { // GeneratePinDataOutput
 * //   GenerationKeyArn: "STRING_VALUE", // required
 * //   GenerationKeyCheckValue: "STRING_VALUE", // required
 * //   EncryptionKeyArn: "STRING_VALUE", // required
 * //   EncryptionKeyCheckValue: "STRING_VALUE", // required
 * //   EncryptedPinBlock: "STRING_VALUE", // required
 * //   PinData: { // PinData Union: only one key present
 * //     PinOffset: "STRING_VALUE",
 * //     VerificationValue: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GeneratePinDataCommandInput - {@link GeneratePinDataCommandInput}
 * @returns {@link GeneratePinDataCommandOutput}
 * @see {@link GeneratePinDataCommandInput} for command's `input` shape.
 * @see {@link GeneratePinDataCommandOutput} for command's `response` shape.
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
export class GeneratePinDataCommand extends $Command<
  GeneratePinDataCommandInput,
  GeneratePinDataCommandOutput,
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
  constructor(readonly input: GeneratePinDataCommandInput) {
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
  ): Handler<GeneratePinDataCommandInput, GeneratePinDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GeneratePinDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "GeneratePinDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GeneratePinDataInputFilterSensitiveLog,
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
  private serialize(input: GeneratePinDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GeneratePinDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GeneratePinDataCommandOutput> {
    return de_GeneratePinDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
