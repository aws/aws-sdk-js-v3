import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListScriptsInput, ListScriptsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListScriptsCommand,
  serializeAws_json1_1ListScriptsCommand,
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

export type ListScriptsCommandInput = ListScriptsInput;
export type ListScriptsCommandOutput = ListScriptsOutput & __MetadataBearer;

/**
 * <p>Retrieves script records for all Realtime scripts that are associated with the AWS account in use. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListScripts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteScript</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListScriptsCommand extends $Command<
  ListScriptsCommandInput,
  ListScriptsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListScriptsCommandInput) {
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
  ): Handler<ListScriptsCommandInput, ListScriptsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListScriptsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScriptsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListScriptsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScriptsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListScriptsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScriptsCommandOutput> {
    return deserializeAws_json1_1ListScriptsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
