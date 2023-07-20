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
} from "@smithy/types";

import { DescribeSavingsPlansRequest, DescribeSavingsPlansResponse } from "../models/models_0";
import { de_DescribeSavingsPlansCommand, se_DescribeSavingsPlansCommand } from "../protocols/Aws_restJson1";
import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSavingsPlansCommand}.
 */
export interface DescribeSavingsPlansCommandInput extends DescribeSavingsPlansRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSavingsPlansCommand}.
 */
export interface DescribeSavingsPlansCommandOutput extends DescribeSavingsPlansResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Savings Plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const input = { // DescribeSavingsPlansRequest
 *   savingsPlanArns: [ // SavingsPlanArnList
 *     "STRING_VALUE",
 *   ],
 *   savingsPlanIds: [ // SavingsPlanIdList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   states: [ // SavingsPlanStateList
 *     "payment-pending" || "payment-failed" || "active" || "retired" || "queued" || "queued-deleted",
 *   ],
 *   filters: [ // SavingsPlanFilterList
 *     { // SavingsPlanFilter
 *       name: "region" || "ec2-instance-family" || "commitment" || "upfront" || "term" || "savings-plan-type" || "payment-option" || "start" || "end",
 *       values: [ // ListOfStrings
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSavingsPlansCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSavingsPlansResponse
 * //   savingsPlans: [ // SavingsPlanList
 * //     { // SavingsPlan
 * //       offeringId: "STRING_VALUE",
 * //       savingsPlanId: "STRING_VALUE",
 * //       savingsPlanArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       start: "STRING_VALUE",
 * //       end: "STRING_VALUE",
 * //       state: "payment-pending" || "payment-failed" || "active" || "retired" || "queued" || "queued-deleted",
 * //       region: "STRING_VALUE",
 * //       ec2InstanceFamily: "STRING_VALUE",
 * //       savingsPlanType: "Compute" || "EC2Instance" || "SageMaker",
 * //       paymentOption: "All Upfront" || "Partial Upfront" || "No Upfront",
 * //       productTypes: [ // SavingsPlanProductTypeList
 * //         "EC2" || "Fargate" || "Lambda" || "SageMaker",
 * //       ],
 * //       currency: "CNY" || "USD",
 * //       commitment: "STRING_VALUE",
 * //       upfrontPaymentAmount: "STRING_VALUE",
 * //       recurringPaymentAmount: "STRING_VALUE",
 * //       termDurationInSeconds: Number("long"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSavingsPlansCommandInput - {@link DescribeSavingsPlansCommandInput}
 * @returns {@link DescribeSavingsPlansCommandOutput}
 * @see {@link DescribeSavingsPlansCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for SavingsplansClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters is not valid.</p>
 *
 * @throws {@link SavingsplansServiceException}
 * <p>Base exception class for all service exceptions from Savingsplans service.</p>
 *
 */
export class DescribeSavingsPlansCommand extends $Command<
  DescribeSavingsPlansCommandInput,
  DescribeSavingsPlansCommandOutput,
  SavingsplansClientResolvedConfig
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
  constructor(readonly input: DescribeSavingsPlansCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SavingsplansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSavingsPlansCommandInput, DescribeSavingsPlansCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSavingsPlansCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SavingsplansClient";
    const commandName = "DescribeSavingsPlansCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeSavingsPlansCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSavingsPlansCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSavingsPlansCommandOutput> {
    return de_DescribeSavingsPlansCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
