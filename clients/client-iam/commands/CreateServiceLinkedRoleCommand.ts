import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateServiceLinkedRoleRequest, CreateServiceLinkedRoleResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateServiceLinkedRoleCommand,
  serializeAws_queryCreateServiceLinkedRoleCommand,
} from "../protocols/Aws_query";
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

export interface CreateServiceLinkedRoleCommandInput extends CreateServiceLinkedRoleRequest {}
export interface CreateServiceLinkedRoleCommandOutput extends CreateServiceLinkedRoleResponse, __MetadataBearer {}

/**
 * <p>Creates an IAM role that is linked to a specific AWS service. The service controls
 *             the attached policies and when the role can be deleted. This helps ensure that the
 *             service is not broken by an unexpectedly changed or deleted role, which could put your
 *             AWS resources into an unknown state. Allowing the service to control the role helps
 *             improve service stability and proper cleanup when a service and its role are no longer
 *             needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked
 *                 roles</a> in the <i>IAM User Guide</i>. </p>
 *         <p>To attach a policy to this service-linked role, you must make the request using the
 *             AWS service that depends on this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateServiceLinkedRoleCommand extends $Command<
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateServiceLinkedRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateServiceLinkedRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceLinkedRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceLinkedRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateServiceLinkedRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateServiceLinkedRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceLinkedRoleCommandOutput> {
    return deserializeAws_queryCreateServiceLinkedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
