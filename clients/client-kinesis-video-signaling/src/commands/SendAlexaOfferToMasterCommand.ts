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

import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient";
import {
  SendAlexaOfferToMasterRequest,
  SendAlexaOfferToMasterRequestFilterSensitiveLog,
  SendAlexaOfferToMasterResponse,
  SendAlexaOfferToMasterResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SendAlexaOfferToMasterCommand,
  serializeAws_restJson1SendAlexaOfferToMasterCommand,
} from "../protocols/Aws_restJson1";

export interface SendAlexaOfferToMasterCommandInput extends SendAlexaOfferToMasterRequest {}
export interface SendAlexaOfferToMasterCommandOutput extends SendAlexaOfferToMasterResponse, __MetadataBearer {}

/**
 * <p>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When
 *             invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer.
 *             The offer is delivered as soon as the master is connected to the specified signaling
 *             channel. This API returns the SDP answer from the connected master. If the master is not
 *             connected to the signaling channel, redelivery requests are made until the message
 *             expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * const client = new KinesisVideoSignalingClient(config);
 * const command = new SendAlexaOfferToMasterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAlexaOfferToMasterCommandInput} for command's `input` shape.
 * @see {@link SendAlexaOfferToMasterCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for KinesisVideoSignalingClient's `config` shape.
 *
 */
export class SendAlexaOfferToMasterCommand extends $Command<
  SendAlexaOfferToMasterCommandInput,
  SendAlexaOfferToMasterCommandOutput,
  KinesisVideoSignalingClientResolvedConfig
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

  constructor(readonly input: SendAlexaOfferToMasterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoSignalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendAlexaOfferToMasterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoSignalingClient";
    const commandName = "SendAlexaOfferToMasterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendAlexaOfferToMasterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendAlexaOfferToMasterResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendAlexaOfferToMasterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput> {
    return deserializeAws_restJson1SendAlexaOfferToMasterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
