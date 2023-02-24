// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  PutDeliverabilityDashboardOptionRequest,
  PutDeliverabilityDashboardOptionRequestFilterSensitiveLog,
  PutDeliverabilityDashboardOptionResponse,
  PutDeliverabilityDashboardOptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand,
  serializeAws_restJson1PutDeliverabilityDashboardOptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

export interface PutDeliverabilityDashboardOptionCommandInput extends PutDeliverabilityDashboardOptionRequest {}
export interface PutDeliverabilityDashboardOptionCommandOutput
  extends PutDeliverabilityDashboardOptionResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email. You also gain the ability to perform predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDeliverabilityDashboardOptionCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDeliverabilityDashboardOptionCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutDeliverabilityDashboardOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDeliverabilityDashboardOptionCommandInput} for command's `input` shape.
 * @see {@link PutDeliverabilityDashboardOptionCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
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
      inputFilterSensitiveLog: PutDeliverabilityDashboardOptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutDeliverabilityDashboardOptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutDeliverabilityDashboardOptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDeliverabilityDashboardOptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDeliverabilityDashboardOptionCommandOutput> {
    return deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
