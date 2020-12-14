import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import {
  deserializeAws_restXmlListRegionalBucketsCommand,
  serializeAws_restXmlListRegionalBucketsCommand,
} from "../protocols/Aws_restXml";
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type ListRegionalBucketsCommandInput = ListRegionalBucketsRequest;
export type ListRegionalBucketsCommandOutput = ListRegionalBucketsResult & __MetadataBearer;

/**
 * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
 */
export class ListRegionalBucketsCommand extends $Command<
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRegionalBucketsCommandInput) {
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
  ): Handler<ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListRegionalBucketsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRegionalBucketsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRegionalBucketsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRegionalBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListRegionalBucketsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegionalBucketsCommandOutput> {
    return deserializeAws_restXmlListRegionalBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
