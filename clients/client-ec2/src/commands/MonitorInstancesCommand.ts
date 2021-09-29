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
import { MonitorInstancesRequest, MonitorInstancesResult } from "../models/models_5";
import {
  deserializeAws_ec2MonitorInstancesCommand,
  serializeAws_ec2MonitorInstancesCommand,
} from "../protocols/Aws_ec2";

export interface MonitorInstancesCommandInput extends MonitorInstancesRequest {}
export interface MonitorInstancesCommandOutput extends MonitorInstancesResult, __MetadataBearer {}

/**
 * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is
 *             enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and
 *                 volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *         <p>To disable detailed monitoring, see .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new MonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link MonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class MonitorInstancesCommand extends $Command<
  MonitorInstancesCommandInput,
  MonitorInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MonitorInstancesCommandInput) {
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
  ): Handler<MonitorInstancesCommandInput, MonitorInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "MonitorInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MonitorInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MonitorInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MonitorInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2MonitorInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MonitorInstancesCommandOutput> {
    return deserializeAws_ec2MonitorInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
