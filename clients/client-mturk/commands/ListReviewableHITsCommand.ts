import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListReviewableHITsRequest, ListReviewableHITsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListReviewableHITsCommand,
  serializeAws_json1_1ListReviewableHITsCommand,
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

export type ListReviewableHITsCommandInput = ListReviewableHITsRequest;
export type ListReviewableHITsCommandOutput = ListReviewableHITsResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 */
export class ListReviewableHITsCommand extends $Command<
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReviewableHITsCommandInput) {
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
  ): Handler<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListReviewableHITsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReviewableHITsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReviewableHITsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReviewableHITsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReviewableHITsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReviewableHITsCommandOutput> {
    return deserializeAws_json1_1ListReviewableHITsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
