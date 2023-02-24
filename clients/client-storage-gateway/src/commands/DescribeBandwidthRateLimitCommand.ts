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
  DescribeBandwidthRateLimitInput,
  DescribeBandwidthRateLimitInputFilterSensitiveLog,
  DescribeBandwidthRateLimitOutput,
  DescribeBandwidthRateLimitOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBandwidthRateLimitCommand,
  serializeAws_json1_1DescribeBandwidthRateLimitCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DescribeBandwidthRateLimitCommandInput extends DescribeBandwidthRateLimitInput {}
export interface DescribeBandwidthRateLimitCommandOutput extends DescribeBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported only for
 *          the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits
 *          for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p>
 *
 *          <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If
 *          no limits are set for the gateway, then this operation returns only the gateway ARN in the
 *          response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
 *          the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DescribeBandwidthRateLimitCommand extends $Command<
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBandwidthRateLimitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBandwidthRateLimitInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBandwidthRateLimitOutputFilterSensitiveLog,
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
