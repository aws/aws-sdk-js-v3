import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseRequest, GetLicenseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetLicenseCommand,
  serializeAws_json1_1GetLicenseCommand,
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

export type GetLicenseCommandInput = GetLicenseRequest;
export type GetLicenseCommandOutput = GetLicenseResponse & __MetadataBearer;

/**
 * <p>Gets detailed information about the specified license.</p>
 */
export class GetLicenseCommand extends $Command<
  GetLicenseCommandInput,
  GetLicenseCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLicenseCommandInput) {
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
  ): Handler<GetLicenseCommandInput, GetLicenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetLicenseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLicenseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLicenseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLicenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLicenseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLicenseCommandOutput> {
    return deserializeAws_json1_1GetLicenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
