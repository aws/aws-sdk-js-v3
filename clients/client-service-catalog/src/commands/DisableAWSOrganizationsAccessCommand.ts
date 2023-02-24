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

import {
  DisableAWSOrganizationsAccessInput,
  DisableAWSOrganizationsAccessInputFilterSensitiveLog,
  DisableAWSOrganizationsAccessOutput,
  DisableAWSOrganizationsAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisableAWSOrganizationsAccessCommand,
  serializeAws_json1_1DisableAWSOrganizationsAccessCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DisableAWSOrganizationsAccessCommandInput extends DisableAWSOrganizationsAccessInput {}
export interface DisableAWSOrganizationsAccessCommandOutput
  extends DisableAWSOrganizationsAccessOutput,
    __MetadataBearer {}

/**
 * <p>Disable portfolio sharing through the Organizations service. This command will not
 *          delete your current shares, but prevents you from creating new shares throughout your
 *          organization. Current shares are not kept in sync with your organization structure if the structure
 *          changes after calling this API. Only the management account in the organization can call this API.</p>
 *          <p>You cannot call this API if there are active delegated administrators in the organization.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
 *          <important>
 *             <p>If you share an Service Catalog portfolio in an organization within
 *          Organizations, and then disable Organizations access for Service Catalog,
 *          the portfolio access permissions will not sync with the latest changes to the organization
 *          structure. Specifically, accounts that you removed from the organization after
 *          disabling Service Catalog access will retain access to the previously shared portfolio.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DisableAWSOrganizationsAccessCommand extends $Command<
  DisableAWSOrganizationsAccessCommandInput,
  DisableAWSOrganizationsAccessCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: DisableAWSOrganizationsAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableAWSOrganizationsAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisableAWSOrganizationsAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAWSOrganizationsAccessInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisableAWSOrganizationsAccessOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAWSOrganizationsAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableAWSOrganizationsAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableAWSOrganizationsAccessCommandOutput> {
    return deserializeAws_json1_1DisableAWSOrganizationsAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
