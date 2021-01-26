import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeletePackageVersionsRequest, DeletePackageVersionsResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePackageVersionsCommand,
  serializeAws_restJson1DeletePackageVersionsCommand,
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

export type DeletePackageVersionsCommandInput = DeletePackageVersionsRequest;
export type DeletePackageVersionsCommandOutput = DeletePackageVersionsResult & __MetadataBearer;

/**
 * <p> Deletes one or more versions of a package. A deleted package version cannot be restored
 *       in your repository. If you want to remove a package version from your repository and be able
 *       to restore it later, set its status to <code>Archived</code>. Archived packages cannot be
 *       downloaded from a repository and don't show up with list package APIs (for example,
 *           <code>
 *                <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListackageVersions</a>
 *             </code>), but you can restore them using <code>
 *                <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>
 *             </code>. </p>
 */
export class DeletePackageVersionsCommand extends $Command<
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePackageVersionsCommandInput) {
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
  ): Handler<DeletePackageVersionsCommandInput, DeletePackageVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DeletePackageVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePackageVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePackageVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePackageVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePackageVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePackageVersionsCommandOutput> {
    return deserializeAws_restJson1DeletePackageVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
