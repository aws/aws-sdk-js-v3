import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateBandwidthRateLimitCommand,
  serializeAws_json1_1UpdateBandwidthRateLimitCommand,
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

export type UpdateBandwidthRateLimitCommandInput = UpdateBandwidthRateLimitInput;
export type UpdateBandwidthRateLimitCommandOutput = UpdateBandwidthRateLimitOutput & __MetadataBearer;

/**
 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
 *          download bandwidth rate limit or specify only one of the two. If you don't set a
 *          bandwidth rate limit, the existing rate limit remains. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set
 *          any limit, the gateway does not have any limitations on its bandwidth usage and could
 *          potentially use the maximum available bandwidth.</p>
 *
 *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 */
export class UpdateBandwidthRateLimitCommand extends $Command<
  UpdateBandwidthRateLimitCommandInput,
  UpdateBandwidthRateLimitCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBandwidthRateLimitCommandInput) {
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
  ): Handler<UpdateBandwidthRateLimitCommandInput, UpdateBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBandwidthRateLimitInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBandwidthRateLimitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBandwidthRateLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBandwidthRateLimitCommandOutput> {
    return deserializeAws_json1_1UpdateBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
