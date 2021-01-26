import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateBandwidthRateLimitScheduleInput, UpdateBandwidthRateLimitScheduleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand,
  serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand,
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

export type UpdateBandwidthRateLimitScheduleCommandInput = UpdateBandwidthRateLimitScheduleInput;
export type UpdateBandwidthRateLimitScheduleCommandOutput = UpdateBandwidthRateLimitScheduleOutput & __MetadataBearer;

/**
 * <p>
 *          Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect.
 *          Use this to initiate or update a gateway's bandwidth rate limit schedule.
 *          This operation is supported in the volume and tape gateway types.
 *       </p>
 */
export class UpdateBandwidthRateLimitScheduleCommand extends $Command<
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBandwidthRateLimitScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBandwidthRateLimitScheduleCommandInput, UpdateBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateBandwidthRateLimitScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateBandwidthRateLimitScheduleCommandOutput> {
    return deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
