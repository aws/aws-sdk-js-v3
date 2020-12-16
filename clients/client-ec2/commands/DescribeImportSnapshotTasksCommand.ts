import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImportSnapshotTasksRequest, DescribeImportSnapshotTasksResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeImportSnapshotTasksCommand,
  serializeAws_ec2DescribeImportSnapshotTasksCommand,
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

export type DescribeImportSnapshotTasksCommandInput = DescribeImportSnapshotTasksRequest;
export type DescribeImportSnapshotTasksCommandOutput = DescribeImportSnapshotTasksResult & __MetadataBearer;

/**
 * <p>Describes your import snapshot tasks.</p>
 */
export class DescribeImportSnapshotTasksCommand extends $Command<
  DescribeImportSnapshotTasksCommandInput,
  DescribeImportSnapshotTasksCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImportSnapshotTasksCommandInput) {
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
  ): Handler<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImportSnapshotTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImportSnapshotTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImportSnapshotTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImportSnapshotTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeImportSnapshotTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImportSnapshotTasksCommandOutput> {
    return deserializeAws_ec2DescribeImportSnapshotTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
