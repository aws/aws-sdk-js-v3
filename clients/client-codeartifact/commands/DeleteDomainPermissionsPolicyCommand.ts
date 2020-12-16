import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteDomainPermissionsPolicyRequest, DeleteDomainPermissionsPolicyResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand,
  serializeAws_restJson1DeleteDomainPermissionsPolicyCommand,
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

export type DeleteDomainPermissionsPolicyCommandInput = DeleteDomainPermissionsPolicyRequest;
export type DeleteDomainPermissionsPolicyCommandOutput = DeleteDomainPermissionsPolicyResult & __MetadataBearer;

/**
 * <p>
 *         Deletes the resource policy set on a domain.
 *       </p>
 */
export class DeleteDomainPermissionsPolicyCommand extends $Command<
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDomainPermissionsPolicyCommandInput) {
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
  ): Handler<DeleteDomainPermissionsPolicyCommandInput, DeleteDomainPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DeleteDomainPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDomainPermissionsPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDomainPermissionsPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDomainPermissionsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDomainPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDomainPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
