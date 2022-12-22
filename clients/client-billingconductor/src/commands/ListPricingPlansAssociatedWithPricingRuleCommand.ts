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
  ListPricingPlansAssociatedWithPricingRuleInput,
  ListPricingPlansAssociatedWithPricingRuleInputFilterSensitiveLog,
  ListPricingPlansAssociatedWithPricingRuleOutput,
  ListPricingPlansAssociatedWithPricingRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand,
  serializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand,
} from "../protocols/Aws_restJson1";

export interface ListPricingPlansAssociatedWithPricingRuleCommandInput
  extends ListPricingPlansAssociatedWithPricingRuleInput {}
export interface ListPricingPlansAssociatedWithPricingRuleCommandOutput
  extends ListPricingPlansAssociatedWithPricingRuleOutput,
    __MetadataBearer {}

/**
 * <p>
 *       A list of the pricing plans that are associated with a pricing rule.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingPlansAssociatedWithPricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingPlansAssociatedWithPricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new ListPricingPlansAssociatedWithPricingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPricingPlansAssociatedWithPricingRuleCommandInput} for command's `input` shape.
 * @see {@link ListPricingPlansAssociatedWithPricingRuleCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class ListPricingPlansAssociatedWithPricingRuleCommand extends $Command<
  ListPricingPlansAssociatedWithPricingRuleCommandInput,
  ListPricingPlansAssociatedWithPricingRuleCommandOutput,
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

  constructor(readonly input: ListPricingPlansAssociatedWithPricingRuleCommandInput) {
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
    ListPricingPlansAssociatedWithPricingRuleCommandInput,
    ListPricingPlansAssociatedWithPricingRuleCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListPricingPlansAssociatedWithPricingRuleCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListPricingPlansAssociatedWithPricingRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPricingPlansAssociatedWithPricingRuleInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListPricingPlansAssociatedWithPricingRuleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPricingPlansAssociatedWithPricingRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPricingPlansAssociatedWithPricingRuleCommandOutput> {
    return deserializeAws_restJson1ListPricingPlansAssociatedWithPricingRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
