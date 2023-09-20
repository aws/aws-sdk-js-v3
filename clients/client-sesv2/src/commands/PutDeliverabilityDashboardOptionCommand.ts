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

import { PutDeliverabilityDashboardOptionRequest, PutDeliverabilityDashboardOptionResponse } from "../models/models_0";
import {
  de_PutDeliverabilityDashboardOptionCommand,
  se_PutDeliverabilityDashboardOptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDeliverabilityDashboardOptionCommand}.
 */
export interface PutDeliverabilityDashboardOptionCommandInput extends PutDeliverabilityDashboardOptionRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliverabilityDashboardOptionCommand}.
 */
export interface PutDeliverabilityDashboardOptionCommandOutput
  extends PutDeliverabilityDashboardOptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email. You also gain the ability to perform predictive inbox placement tests.</p>
 *          <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // PutDeliverabilityDashboardOptionRequest
 *   DashboardEnabled: true || false, // required
 *   SubscribedDomains: [ // DomainDeliverabilityTrackingOptions
 *     { // DomainDeliverabilityTrackingOption
 *       Domain: "STRING_VALUE",
 *       SubscriptionStartDate: new Date("TIMESTAMP"),
 *       InboxPlacementTrackingOption: { // InboxPlacementTrackingOption
 *         Global: true || false,
 *         TrackedIsps: [ // IspNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new PutDeliverabilityDashboardOptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDeliverabilityDashboardOptionCommandInput - {@link PutDeliverabilityDashboardOptionCommandInput}
 * @returns {@link PutDeliverabilityDashboardOptionCommandOutput}
 * @see {@link PutDeliverabilityDashboardOptionCommandInput} for command's `input` shape.
 * @see {@link PutDeliverabilityDashboardOptionCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class PutDeliverabilityDashboardOptionCommand extends $Command<
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
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
  constructor(readonly input: PutDeliverabilityDashboardOptionCommandInput) {
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
  ): Handler<PutDeliverabilityDashboardOptionCommandInput, PutDeliverabilityDashboardOptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeliverabilityDashboardOptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutDeliverabilityDashboardOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "PutDeliverabilityDashboardOption",
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
  private serialize(
    input: PutDeliverabilityDashboardOptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutDeliverabilityDashboardOptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput> {
    return de_PutDeliverabilityDashboardOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
