import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListAccessesRequest, ListAccessesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAccessesCommand,
  serializeAws_json1_1ListAccessesCommand,
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

export interface ListAccessesCommandInput extends ListAccessesRequest {}
export interface ListAccessesCommandOutput extends ListAccessesResponse, __MetadataBearer {}

/**
 * <p>Lists the details for all the accesses you have on your server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAccessesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAccessesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListAccessesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessesCommandInput} for command's `input` shape.
 * @see {@link ListAccessesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAccessesCommand extends $Command<
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccessesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessesCommandInput, ListAccessesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListAccessesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccessesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAccessesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessesCommandOutput> {
    return deserializeAws_json1_1ListAccessesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
