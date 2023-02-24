// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  UpdateDataRetentionInput,
  UpdateDataRetentionInputFilterSensitiveLog,
  UpdateDataRetentionOutput,
  UpdateDataRetentionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDataRetentionCommand,
  serializeAws_restJson1UpdateDataRetentionCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateDataRetentionCommandInput extends UpdateDataRetentionInput {}
export interface UpdateDataRetentionCommandOutput extends UpdateDataRetentionOutput, __MetadataBearer {}

/**
 * <p> Increases or decreases the stream's data retention period by the value that you
 *             specify. To indicate whether you want to increase or decrease the data retention period,
 *             specify the <code>Operation</code> parameter in the request body. In the request, you
 *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 *          <note>
 *             <p>The retention period that you specify replaces the current value.</p>
 *          </note>
 *          <p>This operation requires permission for the
 *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
 *          <p>Changing the data retention period affects the data in the stream as
 *             follows:</p>
 *          <ul>
 *             <li>
 *                <p>If the data retention period is increased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is increased
 *                     from one hour to seven hours, all existing data is retained for seven
 *                     hours.</p>
 *             </li>
 *             <li>
 *                <p>If the data retention period is decreased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is decreased
 *                     from seven hours to one hour, all existing data is retained for one hour, and
 *                     any data older than one hour is deleted immediately.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateDataRetentionCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateDataRetentionCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateDataRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataRetentionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class UpdateDataRetentionCommand extends $Command<
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: UpdateDataRetentionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataRetentionCommandInput, UpdateDataRetentionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataRetentionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateDataRetentionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDataRetentionInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDataRetentionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDataRetentionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDataRetentionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataRetentionCommandOutput> {
    return deserializeAws_restJson1UpdateDataRetentionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
