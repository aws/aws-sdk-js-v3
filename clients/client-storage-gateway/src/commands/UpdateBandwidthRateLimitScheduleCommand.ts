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
  UpdateBandwidthRateLimitScheduleInput,
  UpdateBandwidthRateLimitScheduleInputFilterSensitiveLog,
  UpdateBandwidthRateLimitScheduleOutput,
  UpdateBandwidthRateLimitScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand,
  serializeAws_json1_1UpdateBandwidthRateLimitScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface UpdateBandwidthRateLimitScheduleCommandInput extends UpdateBandwidthRateLimitScheduleInput {}
export interface UpdateBandwidthRateLimitScheduleCommandOutput
  extends UpdateBandwidthRateLimitScheduleOutput,
    __MetadataBearer {}

/**
 * <p> Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways
 *          do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in
 *          effect. Use this to initiate or update a gateway's bandwidth rate limit schedule. This
 *          operation is supported only for volume, tape and S3 file gateways. FSx file gateways do not
 *          support bandwidth rate limits.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class UpdateBandwidthRateLimitScheduleCommand extends $Command<
  UpdateBandwidthRateLimitScheduleCommandInput,
  UpdateBandwidthRateLimitScheduleCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBandwidthRateLimitScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateBandwidthRateLimitScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBandwidthRateLimitScheduleOutputFilterSensitiveLog,
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
