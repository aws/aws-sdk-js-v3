import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { UpdatePipelineNotificationsRequest, UpdatePipelineNotificationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdatePipelineNotificationsCommand,
  serializeAws_restJson1UpdatePipelineNotificationsCommand,
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

export interface UpdatePipelineNotificationsCommandInput extends UpdatePipelineNotificationsRequest {}
export interface UpdatePipelineNotificationsCommandOutput
  extends UpdatePipelineNotificationsResponse,
    __MetadataBearer {}

/**
 * <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p>
 *         <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, UpdatePipelineNotificationsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new UpdatePipelineNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineNotificationsCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineNotificationsCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdatePipelineNotificationsCommand extends $Command<
  UpdatePipelineNotificationsCommandInput,
  UpdatePipelineNotificationsCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePipelineNotificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePipelineNotificationsCommandInput, UpdatePipelineNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "UpdatePipelineNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePipelineNotificationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePipelineNotificationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePipelineNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePipelineNotificationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePipelineNotificationsCommandOutput> {
    return deserializeAws_restJson1UpdatePipelineNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
