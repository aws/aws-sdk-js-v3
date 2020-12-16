import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListQualificationRequestsCommand,
  serializeAws_json1_1ListQualificationRequestsCommand,
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

export type ListQualificationRequestsCommandInput = ListQualificationRequestsRequest;
export type ListQualificationRequestsCommandOutput = ListQualificationRequestsResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>ListQualificationRequests</code>
 *             operation retrieves requests for Qualifications of a particular
 *             Qualification type. The owner of the Qualification type calls this
 *             operation to poll for pending requests, and accepts them using the
 *             AcceptQualification operation.
 *         </p>
 */
export class ListQualificationRequestsCommand extends $Command<
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListQualificationRequestsCommandInput) {
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
  ): Handler<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQualificationRequestsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListQualificationRequestsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQualificationRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQualificationRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListQualificationRequestsCommandOutput> {
    return deserializeAws_json1_1ListQualificationRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
