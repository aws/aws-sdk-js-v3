import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DisposePackageVersionsRequest, DisposePackageVersionsResult } from "../models/models_0";
import {
  deserializeAws_restJson1DisposePackageVersionsCommand,
  serializeAws_restJson1DisposePackageVersionsCommand,
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

export type DisposePackageVersionsCommandInput = DisposePackageVersionsRequest;
export type DisposePackageVersionsCommandOutput = DisposePackageVersionsResult & __MetadataBearer;

/**
 * <p>
 *       Deletes the assets in package versions and sets the package versions' status to <code>Disposed</code>.
 *       A disposed package version cannot be restored in your repository because its assets are deleted.
 *     </p>
 *
 *          <p>
 *       To view all disposed package versions in a repository, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">
 *                <code>ListPackageVersions</code>
 *             </a> and set the
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html#API_ListPackageVersions_RequestSyntax">
 *                <code>status</code>
 *             </a> parameter
 *       to <code>Disposed</code>.
 *     </p>
 *
 *          <p>
 *       To view information about a disposed package version, use <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html">
 *                <code>DescribePackageVersion</code>
 *             </a>..
 *     </p>
 */
export class DisposePackageVersionsCommand extends $Command<
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisposePackageVersionsCommandInput) {
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
  ): Handler<DisposePackageVersionsCommandInput, DisposePackageVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DisposePackageVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisposePackageVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisposePackageVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisposePackageVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisposePackageVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisposePackageVersionsCommandOutput> {
    return deserializeAws_restJson1DisposePackageVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
