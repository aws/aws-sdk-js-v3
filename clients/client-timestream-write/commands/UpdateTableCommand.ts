import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateTableCommand,
  serializeAws_json1_0UpdateTableCommand,
} from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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

export interface UpdateTableCommandInput extends UpdateTableRequest {}
export interface UpdateTableCommandOutput extends UpdateTableResponse, __MetadataBearer {}

/**
 * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table.
 *          Note that the change in retention duration takes effect immediately.
 *          For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours,
 *          the memory store will be capable of holding 24 hours of data, but will
 *          be populated with 24 hours of data 22 hours after this change was made.
 *          Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
 *          <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, UpdateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, UpdateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateTableCommand extends $Command<
  UpdateTableCommandInput,
  UpdateTableCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTableCommandInput, UpdateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack, options }));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "UpdateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTableCommandOutput> {
    return deserializeAws_json1_0UpdateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
