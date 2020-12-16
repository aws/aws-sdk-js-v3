import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackagesRequest, ListPackagesResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListPackagesCommand,
  serializeAws_restJson1ListPackagesCommand,
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

export type ListPackagesCommandInput = ListPackagesRequest;
export type ListPackagesCommandOutput = ListPackagesResult & __MetadataBearer;

/**
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageSummary.html">
 *                <code>PackageSummary</code>
 *             </a>
 *         objects for packages in a repository that match the request parameters.
 *       </p>
 */
export class ListPackagesCommand extends $Command<
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackagesCommandInput) {
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
  ): Handler<ListPackagesCommandInput, ListPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagesCommandOutput> {
    return deserializeAws_restJson1ListPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
