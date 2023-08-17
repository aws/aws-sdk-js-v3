// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  KinesisVideoSignalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoSignalingClient";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0";
import { de_SendAlexaOfferToMasterCommand, se_SendAlexaOfferToMasterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendAlexaOfferToMasterCommand}.
 */
export interface SendAlexaOfferToMasterCommandInput extends SendAlexaOfferToMasterRequest {}
/**
 * @public
 *
 * The output of {@link SendAlexaOfferToMasterCommand}.
 */
export interface SendAlexaOfferToMasterCommandOutput extends SendAlexaOfferToMasterResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // SendAlexaOfferToMasterRequest
 *   ChannelARN: "STRING_VALUE", // required
 *   SenderClientId: "STRING_VALUE", // required
 *   MessagePayload: "STRING_VALUE", // required
 * };
 * const command = new SendAlexaOfferToMasterCommand(input);
 * const response = await client.send(command);
 * // { // SendAlexaOfferToMasterResponse
 * //   Answer: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendAlexaOfferToMasterCommandInput - {@link SendAlexaOfferToMasterCommandInput}
 * @returns {@link SendAlexaOfferToMasterCommandOutput}
 * @see {@link SendAlexaOfferToMasterCommandInput} for command's `input` shape.
 * @see {@link SendAlexaOfferToMasterCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoSignalingClientResolvedConfig | config} for KinesisVideoSignalingClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Your request was throttled because you have exceeded the limit of allowed client
 *             calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource is not found.</p>
 *
 * @throws {@link KinesisVideoSignalingServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoSignaling service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendAlexaOfferToMasterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput> {
    return de_SendAlexaOfferToMasterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
