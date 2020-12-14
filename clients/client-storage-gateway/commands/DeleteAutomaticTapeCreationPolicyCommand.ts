import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteAutomaticTapeCreationPolicyInput, DeleteAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand,
  serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand,
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

export type DeleteAutomaticTapeCreationPolicyCommandInput = DeleteAutomaticTapeCreationPolicyInput;
export type DeleteAutomaticTapeCreationPolicyCommandOutput = DeleteAutomaticTapeCreationPolicyOutput & __MetadataBearer;

/**
 * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 *          in your request to remove the policy.</p>
 */
export class DeleteAutomaticTapeCreationPolicyCommand extends $Command<
  DeleteAutomaticTapeCreationPolicyCommandInput,
  DeleteAutomaticTapeCreationPolicyCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAutomaticTapeCreationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAutomaticTapeCreationPolicyCommandInput, DeleteAutomaticTapeCreationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteAutomaticTapeCreationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAutomaticTapeCreationPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAutomaticTapeCreationPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAutomaticTapeCreationPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteAutomaticTapeCreationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
