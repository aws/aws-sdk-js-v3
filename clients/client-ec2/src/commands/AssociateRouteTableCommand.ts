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
  AssociateRouteTableRequest,
  AssociateRouteTableRequestFilterSensitiveLog,
  AssociateRouteTableResult,
  AssociateRouteTableResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateRouteTableCommand,
  serializeAws_ec2AssociateRouteTableCommand,
} from "../protocols/Aws_ec2";

export interface AssociateRouteTableCommandInput extends AssociateRouteTableRequest {}
export interface AssociateRouteTableCommandOutput extends AssociateRouteTableResult, __MetadataBearer {}

/**
 * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway
 *             attached to your VPC with a route table in your VPC. This association causes traffic
 *             from the subnet or gateway to be routed according to the routes in the route table. The
 *             action returns an association ID, which you need in order to disassociate the route
 *             table later. A route table can be associated with multiple subnets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateRouteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateRouteTableCommand extends $Command<
  AssociateRouteTableCommandInput,
  AssociateRouteTableCommandOutput,
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

  constructor(readonly input: AssociateRouteTableCommandInput) {
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
  ): Handler<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateRouteTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateRouteTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateRouteTableResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateRouteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateRouteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateRouteTableCommandOutput> {
    return deserializeAws_ec2AssociateRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
