import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { GetAppInstanceRetentionSettingsRequest, GetAppInstanceRetentionSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand,
  serializeAws_restJson1GetAppInstanceRetentionSettingsCommand,
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

export interface GetAppInstanceRetentionSettingsCommandInput extends GetAppInstanceRetentionSettingsRequest {}
export interface GetAppInstanceRetentionSettingsCommandOutput
  extends GetAppInstanceRetentionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the retention settings for an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, GetAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new GetAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetAppInstanceRetentionSettingsCommand extends $Command<
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAppInstanceRetentionSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppInstanceRetentionSettingsCommandInput, GetAppInstanceRetentionSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "GetAppInstanceRetentionSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppInstanceRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppInstanceRetentionSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAppInstanceRetentionSettingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAppInstanceRetentionSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAppInstanceRetentionSettingsCommandOutput> {
    return deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
