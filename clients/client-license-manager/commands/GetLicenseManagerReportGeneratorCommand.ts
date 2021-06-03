import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseManagerReportGeneratorRequest, GetLicenseManagerReportGeneratorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand,
  serializeAws_json1_1GetLicenseManagerReportGeneratorCommand,
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

export interface GetLicenseManagerReportGeneratorCommandInput extends GetLicenseManagerReportGeneratorRequest {}
export interface GetLicenseManagerReportGeneratorCommandOutput
  extends GetLicenseManagerReportGeneratorResponse,
    __MetadataBearer {}

/**
 * <p>Gets information on the specified report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link GetLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetLicenseManagerReportGeneratorCommand extends $Command<
  GetLicenseManagerReportGeneratorCommandInput,
  GetLicenseManagerReportGeneratorCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLicenseManagerReportGeneratorCommandInput) {
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
  ): Handler<GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "GetLicenseManagerReportGeneratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLicenseManagerReportGeneratorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLicenseManagerReportGeneratorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetLicenseManagerReportGeneratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLicenseManagerReportGeneratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLicenseManagerReportGeneratorCommandOutput> {
    return deserializeAws_json1_1GetLicenseManagerReportGeneratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
