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
  VerifyCardValidationDataInput,
  VerifyCardValidationDataInputFilterSensitiveLog,
  VerifyCardValidationDataOutput,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_VerifyCardValidationDataCommand, se_VerifyCardValidationDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyCardValidationDataCommand}.
 */
export interface VerifyCardValidationDataCommandInput extends VerifyCardValidationDataInput {}
/**
 * @public
 *
 * The output of {@link VerifyCardValidationDataCommand}.
 */
export interface VerifyCardValidationDataCommandOutput extends VerifyCardValidationDataOutput, __MetadataBearer {}

/**
 * @public
 * <p>Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-card-data.html">Verify card data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for <a>GenerateCardValidationData</a>. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
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
 *                   <a>VerifyAuthRequestCryptogram</a>
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
 * import { PaymentCryptographyDataClient, VerifyCardValidationDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyCardValidationDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyCardValidationDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   VerificationAttributes: { // CardVerificationAttributes Union: only one key present
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
 *     DiscoverDynamicCardVerificationCode: { // DiscoverDynamicCardVerificationCode
 *       CardExpiryDate: "STRING_VALUE", // required
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *   },
 *   ValidationData: "STRING_VALUE", // required
 * };
 * const command = new VerifyCardValidationDataCommand(input);
 * const response = await client.send(command);
 * // { // VerifyCardValidationDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyCardValidationDataCommandInput - {@link VerifyCardValidationDataCommandInput}
 * @returns {@link VerifyCardValidationDataCommandOutput}
 * @see {@link VerifyCardValidationDataCommandInput} for command's `input` shape.
 * @see {@link VerifyCardValidationDataCommandOutput} for command's `response` shape.
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
export class VerifyCardValidationDataCommand extends $Command<
  VerifyCardValidationDataCommandInput,
  VerifyCardValidationDataCommandOutput,
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
  constructor(readonly input: VerifyCardValidationDataCommandInput) {
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
  ): Handler<VerifyCardValidationDataCommandInput, VerifyCardValidationDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyCardValidationDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "VerifyCardValidationDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyCardValidationDataInputFilterSensitiveLog,
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
  private serialize(input: VerifyCardValidationDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyCardValidationDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyCardValidationDataCommandOutput> {
    return de_VerifyCardValidationDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
