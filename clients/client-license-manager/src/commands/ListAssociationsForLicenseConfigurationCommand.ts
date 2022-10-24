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
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationRequestFilterSensitiveLog,
  ListAssociationsForLicenseConfigurationResponse,
  ListAssociationsForLicenseConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
  serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class ListAssociationsForLicenseConfigurationCommand extends $Command<
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListAssociationsForLicenseConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListAssociationsForLicenseConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociationsForLicenseConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAssociationsForLicenseConfigurationResponseFilterSensitiveLog,
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
