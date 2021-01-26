import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteRepositoryPermissionsPolicyRequest, DeleteRepositoryPermissionsPolicyResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand,
  serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";
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

export type DeleteRepositoryPermissionsPolicyCommandInput = DeleteRepositoryPermissionsPolicyRequest;
export type DeleteRepositoryPermissionsPolicyCommandOutput = DeleteRepositoryPermissionsPolicyResult & __MetadataBearer;

/**
 * <p>
 *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
 *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
 *       </p>
 *          <important>
 *             <p>
 *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, AWS users, roles, and accounts lose permissions to perform
 *          the repository actions granted by the deleted policy.
 *        </p>
 *          </important>
 */
export class DeleteRepositoryPermissionsPolicyCommand extends $Command<
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRepositoryPermissionsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRepositoryPermissionsPolicyCommandInput, DeleteRepositoryPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DeleteRepositoryPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
