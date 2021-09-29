import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRolePermissionsBoundaryRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteRolePermissionsBoundaryCommand,
  serializeAws_queryDeleteRolePermissionsBoundaryCommand,
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

export interface DeleteRolePermissionsBoundaryCommandInput extends DeleteRolePermissionsBoundaryRequest {}
export interface DeleteRolePermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the permissions boundary for the specified IAM role. </p>
 *         <important>
 *             <p>Deleting the permissions boundary for a role might increase its permissions. For
 *                 example, it might allow anyone who assumes the role to perform all the actions
 *                 granted in its permissions policies. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRolePermissionsBoundaryCommand extends $Command<
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRolePermissionsBoundaryCommandInput) {
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
  ): Handler<DeleteRolePermissionsBoundaryCommandInput, DeleteRolePermissionsBoundaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteRolePermissionsBoundaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRolePermissionsBoundaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRolePermissionsBoundaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteRolePermissionsBoundaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRolePermissionsBoundaryCommandOutput> {
    return deserializeAws_queryDeleteRolePermissionsBoundaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
