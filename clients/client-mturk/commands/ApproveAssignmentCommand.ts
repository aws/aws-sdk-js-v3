import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ApproveAssignmentRequest, ApproveAssignmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ApproveAssignmentCommand,
  serializeAws_json1_1ApproveAssignmentCommand,
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

export type ApproveAssignmentCommandInput = ApproveAssignmentRequest;
export type ApproveAssignmentCommandOutput = ApproveAssignmentResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
 *         </p>
 *         <p>
 *             Approving an assignment initiates two payments from the Requester's Amazon.com account
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     The Worker who submitted the results is paid the reward specified in the HIT.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     Amazon Mechanical Turk fees are debited.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>
 *             If the Requester's account does not have adequate funds for these payments,
 *             the call to ApproveAssignment returns an exception, and the approval is not processed.
 *             You can include an optional feedback message with the approval,
 *             which the Worker can see in the Status section of the web site.
 *         </p>
 *         <p>
 *             You can also call this operation for assignments that were previous rejected
 *             and approve them by explicitly overriding the previous rejection.
 *             This only works on rejected assignments that were submitted within the previous 30 days
 *             and only if the assignment's related HIT has not been deleted.
 *         </p>
 */
export class ApproveAssignmentCommand extends $Command<
  ApproveAssignmentCommandInput,
  ApproveAssignmentCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApproveAssignmentCommandInput) {
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
  ): Handler<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ApproveAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApproveAssignmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApproveAssignmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApproveAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ApproveAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ApproveAssignmentCommandOutput> {
    return deserializeAws_json1_1ApproveAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
