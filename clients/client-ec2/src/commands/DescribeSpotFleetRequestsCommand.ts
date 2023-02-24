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
  DescribeSpotFleetRequestsRequest,
  DescribeSpotFleetRequestsRequestFilterSensitiveLog,
  DescribeSpotFleetRequestsResponse,
  DescribeSpotFleetRequestsResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeSpotFleetRequestsCommand,
  serializeAws_ec2DescribeSpotFleetRequestsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeSpotFleetRequestsCommandInput extends DescribeSpotFleetRequestsRequest {}
export interface DescribeSpotFleetRequestsCommandOutput extends DescribeSpotFleetRequestsResponse, __MetadataBearer {}

/**
 * <p>Describes your Spot Fleet requests.</p>
 *          <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances
 *             are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeSpotFleetRequestsCommand extends $Command<
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
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

  constructor(readonly input: DescribeSpotFleetRequestsCommandInput) {
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
  ): Handler<DescribeSpotFleetRequestsCommandInput, DescribeSpotFleetRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotFleetRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotFleetRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotFleetRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotFleetRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotFleetRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetRequestsCommandOutput> {
    return deserializeAws_ec2DescribeSpotFleetRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
