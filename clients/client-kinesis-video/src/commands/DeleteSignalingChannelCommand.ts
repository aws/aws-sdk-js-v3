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
  DeleteSignalingChannelInput,
  DeleteSignalingChannelInputFilterSensitiveLog,
  DeleteSignalingChannelOutput,
  DeleteSignalingChannelOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSignalingChannelCommand,
  serializeAws_restJson1DeleteSignalingChannelCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteSignalingChannelCommandInput extends DeleteSignalingChannelInput {}
export interface DeleteSignalingChannelCommandOutput extends DeleteSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
 *             asynchronous operation. If you don't specify the channel's current version, the most
 *             recent version is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DeleteSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class DeleteSignalingChannelCommand extends $Command<
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput,
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

  constructor(readonly input: DeleteSignalingChannelCommandInput) {
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
  ): Handler<DeleteSignalingChannelCommandInput, DeleteSignalingChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSignalingChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DeleteSignalingChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSignalingChannelInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSignalingChannelOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSignalingChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSignalingChannelCommandOutput> {
    return deserializeAws_restJson1DeleteSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
