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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  GetBandwidthRateLimitScheduleInput,
  GetBandwidthRateLimitScheduleInputFilterSensitiveLog,
  GetBandwidthRateLimitScheduleOutput,
  GetBandwidthRateLimitScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetBandwidthRateLimitScheduleCommand,
  serializeAws_json1_0GetBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_0";

export interface GetBandwidthRateLimitScheduleCommandInput extends GetBandwidthRateLimitScheduleInput {}
export interface GetBandwidthRateLimitScheduleCommandOutput
  extends GetBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the bandwidth rate limit schedule for a specified gateway.
 *       By default, gateways do not have bandwidth rate limit schedules, which means
 *       no bandwidth rate limiting is in effect. Use this to get a gateway's
 *       bandwidth rate limit schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new GetBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link GetBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class GetBandwidthRateLimitScheduleCommand extends $Command<
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
  BackupGatewayClientResolvedConfig
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

  constructor(readonly input: GetBandwidthRateLimitScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBandwidthRateLimitScheduleCommandInput, GetBandwidthRateLimitScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "GetBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBandwidthRateLimitScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetBandwidthRateLimitScheduleOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBandwidthRateLimitScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetBandwidthRateLimitScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput> {
    return deserializeAws_json1_0GetBandwidthRateLimitScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
