import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeReplaceRootVolumeTasksRequest, DescribeReplaceRootVolumeTasksResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand,
  serializeAws_ec2DescribeReplaceRootVolumeTasksCommand,
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

export interface DescribeReplaceRootVolumeTasksCommandInput extends DescribeReplaceRootVolumeTasksRequest {}
export interface DescribeReplaceRootVolumeTasksCommandOutput
  extends DescribeReplaceRootVolumeTasksResult,
    __MetadataBearer {}

/**
 * <p>Describes a root volume replacement task. For more information, see
 *       <a href="https://docs.aws.amazon.com/">Replace a root volume</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReplaceRootVolumeTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReplaceRootVolumeTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReplaceRootVolumeTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplaceRootVolumeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplaceRootVolumeTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeReplaceRootVolumeTasksCommand extends $Command<
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplaceRootVolumeTasksCommandInput) {
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
  ): Handler<DescribeReplaceRootVolumeTasksCommandInput, DescribeReplaceRootVolumeTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeReplaceRootVolumeTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplaceRootVolumeTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplaceRootVolumeTasksResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplaceRootVolumeTasksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeReplaceRootVolumeTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplaceRootVolumeTasksCommandOutput> {
    return deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
