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

import { RestoreKeyInput, RestoreKeyOutput } from "../models/models_0";
import {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { de_RestoreKeyCommand, se_RestoreKeyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreKeyCommand}.
 */
export interface RestoreKeyCommandInput extends RestoreKeyInput {}
/**
 * @public
 *
 * The output of {@link RestoreKeyCommand}.
 */
export interface RestoreKeyCommandOutput extends RestoreKeyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Cancels a scheduled key deletion during the waiting period. Use this operation to restore a <code>Key</code> that is scheduled for deletion.</p>
 *          <p>During the waiting period, the <code>KeyState</code> is <code>DELETE_PENDING</code> and <code>deletePendingTimestamp</code> contains the date and time after which the <code>Key</code> will be deleted.
 *          After <code>Key</code> is restored, the <code>KeyState</code> is <code>CREATE_COMPLETE</code>, and the value for <code>deletePendingTimestamp</code> is removed.</p>
 *          <p>
 *             <b>Cross-account use:</b> This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteKey</a>
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
 * import { PaymentCryptographyClient, RestoreKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, RestoreKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * const client = new PaymentCryptographyClient(config);
 * const input = { // RestoreKeyInput
 *   KeyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new RestoreKeyCommand(input);
 * const response = await client.send(command);
 * // { // RestoreKeyOutput
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
 * @param RestoreKeyCommandInput - {@link RestoreKeyCommandInput}
 * @returns {@link RestoreKeyCommandOutput}
 * @see {@link RestoreKeyCommandInput} for command's `input` shape.
 * @see {@link RestoreKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p>
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
export class RestoreKeyCommand extends $Command<
  RestoreKeyCommandInput,
  RestoreKeyCommandOutput,
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
  constructor(readonly input: RestoreKeyCommandInput) {
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
  ): Handler<RestoreKeyCommandInput, RestoreKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RestoreKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PaymentCryptographyClient";
    const commandName = "RestoreKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PaymentCryptographyControlPlane",
        operation: "RestoreKey",
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
  private serialize(input: RestoreKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreKeyCommandOutput> {
    return de_RestoreKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
