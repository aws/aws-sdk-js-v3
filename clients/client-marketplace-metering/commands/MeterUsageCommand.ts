import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { MeterUsageRequest, MeterUsageResult } from "../models/models_0";
import {
  deserializeAws_json1_1MeterUsageCommand,
  serializeAws_json1_1MeterUsageCommand,
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

export type MeterUsageCommandInput = MeterUsageRequest;
export type MeterUsageCommandOutput = MeterUsageResult & __MetadataBearer;

/**
 * <p>API to emit metering records. For identical requests, the API is idempotent. It
 *             simply returns the metering record ID.</p>
 *         <p>MeterUsage is authenticated on the buyer's AWS account using credentials from the
 *             EC2 instance, ECS task, or EKS pod.</p>
 *         <p>MeterUsage can optionally include multiple usage allocations, to provide customers
 *             with usage data split into buckets by tags that you define (or allow the customer to
 *             define).</p>
 */
export class MeterUsageCommand extends $Command<
  MeterUsageCommandInput,
  MeterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MeterUsageCommandInput) {
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
  ): Handler<MeterUsageCommandInput, MeterUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "MeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MeterUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MeterUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MeterUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MeterUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MeterUsageCommandOutput> {
    return deserializeAws_json1_1MeterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
