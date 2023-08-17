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

import { DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage } from "../models/models_1";
import {
  de_DescribeReservedNodeOfferingsCommand,
  se_DescribeReservedNodeOfferingsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedNodeOfferingsCommand}.
 */
export interface DescribeReservedNodeOfferingsCommandInput extends DescribeReservedNodeOfferingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodeOfferingsCommand}.
 */
export interface DescribeReservedNodeOfferingsCommandOutput extends ReservedNodeOfferingsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
 *             descriptions including the node type, the fixed and recurring costs of reserving the
 *             node and duration the node will be reserved for you. These descriptions help you
 *             determine which reserve node offering you want to purchase. You then use the unique
 *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
 *             or more nodes for your Amazon Redshift cluster. </p>
 *          <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeReservedNodeOfferingsMessage
 *   ReservedNodeOfferingId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedNodeOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // ReservedNodeOfferingsMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodeOfferings: [ // ReservedNodeOfferingList
 * //     { // ReservedNodeOffering
 * //       ReservedNodeOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedNodeOfferingsCommandInput - {@link DescribeReservedNodeOfferingsCommandInput}
 * @returns {@link DescribeReservedNodeOfferingsCommandOutput}
 * @see {@link DescribeReservedNodeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeReservedNodeOfferingsCommand extends $Command<
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeReservedNodeOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedNodeOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeReservedNodeOfferingsCommand";
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
  private serialize(input: DescribeReservedNodeOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReservedNodeOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedNodeOfferingsCommandOutput> {
    return de_DescribeReservedNodeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
