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
  StartFaceSearchRequest,
  StartFaceSearchRequestFilterSensitiveLog,
  StartFaceSearchResponse,
  StartFaceSearchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartFaceSearchCommand,
  serializeAws_json1_1StartFaceSearchCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartFaceSearchCommandInput extends StartFaceSearchRequest {}
export interface StartFaceSearchCommandOutput extends StartFaceSearchResponse, __MetadataBearer {}

/**
 * <p>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video.</p>
 *          <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *       and the filename of the video. <code>StartFaceSearch</code>
 *       returns a job identifier (<code>JobId</code>) which you use to get the search results once the search has completed.
 *       When searching is finished, Amazon Rekognition Video publishes a completion status
 *       to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.
 *       To get the search results, first check that the status value published to the Amazon SNS
 *       topic is <code>SUCCEEDED</code>. If so, call <a>GetFaceSearch</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartFaceSearch</code>. For more information, see
 *       <a href="https://docs.aws.amazon.com/rekognition/latest/dg/procedure-person-search-videos.html">Searching stored videos for faces</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartFaceSearchCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartFaceSearchCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartFaceSearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFaceSearchCommandInput} for command's `input` shape.
 * @see {@link StartFaceSearchCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartFaceSearchCommand extends $Command<
  StartFaceSearchCommandInput,
  StartFaceSearchCommandOutput,
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

  constructor(readonly input: StartFaceSearchCommandInput) {
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
  ): Handler<StartFaceSearchCommandInput, StartFaceSearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFaceSearchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartFaceSearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartFaceSearchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartFaceSearchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartFaceSearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartFaceSearchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFaceSearchCommandOutput> {
    return deserializeAws_json1_1StartFaceSearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
