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

import { VerifyMacInput, VerifyMacInputFilterSensitiveLog, VerifyMacOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_VerifyMacCommand, se_VerifyMacCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandInput extends VerifyMacInput {}
/**
 * @public
 *
 * The output of {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandOutput extends VerifyMacOutput, __MetadataBearer {}

/**
 * @public
 * <p>Verifies a Message Authentication Code (MAC). </p>
 *          <p>You can use this operation when keys won't be shared but mutual data is present on both ends for validation. In this case, known data values are used to generate a MAC on both ends for verification without sending or receiving data in ciphertext or plaintext. You can use this operation to verify a DUPKT, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. Use the same encryption key for MAC verification as you use for <a>GenerateMac</a>. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GenerateMac</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyMacCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyMacCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyMacInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   MessageData: "STRING_VALUE", // required
 *   Mac: "STRING_VALUE", // required
 *   VerificationAttributes: { // MacAttributes Union: only one key present
 *     Algorithm: "STRING_VALUE",
 *     EmvMac: { // MacAlgorithmEmv
 *       MajorKeyDerivationMode: "STRING_VALUE", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       SessionKeyDerivationMode: "STRING_VALUE", // required
 *       SessionKeyDerivationValue: { // SessionKeyDerivationValue Union: only one key present
 *         ApplicationCryptogram: "STRING_VALUE",
 *         ApplicationTransactionCounter: "STRING_VALUE",
 *       },
 *     },
 *     DukptIso9797Algorithm1: { // MacAlgorithmDukpt
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *     DukptIso9797Algorithm3: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *     DukptCmac: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *   },
 *   MacLength: Number("int"),
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * // { // VerifyMacOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyMacCommandInput - {@link VerifyMacCommandInput}
 * @returns {@link VerifyMacCommandOutput}
 * @see {@link VerifyMacCommandInput} for command's `input` shape.
 * @see {@link VerifyMacCommandOutput} for command's `response` shape.
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
export class VerifyMacCommand extends $Command<
  VerifyMacCommandInput,
  VerifyMacCommandOutput,
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
    configuration: PaymentCryptographyDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyMacCommandInput, VerifyMacCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, VerifyMacCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyDataClient";
    const commandName = "VerifyMacCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyMacInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyDataPlane",
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
