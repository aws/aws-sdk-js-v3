// smithy-typescript generated code
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
  DescribeScheduledInstanceAvailabilityRequest,
  DescribeScheduledInstanceAvailabilityRequestFilterSensitiveLog,
  DescribeScheduledInstanceAvailabilityResult,
  DescribeScheduledInstanceAvailabilityResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand,
  serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand,
} from "../protocols/Aws_ec2";

export interface DescribeScheduledInstanceAvailabilityCommandInput
  extends DescribeScheduledInstanceAvailabilityRequest {}
export interface DescribeScheduledInstanceAvailabilityCommandOutput
  extends DescribeScheduledInstanceAvailabilityResult,
    __MetadataBearer {}

/**
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 *
 *          <note>
 *             <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeScheduledInstanceAvailabilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeScheduledInstanceAvailabilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeScheduledInstanceAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledInstanceAvailabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledInstanceAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeScheduledInstanceAvailabilityCommand extends $Command<
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduledInstanceAvailabilityCommandInput) {
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
  ): Handler<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeScheduledInstanceAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeScheduledInstanceAvailabilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> {
    return deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
