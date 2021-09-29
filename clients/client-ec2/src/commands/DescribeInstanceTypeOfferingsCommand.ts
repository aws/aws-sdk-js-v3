import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTypeOfferingsRequest, DescribeInstanceTypeOfferingsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeInstanceTypeOfferingsCommand,
  serializeAws_ec2DescribeInstanceTypeOfferingsCommand,
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

export interface DescribeInstanceTypeOfferingsCommandInput extends DescribeInstanceTypeOfferingsRequest {}
export interface DescribeInstanceTypeOfferingsCommandOutput
  extends DescribeInstanceTypeOfferingsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of all instance types offered. The results can be filtered by location (Region or Availability
 *    Zone). If no location is specified, the instance types offered in the current Region are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypeOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypeOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceTypeOfferingsCommand extends $Command<
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceTypeOfferingsCommandInput) {
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
  ): Handler<DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceTypeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceTypeOfferingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceTypeOfferingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceTypeOfferingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceTypeOfferingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceTypeOfferingsCommandOutput> {
    return deserializeAws_ec2DescribeInstanceTypeOfferingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
