import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeTagsType, TagsType } from "../models/models_0";
import { deserializeAws_queryDescribeTagsCommand, serializeAws_queryDescribeTagsCommand } from "../protocols/Aws_query";
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

export type DescribeTagsCommandInput = DescribeTagsType;
export type DescribeTagsCommandOutput = TagsType & __MetadataBearer;

/**
 * <p>Describes the specified tags.</p>
 *         <p>You can use filters to limit the results. For example, you can query for the tags for
 *             a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at
 *             least one of the specified values for it to be included in the results.</p>
 *         <p>You can also specify multiple filters. The result includes information for a
 *             particular tag only if it matches all the filters. If there's no match, no special
 *             message is returned.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling groups and
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class DescribeTagsCommand extends $Command<
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTagsType.filterSensitiveLog,
      outputFilterSensitiveLog: TagsType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTagsCommandOutput> {
    return deserializeAws_queryDescribeTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
