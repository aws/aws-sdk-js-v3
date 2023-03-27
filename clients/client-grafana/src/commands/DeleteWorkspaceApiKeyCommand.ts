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
import { DeleteWorkspaceApiKeyRequest, DeleteWorkspaceApiKeyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWorkspaceApiKeyCommand,
  serializeAws_restJson1DeleteWorkspaceApiKeyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteWorkspaceApiKeyCommand}.
 */
export interface DeleteWorkspaceApiKeyCommandInput extends DeleteWorkspaceApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkspaceApiKeyCommand}.
 */
export interface DeleteWorkspaceApiKeyCommandOutput extends DeleteWorkspaceApiKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a Grafana API key for the workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DeleteWorkspaceApiKeyCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DeleteWorkspaceApiKeyCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // DeleteWorkspaceApiKeyRequest
 *   keyName: "STRING_VALUE", // required
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkspaceApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteWorkspaceApiKeyCommandInput - {@link DeleteWorkspaceApiKeyCommandInput}
 * @returns {@link DeleteWorkspaceApiKeyCommandOutput}
 * @see {@link DeleteWorkspaceApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkspaceApiKeyCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteWorkspaceApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWorkspaceApiKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkspaceApiKeyCommandOutput> {
    return deserializeAws_restJson1DeleteWorkspaceApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
