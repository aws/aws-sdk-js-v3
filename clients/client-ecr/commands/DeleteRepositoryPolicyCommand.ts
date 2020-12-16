import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRepositoryPolicyCommand,
  serializeAws_json1_1DeleteRepositoryPolicyCommand,
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

export type DeleteRepositoryPolicyCommandInput = DeleteRepositoryPolicyRequest;
export type DeleteRepositoryPolicyCommandOutput = DeleteRepositoryPolicyResponse & __MetadataBearer;

/**
 * <p>Deletes the repository policy associated with the specified repository.</p>
 */
export class DeleteRepositoryPolicyCommand extends $Command<
  DeleteRepositoryPolicyCommandInput,
  DeleteRepositoryPolicyCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRepositoryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DeleteRepositoryPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRepositoryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRepositoryPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRepositoryPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteRepositoryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
