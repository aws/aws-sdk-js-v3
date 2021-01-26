import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetRepositoryPermissionsPolicyRequest, GetRepositoryPermissionsPolicyResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand,
  serializeAws_restJson1GetRepositoryPermissionsPolicyCommand,
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

export type GetRepositoryPermissionsPolicyCommandInput = GetRepositoryPermissionsPolicyRequest;
export type GetRepositoryPermissionsPolicyCommandOutput = GetRepositoryPermissionsPolicyResult & __MetadataBearer;

/**
 * <p>
 *         Returns the resource policy that is set on a repository.
 *       </p>
 */
export class GetRepositoryPermissionsPolicyCommand extends $Command<
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRepositoryPermissionsPolicyCommandInput) {
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
  ): Handler<GetRepositoryPermissionsPolicyCommandInput, GetRepositoryPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetRepositoryPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRepositoryPermissionsPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRepositoryPermissionsPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRepositoryPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRepositoryPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
