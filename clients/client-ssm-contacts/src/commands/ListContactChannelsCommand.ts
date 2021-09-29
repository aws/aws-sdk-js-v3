import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListContactChannelsRequest, ListContactChannelsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListContactChannelsCommand,
  serializeAws_json1_1ListContactChannelsCommand,
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

export interface ListContactChannelsCommandInput extends ListContactChannelsRequest {}
export interface ListContactChannelsCommandOutput extends ListContactChannelsResult, __MetadataBearer {}

/**
 * <p>Lists all contact channels for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactChannelsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactChannelsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListContactChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactChannelsCommandInput} for command's `input` shape.
 * @see {@link ListContactChannelsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListContactChannelsCommand extends $Command<
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContactChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContactChannelsCommandInput, ListContactChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListContactChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContactChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListContactChannelsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContactChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContactChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactChannelsCommandOutput> {
    return deserializeAws_json1_1ListContactChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
