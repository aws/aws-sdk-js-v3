import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackageVersionAssetsRequest, ListPackageVersionAssetsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListPackageVersionAssetsCommand,
  serializeAws_restJson1ListPackageVersionAssetsCommand,
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

export type ListPackageVersionAssetsCommandInput = ListPackageVersionAssetsRequest;
export type ListPackageVersionAssetsCommandOutput = ListPackageVersionAssetsResult & __MetadataBearer;

/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">
 *                <code>AssetSummary</code>
 *             </a>
 *        objects for assets in a package version.
 *      </p>
 */
export class ListPackageVersionAssetsCommand extends $Command<
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackageVersionAssetsCommandInput) {
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
  ): Handler<ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "ListPackageVersionAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackageVersionAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackageVersionAssetsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackageVersionAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackageVersionAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackageVersionAssetsCommandOutput> {
    return deserializeAws_restJson1ListPackageVersionAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
