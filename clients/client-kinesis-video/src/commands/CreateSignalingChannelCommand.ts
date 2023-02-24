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
  CreateSignalingChannelInput,
  CreateSignalingChannelInputFilterSensitiveLog,
  CreateSignalingChannelOutput,
  CreateSignalingChannelOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSignalingChannelCommand,
  serializeAws_restJson1CreateSignalingChannelCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSignalingChannelCommandInput extends CreateSignalingChannelInput {}
export interface CreateSignalingChannelCommandOutput extends CreateSignalingChannelOutput, __MetadataBearer {}

/**
 * <p>Creates a signaling channel. </p>
 *          <p>
 *             <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new CreateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link CreateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class CreateSignalingChannelCommand extends $Command<
  CreateSignalingChannelCommandInput,
  CreateSignalingChannelCommandOutput,
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

  constructor(readonly input: CreateSignalingChannelCommandInput) {
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
  ): Handler<CreateSignalingChannelCommandInput, CreateSignalingChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSignalingChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "CreateSignalingChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSignalingChannelInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSignalingChannelOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSignalingChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSignalingChannelCommandOutput> {
    return deserializeAws_restJson1CreateSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
