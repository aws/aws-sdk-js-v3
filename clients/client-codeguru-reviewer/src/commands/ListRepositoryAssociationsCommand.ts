import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListRepositoryAssociationsRequest, ListRepositoryAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRepositoryAssociationsCommand,
  serializeAws_restJson1ListRepositoryAssociationsCommand,
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

export interface ListRepositoryAssociationsCommandInput extends ListRepositoryAssociationsRequest {}
export interface ListRepositoryAssociationsCommandOutput extends ListRepositoryAssociationsResponse, __MetadataBearer {}

/**
 * <p>
 *          Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">
 *                <code>RepositoryAssociationSummary</code>
 *             </a> objects that
 *          contain summary information about a repository association. You can filter the returned list by
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">
 *                <code>ProviderType</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">
 *                <code>Name</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">
 *                <code>State</code>
 *             </a>, and
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">
 *                <code>Owner</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRepositoryAssociationsCommand extends $Command<
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRepositoryAssociationsCommandInput) {
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
  ): Handler<ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListRepositoryAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRepositoryAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRepositoryAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRepositoryAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRepositoryAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRepositoryAssociationsCommandOutput> {
    return deserializeAws_restJson1ListRepositoryAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
