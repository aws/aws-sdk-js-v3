import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateQualificationWithWorkerCommand,
  serializeAws_json1_1AssociateQualificationWithWorkerCommand,
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

export type AssociateQualificationWithWorkerCommandInput = AssociateQualificationWithWorkerRequest;
export type AssociateQualificationWithWorkerCommandOutput = AssociateQualificationWithWorkerResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>AssociateQualificationWithWorker</code> operation gives a Worker a
 *             Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker
 *             submit a Qualification request. It gives the Qualification directly to the Worker.
 *         </p>
 *
 *         <p>
 *             You can only assign a Qualification of a Qualification type that you created (using
 *             the <code>CreateQualificationType</code> operation).
 *         </p>
 *
 *         <note>
 *             <p>
 *                 Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification
 *                 requests for the Qualification by the Worker. If you assign a Qualification to a
 *                 Worker, then later grant a Qualification request made by the Worker, the granting of
 *                 the request may modify the Qualification score. To resolve a pending Qualification
 *                 request without affecting the Qualification the Worker already has, reject the
 *                 request with the <code>RejectQualificationRequest</code> operation.
 *             </p>
 *         </note>
 */
export class AssociateQualificationWithWorkerCommand extends $Command<
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateQualificationWithWorkerCommandInput) {
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
  ): Handler<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "AssociateQualificationWithWorkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateQualificationWithWorkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateQualificationWithWorkerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateQualificationWithWorkerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateQualificationWithWorkerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateQualificationWithWorkerCommandOutput> {
    return deserializeAws_json1_1AssociateQualificationWithWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
