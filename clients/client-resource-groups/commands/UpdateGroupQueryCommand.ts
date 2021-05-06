import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { UpdateGroupQueryInput, UpdateGroupQueryOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGroupQueryCommand,
  serializeAws_restJson1UpdateGroupQueryCommand,
} from "../protocols/Aws_restJson1";
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

export interface UpdateGroupQueryCommandInput extends UpdateGroupQueryInput {}
export interface UpdateGroupQueryCommandOutput extends UpdateGroupQueryOutput, __MetadataBearer {}

/**
 * <p>Updates the resource query of a group. For more information about resource queries,
 *             see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p>
 *         <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:UpdateGroupQuery</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateGroupQueryCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateGroupQueryCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UpdateGroupQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupQueryCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupQueryCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateGroupQueryCommand extends $Command<
  UpdateGroupQueryCommandInput,
  UpdateGroupQueryCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGroupQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "UpdateGroupQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGroupQueryInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGroupQueryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGroupQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGroupQueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGroupQueryCommandOutput> {
    return deserializeAws_restJson1UpdateGroupQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
