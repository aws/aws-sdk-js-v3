import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { AddNotificationChannelsRequest, AddNotificationChannelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddNotificationChannelsCommand,
  serializeAws_restJson1AddNotificationChannelsCommand,
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

export interface AddNotificationChannelsCommandInput extends AddNotificationChannelsRequest {}
export interface AddNotificationChannelsCommandOutput extends AddNotificationChannelsResponse, __MetadataBearer {}

/**
 * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, AddNotificationChannelsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, AddNotificationChannelsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new AddNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddNotificationChannelsCommand extends $Command<
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddNotificationChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddNotificationChannelsCommandInput, AddNotificationChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "AddNotificationChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddNotificationChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddNotificationChannelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddNotificationChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddNotificationChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddNotificationChannelsCommandOutput> {
    return deserializeAws_restJson1AddNotificationChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
