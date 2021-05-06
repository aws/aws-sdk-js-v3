import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { UpdateWorkspaceAliasRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWorkspaceAliasCommand,
  serializeAws_restJson1UpdateWorkspaceAliasCommand,
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

export interface UpdateWorkspaceAliasCommandInput extends UpdateWorkspaceAliasRequest {}
export interface UpdateWorkspaceAliasCommandOutput extends __MetadataBearer {}

/**
 * Updates an AMP workspace alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceAliasCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceAliasCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new UpdateWorkspaceAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAliasCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateWorkspaceAliasCommand extends $Command<
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
  AmpClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkspaceAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkspaceAliasCommandInput, UpdateWorkspaceAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "UpdateWorkspaceAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkspaceAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkspaceAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateWorkspaceAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkspaceAliasCommandOutput> {
    return deserializeAws_restJson1UpdateWorkspaceAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
