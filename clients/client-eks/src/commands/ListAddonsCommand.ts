import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListAddonsRequest, ListAddonsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAddonsCommand,
  serializeAws_restJson1ListAddonsCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListAddonsCommandInput extends ListAddonsRequest {}
export interface ListAddonsCommandOutput extends ListAddonsResponse, __MetadataBearer {}

/**
 * <p>Lists the available add-ons.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAddonsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAddonsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListAddonsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAddonsCommandInput} for command's `input` shape.
 * @see {@link ListAddonsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAddonsCommand extends $Command<
  ListAddonsCommandInput,
  ListAddonsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAddonsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAddonsCommandInput, ListAddonsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListAddonsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAddonsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAddonsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAddonsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAddonsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAddonsCommandOutput> {
    return deserializeAws_restJson1ListAddonsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
