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

import { CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_CreateDeliverabilityTestReportCommand,
  se_CreateDeliverabilityTestReportCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDeliverabilityTestReportCommand}.
 */
export interface CreateDeliverabilityTestReportCommandInput extends CreateDeliverabilityTestReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeliverabilityTestReportCommand}.
 */
export interface CreateDeliverabilityTestReportCommandOutput
  extends CreateDeliverabilityTestReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
 *             then sends that message to special email addresses spread across several major email
 *             providers. After about 24 hours, the test is complete, and you can use the
 *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // CreateDeliverabilityTestReportRequest
 *   ReportName: "STRING_VALUE",
 *   FromEmailAddress: "STRING_VALUE", // required
 *   Content: { // EmailContent
 *     Simple: { // Message
 *       Subject: { // Content
 *         Data: "STRING_VALUE", // required
 *         Charset: "STRING_VALUE",
 *       },
 *       Body: { // Body
 *         Text: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *         Html: {
 *           Data: "STRING_VALUE", // required
 *           Charset: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     Raw: { // RawMessage
 *       Data: "BLOB_VALUE", // required
 *     },
 *     Template: { // Template
 *       TemplateArn: "STRING_VALUE",
 *       TemplateData: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeliverabilityTestReportResponse
 * //   ReportId: "STRING_VALUE", // required
 * //   DeliverabilityTestStatus: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDeliverabilityTestReportCommandInput - {@link CreateDeliverabilityTestReportCommandInput}
 * @returns {@link CreateDeliverabilityTestReportCommandOutput}
 * @see {@link CreateDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link CreateDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link AccountSuspendedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link MailFromDomainNotVerifiedException} (client fault)
 *  <p>The message can't be sent because the sending domain isn't verified.</p>
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>The message can't be sent because it contains invalid content.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link SendingPausedException} (client fault)
 *  <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class CreateDeliverabilityTestReportCommand extends $Command<
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
  PinpointEmailClientResolvedConfig
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
  constructor(readonly input: CreateDeliverabilityTestReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeliverabilityTestReportCommandInput, CreateDeliverabilityTestReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeliverabilityTestReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "CreateDeliverabilityTestReportCommand";
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
  private serialize(
    input: CreateDeliverabilityTestReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateDeliverabilityTestReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDeliverabilityTestReportCommandOutput> {
    return de_CreateDeliverabilityTestReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
