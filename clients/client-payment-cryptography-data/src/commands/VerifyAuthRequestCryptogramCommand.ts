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
  VerifyAuthRequestCryptogramInput,
  VerifyAuthRequestCryptogramInputFilterSensitiveLog,
  VerifyAuthRequestCryptogramOutput,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import {
  de_VerifyAuthRequestCryptogramCommand,
  se_VerifyAuthRequestCryptogramCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyAuthRequestCryptogramCommand}.
 */
export interface VerifyAuthRequestCryptogramCommandInput extends VerifyAuthRequestCryptogramInput {}
/**
 * @public
 *
 * The output of {@link VerifyAuthRequestCryptogramCommand}.
 */
export interface VerifyAuthRequestCryptogramCommandOutput extends VerifyAuthRequestCryptogramOutput, __MetadataBearer {}

/**
 * @public
 * <p>Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.verifyauthrequestcryptogram.html">Verify auth request cryptogram</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The <code>ARPC_METHOD_1</code> uses <code>AuthResponseCode</code> to generate ARPC and <code>ARPC_METHOD_2</code> uses <code>CardStatusUpdate</code> to generate ARPC. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>VerifyCardValidationData</a>
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
 * import { PaymentCryptographyDataClient, VerifyAuthRequestCryptogramCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyAuthRequestCryptogramCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyAuthRequestCryptogramInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   TransactionData: "STRING_VALUE", // required
 *   AuthRequestCryptogram: "STRING_VALUE", // required
 *   MajorKeyDerivationMode: "STRING_VALUE", // required
 *   SessionKeyDerivationAttributes: { // SessionKeyDerivation Union: only one key present
 *     EmvCommon: { // SessionKeyEmvCommon
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     Mastercard: { // SessionKeyMastercard
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       UnpredictableNumber: "STRING_VALUE", // required
 *     },
 *     Emv2000: { // SessionKeyEmv2000
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     Amex: { // SessionKeyAmex
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *     },
 *     Visa: { // SessionKeyVisa
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *     },
 *   },
 *   AuthResponseAttributes: { // CryptogramAuthResponse Union: only one key present
 *     ArpcMethod1: { // CryptogramVerificationArpcMethod1
 *       AuthResponseCode: "STRING_VALUE", // required
 *     },
 *     ArpcMethod2: { // CryptogramVerificationArpcMethod2
 *       CardStatusUpdate: "STRING_VALUE", // required
 *       ProprietaryAuthenticationData: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new VerifyAuthRequestCryptogramCommand(input);
 * const response = await client.send(command);
 * // { // VerifyAuthRequestCryptogramOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   AuthResponseValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyAuthRequestCryptogramCommandInput - {@link VerifyAuthRequestCryptogramCommandInput}
 * @returns {@link VerifyAuthRequestCryptogramCommandOutput}
 * @see {@link VerifyAuthRequestCryptogramCommandInput} for command's `input` shape.
 * @see {@link VerifyAuthRequestCryptogramCommandOutput} for command's `response` shape.
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
export class VerifyAuthRequestCryptogramCommand extends $Command<
  VerifyAuthRequestCryptogramCommandInput,
  VerifyAuthRequestCryptogramCommandOutput,
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
  constructor(readonly input: VerifyAuthRequestCryptogramCommandInput) {
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
  ): Handler<VerifyAuthRequestCryptogramCommandInput, VerifyAuthRequestCryptogramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyAuthRequestCryptogramCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "VerifyAuthRequestCryptogramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyAuthRequestCryptogramInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyDataPlane",
        operation: "VerifyAuthRequestCryptogram",
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
  private serialize(input: VerifyAuthRequestCryptogramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_VerifyAuthRequestCryptogramCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<VerifyAuthRequestCryptogramCommandOutput> {
    return de_VerifyAuthRequestCryptogramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
