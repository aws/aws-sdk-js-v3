import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeInstanceEventNotificationAttributesRequest,
  DescribeInstanceEventNotificationAttributesResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeInstanceEventNotificationAttributesCommand,
  serializeAws_ec2DescribeInstanceEventNotificationAttributesCommand,
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

export interface DescribeInstanceEventNotificationAttributesCommandInput
  extends DescribeInstanceEventNotificationAttributesRequest {}
export interface DescribeInstanceEventNotificationAttributesCommandOutput
  extends DescribeInstanceEventNotificationAttributesResult,
    __MetadataBearer {}

/**
 * <p>Describes the tag keys that are registered to appear in scheduled event notifications for
 *       	resources in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceEventNotificationAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceEventNotificationAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceEventNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceEventNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceEventNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceEventNotificationAttributesCommand extends $Command<
  DescribeInstanceEventNotificationAttributesCommandInput,
  DescribeInstanceEventNotificationAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceEventNotificationAttributesCommandInput) {
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
  ): Handler<
    DescribeInstanceEventNotificationAttributesCommandInput,
    DescribeInstanceEventNotificationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceEventNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceEventNotificationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceEventNotificationAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInstanceEventNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceEventNotificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceEventNotificationAttributesCommandOutput> {
    return deserializeAws_ec2DescribeInstanceEventNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
