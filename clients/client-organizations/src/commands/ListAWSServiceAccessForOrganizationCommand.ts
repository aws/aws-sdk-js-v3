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
  ListAWSServiceAccessForOrganizationRequest,
  ListAWSServiceAccessForOrganizationRequestFilterSensitiveLog,
  ListAWSServiceAccessForOrganizationResponse,
  ListAWSServiceAccessForOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand,
  serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand,
} from "../protocols/Aws_json1_1";

export interface ListAWSServiceAccessForOrganizationCommandInput extends ListAWSServiceAccessForOrganizationRequest {}
export interface ListAWSServiceAccessForOrganizationCommandOutput
  extends ListAWSServiceAccessForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon Web Services services that you enabled to integrate with your
 *             organization. After a service on this list creates the resources that it requires for
 *             the integration, it can perform operations on your organization and its accounts.</p>
 *         <p>For more information about integrating other services with Organizations, including the
 *             list of services that currently work with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating Organizations with Other
 *                 Amazon Web Services Services</a> in the <i>Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAWSServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListAWSServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class ListAWSServiceAccessForOrganizationCommand extends $Command<
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
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

  constructor(readonly input: ListAWSServiceAccessForOrganizationCommandInput) {
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
  ): Handler<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAWSServiceAccessForOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListAWSServiceAccessForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAWSServiceAccessForOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAWSServiceAccessForOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAWSServiceAccessForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAWSServiceAccessForOrganizationCommandOutput> {
    return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
