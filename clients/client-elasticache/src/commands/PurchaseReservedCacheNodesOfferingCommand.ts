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
  PurchaseReservedCacheNodesOfferingMessage,
  PurchaseReservedCacheNodesOfferingMessageFilterSensitiveLog,
  PurchaseReservedCacheNodesOfferingResult,
  PurchaseReservedCacheNodesOfferingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand,
  serializeAws_queryPurchaseReservedCacheNodesOfferingCommand,
} from "../protocols/Aws_query";

export interface PurchaseReservedCacheNodesOfferingCommandInput extends PurchaseReservedCacheNodesOfferingMessage {}
export interface PurchaseReservedCacheNodesOfferingCommandOutput
  extends PurchaseReservedCacheNodesOfferingResult,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase a reserved
 *             cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or
 *             <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new PurchaseReservedCacheNodesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedCacheNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedCacheNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class PurchaseReservedCacheNodesOfferingCommand extends $Command<
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput,
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

  constructor(readonly input: PurchaseReservedCacheNodesOfferingCommandInput) {
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
  ): Handler<PurchaseReservedCacheNodesOfferingCommandInput, PurchaseReservedCacheNodesOfferingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PurchaseReservedCacheNodesOfferingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "PurchaseReservedCacheNodesOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedCacheNodesOfferingMessageFilterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedCacheNodesOfferingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedCacheNodesOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryPurchaseReservedCacheNodesOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedCacheNodesOfferingCommandOutput> {
    return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
