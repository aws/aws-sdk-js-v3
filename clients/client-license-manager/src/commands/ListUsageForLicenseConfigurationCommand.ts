import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListUsageForLicenseConfigurationRequest, ListUsageForLicenseConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListUsageForLicenseConfigurationCommand,
  serializeAws_json1_1ListUsageForLicenseConfigurationCommand,
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

export interface ListUsageForLicenseConfigurationCommandInput extends ListUsageForLicenseConfigurationRequest {}
export interface ListUsageForLicenseConfigurationCommandOutput
  extends ListUsageForLicenseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists all license usage records for a license configuration, displaying license
 *          consumption details by resource at a selected point in time. Use this action to audit the
 *          current license consumption for any license inventory and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListUsageForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsageForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListUsageForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListUsageForLicenseConfigurationCommand extends $Command<
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUsageForLicenseConfigurationCommandInput) {
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
  ): Handler<ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListUsageForLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUsageForLicenseConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListUsageForLicenseConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListUsageForLicenseConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListUsageForLicenseConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUsageForLicenseConfigurationCommandOutput> {
    return deserializeAws_json1_1ListUsageForLicenseConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
