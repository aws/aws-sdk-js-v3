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
  CreateStreamProcessorRequest,
  CreateStreamProcessorRequestFilterSensitiveLog,
  CreateStreamProcessorResponse,
  CreateStreamProcessorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateStreamProcessorCommand,
  serializeAws_json1_1CreateStreamProcessorCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface CreateStreamProcessorCommandInput extends CreateStreamProcessorRequest {}
export interface CreateStreamProcessorCommandOutput extends CreateStreamProcessorResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video.</p>
 *          <p>Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels.</p>
 *          <ul>
 *             <li>
 *                <p>If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (<code>Input</code>) and a Kinesis data stream (<code>Output</code>) stream. You also specify the
 *                 face recognition criteria in <code>Settings</code>. For example, the collection containing faces that you want to recognize. After you have finished analyzing a streaming video, use <a>StopStreamProcessor</a> to
 *                 stop processing.</p>
 *             </li>
 *             <li>
 *                <p>If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (<code>Input</code>), Amazon S3 bucket information (<code>Output</code>), and an
 *                 Amazon SNS topic ARN (<code>NotificationChannel</code>). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket.
 *                 You specify what you want to detect in <code>ConnectedHomeSettings</code>, such as people, packages and people, or pets, people, and packages. You can also specify where in the frame you want Amazon Rekognition to monitor with <code>RegionsOfInterest</code>.
 *                 When you run the <a>StartStreamProcessor</a> operation on a label detection stream processor, you input start and stop information to determine the length of the processing time.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             Use <code>Name</code> to assign an identifier for the stream processor. You use <code>Name</code>
 *             to manage the stream processor. For example, you can start processing the source video by calling <a>StartStreamProcessor</a> with
 *             the <code>Name</code> field. </p>
 *          <p>This operation requires permissions to perform the
 *             <code>rekognition:CreateStreamProcessor</code> action. If you want to tag your stream processor, you also require permission to perform the <code>rekognition:TagResource</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new CreateStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link CreateStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class CreateStreamProcessorCommand extends $Command<
  CreateStreamProcessorCommandInput,
  CreateStreamProcessorCommandOutput,
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

  constructor(readonly input: CreateStreamProcessorCommandInput) {
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
  ): Handler<CreateStreamProcessorCommandInput, CreateStreamProcessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStreamProcessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateStreamProcessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStreamProcessorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamProcessorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStreamProcessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateStreamProcessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStreamProcessorCommandOutput> {
    return deserializeAws_json1_1CreateStreamProcessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
