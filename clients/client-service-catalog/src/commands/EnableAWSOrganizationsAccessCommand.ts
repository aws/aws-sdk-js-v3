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
  EnableAWSOrganizationsAccessInput,
  EnableAWSOrganizationsAccessInputFilterSensitiveLog,
  EnableAWSOrganizationsAccessOutput,
  EnableAWSOrganizationsAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableAWSOrganizationsAccessCommand,
  serializeAws_json1_1EnableAWSOrganizationsAccessCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface EnableAWSOrganizationsAccessCommandInput extends EnableAWSOrganizationsAccessInput {}
export interface EnableAWSOrganizationsAccessCommandOutput
  extends EnableAWSOrganizationsAccessOutput,
    __MetadataBearer {}

/**
 * <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the
 *          current structure. This API can only be called by the management account in the organization.</p>
 *          <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
 *          <important>
 *             <p>If you have previously disabled Organizations access for Service Catalog, and then
 *          enable access again, the portfolio access permissions might not sync with the latest changes to
 *          the organization structure. Specifically, accounts that you removed from the organization after
 *          disabling Service Catalog access, and before you enabled access again, can retain access to the
 *          previously shared portfolio. As a result, an account that has been removed from the organization
 *          might still be able to create or manage Amazon Web Services resources when it is no longer
 *          authorized to do so. Amazon Web Services is working to resolve this issue.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, EnableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, EnableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new EnableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link EnableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class EnableAWSOrganizationsAccessCommand extends $Command<
  EnableAWSOrganizationsAccessCommandInput,
  EnableAWSOrganizationsAccessCommandOutput,
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

  constructor(readonly input: EnableAWSOrganizationsAccessCommandInput) {
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
  ): Handler<EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableAWSOrganizationsAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "EnableAWSOrganizationsAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAWSOrganizationsAccessInputFilterSensitiveLog,
      outputFilterSensitiveLog: EnableAWSOrganizationsAccessOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAWSOrganizationsAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableAWSOrganizationsAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableAWSOrganizationsAccessCommandOutput> {
    return deserializeAws_json1_1EnableAWSOrganizationsAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
