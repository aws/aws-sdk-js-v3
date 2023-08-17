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

import { CreateOrderInput, CreateOrderOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_CreateOrderCommand, se_CreateOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOrderCommand}.
 */
export interface CreateOrderCommandInput extends CreateOrderInput {}
/**
 * @public
 *
 * The output of {@link CreateOrderCommand}.
 */
export interface CreateOrderCommandOutput extends CreateOrderOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an order for an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // CreateOrderInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   LineItems: [ // LineItemRequestListDefinition // required
 *     { // LineItemRequest
 *       CatalogItemId: "STRING_VALUE",
 *       Quantity: Number("int"),
 *     },
 *   ],
 *   PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT", // required
 *   PaymentTerm: "THREE_YEARS" || "ONE_YEAR",
 * };
 * const command = new CreateOrderCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrderOutput
 * //   Order: { // Order
 * //     OutpostId: "STRING_VALUE",
 * //     OrderId: "STRING_VALUE",
 * //     Status: "RECEIVED" || "PENDING" || "PROCESSING" || "INSTALLING" || "FULFILLED" || "CANCELLED" || "PREPARING" || "IN_PROGRESS" || "COMPLETED" || "ERROR",
 * //     LineItems: [ // LineItemListDefinition
 * //       { // LineItem
 * //         CatalogItemId: "STRING_VALUE",
 * //         LineItemId: "STRING_VALUE",
 * //         Quantity: Number("int"),
 * //         Status: "PREPARING" || "BUILDING" || "SHIPPED" || "DELIVERED" || "INSTALLING" || "INSTALLED" || "ERROR" || "CANCELLED" || "REPLACED",
 * //         ShipmentInformation: { // ShipmentInformation
 * //           ShipmentTrackingNumber: "STRING_VALUE",
 * //           ShipmentCarrier: "DHL" || "DBS" || "FEDEX" || "UPS",
 * //         },
 * //         AssetInformationList: [ // LineItemAssetInformationList
 * //           { // LineItemAssetInformation
 * //             AssetId: "STRING_VALUE",
 * //             MacAddressList: [ // MacAddressList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         PreviousLineItemId: "STRING_VALUE",
 * //         PreviousOrderId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //     OrderSubmissionDate: new Date("TIMESTAMP"),
 * //     OrderFulfilledDate: new Date("TIMESTAMP"),
 * //     PaymentTerm: "THREE_YEARS" || "ONE_YEAR",
 * //     OrderType: "OUTPOST" || "REPLACEMENT",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOrderCommandInput - {@link CreateOrderCommandInput}
 * @returns {@link CreateOrderCommandOutput}
 * @see {@link CreateOrderCommandInput} for command's `input` shape.
 * @see {@link CreateOrderCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class CreateOrderCommand extends $Command<
  CreateOrderCommandInput,
  CreateOrderCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: CreateOrderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOrderCommandInput, CreateOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateOrderCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "CreateOrderCommand";
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
  private serialize(input: CreateOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOrderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOrderCommandOutput> {
    return de_CreateOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
