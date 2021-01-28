import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { PutRepositoryPermissionsPolicyRequest, PutRepositoryPermissionsPolicyResult } from "../models/models_0";
import {
  deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand,
  serializeAws_restJson1PutRepositoryPermissionsPolicyCommand,
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

export type PutRepositoryPermissionsPolicyCommandInput = PutRepositoryPermissionsPolicyRequest;
export type PutRepositoryPermissionsPolicyCommandOutput = PutRepositoryPermissionsPolicyResult & __MetadataBearer;

/**
 * <p>
 *         Sets the resource policy on a repository that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
 *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 */
export class PutRepositoryPermissionsPolicyCommand extends $Command<
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRepositoryPermissionsPolicyCommandInput) {
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
  ): Handler<PutRepositoryPermissionsPolicyCommandInput, PutRepositoryPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "PutRepositoryPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRepositoryPermissionsPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRepositoryPermissionsPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRepositoryPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
