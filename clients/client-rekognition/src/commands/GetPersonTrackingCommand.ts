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
  GetPersonTrackingRequest,
  GetPersonTrackingRequestFilterSensitiveLog,
  GetPersonTrackingResponse,
  GetPersonTrackingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetPersonTrackingCommand,
  serializeAws_json1_1GetPersonTrackingCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface GetPersonTrackingCommandInput extends GetPersonTrackingRequest {}
export interface GetPersonTrackingCommandOutput extends GetPersonTrackingResponse, __MetadataBearer {}

/**
 * <p>Gets the path tracking results of a Amazon Rekognition Video analysis started by <a>StartPersonTracking</a>.</p>
 *          <p>The person path tracking operation is started by a call to <code>StartPersonTracking</code>
 *      which returns a job identifier (<code>JobId</code>). When the operation finishes, Amazon Rekognition Video publishes a completion status to
 *      the Amazon Simple Notification Service topic registered in the initial call to <code>StartPersonTracking</code>.</p>
 *          <p>To get the results of the person path tracking operation, first check
 *        that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      If so, call  <a>GetPersonTracking</a> and pass the job identifier
 *      (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
 *          <p>
 *             <code>GetPersonTracking</code> returns an array, <code>Persons</code>, of tracked persons and the time(s) their
 *        paths were tracked in the video. </p>
 *          <note>
 *             <p>
 *                <code>GetPersonTracking</code> only returns the default
 *        facial attributes (<code>BoundingBox</code>, <code>Confidence</code>,
 *        <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>). The other facial attributes listed
 *        in the <code>Face</code> object of the following response syntax are not returned. </p>
 *             <p>For more information, see FaceDetail in the Amazon Rekognition Developer Guide.</p>
 *          </note>
 *          <p>By default, the array is sorted by the time(s) a person's path is tracked in the video.
 *       You can sort by tracked persons by specifying <code>INDEX</code> for the <code>SortBy</code> input parameter.</p>
 *          <p>Use the <code>MaxResults</code> parameter to limit the number of items returned. If there are more results than
 *    specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *    of results. To get the next page of results, call <code>GetPersonTracking</code> and populate the <code>NextToken</code> request parameter with the token
 *     value returned from the previous call to <code>GetPersonTracking</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetPersonTrackingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPersonTrackingCommandInput} for command's `input` shape.
 * @see {@link GetPersonTrackingCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class GetPersonTrackingCommand extends $Command<
  GetPersonTrackingCommandInput,
  GetPersonTrackingCommandOutput,
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

  constructor(readonly input: GetPersonTrackingCommandInput) {
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
  ): Handler<GetPersonTrackingCommandInput, GetPersonTrackingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPersonTrackingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetPersonTrackingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPersonTrackingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPersonTrackingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPersonTrackingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPersonTrackingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPersonTrackingCommandOutput> {
    return deserializeAws_json1_1GetPersonTrackingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
