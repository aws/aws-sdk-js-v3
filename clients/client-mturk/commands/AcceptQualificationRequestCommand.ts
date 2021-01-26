import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptQualificationRequestCommand,
  serializeAws_json1_1AcceptQualificationRequestCommand,
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

export type AcceptQualificationRequestCommandInput = AcceptQualificationRequestRequest;
export type AcceptQualificationRequestCommandOutput = AcceptQualificationRequestResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification.
 *         </p>
 *         <p>
 *             Only the owner of the Qualification type can grant a Qualification request for that	type.
 *         </p>
 *         <p>
 *             A successful request for the <code>AcceptQualificationRequest</code> operation
 *             returns with no errors and an empty body.
 *         </p>
 */
export class AcceptQualificationRequestCommand extends $Command<
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptQualificationRequestCommandInput) {
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
  ): Handler<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "AcceptQualificationRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptQualificationRequestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptQualificationRequestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptQualificationRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptQualificationRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptQualificationRequestCommandOutput> {
    return deserializeAws_json1_1AcceptQualificationRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
