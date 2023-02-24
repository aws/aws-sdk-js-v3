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
  UpdateScriptInput,
  UpdateScriptInputFilterSensitiveLog,
  UpdateScriptOutput,
  UpdateScriptOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateScriptCommand,
  serializeAws_json1_1UpdateScriptCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateScriptCommandInput extends UpdateScriptInput {}
export interface UpdateScriptCommandOutput extends UpdateScriptOutput, __MetadataBearer {}

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
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScriptCommandInput} for command's `input` shape.
 * @see {@link UpdateScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class UpdateScriptCommand extends $Command<
  UpdateScriptCommandInput,
  UpdateScriptCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateScriptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateScriptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScriptInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateScriptOutputFilterSensitiveLog,
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
