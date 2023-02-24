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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import {
  SampleChannelDataRequest,
  SampleChannelDataRequestFilterSensitiveLog,
  SampleChannelDataResponse,
  SampleChannelDataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SampleChannelDataCommand,
  serializeAws_restJson1SampleChannelDataCommand,
} from "../protocols/Aws_restJson1";

export interface SampleChannelDataCommandInput extends SampleChannelDataRequest {}
export interface SampleChannelDataCommandOutput extends SampleChannelDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves a sample of messages from the specified channel ingested during the specified
 *       timeframe. Up to 10 messages can be retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, SampleChannelDataCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, SampleChannelDataCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new SampleChannelDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SampleChannelDataCommandInput} for command's `input` shape.
 * @see {@link SampleChannelDataCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 */
export class SampleChannelDataCommand extends $Command<
  SampleChannelDataCommandInput,
  SampleChannelDataCommandOutput,
  IoTAnalyticsClientResolvedConfig
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

  constructor(readonly input: SampleChannelDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SampleChannelDataCommandInput, SampleChannelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SampleChannelDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "SampleChannelDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SampleChannelDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SampleChannelDataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SampleChannelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SampleChannelDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SampleChannelDataCommandOutput> {
    return deserializeAws_restJson1SampleChannelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
