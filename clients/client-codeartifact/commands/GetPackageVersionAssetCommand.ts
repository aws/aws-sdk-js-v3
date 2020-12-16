import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetPackageVersionAssetRequest, GetPackageVersionAssetResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetPackageVersionAssetCommand,
  serializeAws_restJson1GetPackageVersionAssetCommand,
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

export type GetPackageVersionAssetCommandInput = GetPackageVersionAssetRequest;
export type GetPackageVersionAssetCommandOutput = GetPackageVersionAssetResult & __MetadataBearer;

/**
 * <p>
 *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
 *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
 *       or any other assets in the package version.
 *     </p>
 */
export class GetPackageVersionAssetCommand extends $Command<
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPackageVersionAssetCommandInput) {
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
  ): Handler<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetPackageVersionAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPackageVersionAssetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPackageVersionAssetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPackageVersionAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPackageVersionAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPackageVersionAssetCommandOutput> {
    return deserializeAws_restJson1GetPackageVersionAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
