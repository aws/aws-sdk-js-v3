import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScriptInput, DescribeScriptOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScriptCommand,
  serializeAws_json1_1DescribeScriptCommand,
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

export type DescribeScriptCommandInput = DescribeScriptInput;
export type DescribeScriptCommandOutput = DescribeScriptOutput & __MetadataBearer;

/**
 * <p>Retrieves properties for a Realtime script. </p>
 *         <p>To request a script record, specify the script ID. If successful, an object containing the script properties
 *         is returned.</p>
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
export class DescribeScriptCommand extends $Command<
  DescribeScriptCommandInput,
  DescribeScriptCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScriptCommandInput) {
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
  ): Handler<DescribeScriptCommandInput, DescribeScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScriptInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScriptOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScriptCommandOutput> {
    return deserializeAws_json1_1DescribeScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
