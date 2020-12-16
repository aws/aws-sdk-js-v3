import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetServiceSettingsCommand,
  serializeAws_json1_1GetServiceSettingsCommand,
} from "../protocols/Aws_json1_1";
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

export type GetServiceSettingsCommandInput = GetServiceSettingsRequest;
export type GetServiceSettingsCommandOutput = GetServiceSettingsResponse & __MetadataBearer;

/**
 * <p>Gets the License Manager settings for the current Region.</p>
 */
export class GetServiceSettingsCommand extends $Command<
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetServiceSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetServiceSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceSettingsCommandOutput> {
    return deserializeAws_json1_1GetServiceSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
