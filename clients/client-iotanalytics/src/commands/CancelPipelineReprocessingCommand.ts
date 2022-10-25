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
  CancelPipelineReprocessingRequest,
  CancelPipelineReprocessingRequestFilterSensitiveLog,
  CancelPipelineReprocessingResponse,
  CancelPipelineReprocessingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelPipelineReprocessingCommand,
  serializeAws_restJson1CancelPipelineReprocessingCommand,
} from "../protocols/Aws_restJson1";

export interface CancelPipelineReprocessingCommandInput extends CancelPipelineReprocessingRequest {}
export interface CancelPipelineReprocessingCommandOutput extends CancelPipelineReprocessingResponse, __MetadataBearer {}

/**
 * <p>Cancels the reprocessing of data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CancelPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CancelPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CancelPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link CancelPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 */
export class CancelPipelineReprocessingCommand extends $Command<
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput,
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

  constructor(readonly input: CancelPipelineReprocessingCommandInput) {
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
  ): Handler<CancelPipelineReprocessingCommandInput, CancelPipelineReprocessingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelPipelineReprocessingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "CancelPipelineReprocessingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelPipelineReprocessingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelPipelineReprocessingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelPipelineReprocessingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelPipelineReprocessingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelPipelineReprocessingCommandOutput> {
    return deserializeAws_restJson1CancelPipelineReprocessingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
