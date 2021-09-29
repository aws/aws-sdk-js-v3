import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedProjectsInput, ListSharedProjectsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListSharedProjectsCommand,
  serializeAws_json1_1ListSharedProjectsCommand,
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

export interface ListSharedProjectsCommandInput extends ListSharedProjectsInput {}
export interface ListSharedProjectsCommandOutput extends ListSharedProjectsOutput, __MetadataBearer {}

/**
 * <p> Gets a list of projects that are shared with other Amazon Web Services accounts or users. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSharedProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedProjectsCommandInput} for command's `input` shape.
 * @see {@link ListSharedProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSharedProjectsCommand extends $Command<
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSharedProjectsCommandInput) {
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
  ): Handler<ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListSharedProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSharedProjectsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListSharedProjectsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSharedProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSharedProjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedProjectsCommandOutput> {
    return deserializeAws_json1_1ListSharedProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
