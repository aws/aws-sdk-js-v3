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
  StartSegmentDetectionRequest,
  StartSegmentDetectionRequestFilterSensitiveLog,
  StartSegmentDetectionResponse,
  StartSegmentDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartSegmentDetectionCommand,
  serializeAws_json1_1StartSegmentDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartSegmentDetectionCommandInput extends StartSegmentDetectionRequest {}
export interface StartSegmentDetectionCommandOutput extends StartSegmentDetectionResponse, __MetadataBearer {}

/**
 * <p>Starts asynchronous detection of segment detection in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect segments in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and
 *       the filename of the video. <code>StartSegmentDetection</code> returns a job identifier (<code>JobId</code>) which you use to get
 *       the results of the operation. When segment detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic
 *       that you specify in <code>NotificationChannel</code>.</p>
 *          <p>You can use the <code>Filters</code> (<a>StartSegmentDetectionFilters</a>)
 *       input parameter to specify the minimum detection confidence returned in the response.
 *       Within <code>Filters</code>, use <code>ShotFilter</code> (<a>StartShotDetectionFilter</a>)
 *       to filter detected shots. Use  <code>TechnicalCueFilter</code> (<a>StartTechnicalCueDetectionFilter</a>)
 *       to filter technical cues. </p>
 *          <p>To get the results of the segment detection operation, first check that the status value published to the Amazon SNS
 *       topic is <code>SUCCEEDED</code>. if so, call <a>GetSegmentDetection</a> and pass the job identifier (<code>JobId</code>)
 *       from the initial call to <code>StartSegmentDetection</code>. </p>
 *          <p>For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartSegmentDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartSegmentDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartSegmentDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSegmentDetectionCommandInput} for command's `input` shape.
 * @see {@link StartSegmentDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartSegmentDetectionCommand extends $Command<
  StartSegmentDetectionCommandInput,
  StartSegmentDetectionCommandOutput,
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

  constructor(readonly input: StartSegmentDetectionCommandInput) {
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
  ): Handler<StartSegmentDetectionCommandInput, StartSegmentDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSegmentDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartSegmentDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSegmentDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartSegmentDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSegmentDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartSegmentDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSegmentDetectionCommandOutput> {
    return deserializeAws_json1_1StartSegmentDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
