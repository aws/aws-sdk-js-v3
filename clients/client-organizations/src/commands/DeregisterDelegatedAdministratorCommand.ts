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
  DeregisterDelegatedAdministratorRequest,
  DeregisterDelegatedAdministratorRequestFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1DeregisterDelegatedAdministratorCommand,
  serializeAws_json1_1DeregisterDelegatedAdministratorCommand,
} from "../protocols/Aws_json1_1";

export interface DeregisterDelegatedAdministratorCommandInput extends DeregisterDelegatedAdministratorRequest {}
export interface DeregisterDelegatedAdministratorCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified member Amazon Web Services account as a delegated administrator for the
 *             specified Amazon Web Services service.</p>
 *         <important>
 *             <p>Deregistering a delegated administrator can have unintended impacts on the
 *                 functionality of the enabled Amazon Web Services service. See the documentation for the enabled
 *                 service before you deregister a delegated administrator so that you understand any
 *                 potential impacts.</p>
 *         </important>
 *         <p>You can run this action only for Amazon Web Services services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with
 *     Organizations</a> in the <i>Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeregisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeregisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeregisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link DeregisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class DeregisterDelegatedAdministratorCommand extends $Command<
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
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

  constructor(readonly input: DeregisterDelegatedAdministratorCommandInput) {
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
  ): Handler<DeregisterDelegatedAdministratorCommandInput, DeregisterDelegatedAdministratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterDelegatedAdministratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeregisterDelegatedAdministratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterDelegatedAdministratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterDelegatedAdministratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterDelegatedAdministratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterDelegatedAdministratorCommandOutput> {
    return deserializeAws_json1_1DeregisterDelegatedAdministratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
