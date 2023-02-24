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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  DeleteWorkspaceApiKeyRequest,
  DeleteWorkspaceApiKeyRequestFilterSensitiveLog,
  DeleteWorkspaceApiKeyResponse,
  DeleteWorkspaceApiKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWorkspaceApiKeyCommand,
  serializeAws_restJson1DeleteWorkspaceApiKeyCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteWorkspaceApiKeyCommandInput extends DeleteWorkspaceApiKeyRequest {}
export interface DeleteWorkspaceApiKeyCommandOutput extends DeleteWorkspaceApiKeyResponse, __MetadataBearer {}

/**
 * <p>Deletes a Grafana API key for the workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceApiKeyCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceApiKeyCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const command = new DeleteWorkspaceApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkspaceApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceApiKeyCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 */
export class DeleteWorkspaceApiKeyCommand extends $Command<
  DeleteWorkspaceApiKeyCommandInput,
  DeleteWorkspaceApiKeyCommandOutput,
  GrafanaClientResolvedConfig
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

  constructor(readonly input: DeleteWorkspaceApiKeyCommandInput) {
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
  ): Handler<DeleteWorkspaceApiKeyCommandInput, DeleteWorkspaceApiKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWorkspaceApiKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DeleteWorkspaceApiKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkspaceApiKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkspaceApiKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkspaceApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWorkspaceApiKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkspaceApiKeyCommandOutput> {
    return deserializeAws_restJson1DeleteWorkspaceApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
