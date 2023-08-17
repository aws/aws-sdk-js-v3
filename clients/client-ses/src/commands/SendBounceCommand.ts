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

import { SendBounceRequest, SendBounceResponse } from "../models/models_0";
import { de_SendBounceCommand, se_SendBounceCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendBounceCommand}.
 */
export interface SendBounceCommandInput extends SendBounceRequest {}
/**
 * @public
 *
 * The output of {@link SendBounceCommand}.
 */
export interface SendBounceCommandOutput extends SendBounceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates and sends a bounce message to the sender of an email you received through
 *             Amazon SES. You can only use this operation on an email up to 24 hours after you receive
 *             it.</p>
 *          <note>
 *             <p>You cannot use this operation to send generic bounces for mail that was not
 *                 received by Amazon SES.</p>
 *          </note>
 *          <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendBounceCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendBounceCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SendBounceRequest
 *   OriginalMessageId: "STRING_VALUE", // required
 *   BounceSender: "STRING_VALUE", // required
 *   Explanation: "STRING_VALUE",
 *   MessageDsn: { // MessageDsn
 *     ReportingMta: "STRING_VALUE", // required
 *     ArrivalDate: new Date("TIMESTAMP"),
 *     ExtensionFields: [ // ExtensionFieldList
 *       { // ExtensionField
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   BouncedRecipientInfoList: [ // BouncedRecipientInfoList // required
 *     { // BouncedRecipientInfo
 *       Recipient: "STRING_VALUE", // required
 *       RecipientArn: "STRING_VALUE",
 *       BounceType: "DoesNotExist" || "MessageTooLarge" || "ExceededQuota" || "ContentRejected" || "Undefined" || "TemporaryFailure",
 *       RecipientDsnFields: { // RecipientDsnFields
 *         FinalRecipient: "STRING_VALUE",
 *         Action: "failed" || "delayed" || "delivered" || "relayed" || "expanded", // required
 *         RemoteMta: "STRING_VALUE",
 *         Status: "STRING_VALUE", // required
 *         DiagnosticCode: "STRING_VALUE",
 *         LastAttemptDate: new Date("TIMESTAMP"),
 *         ExtensionFields: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   BounceSenderArn: "STRING_VALUE",
 * };
 * const command = new SendBounceCommand(input);
 * const response = await client.send(command);
 * // { // SendBounceResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendBounceCommandInput - {@link SendBounceCommandInput}
 * @returns {@link SendBounceCommandOutput}
 * @see {@link SendBounceCommandInput} for command's `input` shape.
 * @see {@link SendBounceCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>Indicates that the action failed, and the message could not be sent. Check the error
 *             stack for more information about what caused the error.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export class SendBounceCommand extends $Command<
  SendBounceCommandInput,
  SendBounceCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: SendBounceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBounceCommandInput, SendBounceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendBounceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendBounceCommand";
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
  private serialize(input: SendBounceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendBounceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBounceCommandOutput> {
    return de_SendBounceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
