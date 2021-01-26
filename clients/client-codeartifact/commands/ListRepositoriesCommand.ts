import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListRepositoriesRequest, ListRepositoriesResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListRepositoriesCommand,
  serializeAws_restJson1ListRepositoriesCommand,
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

export type ListRepositoriesCommandInput = ListRepositoriesRequest;
export type ListRepositoriesCommandOutput = ListRepositoriesResult & __MetadataBearer;

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">
 *                <code>RepositorySummary</code>
 *             </a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified AWS account and that matches the input
 *        parameters.
 *      </p>
 */
export class ListRepositoriesCommand extends $Command<
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRepositoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRepositoriesCommandInput, ListRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRepositoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRepositoriesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRepositoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRepositoriesCommandOutput> {
    return deserializeAws_restJson1ListRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
