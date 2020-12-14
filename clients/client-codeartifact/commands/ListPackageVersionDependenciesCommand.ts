import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackageVersionDependenciesRequest, ListPackageVersionDependenciesResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListPackageVersionDependenciesCommand,
  serializeAws_restJson1ListPackageVersionDependenciesCommand,
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

export type ListPackageVersionDependenciesCommandInput = ListPackageVersionDependenciesRequest;
export type ListPackageVersionDependenciesCommandOutput = ListPackageVersionDependenciesResult & __MetadataBearer;

/**
 * <p>
 *          Returns the direct dependencies for a package version. The dependencies are returned as
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">
 *                <code>PackageDependency</code>
 *             </a>
 *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
 *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
 *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
 *       </p>
 */
export class ListPackageVersionDependenciesCommand extends $Command<
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackageVersionDependenciesCommandInput) {
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
  ): Handler<ListPackageVersionDependenciesCommandInput, ListPackageVersionDependenciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionDependenciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionDependenciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionDependenciesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPackageVersionDependenciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageVersionDependenciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPackageVersionDependenciesCommandOutput> {
    return deserializeAws_restJson1ListPackageVersionDependenciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
