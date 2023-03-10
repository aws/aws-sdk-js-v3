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
  DescribeVpcEndpointConnectionsRequest,
  DescribeVpcEndpointConnectionsRequestFilterSensitiveLog,
  DescribeVpcEndpointConnectionsResult,
  DescribeVpcEndpointConnectionsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DescribeVpcEndpointConnectionsCommand,
  serializeAws_ec2DescribeVpcEndpointConnectionsCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandInput extends DescribeVpcEndpointConnectionsRequest {}
/**
 * The output of {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandOutput
  extends DescribeVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
 *             endpoints that are pending your acceptance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeVpcEndpointConnectionsCommand extends $Command<
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
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

  constructor(readonly input: DescribeVpcEndpointConnectionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointConnectionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointConnectionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
