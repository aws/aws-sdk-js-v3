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
  DescribeFleetAttributesInput,
  DescribeFleetAttributesInputFilterSensitiveLog,
  DescribeFleetAttributesOutput,
  DescribeFleetAttributesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetAttributesCommand,
  serializeAws_json1_1DescribeFleetAttributesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetAttributesCommandInput extends DescribeFleetAttributesInput {}
export interface DescribeFleetAttributesCommandOutput extends DescribeFleetAttributesOutput, __MetadataBearer {}

/**
 * <p>Retrieves core fleet-wide properties, including the computing hardware and deployment
 *             configuration for all instances in the fleet.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get attributes for one or more specific fleets, provide a list of fleet IDs
 *                     or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get attributes for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple fleets, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet
 *             requested, unless the fleet identifier is not found. </p>
 *         <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If
 *                 a request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *         </note>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeFleetAttributesCommand extends $Command<
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
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

  constructor(readonly input: DescribeFleetAttributesCommandInput) {
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
  ): Handler<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetAttributesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeFleetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
