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

import { GetAccountRequest, GetAccountResponse, GetAccountResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetAccountCommand, se_GetAccountCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountCommand}.
 */
export interface GetAccountCommandInput extends GetAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountCommand}.
 */
export interface GetAccountCommandOutput extends GetAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Obtain information about the email-sending status and capabilities of your Amazon SES
 *             account in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetAccountCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetAccountCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = {};
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountResponse
 * //   DedicatedIpAutoWarmupEnabled: true || false,
 * //   EnforcementStatus: "STRING_VALUE",
 * //   ProductionAccessEnabled: true || false,
 * //   SendQuota: { // SendQuota
 * //     Max24HourSend: Number("double"),
 * //     MaxSendRate: Number("double"),
 * //     SentLast24Hours: Number("double"),
 * //   },
 * //   SendingEnabled: true || false,
 * //   SuppressionAttributes: { // SuppressionAttributes
 * //     SuppressedReasons: [ // SuppressionListReasons
 * //       "BOUNCE" || "COMPLAINT",
 * //     ],
 * //   },
 * //   Details: { // AccountDetails
 * //     MailType: "MARKETING" || "TRANSACTIONAL",
 * //     WebsiteURL: "STRING_VALUE",
 * //     ContactLanguage: "EN" || "JA",
 * //     UseCaseDescription: "STRING_VALUE",
 * //     AdditionalContactEmailAddresses: [ // AdditionalContactEmailAddresses
 * //       "STRING_VALUE",
 * //     ],
 * //     ReviewDetails: { // ReviewDetails
 * //       Status: "PENDING" || "FAILED" || "GRANTED" || "DENIED",
 * //       CaseId: "STRING_VALUE",
 * //     },
 * //   },
 * //   VdmAttributes: { // VdmAttributes
 * //     VdmEnabled: "ENABLED" || "DISABLED", // required
 * //     DashboardAttributes: { // DashboardAttributes
 * //       EngagementMetrics: "ENABLED" || "DISABLED",
 * //     },
 * //     GuardianAttributes: { // GuardianAttributes
 * //       OptimizedSharedDelivery: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountCommandInput - {@link GetAccountCommandInput}
 * @returns {@link GetAccountCommandOutput}
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class GetAccountCommand extends $Command<
  GetAccountCommandInput,
  GetAccountCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: GetAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountCommandInput, GetAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetAccountResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "GetAccount",
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
  private serialize(input: GetAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountCommandOutput> {
    return de_GetAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
