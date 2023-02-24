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
  StopStreamProcessorRequest,
  StopStreamProcessorRequestFilterSensitiveLog,
  StopStreamProcessorResponse,
  StopStreamProcessorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopStreamProcessorCommand,
  serializeAws_json1_1StopStreamProcessorCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StopStreamProcessorCommandInput extends StopStreamProcessorRequest {}
export interface StopStreamProcessorCommandOutput extends StopStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StopStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StopStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StopStreamProcessorCommand extends $Command<
  StopStreamProcessorCommandInput,
  StopStreamProcessorCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: StopStreamProcessorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopStreamProcessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StopStreamProcessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopStreamProcessorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopStreamProcessorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopStreamProcessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopStreamProcessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStreamProcessorCommandOutput> {
    return deserializeAws_json1_1StopStreamProcessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
