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
  ListCustomLineItemsInput,
  ListCustomLineItemsInputFilterSensitiveLog,
  ListCustomLineItemsOutput,
  ListCustomLineItemsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListCustomLineItemsCommand, se_ListCustomLineItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomLineItemsCommand}.
 */
export interface ListCustomLineItemsCommandInput extends ListCustomLineItemsInput {}
/**
 * @public
 *
 * The output of {@link ListCustomLineItemsCommand}.
 */
export interface ListCustomLineItemsCommandOutput extends ListCustomLineItemsOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListCustomLineItemsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListCustomLineItemsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListCustomLineItemsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListCustomLineItemsFilter
 *     Names: [ // CustomLineItemNameList
 *       "STRING_VALUE",
 *     ],
 *     BillingGroups: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *     Arns: [ // CustomLineItemArns
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListCustomLineItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomLineItemsOutput
 * //   CustomLineItems: [ // CustomLineItemList
 * //     { // CustomLineItemListElement
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ChargeDetails: { // ListCustomLineItemChargeDetails
 * //         Flat: { // ListCustomLineItemFlatChargeDetails
 * //           ChargeValue: Number("double"), // required
 * //         },
 * //         Percentage: { // ListCustomLineItemPercentageChargeDetails
 * //           PercentageValue: Number("double"), // required
 * //         },
 * //         Type: "STRING_VALUE", // required
 * //         LineItemFilters: [ // LineItemFiltersList
 * //           { // LineItemFilter
 * //             Attribute: "STRING_VALUE", // required
 * //             MatchOption: "STRING_VALUE", // required
 * //             Values: [ // LineItemFilterValuesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       CurrencyCode: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ProductCode: "STRING_VALUE",
 * //       BillingGroupArn: "STRING_VALUE",
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       AssociationSize: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomLineItemsCommandInput - {@link ListCustomLineItemsCommandInput}
 * @returns {@link ListCustomLineItemsCommandOutput}
 * @see {@link ListCustomLineItemsCommandInput} for command's `input` shape.
 * @see {@link ListCustomLineItemsCommandOutput} for command's `response` shape.
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
export class ListCustomLineItemsCommand extends $Command<
  ListCustomLineItemsCommandInput,
  ListCustomLineItemsCommandOutput,
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
  constructor(readonly input: ListCustomLineItemsCommandInput) {
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
  ): Handler<ListCustomLineItemsCommandInput, ListCustomLineItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomLineItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "ListCustomLineItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomLineItemsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomLineItemsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingConductor",
        operation: "ListCustomLineItems",
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
  private serialize(input: ListCustomLineItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCustomLineItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCustomLineItemsCommandOutput> {
    return de_ListCustomLineItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
