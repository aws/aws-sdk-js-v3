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
  StartStreamProcessorRequest,
  StartStreamProcessorRequestFilterSensitiveLog,
  StartStreamProcessorResponse,
  StartStreamProcessorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartStreamProcessorCommand,
  serializeAws_json1_1StartStreamProcessorCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartStreamProcessorCommandInput extends StartStreamProcessorRequest {}
export interface StartStreamProcessorCommandOutput extends StartStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>.
 *             To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to
 *             <code>CreateStreamProcessor</code>.</p>
 *          <p>If you are using a label detection stream processor to detect labels, you need to provide a <code>Start selector</code> and a <code>Stop selector</code> to determine the length of the stream processing time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StartStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartStreamProcessorCommand extends $Command<
  StartStreamProcessorCommandInput,
  StartStreamProcessorCommandOutput,
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

  constructor(readonly input: StartStreamProcessorCommandInput) {
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
  ): Handler<StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStreamProcessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartStreamProcessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStreamProcessorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartStreamProcessorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartStreamProcessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartStreamProcessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartStreamProcessorCommandOutput> {
    return deserializeAws_json1_1StartStreamProcessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
