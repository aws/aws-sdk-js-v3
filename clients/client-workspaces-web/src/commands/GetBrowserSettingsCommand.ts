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

import { GetBrowserSettingsRequest, GetBrowserSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBrowserSettingsCommand,
  serializeAws_restJson1GetBrowserSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

export interface GetBrowserSettingsCommandInput extends GetBrowserSettingsRequest {}
export interface GetBrowserSettingsCommandOutput extends GetBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets browser settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const command = new GetBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetBrowserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 */
export class GetBrowserSettingsCommand extends $Command<
  GetBrowserSettingsCommandInput,
  GetBrowserSettingsCommandOutput,
  WorkSpacesWebClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBrowserSettingsCommandInput) {
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
  ): Handler<GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesWebClient";
    const commandName = "GetBrowserSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBrowserSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBrowserSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBrowserSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBrowserSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBrowserSettingsCommandOutput> {
    return deserializeAws_restJson1GetBrowserSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
