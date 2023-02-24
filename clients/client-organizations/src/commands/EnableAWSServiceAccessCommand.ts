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

import { EnableAWSServiceAccessRequest, EnableAWSServiceAccessRequestFilterSensitiveLog } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1EnableAWSServiceAccessCommand,
  serializeAws_json1_1EnableAWSServiceAccessCommand,
} from "../protocols/Aws_json1_1";

export interface EnableAWSServiceAccessCommandInput extends EnableAWSServiceAccessRequest {}
export interface EnableAWSServiceAccessCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the integration of an Amazon Web Services service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with Organizations. When you enable integration, you allow
 *             the specified service to create a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *             all the accounts in your organization. This allows the service to perform operations on
 *             your behalf in your organization and its accounts.</p>
 *         <important>
 *             <p>We recommend that you enable integration between Organizations and the specified Amazon Web Services
 *                 service by using the console or commands that are provided by the specified service.
 *                 Doing so ensures that the service is aware that it can create the resources that are
 *                 required for the integration. How the service creates those resources in the
 *                 organization's accounts depends on that service. For more information, see the
 *                 documentation for the other Amazon Web Services service.</p>
 *         </important>
 *         <p>For more information about enabling services to integrate with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating
 *                 Organizations with Other Amazon Web Services Services</a> in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *         <p>You can only call this operation from the organization's management account and only
 *             if the organization has <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all
 *                 features</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnableAWSServiceAccessCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnableAWSServiceAccessCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnableAWSServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAWSServiceAccessCommandInput} for command's `input` shape.
 * @see {@link EnableAWSServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class EnableAWSServiceAccessCommand extends $Command<
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
  OrganizationsClientResolvedConfig
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

  constructor(readonly input: EnableAWSServiceAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableAWSServiceAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "EnableAWSServiceAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAWSServiceAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAWSServiceAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableAWSServiceAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableAWSServiceAccessCommandOutput> {
    return deserializeAws_json1_1EnableAWSServiceAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
