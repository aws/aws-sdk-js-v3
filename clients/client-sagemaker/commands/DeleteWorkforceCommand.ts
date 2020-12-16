import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteWorkforceRequest, DeleteWorkforceResponse } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteWorkforceCommand,
  serializeAws_json1_1DeleteWorkforceCommand,
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

export type DeleteWorkforceCommandInput = DeleteWorkforceRequest;
export type DeleteWorkforceCommandOutput = DeleteWorkforceResponse & __MetadataBearer;

/**
 * <p>Use this operation to delete a workforce.</p>
 *
 *          <p>If you want to create a new workforce in an AWS Region where
 *       a workforce already exists, use this operation to delete the
 *       existing workforce and then use
 *       to create a new workforce.</p>
 *          <important>
 *             <p>If a private workforce contains one or more work teams, you must use
 *             the
 *             operation to delete all work teams before you delete the workforce.
 *             If you try to delete a workforce that contains one or more work teams,
 *             you will recieve a <code>ResourceInUse</code> error.</p>
 *         </important>
 */
export class DeleteWorkforceCommand extends $Command<
  DeleteWorkforceCommandInput,
  DeleteWorkforceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWorkforceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWorkforceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWorkforceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWorkforceCommandOutput> {
    return deserializeAws_json1_1DeleteWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
