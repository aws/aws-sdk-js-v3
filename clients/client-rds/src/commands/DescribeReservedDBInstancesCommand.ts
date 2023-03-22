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

import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/models_1";
import {
  deserializeAws_queryDescribeReservedDBInstancesCommand,
  serializeAws_queryDescribeReservedDBInstancesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeReservedDBInstancesCommand}.
 */
export interface DescribeReservedDBInstancesCommandInput extends DescribeReservedDBInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedDBInstancesCommand}.
 */
export interface DescribeReservedDBInstancesCommandOutput extends ReservedDBInstanceMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeReservedDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReservedDBInstancesCommandInput - {@link DescribeReservedDBInstancesCommandInput}
 * @returns {@link DescribeReservedDBInstancesCommandOutput}
 * @see {@link DescribeReservedDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ReservedDBInstanceNotFoundFault} (client fault)
 *  <p>The specified reserved DB Instance not found.</p>
 *
 *
 * @example To list information about reserved DB instances
 * ```javascript
 * // This example lists information for all reserved DB instances for the specified DB instance class, duration, product, offering type, and availability zone settings.
 * const input = {
 *   "DBInstanceClass": "db.t2.micro",
 *   "Duration": "1y",
 *   "MultiAZ": false,
 *   "OfferingType": "No Upfront",
 *   "ProductDescription": "mysql"
 * };
 * const command = new DescribeReservedDBInstancesCommand(input);
 * await client.send(command);
 * // example id: describe-reserved-db-instances-d45adaca-2e30-407c-a0f3-aa7b98bea17f
 * ```
 *
 */
export class DescribeReservedDBInstancesCommand extends $Command<
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
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
  constructor(readonly input: DescribeReservedDBInstancesCommandInput) {
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
  ): Handler<DescribeReservedDBInstancesCommandInput, DescribeReservedDBInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedDBInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeReservedDBInstancesCommand";
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
  private serialize(input: DescribeReservedDBInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedDBInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedDBInstancesCommandOutput> {
    return deserializeAws_queryDescribeReservedDBInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
