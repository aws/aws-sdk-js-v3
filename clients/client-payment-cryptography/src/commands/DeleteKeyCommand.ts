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

import { DeleteKeyInput, DeleteKeyOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_DeleteKeyCommand, se_DeleteKeyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandInput extends DeleteKeyInput {}
/**
 * @public
 *
 * The output of {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandOutput extends DeleteKeyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the key material and all metadata associated with Amazon Web Services Payment Cryptography key.</p>
 *          <p>Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period. The default waiting period is 7 days. To set a different waiting period, set <code>DeleteKeyInDays</code>. During the waiting period, the <code>KeyState</code> is <code>DELETE_PENDING</code>. After the key is deleted, the <code>KeyState</code> is <code>DELETE_COMPLETE</code>.</p>
 *          <p>If you delete key material, you can use <a>ImportKey</a> to reimport the same key material into the Amazon Web Services Payment Cryptography key.</p>
 *          <p>You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling <a>StopKeyUsage</a>.</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RestoreKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartKeyUsage</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopKeyUsage</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, DeleteKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, DeleteKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // DeleteKeyInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   DeleteKeyInDays: Number("int"),
 * };
 * const command = new DeleteKeyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKeyOutput
 * //   Key: { // Key
 * //     KeyArn: "STRING_VALUE", // required
 * //     KeyAttributes: { // KeyAttributes
 * //       KeyUsage: "STRING_VALUE", // required
 * //       KeyClass: "STRING_VALUE", // required
 * //       KeyAlgorithm: "STRING_VALUE", // required
 * //       KeyModesOfUse: { // KeyModesOfUse
 * //         Encrypt: true || false,
 * //         Decrypt: true || false,
 * //         Wrap: true || false,
 * //         Unwrap: true || false,
 * //         Generate: true || false,
 * //         Sign: true || false,
 * //         Verify: true || false,
 * //         DeriveKey: true || false,
 * //         NoRestrictions: true || false,
 * //       },
 * //     },
 * //     KeyCheckValue: "STRING_VALUE", // required
 * //     KeyCheckValueAlgorithm: "STRING_VALUE", // required
 * //     Enabled: true || false, // required
 * //     Exportable: true || false, // required
 * //     KeyState: "STRING_VALUE", // required
 * //     KeyOrigin: "STRING_VALUE", // required
 * //     CreateTimestamp: new Date("TIMESTAMP"), // required
 * //     UsageStartTimestamp: new Date("TIMESTAMP"),
 * //     UsageStopTimestamp: new Date("TIMESTAMP"),
 * //     DeletePendingTimestamp: new Date("TIMESTAMP"),
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteKeyCommandInput - {@link DeleteKeyCommandInput}
 * @returns {@link DeleteKeyCommandOutput}
 * @see {@link DeleteKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 */
export class DeleteKeyCommand extends $Command<
  DeleteKeyCommandInput,
  DeleteKeyCommandOutput,
  PaymentCryptographyClientResolvedConfig
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
  constructor(readonly input: DeleteKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PaymentCryptographyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKeyCommandInput, DeleteKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "DeleteKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKeyCommandOutput> {
    return de_DeleteKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
