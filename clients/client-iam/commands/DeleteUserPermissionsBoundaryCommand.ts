import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserPermissionsBoundaryRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteUserPermissionsBoundaryCommand,
  serializeAws_queryDeleteUserPermissionsBoundaryCommand,
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

export interface DeleteUserPermissionsBoundaryCommandInput extends DeleteUserPermissionsBoundaryRequest {}
export interface DeleteUserPermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the permissions boundary for the specified IAM user.</p>
 *         <important>
 *             <p>Deleting the permissions boundary for a user might increase its permissions by
 *                 allowing the user to perform all the actions granted in its permissions policies.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteUserPermissionsBoundaryCommand extends $Command<
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserPermissionsBoundaryCommandInput) {
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
  ): Handler<DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteUserPermissionsBoundaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserPermissionsBoundaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserPermissionsBoundaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteUserPermissionsBoundaryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteUserPermissionsBoundaryCommandOutput> {
    return deserializeAws_queryDeleteUserPermissionsBoundaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
