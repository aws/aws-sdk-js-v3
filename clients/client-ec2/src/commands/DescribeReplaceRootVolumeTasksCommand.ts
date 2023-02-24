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
  DescribeReplaceRootVolumeTasksRequest,
  DescribeReplaceRootVolumeTasksRequestFilterSensitiveLog,
  DescribeReplaceRootVolumeTasksResult,
  DescribeReplaceRootVolumeTasksResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeReplaceRootVolumeTasksCommand,
  serializeAws_ec2DescribeReplaceRootVolumeTasksCommand,
} from "../protocols/Aws_ec2";

export interface DescribeReplaceRootVolumeTasksCommandInput extends DescribeReplaceRootVolumeTasksRequest {}
export interface DescribeReplaceRootVolumeTasksCommandOutput
  extends DescribeReplaceRootVolumeTasksResult,
    __MetadataBearer {}

/**
 * <p>Describes a root volume replacement task. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replace-root.html">Replace a root volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
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
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeReplaceRootVolumeTasksCommand extends $Command<
  DescribeReplaceRootVolumeTasksCommandInput,
  DescribeReplaceRootVolumeTasksCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplaceRootVolumeTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeReplaceRootVolumeTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplaceRootVolumeTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplaceRootVolumeTasksResultFilterSensitiveLog,
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
