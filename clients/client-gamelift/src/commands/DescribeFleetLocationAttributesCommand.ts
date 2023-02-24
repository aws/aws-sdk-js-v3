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
  DescribeFleetLocationAttributesInput,
  DescribeFleetLocationAttributesInputFilterSensitiveLog,
  DescribeFleetLocationAttributesOutput,
  DescribeFleetLocationAttributesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetLocationAttributesCommand,
  serializeAws_json1_1DescribeFleetLocationAttributesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetLocationAttributesCommandInput extends DescribeFleetLocationAttributesInput {}
export interface DescribeFleetLocationAttributesCommandOutput
  extends DescribeFleetLocationAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information on a fleet's remote locations, including life-cycle status and
 *             any suspended fleet activity. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get data for specific locations, provide a fleet identifier and a list of
 *                     locations. Location data is returned in the order that it is requested. </p>
 *             </li>
 *             <li>
 *                 <p>To get data for all locations, provide a fleet identifier only. Location data
 *                     is returned in no particular order. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple locations, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>LocationAttributes</code> object is returned for each requested
 *             location. If the fleet does not have a requested location, no information is returned.
 *             This operation does not return the home Region. To get information on a fleet's home
 *             Region, call <code>DescribeFleetAttributes</code>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting
 *                 up GameLift fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetLocationAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetLocationAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetLocationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetLocationAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetLocationAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeFleetLocationAttributesCommand extends $Command<
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
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

  constructor(readonly input: DescribeFleetLocationAttributesCommandInput) {
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
  ): Handler<DescribeFleetLocationAttributesCommandInput, DescribeFleetLocationAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetLocationAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetLocationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetLocationAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetLocationAttributesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeFleetLocationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetLocationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetLocationAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeFleetLocationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
