import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackSetOperationResultsCommand,
  serializeAws_queryListStackSetOperationResultsCommand,
} from "../protocols/Aws_query";
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

export interface ListStackSetOperationResultsCommandInput extends ListStackSetOperationResultsInput {}
export interface ListStackSetOperationResultsCommandOutput
  extends ListStackSetOperationResultsOutput,
    __MetadataBearer {}

/**
 * <p>Returns summary information about the results of a stack set operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStackSetOperationResultsCommand extends $Command<
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStackSetOperationResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetOperationResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStackSetOperationResultsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetOperationResultsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStackSetOperationResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackSetOperationResultsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStackSetOperationResultsCommandOutput> {
    return deserializeAws_queryListStackSetOperationResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
