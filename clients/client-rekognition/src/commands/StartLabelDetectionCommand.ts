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
  StartLabelDetectionRequest,
  StartLabelDetectionRequestFilterSensitiveLog,
  StartLabelDetectionResponse,
  StartLabelDetectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartLabelDetectionCommand,
  serializeAws_json1_1StartLabelDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartLabelDetectionCommandInput extends StartLabelDetectionRequest {}
export interface StartLabelDetectionCommandOutput extends StartLabelDetectionResponse, __MetadataBearer {}

/**
 * <p>Starts asynchronous detection of labels in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities.
 *        This includes objects like flower, tree, and table; events like
 *        wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities
 *        like a person getting out of a car or a person skiing.</p>
 *          <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *        and the filename of the video.
 *         <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the
 *        results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status
 *         to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p>
 *          <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS
 *         topic is <code>SUCCEEDED</code>. If so, call  <a>GetLabelDetection</a> and pass the job identifier
 *        (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p>
 *          <p>
 *             <i>Optional Parameters</i>
 *          </p>
 *          <p>
 *             <code>StartLabelDetection</code> has the <code>GENERAL_LABELS</code> Feature applied by
 *       default.  This feature allows you to provide filtering criteria to the <code>Settings</code>
 *       parameter. You can filter with sets of individual labels or with label categories. You can
 *       specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive
 *       filters. For more information on filtering, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/labels-detecting-labels-video.html">Detecting labels in a
 *         video</a>.</p>
 *          <p>You can specify <code>MinConfidence</code> to control the confidence threshold for the
 *       labels returned. The default is 50.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartLabelDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLabelDetectionCommandInput} for command's `input` shape.
 * @see {@link StartLabelDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartLabelDetectionCommand extends $Command<
  StartLabelDetectionCommandInput,
  StartLabelDetectionCommandOutput,
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

  constructor(readonly input: StartLabelDetectionCommandInput) {
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
  ): Handler<StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartLabelDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartLabelDetectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartLabelDetectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartLabelDetectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartLabelDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartLabelDetectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartLabelDetectionCommandOutput> {
    return deserializeAws_json1_1StartLabelDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
