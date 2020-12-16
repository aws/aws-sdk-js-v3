import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { TagStreamInput, TagStreamOutput } from "../models/models_0";
import {
  deserializeAws_restJson1TagStreamCommand,
  serializeAws_restJson1TagStreamCommand,
} from "../protocols/Aws_restJson1";
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

export type TagStreamCommandInput = TagStreamInput;
export type TagStreamCommandOutput = TagStreamOutput & __MetadataBearer;

/**
 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
 *             (the value is optional) that you can define and assign to AWS resources. If you specify
 *             a tag that already exists, the tag value is replaced with the value that you specify in
 *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *                 Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
 *         <p>You must provide either the <code>StreamName</code> or the
 *             <code>StreamARN</code>.</p>
 *         <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
 *             action.</p>
 *         <p>Kinesis video streams support up to 50 tags.</p>
 */
export class TagStreamCommand extends $Command<
  TagStreamCommandInput,
  TagStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagStreamCommandInput, TagStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "TagStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagStreamCommandOutput> {
    return deserializeAws_restJson1TagStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
