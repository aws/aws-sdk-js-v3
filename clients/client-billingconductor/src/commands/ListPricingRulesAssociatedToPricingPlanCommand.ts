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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListPricingRulesAssociatedToPricingPlanInput,
  ListPricingRulesAssociatedToPricingPlanInputFilterSensitiveLog,
  ListPricingRulesAssociatedToPricingPlanOutput,
  ListPricingRulesAssociatedToPricingPlanOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand,
  serializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand,
} from "../protocols/Aws_restJson1";

export interface ListPricingRulesAssociatedToPricingPlanCommandInput
  extends ListPricingRulesAssociatedToPricingPlanInput {}
export interface ListPricingRulesAssociatedToPricingPlanCommandOutput
  extends ListPricingRulesAssociatedToPricingPlanOutput,
    __MetadataBearer {}

/**
 * <p>
 *       Lists the pricing rules that are associated with a pricing plan.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingRulesAssociatedToPricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingRulesAssociatedToPricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListPricingRulesAssociatedToPricingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPricingRulesAssociatedToPricingPlanCommandInput} for command's `input` shape.
 * @see {@link ListPricingRulesAssociatedToPricingPlanCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListPricingRulesAssociatedToPricingPlanCommand extends $Command<
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: ListPricingRulesAssociatedToPricingPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPricingRulesAssociatedToPricingPlanCommandInput,
    ListPricingRulesAssociatedToPricingPlanCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListPricingRulesAssociatedToPricingPlanCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListPricingRulesAssociatedToPricingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPricingRulesAssociatedToPricingPlanInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListPricingRulesAssociatedToPricingPlanOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPricingRulesAssociatedToPricingPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> {
    return deserializeAws_restJson1ListPricingRulesAssociatedToPricingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
