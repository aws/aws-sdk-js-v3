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

import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import {
  BatchMeterUsageRequest,
  BatchMeterUsageRequestFilterSensitiveLog,
  BatchMeterUsageResult,
  BatchMeterUsageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchMeterUsageCommand,
  serializeAws_json1_1BatchMeterUsageCommand,
} from "../protocols/Aws_json1_1";

export interface BatchMeterUsageCommandInput extends BatchMeterUsageRequest {}
export interface BatchMeterUsageCommandOutput extends BatchMeterUsageResult, __MetadataBearer {}

/**
 * <p>
 *             <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS
 *             Marketplace to post metering records for a set of customers.</p>
 *         <p>For identical requests, the API is idempotent; requests can be retried with the same
 *             records or a subset of the input records.</p>
 *         <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter
 *             usage for multiple products, you must make multiple calls to
 *                 <code>BatchMeterUsage</code>.</p>
 *         <p>Usage records are expected to be submitted as quickly as possible after the event that
 *             is being recorded, and are not accepted more than 6 hours after the event.</p>
 *         <p>
 *             <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a
 *             time.</p>
 *         <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to
 *             provide customers with usage data split into buckets by tags that you define (or allow
 *             the customer to define).</p>
 *         <p>
 *             <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects,
 *             showing the result for each <code>UsageRecord</code>, as well as a list of
 *                 <code>UnprocessedRecords</code>, indicating errors in the service side that you
 *             should retry.</p>
 *         <p>
 *             <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p>
 *         <note>
 *             <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller
 *                     Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new BatchMeterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchMeterUsageCommandInput} for command's `input` shape.
 * @see {@link BatchMeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 */
export class BatchMeterUsageCommand extends $Command<
  BatchMeterUsageCommandInput,
  BatchMeterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
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

  constructor(readonly input: BatchMeterUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchMeterUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "BatchMeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchMeterUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchMeterUsageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchMeterUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchMeterUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchMeterUsageCommandOutput> {
    return deserializeAws_json1_1BatchMeterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
