import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
  serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
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

export interface ListAssociationsForLicenseConfigurationCommandInput
  extends ListAssociationsForLicenseConfigurationRequest {}
export interface ListAssociationsForLicenseConfigurationCommandOutput
  extends ListAssociationsForLicenseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resource associations for the specified license configuration.</p>
 *          <p>Resource associations need not consume licenses from a license configuration.
 *          For example, an AMI or a stopped instance might not consume a license (depending on
 *          the license rules).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListAssociationsForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationsForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAssociationsForLicenseConfigurationCommand extends $Command<
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociationsForLicenseConfigurationCommandInput) {
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
  ): Handler<
    ListAssociationsForLicenseConfigurationCommandInput,
    ListAssociationsForLicenseConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListAssociationsForLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociationsForLicenseConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociationsForLicenseConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssociationsForLicenseConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput> {
    return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
