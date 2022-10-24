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
  MeterUsageRequest,
  MeterUsageRequestFilterSensitiveLog,
  MeterUsageResult,
  MeterUsageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1MeterUsageCommand,
  serializeAws_json1_1MeterUsageCommand,
} from "../protocols/Aws_json1_1";

export interface MeterUsageCommandInput extends MeterUsageRequest {}
export interface MeterUsageCommandOutput extends MeterUsageResult, __MetadataBearer {}

/**
 * <p>API to emit metering records. For identical requests, the API is idempotent. It simply
 *             returns the metering record ID.</p>
 *         <p>
 *             <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials
 *             from the EC2 instance, ECS task, or EKS pod.</p>
 *         <p>
 *             <code>MeterUsage</code> can optionally include multiple usage allocations, to provide
 *             customers with usage data split into buckets by tags that you define (or allow the
 *             customer to define).</p>
 *         <p>Usage records are expected to be submitted as quickly as possible after the event that
 *             is being recorded, and are not accepted more than 6 hours after the event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, MeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, MeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new MeterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MeterUsageCommandInput} for command's `input` shape.
 * @see {@link MeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 */
export class MeterUsageCommand extends $Command<
  MeterUsageCommandInput,
  MeterUsageCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, MeterUsageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceMeteringClient";
    const commandName = "MeterUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MeterUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: MeterUsageResultFilterSensitiveLog,
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
