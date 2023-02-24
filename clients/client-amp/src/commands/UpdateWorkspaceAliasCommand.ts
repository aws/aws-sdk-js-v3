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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { UpdateWorkspaceAliasRequest, UpdateWorkspaceAliasRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWorkspaceAliasCommand,
  serializeAws_restJson1UpdateWorkspaceAliasCommand,
} from "../protocols/Aws_restJson1";

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
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class UpdateWorkspaceAliasCommand extends $Command<
  UpdateWorkspaceAliasCommandInput,
  UpdateWorkspaceAliasCommandOutput,
  AmpClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkspaceAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "UpdateWorkspaceAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkspaceAliasRequestFilterSensitiveLog,
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
