import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseUsageRequest, GetLicenseUsageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetLicenseUsageCommand,
  serializeAws_json1_1GetLicenseUsageCommand,
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

export type GetLicenseUsageCommandInput = GetLicenseUsageRequest;
export type GetLicenseUsageCommandOutput = GetLicenseUsageResponse & __MetadataBearer;

/**
 * <p>Gets detailed information about the usage of the specified license.</p>
 */
export class GetLicenseUsageCommand extends $Command<
  GetLicenseUsageCommandInput,
  GetLicenseUsageCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLicenseUsageCommandInput) {
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
  ): Handler<GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetLicenseUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLicenseUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLicenseUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLicenseUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLicenseUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLicenseUsageCommandOutput> {
    return deserializeAws_json1_1GetLicenseUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
