import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { RejectAssignmentRequest, RejectAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RejectAssignmentCommand,
  serializeAws_json1_1RejectAssignmentCommand,
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

export type RejectAssignmentCommandInput = RejectAssignmentRequest;
export type RejectAssignmentCommandOutput = RejectAssignmentResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>RejectAssignment</code> operation rejects the results of a completed assignment.
 *         </p>
 *         <p>
 *             You can include an optional feedback message with the rejection,
 *             which the Worker can see in the Status section of the web site.
 *             When you include a feedback message with the rejection,
 *             it helps the Worker understand why the assignment was rejected,
 *             and can improve the quality of the results the Worker submits in the future.
 *         </p>
 *         <p>
 *             Only the Requester who created the HIT can reject an assignment for the HIT.
 *         </p>
 */
export class RejectAssignmentCommand extends $Command<
  RejectAssignmentCommandInput,
  RejectAssignmentCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectAssignmentCommandInput, RejectAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "RejectAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectAssignmentCommandOutput> {
    return deserializeAws_json1_1RejectAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
