import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBandwidthRateLimitCommand,
  serializeAws_json1_1DescribeBandwidthRateLimitCommand,
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

export type DescribeBandwidthRateLimitCommandInput = DescribeBandwidthRateLimitInput;
export type DescribeBandwidthRateLimitCommandOutput = DescribeBandwidthRateLimitOutput & __MetadataBearer;

/**
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>This operation only returns a value for a bandwidth rate limit only if the limit is set.
 *          If no limits are set for the gateway, then this operation returns only the gateway ARN in
 *          the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 */
export class DescribeBandwidthRateLimitCommand extends $Command<
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBandwidthRateLimitCommandInput) {
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
  ): Handler<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBandwidthRateLimitInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBandwidthRateLimitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBandwidthRateLimitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBandwidthRateLimitCommandOutput> {
    return deserializeAws_json1_1DescribeBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
