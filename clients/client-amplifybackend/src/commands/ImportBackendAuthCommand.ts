import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { ImportBackendAuthRequest, ImportBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ImportBackendAuthCommand,
  serializeAws_restJson1ImportBackendAuthCommand,
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

export interface ImportBackendAuthCommandInput extends ImportBackendAuthRequest {}
export interface ImportBackendAuthCommandOutput extends ImportBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Imports an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ImportBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ImportBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new ImportBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportBackendAuthCommandInput} for command's `input` shape.
 * @see {@link ImportBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ImportBackendAuthCommand extends $Command<
  ImportBackendAuthCommandInput,
  ImportBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportBackendAuthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportBackendAuthCommandInput, ImportBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "ImportBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportBackendAuthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportBackendAuthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportBackendAuthCommandOutput> {
    return deserializeAws_restJson1ImportBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
