// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartWebRTCContactRequest,
  StartWebRTCContactRequestFilterSensitiveLog,
  StartWebRTCContactResponse,
  StartWebRTCContactResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_StartWebRTCContactCommand, se_StartWebRTCContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWebRTCContactCommand}.
 */
export interface StartWebRTCContactCommandInput extends StartWebRTCContactRequest {}
/**
 * @public
 *
 * The output of {@link StartWebRTCContactCommand}.
 */
export interface StartWebRTCContactCommandOutput extends StartWebRTCContactResponse, __MetadataBearer {}

/**
 * <p>Places an inbound in-app, web, or video call to a contact, and then initiates the flow. It
 *    performs the actions in the flow that are specified (in ContactFlowId) and present in the Amazon Connect instance (specified as InstanceId).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartWebRTCContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartWebRTCContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // StartWebRTCContactRequest
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 *   ContactFlowId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AllowedCapabilities: { // AllowedCapabilities
 *     Customer: { // ParticipantCapabilities
 *       Video: "SEND",
 *       ScreenShare: "SEND",
 *     },
 *     Agent: {
 *       Video: "SEND",
 *       ScreenShare: "SEND",
 *     },
 *   },
 *   ParticipantDetails: { // ParticipantDetails
 *     DisplayName: "STRING_VALUE", // required
 *   },
 *   RelatedContactId: "STRING_VALUE",
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE",
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 *       Arn: "STRING_VALUE",
 *       StatusReason: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new StartWebRTCContactCommand(input);
 * const response = await client.send(command);
 * // { // StartWebRTCContactResponse
 * //   ConnectionData: { // ConnectionData
 * //     Attendee: { // Attendee
 * //       AttendeeId: "STRING_VALUE",
 * //       JoinToken: "STRING_VALUE",
 * //     },
 * //     Meeting: { // Meeting
 * //       MediaRegion: "STRING_VALUE",
 * //       MediaPlacement: { // MediaPlacement
 * //         AudioHostUrl: "STRING_VALUE",
 * //         AudioFallbackUrl: "STRING_VALUE",
 * //         SignalingUrl: "STRING_VALUE",
 * //         TurnControlUrl: "STRING_VALUE",
 * //         EventIngestionUrl: "STRING_VALUE",
 * //       },
 * //       MeetingFeatures: { // MeetingFeaturesConfiguration
 * //         Audio: { // AudioFeatures
 * //           EchoReduction: "AVAILABLE" || "UNAVAILABLE",
 * //         },
 * //       },
 * //       MeetingId: "STRING_VALUE",
 * //     },
 * //   },
 * //   ContactId: "STRING_VALUE",
 * //   ParticipantId: "STRING_VALUE",
 * //   ParticipantToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartWebRTCContactCommandInput - {@link StartWebRTCContactCommandInput}
 * @returns {@link StartWebRTCContactCommandOutput}
 * @see {@link StartWebRTCContactCommandInput} for command's `input` shape.
 * @see {@link StartWebRTCContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StartWebRTCContactCommand extends $Command
  .classBuilder<
    StartWebRTCContactCommandInput,
    StartWebRTCContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "StartWebRTCContact", {})
  .n("ConnectClient", "StartWebRTCContactCommand")
  .f(StartWebRTCContactRequestFilterSensitiveLog, StartWebRTCContactResponseFilterSensitiveLog)
  .ser(se_StartWebRTCContactCommand)
  .de(de_StartWebRTCContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWebRTCContactRequest;
      output: StartWebRTCContactResponse;
    };
    sdk: {
      input: StartWebRTCContactCommandInput;
      output: StartWebRTCContactCommandOutput;
    };
  };
}
