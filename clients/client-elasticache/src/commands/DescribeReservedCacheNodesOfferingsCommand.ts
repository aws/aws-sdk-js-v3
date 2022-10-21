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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  DescribeReservedCacheNodesOfferingsMessage,
  DescribeReservedCacheNodesOfferingsMessageFilterSensitiveLog,
  ReservedCacheNodesOfferingMessage,
  ReservedCacheNodesOfferingMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand,
  serializeAws_queryDescribeReservedCacheNodesOfferingsCommand,
} from "../protocols/Aws_query";

export interface DescribeReservedCacheNodesOfferingsCommandInput extends DescribeReservedCacheNodesOfferingsMessage {}
export interface DescribeReservedCacheNodesOfferingsCommandOutput
  extends ReservedCacheNodesOfferingMessage,
    __MetadataBearer {}

/**
 * <p>Lists available reserved cache
 *             node offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReservedCacheNodesOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedCacheNodesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeReservedCacheNodesOfferingsCommand extends $Command<
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
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

  constructor(readonly input: DescribeReservedCacheNodesOfferingsCommandInput) {
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
  ): Handler<DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReservedCacheNodesOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReservedCacheNodesOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReservedCacheNodesOfferingsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ReservedCacheNodesOfferingMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedCacheNodesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
