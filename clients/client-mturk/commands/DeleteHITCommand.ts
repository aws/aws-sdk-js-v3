import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DeleteHITRequest, DeleteHITResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteHITCommand, serializeAws_json1_1DeleteHITCommand } from "../protocols/Aws_json1_1";
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

export type DeleteHITCommandInput = DeleteHITRequest;
export type DeleteHITCommandOutput = DeleteHITResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed.
 *             Only the Requester who created the HIT can delete it.
 *         </p>
 *         <p>
 *             You can only dispose of HITs that are in the <code>Reviewable</code> state,
 *             with all of their submitted assignments already either approved or rejected.
 *             If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state
 *             (for example, that has not expired, or still has active assignments),
 *             or on a HIT that is Reviewable but without all of its submitted assignments
 *             already approved or rejected, the service will return an error.
 *         </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>
 *                         HITs are automatically disposed of after 120 days.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposed HITs are not returned in results for the ListHITs operation.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 */
export class DeleteHITCommand extends $Command<
  DeleteHITCommandInput,
  DeleteHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHITCommandInput) {
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
  ): Handler<DeleteHITCommandInput, DeleteHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DeleteHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHITCommandOutput> {
    return deserializeAws_json1_1DeleteHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
