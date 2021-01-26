import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListBuildsForProjectInput, ListBuildsForProjectOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListBuildsForProjectCommand,
  serializeAws_json1_1ListBuildsForProjectCommand,
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

export type ListBuildsForProjectCommandInput = ListBuildsForProjectInput;
export type ListBuildsForProjectCommandOutput = ListBuildsForProjectOutput & __MetadataBearer;

/**
 * <p>Gets a list of build IDs for the specified build project, with each build ID
 *             representing a single build.</p>
 */
export class ListBuildsForProjectCommand extends $Command<
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBuildsForProjectCommandInput) {
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
  ): Handler<ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListBuildsForProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBuildsForProjectInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBuildsForProjectOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBuildsForProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBuildsForProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBuildsForProjectCommandOutput> {
    return deserializeAws_json1_1ListBuildsForProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
