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
  StartPersonTrackingRequest,
  StartPersonTrackingRequestFilterSensitiveLog,
  StartPersonTrackingResponse,
  StartPersonTrackingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartPersonTrackingCommand,
  serializeAws_json1_1StartPersonTrackingCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface StartPersonTrackingCommandInput extends StartPersonTrackingRequest {}
export interface StartPersonTrackingCommandOutput extends StartPersonTrackingResponse, __MetadataBearer {}

/**
 * <p>Starts the asynchronous tracking of a person's path in a stored video.</p>
 *          <p>Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *        and the filename of the video. <code>StartPersonTracking</code>
 *        returns a job identifier (<code>JobId</code>) which you use to get the results of the operation.
 *        When label detection is finished, Amazon Rekognition publishes a completion status
 *        to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. </p>
 *          <p>To get the results of the person detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. If so, call  <a>GetPersonTracking</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartPersonTrackingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPersonTrackingCommandInput} for command's `input` shape.
 * @see {@link StartPersonTrackingCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class StartPersonTrackingCommand extends $Command<
  StartPersonTrackingCommandInput,
  StartPersonTrackingCommandOutput,
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

  constructor(readonly input: StartPersonTrackingCommandInput) {
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
  ): Handler<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartPersonTrackingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartPersonTrackingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPersonTrackingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartPersonTrackingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPersonTrackingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartPersonTrackingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPersonTrackingCommandOutput> {
    return deserializeAws_json1_1StartPersonTrackingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
