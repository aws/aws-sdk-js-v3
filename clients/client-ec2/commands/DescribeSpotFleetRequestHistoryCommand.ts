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
import { DescribeSpotFleetRequestHistoryRequest, DescribeSpotFleetRequestHistoryResponse } from "../models/models_3";
import {
  deserializeAws_ec2DescribeSpotFleetRequestHistoryCommand,
  serializeAws_ec2DescribeSpotFleetRequestHistoryCommand,
} from "../protocols/Aws_ec2";

export interface DescribeSpotFleetRequestHistoryCommandInput extends DescribeSpotFleetRequestHistoryRequest {}
export interface DescribeSpotFleetRequestHistoryCommandOutput
  extends DescribeSpotFleetRequestHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Describes the events for the specified Spot Fleet request during the specified
 *             time.</p>
 *         <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This
 *             ensures that you can query by the last evaluated time and not miss a recorded event.
 *             Spot Fleet events are available for 48 hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSpotFleetRequestHistoryCommand extends $Command<
  DescribeSpotFleetRequestHistoryCommandInput,
  DescribeSpotFleetRequestHistoryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSpotFleetRequestHistoryCommandInput) {
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
  ): Handler<DescribeSpotFleetRequestHistoryCommandInput, DescribeSpotFleetRequestHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetRequestHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotFleetRequestHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotFleetRequestHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeSpotFleetRequestHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotFleetRequestHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetRequestHistoryCommandOutput> {
    return deserializeAws_ec2DescribeSpotFleetRequestHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
