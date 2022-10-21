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
  DescribeBandwidthRateLimitScheduleInput,
  DescribeBandwidthRateLimitScheduleInputFilterSensitiveLog,
  DescribeBandwidthRateLimitScheduleOutput,
  DescribeBandwidthRateLimitScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand,
  serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DescribeBandwidthRateLimitScheduleCommandInput extends DescribeBandwidthRateLimitScheduleInput {}
export interface DescribeBandwidthRateLimitScheduleCommandOutput
  extends DescribeBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p> Returns information about the bandwidth rate limit schedule of a gateway. By default,
 *          gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting
 *          is in effect. This operation is supported only for volume, tape and S3 file gateways. FSx
 *          file gateways do not support bandwidth rate limits.</p>
 *
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A
 *          bandwidth rate limit schedule consists of one or more bandwidth rate limit intervals. A
 *          bandwidth rate limit interval defines a period of time on one or more days of the week,
 *          during which bandwidth rate limits are specified for uploading, downloading, or both. </p>
 *
 *          <p> A bandwidth rate limit interval consists of one or more days of the week, a start hour
 *          and minute, an ending hour and minute, and bandwidth rate limits for uploading and
 *          downloading </p>
 *
 *          <p> If no bandwidth rate limit schedule intervals are set for the gateway, this operation
 *          returns an empty response. To specify which gateway to describe, use the Amazon Resource
 *          Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DescribeBandwidthRateLimitScheduleCommand extends $Command<
  DescribeBandwidthRateLimitScheduleCommandInput,
  DescribeBandwidthRateLimitScheduleCommandOutput,
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

  constructor(readonly input: DescribeBandwidthRateLimitScheduleCommandInput) {
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
  ): Handler<DescribeBandwidthRateLimitScheduleCommandInput, DescribeBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBandwidthRateLimitScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBandwidthRateLimitScheduleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBandwidthRateLimitScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBandwidthRateLimitScheduleCommandOutput> {
    return deserializeAws_json1_1DescribeBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
