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
  CreatePricingRuleInput,
  CreatePricingRuleInputFilterSensitiveLog,
  CreatePricingRuleOutput,
  CreatePricingRuleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePricingRuleCommand,
  serializeAws_restJson1CreatePricingRuleCommand,
} from "../protocols/Aws_restJson1";

export interface CreatePricingRuleCommandInput extends CreatePricingRuleInput {}
export interface CreatePricingRuleCommandOutput extends CreatePricingRuleOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreatePricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreatePricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new CreatePricingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePricingRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePricingRuleCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class CreatePricingRuleCommand extends $Command<
  CreatePricingRuleCommandInput,
  CreatePricingRuleCommandOutput,
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

  constructor(readonly input: CreatePricingRuleCommandInput) {
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
  ): Handler<CreatePricingRuleCommandInput, CreatePricingRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePricingRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "CreatePricingRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePricingRuleInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePricingRuleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePricingRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePricingRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePricingRuleCommandOutput> {
    return deserializeAws_restJson1CreatePricingRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
