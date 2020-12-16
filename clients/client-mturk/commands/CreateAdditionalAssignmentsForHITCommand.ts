import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  CreateAdditionalAssignmentsForHITRequest,
  CreateAdditionalAssignmentsForHITResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand,
  serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand,
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

export type CreateAdditionalAssignmentsForHITCommandInput = CreateAdditionalAssignmentsForHITRequest;
export type CreateAdditionalAssignmentsForHITCommandOutput = CreateAdditionalAssignmentsForHITResponse &
  __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>CreateAdditionalAssignmentsForHIT</code>
 *             operation increases the maximum number of assignments of an existing HIT.
 *         </p>
 *         <p>
 *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 *                         assignments will result in an
 *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
 *                         exception.</p>
 *                 </li>
 *                <li>
 *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
 *                         exception.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 */
export class CreateAdditionalAssignmentsForHITCommand extends $Command<
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAdditionalAssignmentsForHITCommandInput) {
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
  ): Handler<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateAdditionalAssignmentsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAdditionalAssignmentsForHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAdditionalAssignmentsForHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateAdditionalAssignmentsForHITCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput> {
    return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
