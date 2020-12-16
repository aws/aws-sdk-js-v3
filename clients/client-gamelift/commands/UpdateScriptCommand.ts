import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateScriptInput, UpdateScriptOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateScriptCommand,
  serializeAws_json1_1UpdateScriptCommand,
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

export type UpdateScriptCommandInput = UpdateScriptInput;
export type UpdateScriptCommandOutput = UpdateScriptOutput & __MetadataBearer;

/**
 * <p>Updates Realtime script metadata and content.</p>
 *         <p>To update script metadata, specify the script ID and provide updated name and/or
 *             version values. </p>
 *         <p>To update script content, provide an updated zip file by pointing to either a local
 *             file or an Amazon S3 bucket location. You can use either method regardless of how the
 *             original script was uploaded. Use the <i>Version</i> parameter to track
 *             updates to the script.</p>
 *         <p>If the call is successful, the updated metadata is stored in the script record and a
 *             revised script is uploaded to the Amazon GameLift service. Once the script is updated and
 *             acquired by a fleet instance, the new version is used for all new game sessions. </p>
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
export class UpdateScriptCommand extends $Command<
  UpdateScriptCommandInput,
  UpdateScriptCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateScriptCommandInput) {
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
  ): Handler<UpdateScriptCommandInput, UpdateScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScriptInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateScriptOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateScriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScriptCommandOutput> {
    return deserializeAws_json1_1UpdateScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
