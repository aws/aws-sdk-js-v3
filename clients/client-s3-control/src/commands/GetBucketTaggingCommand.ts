// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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
  GetBucketTaggingRequest,
  GetBucketTaggingRequestFilterSensitiveLog,
  GetBucketTaggingResult,
  GetBucketTaggingResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetBucketTaggingCommand,
  serializeAws_restXmlGetBucketTaggingCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface GetBucketTaggingCommandInput extends GetBucketTaggingRequest {}
export interface GetBucketTaggingCommandOutput extends GetBucketTaggingResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Returns the tag set associated with the Outposts bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using
 *             Amazon S3 on Outposts</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this action, you must have permission to perform the
 *             <code>GetBucketTagging</code> action. By default, the bucket owner has this permission
 *          and can grant this permission to others.</p>
 *          <p>
 *             <code>GetBucketTagging</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>NoSuchTagSetError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: There is no tag set associated with the bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html#API_control_GetBucketTagging_Examples">Examples</a> section.</p>
 *          <p>The following actions are related to <code>GetBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class GetBucketTaggingCommand extends $Command<
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      Bucket: { type: "contextParams", name: "Bucket" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: GetBucketTaggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBucketTaggingCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetBucketTaggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketTaggingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBucketTaggingResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketTaggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketTaggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketTaggingCommandOutput> {
    return deserializeAws_restXmlGetBucketTaggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
