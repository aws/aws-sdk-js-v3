import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListCodeReviewsRequest, ListCodeReviewsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListCodeReviewsCommand,
  serializeAws_restJson1ListCodeReviewsCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListCodeReviewsCommandInput extends ListCodeReviewsRequest {}
export interface ListCodeReviewsCommandOutput extends ListCodeReviewsResponse, __MetadataBearer {}

/**
 * <p>
 *          Lists all the code reviews that the customer has created in the past 90 days.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListCodeReviewsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListCodeReviewsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListCodeReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeReviewsCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCodeReviewsCommand extends $Command<
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCodeReviewsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListCodeReviewsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCodeReviewsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCodeReviewsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCodeReviewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListCodeReviewsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCodeReviewsCommandOutput> {
    return deserializeAws_restJson1ListCodeReviewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
