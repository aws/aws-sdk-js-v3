// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeInstanceEventWindowsRequest,
  DescribeInstanceEventWindowsRequestFilterSensitiveLog,
  DescribeInstanceEventWindowsResult,
  DescribeInstanceEventWindowsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeInstanceEventWindowsCommand,
  serializeAws_ec2DescribeInstanceEventWindowsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeInstanceEventWindowsCommandInput extends DescribeInstanceEventWindowsRequest {}
export interface DescribeInstanceEventWindowsCommandOutput
  extends DescribeInstanceEventWindowsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified event windows or all event windows.</p>
 *          <p>If you specify event window IDs, the output includes information for only the specified
 *          event windows. If you specify filters, the output includes information for only those event
 *          windows that meet the filter criteria. If you do not specify event windows IDs or filters,
 *          the output includes information for all event windows, which can affect performance. We
 *          recommend that you use pagination to ensure that the operation returns quickly and
 *          successfully. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled
 *             events</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventWindowsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventWindowsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceEventWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceEventWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventWindowsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeInstanceEventWindowsCommand extends $Command<
  DescribeInstanceEventWindowsCommandInput,
  DescribeInstanceEventWindowsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DescribeInstanceEventWindowsCommandInput) {
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
  ): Handler<DescribeInstanceEventWindowsCommandInput, DescribeInstanceEventWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceEventWindowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceEventWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceEventWindowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceEventWindowsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceEventWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceEventWindowsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceEventWindowsCommandOutput> {
    return deserializeAws_ec2DescribeInstanceEventWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
