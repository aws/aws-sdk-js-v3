import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedReportGroupsInput, ListSharedReportGroupsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListSharedReportGroupsCommand,
  serializeAws_json1_1ListSharedReportGroupsCommand,
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

export type ListSharedReportGroupsCommandInput = ListSharedReportGroupsInput;
export type ListSharedReportGroupsCommandOutput = ListSharedReportGroupsOutput & __MetadataBearer;

/**
 * <p> Gets a list of report groups that are shared with other AWS accounts or users.
 *         </p>
 */
export class ListSharedReportGroupsCommand extends $Command<
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSharedReportGroupsCommandInput) {
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
  ): Handler<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListSharedReportGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSharedReportGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSharedReportGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSharedReportGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSharedReportGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedReportGroupsCommandOutput> {
    return deserializeAws_json1_1ListSharedReportGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
