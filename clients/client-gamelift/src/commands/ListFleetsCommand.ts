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
  ListFleetsInput,
  ListFleetsInputFilterSensitiveLog,
  ListFleetsOutput,
  ListFleetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListFleetsCommand,
  serializeAws_json1_1ListFleetsCommand,
} from "../protocols/Aws_json1_1";

export interface ListFleetsCommandInput extends ListFleetsInput {}
export interface ListFleetsCommandOutput extends ListFleetsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this
 *             operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or
 *             specify a Region in your request. You can filter the result set to find only those
 *             fleets that are deployed with a specific build or script. For fleets that have multiple
 *             locations, this operation retrieves fleets based on their home Region only.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get a list of all fleets in a Region, don't provide a build or script
 *                     identifier. </p>
 *             </li>
 *             <li>
 *                 <p>To get a list of all fleets where a specific custom game build is deployed,
 *                     provide the build ID.</p>
 *             </li>
 *             <li>
 *                 <p>To get a list of all Realtime Servers fleets with a specific configuration script,
 *                     provide the script ID. </p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a list of fleet IDs that match the request parameters is returned. A
 *             NextToken value is also returned if there are more result pages to retrieve.</p>
 *         <note>
 *             <p>Fleet resources are not listed in a particular order.</p>
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
 * import { GameLiftClient, ListFleetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListFleetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFleetsCommandInput} for command's `input` shape.
 * @see {@link ListFleetsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ListFleetsCommand extends $Command<
  ListFleetsCommandInput,
  ListFleetsCommandOutput,
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

  constructor(readonly input: ListFleetsCommandInput) {
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
  ): Handler<ListFleetsCommandInput, ListFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFleetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFleetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListFleetsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFleetsCommandOutput> {
    return deserializeAws_json1_1ListFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
