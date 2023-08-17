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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/models_0";
import { de_DescribeReservedCacheNodesCommand, se_DescribeReservedCacheNodesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedCacheNodesCommand}.
 */
export interface DescribeReservedCacheNodesCommandInput extends DescribeReservedCacheNodesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedCacheNodesCommand}.
 */
export interface DescribeReservedCacheNodesCommandOutput extends ReservedCacheNodeMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about reserved cache nodes for this account, or about a specified
 *             reserved cache node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeReservedCacheNodesMessage
 *   ReservedCacheNodeId: "STRING_VALUE",
 *   ReservedCacheNodesOfferingId: "STRING_VALUE",
 *   CacheNodeType: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * // { // ReservedCacheNodeMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedCacheNodes: [ // ReservedCacheNodeList
 * //     { // ReservedCacheNode
 * //       ReservedCacheNodeId: "STRING_VALUE",
 * //       ReservedCacheNodesOfferingId: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CacheNodeCount: Number("int"),
 * //       ProductDescription: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservationARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedCacheNodesCommandInput - {@link DescribeReservedCacheNodesCommandInput}
 * @returns {@link DescribeReservedCacheNodesCommandOutput}
 * @see {@link DescribeReservedCacheNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReservedCacheNodeNotFoundFault} (client fault)
 *  <p>The requested reserved cache node was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 * @example DescribeReservedCacheNodes
 * ```javascript
 * // Returns information about reserved cache nodes for this account, or about a specified reserved cache node. If the account has no reserved cache nodes, the operation returns an empty list, as shown here.
 * const input = {
 *   "MaxRecords": 25
 * };
 * const command = new DescribeReservedCacheNodesCommand(input);
 * await client.send(command);
 * // example id: describereservedcachenodes-1481742348045
 * ```
 *
 */
export class DescribeReservedCacheNodesCommand extends $Command<
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeReservedCacheNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedCacheNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesCommand";
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
  private serialize(input: DescribeReservedCacheNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReservedCacheNodesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesCommandOutput> {
    return de_DescribeReservedCacheNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
