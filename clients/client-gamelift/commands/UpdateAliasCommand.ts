import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateAliasInput, UpdateAliasOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAliasCommand,
  serializeAws_json1_1UpdateAliasCommand,
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

export type UpdateAliasCommandInput = UpdateAliasInput;
export type UpdateAliasCommandOutput = UpdateAliasOutput & __MetadataBearer;

/**
 * <p>Updates properties for an alias. To update properties, specify the alias ID to be
 *             updated and provide the information to be changed. To reassign an alias to another
 *             fleet, provide an updated routing strategy. If successful, the updated alias record is
 *             returned.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResolveAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class UpdateAliasCommand extends $Command<
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAliasCommandInput) {
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
  ): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAliasInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAliasOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAliasCommandOutput> {
    return deserializeAws_json1_1UpdateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
