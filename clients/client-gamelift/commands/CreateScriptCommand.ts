import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateScriptInput, CreateScriptOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateScriptCommand,
  serializeAws_json1_1CreateScriptCommand,
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

export type CreateScriptCommandInput = CreateScriptInput;
export type CreateScriptCommandOutput = CreateScriptOutput & __MetadataBearer;

/**
 * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that
 *             provide configuration settings and optional custom game logic for your game. The script
 *             is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is
 *             executed during an active game session. </p>
 *         <p>To create a new script record, specify a script name and provide the script file(s).
 *             The script files and all dependencies must be zipped into a single file. You can pull
 *             the zip file from either of these locations: </p>
 *         <ul>
 *             <li>
 *                <p>A locally available directory. Use the <i>ZipFile</i> parameter for this
 *                     option.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the
 *                         <i>StorageLocation</i> parameter for this option. You'll need
 *                     to have an Identity Access Management (IAM) role that allows the Amazon GameLift
 *                     service to access your S3 bucket. </p>
 *             </li>
 *          </ul>
 *         <p>If the call is successful, a new script record is created with a unique script ID. If the
 *             script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket
 *             and the script record's storage location reflects this location. If the script file is provided
 *             as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a>
 *          </p>
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
export class CreateScriptCommand extends $Command<
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateScriptCommandInput) {
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
  ): Handler<CreateScriptCommandInput, CreateScriptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateScriptInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateScriptOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateScriptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateScriptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateScriptCommandOutput> {
    return deserializeAws_json1_1CreateScriptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
