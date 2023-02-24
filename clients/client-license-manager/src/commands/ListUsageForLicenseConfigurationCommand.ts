// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationRequestFilterSensitiveLog,
  ListUsageForLicenseConfigurationResponse,
  ListUsageForLicenseConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListUsageForLicenseConfigurationCommand,
  serializeAws_json1_1ListUsageForLicenseConfigurationCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class ListUsageForLicenseConfigurationCommand extends $Command<
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUsageForLicenseConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListUsageForLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUsageForLicenseConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUsageForLicenseConfigurationResponseFilterSensitiveLog,
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
