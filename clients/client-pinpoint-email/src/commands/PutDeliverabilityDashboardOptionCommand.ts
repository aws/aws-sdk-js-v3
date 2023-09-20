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
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_PutDeliverabilityDashboardOptionCommand,
  se_PutDeliverabilityDashboardOptionCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the
 *             Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for
 *             the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform
 *             predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
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
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
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
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 */
export class PutDeliverabilityDashboardOptionCommand extends $Command<
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
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
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDeliverabilityDashboardOptionCommandInput, PutDeliverabilityDashboardOptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeliverabilityDashboardOptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutDeliverabilityDashboardOptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPinpointEmailService",
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
