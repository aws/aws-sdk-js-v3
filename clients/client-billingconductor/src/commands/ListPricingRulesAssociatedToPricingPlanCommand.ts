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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  ListPricingRulesAssociatedToPricingPlanInput,
  ListPricingRulesAssociatedToPricingPlanOutput,
} from "../models/models_0";
import {
  de_ListPricingRulesAssociatedToPricingPlanCommand,
  se_ListPricingRulesAssociatedToPricingPlanCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPricingRulesAssociatedToPricingPlanCommand}.
 */
export interface ListPricingRulesAssociatedToPricingPlanCommandInput
  extends ListPricingRulesAssociatedToPricingPlanInput {}
/**
 * @public
 *
 * The output of {@link ListPricingRulesAssociatedToPricingPlanCommand}.
 */
export interface ListPricingRulesAssociatedToPricingPlanCommandOutput
  extends ListPricingRulesAssociatedToPricingPlanOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Lists the pricing rules that are associated with a pricing plan.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingRulesAssociatedToPricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingRulesAssociatedToPricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListPricingRulesAssociatedToPricingPlanInput
 *   BillingPeriod: "STRING_VALUE",
 *   PricingPlanArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPricingRulesAssociatedToPricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // ListPricingRulesAssociatedToPricingPlanOutput
 * //   BillingPeriod: "STRING_VALUE",
 * //   PricingPlanArn: "STRING_VALUE",
 * //   PricingRuleArns: [ // PricingRuleArns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricingRulesAssociatedToPricingPlanCommandInput - {@link ListPricingRulesAssociatedToPricingPlanCommandInput}
 * @returns {@link ListPricingRulesAssociatedToPricingPlanCommandOutput}
 * @see {@link ListPricingRulesAssociatedToPricingPlanCommandInput} for command's `input` shape.
 * @see {@link ListPricingRulesAssociatedToPricingPlanCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 */
export class ListPricingRulesAssociatedToPricingPlanCommand extends $Command<
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
  BillingconductorClientResolvedConfig
> {
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
  constructor(readonly input: ListPricingRulesAssociatedToPricingPlanCommandInput) {
    super();
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "ListPricingRulesAssociatedToPricingPlan",
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
    input: ListPricingRulesAssociatedToPricingPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPricingRulesAssociatedToPricingPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> {
    return de_ListPricingRulesAssociatedToPricingPlanCommand(output, context);
  }
}
