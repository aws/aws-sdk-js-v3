// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { StartFaceSearchRequest, StartFaceSearchResponse } from "../models/models_1";
import { de_StartFaceSearchCommand, se_StartFaceSearchCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartFaceSearchCommand}.
 */
export interface StartFaceSearchCommandInput extends StartFaceSearchRequest {}
/**
 * @public
 *
 * The output of {@link StartFaceSearchCommand}.
 */
export interface StartFaceSearchCommandOutput extends StartFaceSearchResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // StartFaceSearchRequest
 *   Video: { // Video
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   FaceMatchThreshold: Number("float"),
 *   CollectionId: "STRING_VALUE", // required
 *   NotificationChannel: { // NotificationChannel
 *     SNSTopicArn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 *   JobTag: "STRING_VALUE",
 * };
 * const command = new StartFaceSearchCommand(input);
 * const response = await client.send(command);
 * // { // StartFaceSearchResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartFaceSearchCommandInput - {@link StartFaceSearchCommandInput}
 * @returns {@link StartFaceSearchCommandOutput}
 * @see {@link StartFaceSearchCommandInput} for command's `input` shape.
 * @see {@link StartFaceSearchCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many Amazon Rekognition Video jobs concurrently, calls to start operations
 *             (<code>StartLabelDetection</code>, for example) will raise a <code>LimitExceededException</code> exception (HTTP status code: 400) until
 *             the number of concurrently running jobs is below the Amazon Rekognition service limit.  </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link VideoTooLargeException} (client fault)
 *  <p>The file size or duration of the supplied media is too large. The maximum file size is 10GB.
 *         The maximum duration is 6 hours. </p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartFaceSearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartFaceSearchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFaceSearchCommandOutput> {
    return de_StartFaceSearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
