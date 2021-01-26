import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOpsItemsCommand,
  serializeAws_json1_1DescribeOpsItemsCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeOpsItemsCommandInput = DescribeOpsItemsRequest;
export type DescribeOpsItemsCommandOutput = DescribeOpsItemsResponse & __MetadataBearer;

/**
 * <p>Query a set of OpsItems. You must have permission in AWS Identity and Access Management
 *    (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 */
export class DescribeOpsItemsCommand extends $Command<
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeOpsItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeOpsItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOpsItemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeOpsItemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeOpsItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOpsItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOpsItemsCommandOutput> {
    return deserializeAws_json1_1DescribeOpsItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
