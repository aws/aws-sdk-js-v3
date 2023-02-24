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
  DescribeInstancesInput,
  DescribeInstancesInputFilterSensitiveLog,
  DescribeInstancesOutput,
  DescribeInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeInstancesCommand,
  serializeAws_json1_1DescribeInstancesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeInstancesCommandInput extends DescribeInstancesInput {}
export interface DescribeInstancesCommandOutput extends DescribeInstancesOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a fleet's instances, including instance IDs, connection
 *             data, and status. </p>
 *         <p>This operation can be used in the following ways:</p>
 *         <ul>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's home
 *                     Region, provide the fleet ID.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on all instances that are deployed to a fleet's remote
 *                     location, provide the fleet ID and location name.</p>
 *             </li>
 *             <li>
 *                 <p>To get information on a specific instance in a fleet, provide the fleet ID and
 *                     instance ID.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, an <code>Instance</code> object is returned for each requested
 *             instance. Instances are not returned in any particular order. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet
 *                 Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet
 *                 Issues</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeInstancesCommand extends $Command<
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
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

  constructor(readonly input: DescribeInstancesCommandInput) {
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
  ): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
