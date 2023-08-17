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
  GenerateCardValidationDataInput,
  GenerateCardValidationDataInputFilterSensitiveLog,
  GenerateCardValidationDataOutput,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_GenerateCardValidationDataCommand, se_GenerateCardValidationDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateCardValidationDataCommand}.
 */
export interface GenerateCardValidationDataCommandInput extends GenerateCardValidationDataInput {}
/**
 * @public
 *
 * The output of {@link GenerateCardValidationDataCommand}.
 */
export interface GenerateCardValidationDataCommandOutput extends GenerateCardValidationDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/generate-card-data.html">Generate card data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> to establish a CVK within Amazon Web Services Payment Cryptography. The <code>KeyModesOfUse</code> should be set to <code>Generate</code> and <code>Verify</code> for a CVK encryption key. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifyCardValidationData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateCardValidationDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateCardValidationDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateCardValidationDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   GenerationAttributes: { // CardGenerationAttributes Union: only one key present
 *     AmexCardSecurityCodeVersion1: { // AmexCardSecurityCodeVersion1
 *       CardExpiryDate: "STRING_VALUE", // required
 *     },
 *     AmexCardSecurityCodeVersion2: { // AmexCardSecurityCodeVersion2
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *     },
 *     CardVerificationValue1: { // CardVerificationValue1
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *     },
 *     CardVerificationValue2: { // CardVerificationValue2
 *       CardExpiryDate: "STRING_VALUE", // required
 *     },
 *     CardHolderVerificationValue: { // CardHolderVerificationValue
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     DynamicCardVerificationCode: { // DynamicCardVerificationCode
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       TrackData: "STRING_VALUE", // required
 *     },
 *     DynamicCardVerificationValue: { // DynamicCardVerificationValue
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *   },
 *   ValidationDataLength: Number("int"),
 * };
 * const command = new GenerateCardValidationDataCommand(input);
 * const response = await client.send(command);
 * // { // GenerateCardValidationDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   ValidationData: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateCardValidationDataCommandInput - {@link GenerateCardValidationDataCommandInput}
 * @returns {@link GenerateCardValidationDataCommandOutput}
 * @see {@link GenerateCardValidationDataCommandInput} for command's `input` shape.
 * @see {@link GenerateCardValidationDataCommandOutput} for command's `response` shape.
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
export class GenerateCardValidationDataCommand extends $Command<
  GenerateCardValidationDataCommandInput,
  GenerateCardValidationDataCommandOutput,
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
  constructor(readonly input: GenerateCardValidationDataCommandInput) {
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
  ): Handler<GenerateCardValidationDataCommandInput, GenerateCardValidationDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateCardValidationDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "GenerateCardValidationDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateCardValidationDataInputFilterSensitiveLog,
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
  private serialize(input: GenerateCardValidationDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateCardValidationDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateCardValidationDataCommandOutput> {
    return de_GenerateCardValidationDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
