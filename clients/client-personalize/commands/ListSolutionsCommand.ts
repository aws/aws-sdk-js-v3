import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListSolutionsRequest, ListSolutionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSolutionsCommand,
  serializeAws_json1_1ListSolutionsCommand,
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

export type ListSolutionsCommandInput = ListSolutionsRequest;
export type ListSolutionsCommandOutput = ListSolutionsResponse & __MetadataBearer;

/**
 * <p>Returns a list of solutions that use the given dataset group.
 *       When a dataset group is not specified, all the solutions associated with the account are listed.
 *       The response provides the properties for each solution, including the Amazon Resource Name (ARN).
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 */
export class ListSolutionsCommand extends $Command<
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSolutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSolutionsCommandInput, ListSolutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListSolutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSolutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSolutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSolutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSolutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolutionsCommandOutput> {
    return deserializeAws_json1_1ListSolutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
