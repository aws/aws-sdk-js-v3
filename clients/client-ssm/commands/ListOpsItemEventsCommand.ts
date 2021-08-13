import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListOpsItemEventsCommand,
  serializeAws_json1_1ListOpsItemEventsCommand,
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

export interface ListOpsItemEventsCommandInput extends ListOpsItemEventsRequest {}
export interface ListOpsItemEventsCommandOutput extends ListOpsItemEventsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can
 *    limit the results to events associated with specific OpsItems by specifying a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemEventsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemEventsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOpsItemEventsCommand extends $Command<
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOpsItemEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListOpsItemEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpsItemEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOpsItemEventsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpsItemEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOpsItemEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOpsItemEventsCommandOutput> {
    return deserializeAws_json1_1ListOpsItemEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
