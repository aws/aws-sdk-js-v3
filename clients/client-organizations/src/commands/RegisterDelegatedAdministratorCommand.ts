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
  RegisterDelegatedAdministratorRequest,
  RegisterDelegatedAdministratorRequestFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1RegisterDelegatedAdministratorCommand,
  serializeAws_json1_1RegisterDelegatedAdministratorCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterDelegatedAdministratorCommandInput extends RegisterDelegatedAdministratorRequest {}
export interface RegisterDelegatedAdministratorCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the specified member account to administer the Organizations features of the specified
 *             Amazon Web Services service. It grants read-only access to Organizations service data. The account still
 *             requires IAM permissions to access and administer the Amazon Web Services service.</p>
 *         <p>You can run this action only for Amazon Web Services services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">Amazon Web Services Services that you can use with
 *     Organizations</a> in the <i>Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RegisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RegisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RegisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link RegisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class RegisterDelegatedAdministratorCommand extends $Command<
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
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

  constructor(readonly input: RegisterDelegatedAdministratorCommandInput) {
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
  ): Handler<RegisterDelegatedAdministratorCommandInput, RegisterDelegatedAdministratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterDelegatedAdministratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "RegisterDelegatedAdministratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDelegatedAdministratorRequestFilterSensitiveLog,
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
    input: RegisterDelegatedAdministratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterDelegatedAdministratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterDelegatedAdministratorCommandOutput> {
    return deserializeAws_json1_1RegisterDelegatedAdministratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
