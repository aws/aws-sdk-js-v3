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
  DescribeTransitGatewaysRequest,
  DescribeTransitGatewaysRequestFilterSensitiveLog,
  DescribeTransitGatewaysResult,
  DescribeTransitGatewaysResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeTransitGatewaysCommand,
  serializeAws_ec2DescribeTransitGatewaysCommand,
} from "../protocols/Aws_ec2";

export interface DescribeTransitGatewaysCommandInput extends DescribeTransitGatewaysRequest {}
export interface DescribeTransitGatewaysCommandOutput extends DescribeTransitGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can
 *          filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeTransitGatewaysCommand extends $Command<
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
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

  constructor(readonly input: DescribeTransitGatewaysCommandInput) {
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
  ): Handler<DescribeTransitGatewaysCommandInput, DescribeTransitGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTransitGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTransitGatewaysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTransitGatewaysResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTransitGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeTransitGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTransitGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeTransitGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
