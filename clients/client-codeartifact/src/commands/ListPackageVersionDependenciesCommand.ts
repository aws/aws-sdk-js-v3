// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  ListPackageVersionDependenciesRequest,
  ListPackageVersionDependenciesRequestFilterSensitiveLog,
  ListPackageVersionDependenciesResult,
  ListPackageVersionDependenciesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPackageVersionDependenciesCommand,
  serializeAws_restJson1ListPackageVersionDependenciesCommand,
} from "../protocols/Aws_restJson1";

export interface ListPackageVersionDependenciesCommandInput extends ListPackageVersionDependenciesRequest {}
export interface ListPackageVersionDependenciesCommandOutput
  extends ListPackageVersionDependenciesResult,
    __MetadataBearer {}

/**
 * <p>
 *          Returns the direct dependencies for a package version. The dependencies are returned as
 *         <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDependency.html">PackageDependency</a>
 *           objects. CodeArtifact extracts the dependencies for a package version from the metadata file for the package
 *           format (for example, the <code>package.json</code> file for npm packages and the <code>pom.xml</code> file
 *         for Maven). Any package version dependencies that are not listed in the configuration file are not returned.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionDependenciesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionDependenciesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionDependenciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionDependenciesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class ListPackageVersionDependenciesCommand extends $Command<
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPackageVersionDependenciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionDependenciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionDependenciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionDependenciesResultFilterSensitiveLog,
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
