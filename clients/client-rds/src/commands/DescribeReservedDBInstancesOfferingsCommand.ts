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

import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand,
  serializeAws_queryDescribeReservedDBInstancesOfferingsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeReservedDBInstancesOfferingsCommand}.
 */
export interface DescribeReservedDBInstancesOfferingsCommandInput extends DescribeReservedDBInstancesOfferingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedDBInstancesOfferingsCommand}.
 */
export interface DescribeReservedDBInstancesOfferingsCommandOutput
  extends ReservedDBInstancesOfferingMessage,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists available reserved DB instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesOfferingsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesOfferingsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   ReservedDBInstancesOfferingId: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReservedDBInstancesOfferingsCommandInput - {@link DescribeReservedDBInstancesOfferingsCommandInput}
 * @returns {@link DescribeReservedDBInstancesOfferingsCommandOutput}
 * @see {@link DescribeReservedDBInstancesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstancesOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 *
 * @example To list information about reserved DB instance offerings
 * ```javascript
 * // This example lists information for all reserved DB instance offerings for the specified DB instance class, duration, product, offering type, and availability zone settings.
 * const input = {
 *   "DBInstanceClass": "db.t2.micro",
 *   "Duration": "1y",
 *   "MultiAZ": false,
 *   "OfferingType": "No Upfront",
 *   "ProductDescription": "mysql"
 * };
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * await client.send(command);
 * // example id: describe-reserved-db-instances-offerings-9de7d1fd-d6a6-4a72-84ae-b2ef58d47d8d
 * ```
 *
 */
export class DescribeReservedDBInstancesOfferingsCommand extends $Command<
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeReservedDBInstancesOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReservedDBInstancesOfferingsCommandInput, DescribeReservedDBInstancesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedDBInstancesOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesOfferingsCommand";
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
  private serialize(
    input: DescribeReservedDBInstancesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedDBInstancesOfferingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
