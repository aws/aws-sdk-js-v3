import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackageVersionsRequest, ListPackageVersionsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListPackageVersionsCommand,
  serializeAws_restJson1ListPackageVersionsCommand,
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

export type ListPackageVersionsCommandInput = ListPackageVersionsRequest;
export type ListPackageVersionsCommandOutput = ListPackageVersionsResult & __MetadataBearer;

/**
 * <p>
 *         Returns a list of
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionSummary.html">
 *                <code>PackageVersionSummary</code>
 *             </a>
 *         objects for package versions in a repository that match the request parameters.
 *       </p>
 */
export class ListPackageVersionsCommand extends $Command<
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackageVersionsCommandInput) {
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
  ): Handler<ListPackageVersionsCommandInput, ListPackageVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackageVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackageVersionsCommandOutput> {
    return deserializeAws_restJson1ListPackageVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
