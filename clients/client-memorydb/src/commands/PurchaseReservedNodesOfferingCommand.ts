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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { PurchaseReservedNodesOfferingRequest, PurchaseReservedNodesOfferingResponse } from "../models/models_0";
import {
  de_PurchaseReservedNodesOfferingCommand,
  se_PurchaseReservedNodesOfferingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandInput extends PurchaseReservedNodesOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandOutput
  extends PurchaseReservedNodesOfferingResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Allows you to purchase a reserved  node offering. Reserved nodes are not eligible for cancellation and are non-refundable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, PurchaseReservedNodesOfferingCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, PurchaseReservedNodesOfferingCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // PurchaseReservedNodesOfferingRequest
 *   ReservedNodesOfferingId: "STRING_VALUE", // required
 *   ReservationId: "STRING_VALUE",
 *   NodeCount: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PurchaseReservedNodesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedNodesOfferingResponse
 * //   ReservedNode: { // ReservedNode
 * //     ReservationId: "STRING_VALUE",
 * //     ReservedNodesOfferingId: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     NodeCount: Number("int"),
 * //     OfferingType: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseReservedNodesOfferingCommandInput - {@link PurchaseReservedNodesOfferingCommandInput}
 * @returns {@link PurchaseReservedNodesOfferingCommandOutput}
 * @see {@link PurchaseReservedNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>You already have a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedNodeQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the user's node quota.</p>
 *
 * @throws {@link ReservedNodesOfferingNotFoundFault} (client fault)
 *  <p>The requested node offering does not exist.
 *
 *       </p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class PurchaseReservedNodesOfferingCommand extends $Command<
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: PurchaseReservedNodesOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PurchaseReservedNodesOfferingCommandInput, PurchaseReservedNodesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedNodesOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "PurchaseReservedNodesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "PurchaseReservedNodesOffering",
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
  private serialize(input: PurchaseReservedNodesOfferingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PurchaseReservedNodesOfferingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedNodesOfferingCommandOutput> {
    return de_PurchaseReservedNodesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
