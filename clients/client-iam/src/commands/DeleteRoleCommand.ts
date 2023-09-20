// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRoleRequest } from "../models/models_0";
import { de_DeleteRoleCommand, se_DeleteRoleCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRoleCommand}.
 */
export interface DeleteRoleCommandInput extends DeleteRoleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoleCommand}.
 */
export interface DeleteRoleCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified role. Unlike the Amazon Web Services Management Console, when you delete a role
 *             programmatically, you must delete the items attached to the role manually, or the
 *             deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage_delete.html#roles-managingrole-deleting-cli">Deleting an IAM role</a>. Before attempting to delete a role, remove the
 *             following attached items: </p>
 *          <ul>
 *             <li>
 *                <p>Inline policies (<a>DeleteRolePolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Attached managed policies (<a>DetachRolePolicy</a>)</p>
 *             </li>
 *             <li>
 *                <p>Instance profile (<a>RemoveRoleFromInstanceProfile</a>)</p>
 *             </li>
 *             <li>
 *                <p>Optional – Delete instance profile after detaching from role for
 *                     resource clean up (<a>DeleteInstanceProfile</a>)</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to delete. Deleting a role or instance profile that is associated with a
 *                 running instance will break any applications running on the instance.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteRoleRequest
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoleCommandInput - {@link DeleteRoleCommandInput}
 * @returns {@link DeleteRoleCommandOutput}
 * @see {@link DeleteRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To delete an IAM role
 * ```javascript
 * // The following command removes the role named Test-Role.
 * const input = {
 *   "RoleName": "Test-Role"
 * };
 * const command = new DeleteRoleCommand(input);
 * await client.send(command);
 * // example id: 053cdf74-9bda-44b8-bdbb-140fd5a32603
 * ```
 *
 */
export class DeleteRoleCommand extends $Command<
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
  IAMClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: DeleteRoleCommandInput) {
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
  ): Handler<DeleteRoleCommandInput, DeleteRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteRoleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "DeleteRole",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRoleCommandOutput> {
    return de_DeleteRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
