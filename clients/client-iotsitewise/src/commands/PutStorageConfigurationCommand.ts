import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { PutStorageConfigurationRequest, PutStorageConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutStorageConfigurationCommand,
  serializeAws_restJson1PutStorageConfigurationCommand,
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

export interface PutStorageConfigurationCommandInput extends PutStorageConfigurationRequest {}
export interface PutStorageConfigurationCommandOutput extends PutStorageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Configures storage settings for IoT SiteWise.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, PutStorageConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, PutStorageConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new PutStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutStorageConfigurationCommand extends $Command<
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutStorageConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutStorageConfigurationCommandInput, PutStorageConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "PutStorageConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutStorageConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutStorageConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutStorageConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutStorageConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutStorageConfigurationCommandOutput> {
    return deserializeAws_restJson1PutStorageConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
