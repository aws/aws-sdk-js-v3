import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchUpdateScheduleRequest, BatchUpdateScheduleResponse } from "../models/models_1";
import {
  deserializeAws_restJson1BatchUpdateScheduleCommand,
  serializeAws_restJson1BatchUpdateScheduleCommand,
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

export interface BatchUpdateScheduleCommandInput extends BatchUpdateScheduleRequest {}
export interface BatchUpdateScheduleCommandOutput extends BatchUpdateScheduleResponse, __MetadataBearer {}

/**
 * Update a channel schedule
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchUpdateScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchUpdateScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new BatchUpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchUpdateScheduleCommand extends $Command<
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdateScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateScheduleCommandInput, BatchUpdateScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "BatchUpdateScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdateScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdateScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateScheduleCommandOutput> {
    return deserializeAws_restJson1BatchUpdateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
