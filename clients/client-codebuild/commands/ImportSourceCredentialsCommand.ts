import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ImportSourceCredentialsInput, ImportSourceCredentialsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ImportSourceCredentialsCommand,
  serializeAws_json1_1ImportSourceCredentialsCommand,
} from "../protocols/Aws_json1_1";
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

export type ImportSourceCredentialsCommandInput = ImportSourceCredentialsInput;
export type ImportSourceCredentialsCommandOutput = ImportSourceCredentialsOutput & __MetadataBearer;

/**
 * <p> Imports the source repository credentials for an AWS CodeBuild project that has its
 *             source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
 */
export class ImportSourceCredentialsCommand extends $Command<
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportSourceCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ImportSourceCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSourceCredentialsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ImportSourceCredentialsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportSourceCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportSourceCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSourceCredentialsCommandOutput> {
    return deserializeAws_json1_1ImportSourceCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
