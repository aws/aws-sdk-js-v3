import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DeleteAccountAssignmentRequest, DeleteAccountAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAccountAssignmentCommand,
  serializeAws_json1_1DeleteAccountAssignmentCommand,
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

export type DeleteAccountAssignmentCommandInput = DeleteAccountAssignmentRequest;
export type DeleteAccountAssignmentCommandOutput = DeleteAccountAssignmentResponse & __MetadataBearer;

/**
 * <p>Deletes a principal's access from a specified AWS account using a specified permission
 *       set.</p>
 */
export class DeleteAccountAssignmentCommand extends $Command<
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccountAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccountAssignmentCommandInput, DeleteAccountAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DeleteAccountAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccountAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAccountAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccountAssignmentCommandOutput> {
    return deserializeAws_json1_1DeleteAccountAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
