import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetPackageVersionReadmeRequest, GetPackageVersionReadmeResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetPackageVersionReadmeCommand,
  serializeAws_restJson1GetPackageVersionReadmeCommand,
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

export type GetPackageVersionReadmeCommandInput = GetPackageVersionReadmeRequest;
export type GetPackageVersionReadmeCommandOutput = GetPackageVersionReadmeResult & __MetadataBearer;

/**
 * <p>
 *          Gets the readme file or descriptive text for a package version. For packages that do not contain a readme file, CodeArtifact
 *          extracts a description from a metadata file. For example, from the <code><description></code> element in the
 *         <code>pom.xml</code> file of a Maven package.
 *       </p>
 *          <p>
 *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
 *      </p>
 */
export class GetPackageVersionReadmeCommand extends $Command<
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPackageVersionReadmeCommandInput) {
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
  ): Handler<GetPackageVersionReadmeCommandInput, GetPackageVersionReadmeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetPackageVersionReadmeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPackageVersionReadmeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPackageVersionReadmeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPackageVersionReadmeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPackageVersionReadmeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPackageVersionReadmeCommandOutput> {
    return deserializeAws_restJson1GetPackageVersionReadmeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
