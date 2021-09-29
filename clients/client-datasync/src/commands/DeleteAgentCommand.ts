import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteAgentRequest, DeleteAgentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAgentCommand,
  serializeAws_json1_1DeleteAgentCommand,
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

export interface DeleteAgentCommandInput extends DeleteAgentRequest {}
export interface DeleteAgentCommandOutput extends DeleteAgentResponse, __MetadataBearer {}

/**
 * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
 *       of the agent in your request. The operation disassociates the agent from your Amazon Web Services account.
 *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAgentCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAgentCommand extends $Command<
  DeleteAgentCommandInput,
  DeleteAgentCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAgentCommandInput, DeleteAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DeleteAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAgentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAgentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAgentCommandOutput> {
    return deserializeAws_json1_1DeleteAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
