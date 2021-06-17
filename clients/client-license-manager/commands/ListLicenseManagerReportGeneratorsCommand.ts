import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand,
  serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand,
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

export interface ListLicenseManagerReportGeneratorsCommandInput extends ListLicenseManagerReportGeneratorsRequest {}
export interface ListLicenseManagerReportGeneratorsCommandOutput
  extends ListLicenseManagerReportGeneratorsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the report generators for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseManagerReportGeneratorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseManagerReportGeneratorsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseManagerReportGeneratorsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListLicenseManagerReportGeneratorsCommand extends $Command<
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLicenseManagerReportGeneratorsCommandInput) {
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
  ): Handler<ListLicenseManagerReportGeneratorsCommandInput, ListLicenseManagerReportGeneratorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListLicenseManagerReportGeneratorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLicenseManagerReportGeneratorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLicenseManagerReportGeneratorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListLicenseManagerReportGeneratorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput> {
    return deserializeAws_json1_1ListLicenseManagerReportGeneratorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
