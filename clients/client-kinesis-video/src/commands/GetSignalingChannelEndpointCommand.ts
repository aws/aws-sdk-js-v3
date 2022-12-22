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
  GetSignalingChannelEndpointInput,
  GetSignalingChannelEndpointInputFilterSensitiveLog,
  GetSignalingChannelEndpointOutput,
  GetSignalingChannelEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSignalingChannelEndpointCommand,
  serializeAws_restJson1GetSignalingChannelEndpointCommand,
} from "../protocols/Aws_restJson1";

export interface GetSignalingChannelEndpointCommandInput extends GetSignalingChannelEndpointInput {}
export interface GetSignalingChannelEndpointCommandOutput extends GetSignalingChannelEndpointOutput, __MetadataBearer {}

/**
 * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
 *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
 *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
 *          <p>
 *             <code>Protocols</code> is used to determine the communication mechanism. For example,
 *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
 *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
 *             endpoint. </p>
 *          <p>
 *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
 *             results in this API generating an endpoint that a client can use to communicate with any
 *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
 *             an endpoint that a client can use to communicate only with a <code>MASTER</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetSignalingChannelEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetSignalingChannelEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new GetSignalingChannelEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSignalingChannelEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSignalingChannelEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 */
export class GetSignalingChannelEndpointCommand extends $Command<
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
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

  constructor(readonly input: GetSignalingChannelEndpointCommandInput) {
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
  ): Handler<GetSignalingChannelEndpointCommandInput, GetSignalingChannelEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSignalingChannelEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetSignalingChannelEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSignalingChannelEndpointInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSignalingChannelEndpointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSignalingChannelEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSignalingChannelEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSignalingChannelEndpointCommandOutput> {
    return deserializeAws_restJson1GetSignalingChannelEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
