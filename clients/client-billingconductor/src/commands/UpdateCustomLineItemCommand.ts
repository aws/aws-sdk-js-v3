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
  UpdateCustomLineItemInput,
  UpdateCustomLineItemInputFilterSensitiveLog,
  UpdateCustomLineItemOutput,
  UpdateCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateCustomLineItemCommand, se_UpdateCustomLineItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomLineItemCommand}.
 */
export interface UpdateCustomLineItemCommandInput extends UpdateCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link UpdateCustomLineItemCommand}.
 */
export interface UpdateCustomLineItemCommandOutput extends UpdateCustomLineItemOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Update an existing custom line item in the current or previous billing period.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // UpdateCustomLineItemInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ChargeDetails: { // UpdateCustomLineItemChargeDetails
 *     Flat: { // UpdateCustomLineItemFlatChargeDetails
 *       ChargeValue: Number("double"), // required
 *     },
 *     Percentage: { // UpdateCustomLineItemPercentageChargeDetails
 *       PercentageValue: Number("double"), // required
 *     },
 *     LineItemFilters: [ // LineItemFiltersList
 *       { // LineItemFilter
 *         Attribute: "STRING_VALUE", // required
 *         MatchOption: "STRING_VALUE", // required
 *         Values: [ // LineItemFilterValuesList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * //   BillingGroupArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ChargeDetails: { // ListCustomLineItemChargeDetails
 * //     Flat: { // ListCustomLineItemFlatChargeDetails
 * //       ChargeValue: Number("double"), // required
 * //     },
 * //     Percentage: { // ListCustomLineItemPercentageChargeDetails
 * //       PercentageValue: Number("double"), // required
 * //     },
 * //     Type: "STRING_VALUE", // required
 * //     LineItemFilters: [ // LineItemFiltersList
 * //       { // LineItemFilter
 * //         Attribute: "STRING_VALUE", // required
 * //         MatchOption: "STRING_VALUE", // required
 * //         Values: [ // LineItemFilterValuesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   LastModifiedTime: Number("long"),
 * //   AssociationSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateCustomLineItemCommandInput - {@link UpdateCustomLineItemCommandInput}
 * @returns {@link UpdateCustomLineItemCommandOutput}
 * @see {@link UpdateCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomLineItemCommandOutput} for command's `response` shape.
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
export class UpdateCustomLineItemCommand extends $Command<
  UpdateCustomLineItemCommandInput,
  UpdateCustomLineItemCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UpdateCustomLineItemCommandInput) {
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
  ): Handler<UpdateCustomLineItemCommandInput, UpdateCustomLineItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomLineItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "UpdateCustomLineItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomLineItemInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomLineItemOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "UpdateCustomLineItem",
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
  private serialize(input: UpdateCustomLineItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCustomLineItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCustomLineItemCommandOutput> {
    return de_UpdateCustomLineItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
