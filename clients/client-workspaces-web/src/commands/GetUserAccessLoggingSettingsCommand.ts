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
  GetUserAccessLoggingSettingsRequest,
  GetUserAccessLoggingSettingsRequestFilterSensitiveLog,
  GetUserAccessLoggingSettingsResponse,
  GetUserAccessLoggingSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetUserAccessLoggingSettingsCommand,
  serializeAws_restJson1GetUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

export interface GetUserAccessLoggingSettingsCommandInput extends GetUserAccessLoggingSettingsRequest {}
export interface GetUserAccessLoggingSettingsCommandOutput
  extends GetUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Gets user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new GetUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class GetUserAccessLoggingSettingsCommand extends $Command<
  GetUserAccessLoggingSettingsCommandInput,
  GetUserAccessLoggingSettingsCommandOutput,
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

  constructor(readonly input: GetUserAccessLoggingSettingsCommandInput) {
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
  ): Handler<GetUserAccessLoggingSettingsCommandInput, GetUserAccessLoggingSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserAccessLoggingSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetUserAccessLoggingSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserAccessLoggingSettingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUserAccessLoggingSettingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserAccessLoggingSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetUserAccessLoggingSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUserAccessLoggingSettingsCommandOutput> {
    return deserializeAws_restJson1GetUserAccessLoggingSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
