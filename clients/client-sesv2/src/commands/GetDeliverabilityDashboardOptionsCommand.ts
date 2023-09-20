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
  GetDeliverabilityDashboardOptionsRequest,
  GetDeliverabilityDashboardOptionsResponse,
} from "../models/models_0";
import {
  de_GetDeliverabilityDashboardOptionsCommand,
  se_GetDeliverabilityDashboardOptionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeliverabilityDashboardOptionsCommand}.
 */
export interface GetDeliverabilityDashboardOptionsCommandInput extends GetDeliverabilityDashboardOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliverabilityDashboardOptionsCommand}.
 */
export interface GetDeliverabilityDashboardOptionsCommandOutput
  extends GetDeliverabilityDashboardOptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieve information about the status of the Deliverability dashboard for your account. When
 *             the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other
 *             metrics for the domains that you use to send email. You also gain the ability to perform
 *             predictive inbox placement tests.</p>
 *          <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDeliverabilityDashboardOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDeliverabilityDashboardOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = {};
 * const command = new GetDeliverabilityDashboardOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliverabilityDashboardOptionsResponse
 * //   DashboardEnabled: true || false, // required
 * //   SubscriptionExpiryDate: new Date("TIMESTAMP"),
 * //   AccountStatus: "ACTIVE" || "PENDING_EXPIRATION" || "DISABLED",
 * //   ActiveSubscribedDomains: [ // DomainDeliverabilityTrackingOptions
 * //     { // DomainDeliverabilityTrackingOption
 * //       Domain: "STRING_VALUE",
 * //       SubscriptionStartDate: new Date("TIMESTAMP"),
 * //       InboxPlacementTrackingOption: { // InboxPlacementTrackingOption
 * //         Global: true || false,
 * //         TrackedIsps: [ // IspNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   PendingExpirationSubscribedDomains: [
 * //     {
 * //       Domain: "STRING_VALUE",
 * //       SubscriptionStartDate: new Date("TIMESTAMP"),
 * //       InboxPlacementTrackingOption: {
 * //         Global: true || false,
 * //         TrackedIsps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeliverabilityDashboardOptionsCommandInput - {@link GetDeliverabilityDashboardOptionsCommandInput}
 * @returns {@link GetDeliverabilityDashboardOptionsCommandOutput}
 * @see {@link GetDeliverabilityDashboardOptionsCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityDashboardOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 */
export class GetDeliverabilityDashboardOptionsCommand extends $Command<
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
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
  constructor(readonly input: GetDeliverabilityDashboardOptionsCommandInput) {
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
  ): Handler<GetDeliverabilityDashboardOptionsCommandInput, GetDeliverabilityDashboardOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeliverabilityDashboardOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "GetDeliverabilityDashboardOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "GetDeliverabilityDashboardOptions",
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
    input: GetDeliverabilityDashboardOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDeliverabilityDashboardOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeliverabilityDashboardOptionsCommandOutput> {
    return de_GetDeliverabilityDashboardOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
