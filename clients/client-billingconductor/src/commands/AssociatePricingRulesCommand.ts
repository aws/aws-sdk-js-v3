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
  AssociatePricingRulesInput,
  AssociatePricingRulesInputFilterSensitiveLog,
  AssociatePricingRulesOutput,
  AssociatePricingRulesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePricingRulesCommand,
  serializeAws_restJson1AssociatePricingRulesCommand,
} from "../protocols/Aws_restJson1";

export interface AssociatePricingRulesCommandInput extends AssociatePricingRulesInput {}
export interface AssociatePricingRulesCommandOutput extends AssociatePricingRulesOutput, __MetadataBearer {}

/**
 * <p>Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>.
 *       The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, AssociatePricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, AssociatePricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new AssociatePricingRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePricingRulesCommandInput} for command's `input` shape.
 * @see {@link AssociatePricingRulesCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class AssociatePricingRulesCommand extends $Command<
  AssociatePricingRulesCommandInput,
  AssociatePricingRulesCommandOutput,
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

  constructor(readonly input: AssociatePricingRulesCommandInput) {
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
  ): Handler<AssociatePricingRulesCommandInput, AssociatePricingRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociatePricingRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "AssociatePricingRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePricingRulesInputFilterSensitiveLog,
      outputFilterSensitiveLog: AssociatePricingRulesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociatePricingRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociatePricingRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociatePricingRulesCommandOutput> {
    return deserializeAws_restJson1AssociatePricingRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
