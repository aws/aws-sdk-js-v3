import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/models_0";
import {
  deserializeAws_queryDeleteServiceLinkedRoleCommand,
  serializeAws_queryDeleteServiceLinkedRoleCommand,
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

export interface DeleteServiceLinkedRoleCommandInput extends DeleteServiceLinkedRoleRequest {}
export interface DeleteServiceLinkedRoleCommandOutput extends DeleteServiceLinkedRoleResponse, __MetadataBearer {}

/**
 * <p>Submits a service-linked role deletion request and returns a
 *                 <code>DeletionTaskId</code>, which you can use to check the status of the deletion.
 *             Before you call this operation, confirm that the role has no active sessions and that
 *             any resources used by the role in the linked service are deleted. If you call this
 *             operation more than once for the same service-linked role and an earlier deletion task
 *             is not complete, then the <code>DeletionTaskId</code> of the earlier request is
 *             returned.</p>
 *         <p>If you submit a deletion request for a service-linked role whose linked service is
 *             still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the
 *             failure, usually including the resources that must be deleted. To delete the
 *             service-linked role, you must first remove those resources from the linked service and
 *             then submit the deletion request again. Resources are specific to the service that is
 *             linked to the role. For more information about removing resources from a service, see
 *             the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your
 *             service.</p>
 *         <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: AWS service-linked role</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteServiceLinkedRoleCommand extends $Command<
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteServiceLinkedRoleCommandInput) {
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
  ): Handler<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteServiceLinkedRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteServiceLinkedRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteServiceLinkedRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteServiceLinkedRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteServiceLinkedRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteServiceLinkedRoleCommandOutput> {
    return deserializeAws_queryDeleteServiceLinkedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
