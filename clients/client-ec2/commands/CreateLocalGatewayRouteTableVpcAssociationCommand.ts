import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateLocalGatewayRouteTableVpcAssociationRequest,
  CreateLocalGatewayRouteTableVpcAssociationResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand,
  serializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand,
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

export interface CreateLocalGatewayRouteTableVpcAssociationCommandInput
  extends CreateLocalGatewayRouteTableVpcAssociationRequest {}
export interface CreateLocalGatewayRouteTableVpcAssociationCommandOutput
  extends CreateLocalGatewayRouteTableVpcAssociationResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified VPC with the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteTableVpcAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLocalGatewayRouteTableVpcAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteTableVpcAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateLocalGatewayRouteTableVpcAssociationCommand extends $Command<
  CreateLocalGatewayRouteTableVpcAssociationCommandInput,
  CreateLocalGatewayRouteTableVpcAssociationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLocalGatewayRouteTableVpcAssociationCommandInput) {
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
    CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    CreateLocalGatewayRouteTableVpcAssociationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLocalGatewayRouteTableVpcAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocalGatewayRouteTableVpcAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLocalGatewayRouteTableVpcAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLocalGatewayRouteTableVpcAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLocalGatewayRouteTableVpcAssociationCommandOutput> {
    return deserializeAws_ec2CreateLocalGatewayRouteTableVpcAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
