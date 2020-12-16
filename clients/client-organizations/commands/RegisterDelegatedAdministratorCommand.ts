import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { RegisterDelegatedAdministratorRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterDelegatedAdministratorCommand,
  serializeAws_json1_1RegisterDelegatedAdministratorCommand,
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

export type RegisterDelegatedAdministratorCommandInput = RegisterDelegatedAdministratorRequest;
export type RegisterDelegatedAdministratorCommandOutput = __MetadataBearer;

/**
 * <p>Enables the specified member account to administer the Organizations features of the specified
 *             AWS service. It grants read-only access to AWS Organizations service data. The account still
 *             requires IAM permissions to access and administer the AWS service.</p>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrated-services-list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class RegisterDelegatedAdministratorCommand extends $Command<
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "RegisterDelegatedAdministratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterDelegatedAdministratorRequest.filterSensitiveLog,
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
