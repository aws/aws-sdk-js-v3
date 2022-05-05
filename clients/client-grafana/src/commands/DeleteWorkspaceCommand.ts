// smithy-typescript generated code
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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { DeleteWorkspaceRequest, DeleteWorkspaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWorkspaceCommand,
  serializeAws_restJson1DeleteWorkspaceCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteWorkspaceCommandInput extends DeleteWorkspaceRequest {}
export interface DeleteWorkspaceCommandOutput extends DeleteWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Managed Grafana workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const command = new DeleteWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 */
export class DeleteWorkspaceCommand extends $Command<
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
  GrafanaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DeleteWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkspaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWorkspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkspaceCommandOutput> {
    return deserializeAws_restJson1DeleteWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
