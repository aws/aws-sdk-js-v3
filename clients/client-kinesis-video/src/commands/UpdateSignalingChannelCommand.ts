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
  UpdateSignalingChannelInput,
  UpdateSignalingChannelInputFilterSensitiveLog,
  UpdateSignalingChannelOutput,
  UpdateSignalingChannelOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSignalingChannelCommand,
  serializeAws_restJson1UpdateSignalingChannelCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSignalingChannelCommandInput extends UpdateSignalingChannelInput {}
export interface UpdateSignalingChannelCommandOutput extends UpdateSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
 *             time to complete. </p>
 *          <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
 *             it only applies to new messages sent via this channel after it's been updated. Existing
 *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class UpdateSignalingChannelCommand extends $Command<
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput,
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

  constructor(readonly input: UpdateSignalingChannelCommandInput) {
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
  ): Handler<UpdateSignalingChannelCommandInput, UpdateSignalingChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSignalingChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateSignalingChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSignalingChannelInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSignalingChannelOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSignalingChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSignalingChannelCommandOutput> {
    return deserializeAws_restJson1UpdateSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
