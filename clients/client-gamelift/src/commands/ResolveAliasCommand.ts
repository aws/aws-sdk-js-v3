import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResolveAliasInput, ResolveAliasOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ResolveAliasCommand,
  serializeAws_json1_1ResolveAliasCommand,
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

export interface ResolveAliasCommandInput extends ResolveAliasInput {}
export interface ResolveAliasCommandOutput extends ResolveAliasOutput, __MetadataBearer {}

/**
 * <p>Retrieves the fleet ID that an alias is currently pointing to.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateAlias</a> |
 *                     <a>ListAliases</a> |
 *                     <a>DescribeAlias</a> |
 *                     <a>UpdateAlias</a> |
 *                     <a>DeleteAlias</a> |
 *                     <a>ResolveAlias</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ResolveAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResolveAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ResolveAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveAliasCommandInput} for command's `input` shape.
 * @see {@link ResolveAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ResolveAliasCommand extends $Command<
  ResolveAliasCommandInput,
  ResolveAliasCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveAliasCommandInput) {
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
  ): Handler<ResolveAliasCommandInput, ResolveAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ResolveAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveAliasInput.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveAliasOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveAliasCommandOutput> {
    return deserializeAws_json1_1ResolveAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
