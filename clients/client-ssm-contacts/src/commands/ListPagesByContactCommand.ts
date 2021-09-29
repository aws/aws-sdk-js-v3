import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListPagesByContactRequest, ListPagesByContactResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListPagesByContactCommand,
  serializeAws_json1_1ListPagesByContactCommand,
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

export interface ListPagesByContactCommandInput extends ListPagesByContactRequest {}
export interface ListPagesByContactCommandOutput extends ListPagesByContactResult, __MetadataBearer {}

/**
 * <p>Lists the engagements to a contact's contact channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByContactCommandInput} for command's `input` shape.
 * @see {@link ListPagesByContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPagesByContactCommand extends $Command<
  ListPagesByContactCommandInput,
  ListPagesByContactCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPagesByContactCommandInput) {
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
  ): Handler<ListPagesByContactCommandInput, ListPagesByContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPagesByContactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPagesByContactRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPagesByContactResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPagesByContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPagesByContactCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPagesByContactCommandOutput> {
    return deserializeAws_json1_1ListPagesByContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
