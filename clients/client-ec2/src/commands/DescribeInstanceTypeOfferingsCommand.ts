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
  DescribeInstanceTypeOfferingsRequest,
  DescribeInstanceTypeOfferingsRequestFilterSensitiveLog,
  DescribeInstanceTypeOfferingsResult,
  DescribeInstanceTypeOfferingsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeInstanceTypeOfferingsCommand,
  serializeAws_ec2DescribeInstanceTypeOfferingsCommand,
} from "../protocols/Aws_ec2";

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
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeInstanceTypeOfferingsCommand extends $Command<
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceTypeOfferingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceTypeOfferingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceTypeOfferingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceTypeOfferingsResultFilterSensitiveLog,
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
