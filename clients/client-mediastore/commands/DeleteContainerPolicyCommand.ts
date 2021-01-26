import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteContainerPolicyInput, DeleteContainerPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteContainerPolicyCommand,
  serializeAws_json1_1DeleteContainerPolicyCommand,
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

export type DeleteContainerPolicyCommandInput = DeleteContainerPolicyInput;
export type DeleteContainerPolicyCommandOutput = DeleteContainerPolicyOutput & __MetadataBearer;

/**
 * <p>Deletes the access policy that is associated with the specified container.</p>
 */
export class DeleteContainerPolicyCommand extends $Command<
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContainerPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DeleteContainerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContainerPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContainerPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContainerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContainerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContainerPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteContainerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
