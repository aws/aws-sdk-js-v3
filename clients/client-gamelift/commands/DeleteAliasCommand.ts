import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteAliasInput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAliasCommand,
  serializeAws_json1_1DeleteAliasCommand,
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

export type DeleteAliasCommandInput = DeleteAliasInput;
export type DeleteAliasCommandOutput = __MetadataBearer;

/**
 * <p>Deletes an alias. This operation removes all record of the alias. Game clients
 *             attempting to access a server process using the deleted alias receive an error. To
 *             delete an alias, specify the alias ID to be deleted.</p>
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
export class DeleteAliasCommand extends $Command<
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAliasCommandInput) {
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
  ): Handler<DeleteAliasCommandInput, DeleteAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAliasInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAliasCommandOutput> {
    return deserializeAws_json1_1DeleteAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
