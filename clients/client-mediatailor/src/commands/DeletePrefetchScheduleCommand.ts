// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeletePrefetchScheduleRequest, DeletePrefetchScheduleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePrefetchScheduleCommand,
  serializeAws_restJson1DeletePrefetchScheduleCommand,
} from "../protocols/Aws_restJson1";

export interface DeletePrefetchScheduleCommandInput extends DeletePrefetchScheduleRequest {}
export interface DeletePrefetchScheduleCommandOutput extends DeletePrefetchScheduleResponse, __MetadataBearer {}

/**
 * <p>Deletes a prefetch schedule for a specific playback configuration. If you call DeletePrefetchSchedule on an expired prefetch schedule, MediaTailor returns an HTTP 404 status code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeletePrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeletePrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeletePrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link DeletePrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class DeletePrefetchScheduleCommand extends $Command<
  DeletePrefetchScheduleCommandInput,
  DeletePrefetchScheduleCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePrefetchScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePrefetchScheduleCommandInput, DeletePrefetchScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DeletePrefetchScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePrefetchScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePrefetchScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePrefetchScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePrefetchScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePrefetchScheduleCommandOutput> {
    return deserializeAws_restJson1DeletePrefetchScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
