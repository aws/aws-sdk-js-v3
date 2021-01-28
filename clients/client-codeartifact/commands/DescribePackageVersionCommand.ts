import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DescribePackageVersionRequest, DescribePackageVersionResult } from "../models/models_0";
import {
  deserializeAws_restJson1DescribePackageVersionCommand,
  serializeAws_restJson1DescribePackageVersionCommand,
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

export type DescribePackageVersionCommandInput = DescribePackageVersionRequest;
export type DescribePackageVersionCommandOutput = DescribePackageVersionResult & __MetadataBearer;

/**
 * <p>
 *        Returns a
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">
 *                <code>PackageVersionDescription</code>
 *             </a>
 *        object that contains information about the requested package version.
 *      </p>
 */
export class DescribePackageVersionCommand extends $Command<
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePackageVersionCommandInput) {
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
  ): Handler<DescribePackageVersionCommandInput, DescribePackageVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DescribePackageVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePackageVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePackageVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePackageVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribePackageVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePackageVersionCommandOutput> {
    return deserializeAws_restJson1DescribePackageVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
