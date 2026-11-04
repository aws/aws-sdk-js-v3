// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/models_0";
import { SendAlexaOfferToMaster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } from "@aws-sdk/client-kinesis-video-signaling"; // ES Modules import
 * // const { KinesisVideoSignalingClient, SendAlexaOfferToMasterCommand } = require("@aws-sdk/client-kinesis-video-signaling"); // CommonJS import
 * // import type { KinesisVideoSignalingClientConfig } from "@aws-sdk/client-kinesis-video-signaling";
 * const config = {}; // type is KinesisVideoSignalingClientConfig
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
 *
 * Your request was throttled because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The caller is not authorized to perform this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource is not found.
 *
 * @throws {@link KinesisVideoSignalingServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideoSignaling service.
 *
 * @public
 */
export class SendAlexaOfferToMasterCommand extends command<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput>(
  _ep0,
  _mw0,
  "SendAlexaOfferToMaster",
  SendAlexaOfferToMaster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAlexaOfferToMasterRequest;
      output: SendAlexaOfferToMasterResponse;
    };
    sdk: {
      input: SendAlexaOfferToMasterCommandInput;
      output: SendAlexaOfferToMasterCommandOutput;
    };
  };
}
