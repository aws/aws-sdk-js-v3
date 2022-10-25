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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import {
  DescribeDetectorModelAnalysisRequest,
  DescribeDetectorModelAnalysisRequestFilterSensitiveLog,
  DescribeDetectorModelAnalysisResponse,
  DescribeDetectorModelAnalysisResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDetectorModelAnalysisCommand,
  serializeAws_restJson1DescribeDetectorModelAnalysisCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeDetectorModelAnalysisCommandInput extends DescribeDetectorModelAnalysisRequest {}
export interface DescribeDetectorModelAnalysisCommandOutput
  extends DescribeDetectorModelAnalysisResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves runtime information about a detector model analysis.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 */
export class DescribeDetectorModelAnalysisCommand extends $Command<
  DescribeDetectorModelAnalysisCommandInput,
  DescribeDetectorModelAnalysisCommandOutput,
  IoTEventsClientResolvedConfig
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

  constructor(readonly input: DescribeDetectorModelAnalysisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDetectorModelAnalysisCommandInput, DescribeDetectorModelAnalysisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDetectorModelAnalysisCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DescribeDetectorModelAnalysisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDetectorModelAnalysisRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDetectorModelAnalysisResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDetectorModelAnalysisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDetectorModelAnalysisCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDetectorModelAnalysisCommandOutput> {
    return deserializeAws_restJson1DescribeDetectorModelAnalysisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
