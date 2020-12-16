import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListGameServersInput, ListGameServersOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListGameServersCommand,
  serializeAws_json1_1ListGameServersCommand,
} from "../protocols/Aws_json1_1";
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

export type ListGameServersCommandInput = ListGameServersInput;
export type ListGameServersCommandOutput = ListGameServersOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on all game servers that are currently active in a specified
 *             game server group. You can opt to sort the list by game server age. Use the
 *             pagination parameters to retrieve results in a set of sequential segments. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>RegisterGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ClaimGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeregisterGameServer</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListGameServersCommand extends $Command<
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGameServersCommandInput) {
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
  ): Handler<ListGameServersCommandInput, ListGameServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListGameServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGameServersInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGameServersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGameServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGameServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGameServersCommandOutput> {
    return deserializeAws_json1_1ListGameServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
