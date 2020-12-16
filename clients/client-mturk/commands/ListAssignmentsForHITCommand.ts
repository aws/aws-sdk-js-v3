import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListAssignmentsForHITRequest, ListAssignmentsForHITResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssignmentsForHITCommand,
  serializeAws_json1_1ListAssignmentsForHITCommand,
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

export type ListAssignmentsForHITCommandInput = ListAssignmentsForHITRequest;
export type ListAssignmentsForHITCommandOutput = ListAssignmentsForHITResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>ListAssignmentsForHIT</code>
 *             operation retrieves completed assignments for a HIT. You can use this
 *             operation to retrieve the results for a HIT.
 *         </p>
 *         <p> You can get assignments for a HIT at any time, even if the
 *             HIT is not yet Reviewable. If a HIT requested multiple assignments,
 *             and has received some results but has not yet become Reviewable, you
 *             can still retrieve the partial results with this operation.
 *         </p>
 *         <p> Use the AssignmentStatus parameter to control which set of
 *             assignments for a HIT are returned. The ListAssignmentsForHIT
 *             operation
 *             can return submitted assignments awaiting approval, or it can return
 *             assignments that have already been approved or rejected. You can set
 *             AssignmentStatus=Approved,Rejected to get assignments that have
 *             already been approved and rejected together in one result set.
 *         </p>
 *         <p> Only the Requester who created the HIT can retrieve the
 *             assignments for that HIT.
 *         </p>
 *         <p> Results are sorted and divided into numbered pages and the
 *             operation returns a single page of results. You can use the
 *             parameters
 *             of the operation to control sorting and pagination.
 *         </p>
 */
export class ListAssignmentsForHITCommand extends $Command<
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssignmentsForHITCommandInput) {
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
  ): Handler<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListAssignmentsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssignmentsForHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssignmentsForHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssignmentsForHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssignmentsForHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssignmentsForHITCommandOutput> {
    return deserializeAws_json1_1ListAssignmentsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
