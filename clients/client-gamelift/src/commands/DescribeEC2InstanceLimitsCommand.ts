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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeEC2InstanceLimitsInput,
  DescribeEC2InstanceLimitsInputFilterSensitiveLog,
  DescribeEC2InstanceLimitsOutput,
  DescribeEC2InstanceLimitsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEC2InstanceLimitsCommand,
  serializeAws_json1_1DescribeEC2InstanceLimitsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeEC2InstanceLimitsCommandInput extends DescribeEC2InstanceLimitsInput {}
export interface DescribeEC2InstanceLimitsCommandOutput extends DescribeEC2InstanceLimitsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location.
 *             Instance limits control the number of instances, per instance type, per location, that
 *             your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information
 *             returned includes the maximum number of instances allowed and your account's current
 *             usage across all fleets. This information can affect your ability to scale your GameLift
 *             fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p>
 *         <p>Instance limits differ based on whether the instances are deployed in a fleet's home
 *             Region or in a remote location. For remote locations, limits also differ based on the
 *             combination of home Region and remote location. All requests must specify an Amazon Web Services
 *             Region (either explicitly or as your default settings). To get the limit for a remote
 *             location, you must also specify the location. For example, the following requests all
 *             return different results: </p>
 *         <ul>
 *             <li>
 *                 <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The
 *                     result is limits and usage data on all instance types that are deployed in
 *                         <code>us-east-2</code>, by all of the fleets that reside in
 *                         <code>ap-northeast-1</code>. </p>
 *             </li>
 *             <li>
 *                 <p>Request specifies the Region <code>us-east-1</code> with location
 *                         <code>ca-central-1</code>. The result is limits and usage data on all
 *                     instance types that are deployed in <code>ca-central-1</code>, by all of the
 *                     fleets that reside in <code>us-east-2</code>. These limits do not affect fleets
 *                     in any other Regions that deploy instances to <code>ca-central-1</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Request specifies the Region <code>eu-west-1</code> with location
 *                         <code>ca-central-1</code>. The result is limits and usage data on all
 *                     instance types that are deployed in <code>ca-central-1</code>, by all of the
 *                     fleets that reside in <code>eu-west-1</code>.</p>
 *             </li>
 *          </ul>
 *         <p>This operation can be used in the following ways:</p>
 *         <ul>
 *             <li>
 *                 <p>To get limit and usage data for all instance types that are deployed in an
 *                     Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only.
 *                     Optionally, specify a single instance type to retrieve information for.</p>
 *             </li>
 *             <li>
 *                 <p>To get limit and usage data for all instance types that are deployed to a
 *                     remote location by fleets that reside in different Amazon Web Services Region: Provide both
 *                     the Amazon Web Services Region and the remote location. Optionally, specify a single instance
 *                     type to retrieve information for.</p>
 *             </li>
 *          </ul>
 *         <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and
 *             usage data for each requested instance type.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeEC2InstanceLimitsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeEC2InstanceLimitsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeEC2InstanceLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEC2InstanceLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeEC2InstanceLimitsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeEC2InstanceLimitsCommand extends $Command<
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
  GameLiftClientResolvedConfig
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

  constructor(readonly input: DescribeEC2InstanceLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEC2InstanceLimitsCommandInput, DescribeEC2InstanceLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEC2InstanceLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeEC2InstanceLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEC2InstanceLimitsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEC2InstanceLimitsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEC2InstanceLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEC2InstanceLimitsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEC2InstanceLimitsCommandOutput> {
    return deserializeAws_json1_1DescribeEC2InstanceLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
