import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeBundleTasksRequest, DescribeBundleTasksResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeBundleTasksCommand,
  serializeAws_ec2DescribeBundleTasksCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeBundleTasksCommandInput = DescribeBundleTasksRequest;
export type DescribeBundleTasksCommandOutput = DescribeBundleTasksResult & __MetadataBearer;

/**
 * <p>Describes the specified bundle tasks or all of your bundle tasks.</p>
 *          <note>
 *             <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p>
 *          </note>
 */
export class DescribeBundleTasksCommand extends $Command<
  DescribeBundleTasksCommandInput,
  DescribeBundleTasksCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBundleTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleTasksCommandInput, DescribeBundleTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeBundleTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBundleTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBundleTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBundleTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeBundleTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBundleTasksCommandOutput> {
    return deserializeAws_ec2DescribeBundleTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
