// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import {
  GetStreamSessionRequest,
  GetStreamSessionResponse,
  GetStreamSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetStreamSessionCommand, se_GetStreamSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandInput extends GetStreamSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandOutput extends GetStreamSessionResponse, __MetadataBearer {}

/**
 * <p>Gets metadata on a specified stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamSessionCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamSessionCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // GetStreamSessionRequest
 *   channelArn: "STRING_VALUE", // required
 *   streamId: "STRING_VALUE",
 * };
 * const command = new GetStreamSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamSessionResponse
 * //   streamSession: { // StreamSession
 * //     streamId: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     channel: { // Channel
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       latencyMode: "STRING_VALUE",
 * //       type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //       recordingConfigurationArn: "STRING_VALUE",
 * //       ingestEndpoint: "STRING_VALUE",
 * //       playbackUrl: "STRING_VALUE",
 * //       authorized: true || false,
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       insecureIngest: true || false,
 * //       preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //       srt: { // Srt
 * //         endpoint: "STRING_VALUE",
 * //         passphrase: "STRING_VALUE",
 * //       },
 * //       playbackRestrictionPolicyArn: "STRING_VALUE",
 * //       multitrackInputConfiguration: { // MultitrackInputConfiguration
 * //         enabled: true || false,
 * //         policy: "ALLOW" || "REQUIRE",
 * //         maximumResolution: "SD" || "HD" || "FULL_HD",
 * //       },
 * //       containerFormat: "STRING_VALUE",
 * //     },
 * //     ingestConfiguration: { // IngestConfiguration
 * //       video: { // VideoConfiguration
 * //         avcProfile: "STRING_VALUE",
 * //         avcLevel: "STRING_VALUE",
 * //         codec: "STRING_VALUE",
 * //         encoder: "STRING_VALUE",
 * //         targetBitrate: Number("long"),
 * //         targetFramerate: Number("long"),
 * //         videoHeight: Number("long"),
 * //         videoWidth: Number("long"),
 * //         level: "STRING_VALUE",
 * //         track: "STRING_VALUE",
 * //         profile: "STRING_VALUE",
 * //       },
 * //       audio: { // AudioConfiguration
 * //         codec: "STRING_VALUE",
 * //         targetBitrate: Number("long"),
 * //         sampleRate: Number("long"),
 * //         channels: Number("long"),
 * //         track: "STRING_VALUE",
 * //       },
 * //     },
 * //     ingestConfigurations: { // IngestConfigurations
 * //       videoConfigurations: [ // VideoConfigurationList // required
 * //         {
 * //           avcProfile: "STRING_VALUE",
 * //           avcLevel: "STRING_VALUE",
 * //           codec: "STRING_VALUE",
 * //           encoder: "STRING_VALUE",
 * //           targetBitrate: Number("long"),
 * //           targetFramerate: Number("long"),
 * //           videoHeight: Number("long"),
 * //           videoWidth: Number("long"),
 * //           level: "STRING_VALUE",
 * //           track: "STRING_VALUE",
 * //           profile: "STRING_VALUE",
 * //         },
 * //       ],
 * //       audioConfigurations: [ // AudioConfigurationList // required
 * //         {
 * //           codec: "STRING_VALUE",
 * //           targetBitrate: Number("long"),
 * //           sampleRate: Number("long"),
 * //           channels: Number("long"),
 * //           track: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     recordingConfiguration: { // RecordingConfiguration
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE", // required
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       thumbnailConfiguration: { // ThumbnailConfiguration
 * //         recordingMode: "STRING_VALUE",
 * //         targetIntervalSeconds: Number("long"),
 * //         resolution: "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 * //         storage: [ // ThumbnailConfigurationStorageList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       recordingReconnectWindowSeconds: Number("int"),
 * //       renditionConfiguration: { // RenditionConfiguration
 * //         renditionSelection: "STRING_VALUE",
 * //         renditions: [ // RenditionConfigurationRenditionList
 * //           "SD" || "HD" || "FULL_HD" || "LOWEST_RESOLUTION",
 * //         ],
 * //       },
 * //     },
 * //     truncatedEvents: [ // StreamEvents
 * //       { // StreamEvent
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         eventTime: new Date("TIMESTAMP"),
 * //         code: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamSessionCommandInput - {@link GetStreamSessionCommandInput}
 * @returns {@link GetStreamSessionCommandOutput}
 * @see {@link GetStreamSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamSessionCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class GetStreamSessionCommand extends $Command
  .classBuilder<
    GetStreamSessionCommandInput,
    GetStreamSessionCommandOutput,
    IvsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoService", "GetStreamSession", {})
  .n("IvsClient", "GetStreamSessionCommand")
  .f(void 0, GetStreamSessionResponseFilterSensitiveLog)
  .ser(se_GetStreamSessionCommand)
  .de(de_GetStreamSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamSessionRequest;
      output: GetStreamSessionResponse;
    };
    sdk: {
      input: GetStreamSessionCommandInput;
      output: GetStreamSessionCommandOutput;
    };
  };
}
