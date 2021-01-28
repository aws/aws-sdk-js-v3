import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import {
  deserializeAws_json1_1BatchMeterUsageCommand,
  serializeAws_json1_1BatchMeterUsageCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type BatchMeterUsageCommandInput = BatchMeterUsageRequest;
export type BatchMeterUsageCommandOutput = BatchMeterUsageResult & __MetadataBearer;

/**
 * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to
 *             post metering records for a set of customers.</p>
 *         <p>For identical requests, the API is idempotent; requests can be retried with the
 *             same records or a subset of the input records.</p>
 *         <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for
 *             multiple products, you must make multiple calls to BatchMeterUsage.</p>
 *         <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
 *         <p>A UsageRecord can optionally include multiple usage allocations, to provide customers
 *             with usagedata split into buckets by tags that you define (or allow the customer to
 *             define).</p>
 *         <p>BatchMeterUsage requests must be less than 1MB in size.</p>
 */
export class BatchMeterUsageCommand extends $Command<
  BatchMeterUsageCommandInput,
  BatchMeterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "BatchMeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchMeterUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchMeterUsageResult.filterSensitiveLog,
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
