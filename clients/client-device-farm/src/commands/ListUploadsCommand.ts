import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListUploadsRequest, ListUploadsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListUploadsCommand,
  serializeAws_json1_1ListUploadsCommand,
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

export interface ListUploadsCommandInput extends ListUploadsRequest {}
export interface ListUploadsCommandOutput extends ListUploadsResult, __MetadataBearer {}

/**
 * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUploadsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUploadsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListUploadsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUploadsCommandInput} for command's `input` shape.
 * @see {@link ListUploadsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListUploadsCommand extends $Command<
  ListUploadsCommandInput,
  ListUploadsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUploadsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUploadsCommandInput, ListUploadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListUploadsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUploadsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListUploadsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUploadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListUploadsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUploadsCommandOutput> {
    return deserializeAws_json1_1ListUploadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
