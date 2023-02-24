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

import {
  DeleteUserAccessLoggingSettingsRequest,
  DeleteUserAccessLoggingSettingsRequestFilterSensitiveLog,
  DeleteUserAccessLoggingSettingsResponse,
  DeleteUserAccessLoggingSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommand,
  serializeAws_restJson1DeleteUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

export interface DeleteUserAccessLoggingSettingsCommandInput extends DeleteUserAccessLoggingSettingsRequest {}
export interface DeleteUserAccessLoggingSettingsCommandOutput
  extends DeleteUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new DeleteUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class DeleteUserAccessLoggingSettingsCommand extends $Command<
  DeleteUserAccessLoggingSettingsCommandInput,
  DeleteUserAccessLoggingSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
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

  constructor(readonly input: DeleteUserAccessLoggingSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesWebClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserAccessLoggingSettingsCommandInput, DeleteUserAccessLoggingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteUserAccessLoggingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "DeleteUserAccessLoggingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserAccessLoggingSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteUserAccessLoggingSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteUserAccessLoggingSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUserAccessLoggingSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteUserAccessLoggingSettingsCommandOutput> {
    return deserializeAws_restJson1DeleteUserAccessLoggingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
