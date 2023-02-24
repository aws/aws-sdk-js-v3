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
  StartFaceDetectionRequest,
  StartFaceDetectionRequestFilterSensitiveLog,
  StartFaceDetectionResponse,
  StartFaceDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartFaceDetectionCommand,
  serializeAws_json1_1StartFaceDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartFaceDetectionCommandInput extends StartFaceDetectionRequest {}
export interface StartFaceDetectionCommandOutput extends StartFaceDetectionResponse, __MetadataBearer {}

/**
 * <p>Starts asynchronous detection of faces in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket.
 *        Use <a>Video</a> to specify the bucket name and the filename of the video.
 *        <code>StartFaceDetection</code> returns a job identifier (<code>JobId</code>) that you
 *        use to get the results of the operation.
 *        When face detection is finished, Amazon Rekognition Video publishes a completion status
 *        to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.
 *        To get the results of the face detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. If so, call  <a>GetFaceDetection</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p>
 *          <p>For more information, see Detecting faces in a stored video in the
 *      Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartFaceDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartFaceDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartFaceDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFaceDetectionCommandInput} for command's `input` shape.
 * @see {@link StartFaceDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartFaceDetectionCommand extends $Command<
  StartFaceDetectionCommandInput,
  StartFaceDetectionCommandOutput,
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

  constructor(readonly input: StartFaceDetectionCommandInput) {
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
  ): Handler<StartFaceDetectionCommandInput, StartFaceDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFaceDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartFaceDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFaceDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFaceDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFaceDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartFaceDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFaceDetectionCommandOutput> {
    return deserializeAws_json1_1StartFaceDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
