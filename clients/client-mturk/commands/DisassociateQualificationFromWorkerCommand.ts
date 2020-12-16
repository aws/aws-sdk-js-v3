import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  DisassociateQualificationFromWorkerRequest,
  DisassociateQualificationFromWorkerResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateQualificationFromWorkerCommand,
  serializeAws_json1_1DisassociateQualificationFromWorkerCommand,
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

export type DisassociateQualificationFromWorkerCommandInput = DisassociateQualificationFromWorkerRequest;
export type DisassociateQualificationFromWorkerCommandOutput = DisassociateQualificationFromWorkerResponse &
  __MetadataBearer;

/**
 * <p>
 *             The 	<code>DisassociateQualificationFromWorker</code>
 *             revokes a previously granted Qualification from a user.
 *         </p>
 *         <p>
 *             You can provide a text message explaining why the Qualification was
 *             revoked. The user who had the Qualification can see this message.
 *         </p>
 */
export class DisassociateQualificationFromWorkerCommand extends $Command<
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateQualificationFromWorkerCommandInput) {
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
  ): Handler<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DisassociateQualificationFromWorkerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateQualificationFromWorkerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateQualificationFromWorkerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateQualificationFromWorkerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateQualificationFromWorkerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateQualificationFromWorkerCommandOutput> {
    return deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
