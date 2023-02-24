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
  CreateRouteRequest,
  CreateRouteRequestFilterSensitiveLog,
  CreateRouteResult,
  CreateRouteResultFilterSensitiveLog,
} from "../models/models_1";
import { deserializeAws_ec2CreateRouteCommand, serializeAws_ec2CreateRouteCommand } from "../protocols/Aws_ec2";

export interface CreateRouteCommandInput extends CreateRouteRequest {}
export interface CreateRouteCommandOutput extends CreateRouteResult, __MetadataBearer {}

/**
 * <p>Creates a route in a route table within a VPC.</p>
 *          <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify
 *          exactly one of the resources from the parameter list.</p>
 *          <p>When determining how to route traffic, we use the route with the most specific match.
 *             For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the
 *             route table includes the following two IPv4 routes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>192.0.2.0/24</code> (goes to some target A)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>192.0.2.0/28</code> (goes to some target B)</p>
 *             </li>
 *          </ul>
 *          <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
 * 				in the list covers a smaller number of IP addresses and is therefore more specific,
 * 				so we use that route to determine where to target the traffic.</p>
 *          <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the
 *          <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateRouteCommand extends $Command<
  CreateRouteCommandInput,
  CreateRouteCommandOutput,
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

  constructor(readonly input: CreateRouteCommandInput) {
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
  ): Handler<CreateRouteCommandInput, CreateRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRouteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRouteResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRouteCommandOutput> {
    return deserializeAws_ec2CreateRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
