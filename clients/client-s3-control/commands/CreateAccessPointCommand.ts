import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessPointRequest, CreateAccessPointResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateAccessPointCommand,
  serializeAws_restXmlCreateAccessPointCommand,
} from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateAccessPointCommandInput = CreateAccessPointRequest;
export type CreateAccessPointCommandOutput = CreateAccessPointResult & __MetadataBearer;

/**
 * <p>Creates an access point and associates it with the specified bucket. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">Managing Data Access with Amazon S3 Access
 *             Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p></p>
 *          <p>
 *             <b>Using this action with Amazon S3 on Outposts</b>
 *          </p>
 *          <p>This action: </p>
 *          <ul>
 *             <li>
 *                <p>Requires a virtual private cloud (VPC) configuration as S3 on Outposts only supports VPC style access points.</p>
 *             </li>
 *             <li>
 *                <p>Does not support ACL on S3 on Outposts buckets.</p>
 *             </li>
 *             <li>
 *                <p>Does not support Public Access on S3 on Outposts buckets.</p>
 *             </li>
 *             <li>
 *                <p>Does not support object lock for S3 on Outposts buckets.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see
 *       <a href="AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide </i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p>
 *          <p></p>
 *          <p>The following actions are related to <code>CreateAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateAccessPointCommand extends $Command<
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessPointCommandInput) {
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
  ): Handler<CreateAccessPointCommandInput, CreateAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "CreateAccessPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessPointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessPointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateAccessPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPointCommandOutput> {
    return deserializeAws_restXmlCreateAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
