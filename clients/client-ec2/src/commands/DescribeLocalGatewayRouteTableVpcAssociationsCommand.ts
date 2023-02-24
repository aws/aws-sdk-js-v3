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
  DescribeLocalGatewayRouteTableVpcAssociationsRequest,
  DescribeLocalGatewayRouteTableVpcAssociationsRequestFilterSensitiveLog,
  DescribeLocalGatewayRouteTableVpcAssociationsResult,
  DescribeLocalGatewayRouteTableVpcAssociationsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandInput
  extends DescribeLocalGatewayRouteTableVpcAssociationsRequest {}
export interface DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  extends DescribeLocalGatewayRouteTableVpcAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified associations between VPCs and local gateway route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLocalGatewayRouteTableVpcAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeLocalGatewayRouteTableVpcAssociationsCommand extends $Command<
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
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

  constructor(readonly input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput) {
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
    DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeLocalGatewayRouteTableVpcAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLocalGatewayRouteTableVpcAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocalGatewayRouteTableVpcAssociationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput> {
    return deserializeAws_ec2DescribeLocalGatewayRouteTableVpcAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
