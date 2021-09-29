import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypeVersionsInput, ListTypeVersionsOutput } from "../models/models_0";
import {
  deserializeAws_queryListTypeVersionsCommand,
  serializeAws_queryListTypeVersionsCommand,
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

export interface ListTypeVersionsCommandInput extends ListTypeVersionsInput {}
export interface ListTypeVersionsCommandOutput extends ListTypeVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about the versions of an extension.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListTypeVersionsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListTypeVersionsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTypeVersionsCommand extends $Command<
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTypeVersionsCommandInput) {
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
  ): Handler<ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListTypeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTypeVersionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListTypeVersionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTypeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListTypeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTypeVersionsCommandOutput> {
    return deserializeAws_queryListTypeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
