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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CreateOriginEndpointRequest, CreateOriginEndpointResponse } from "../models/models_0";
import { de_CreateOriginEndpointCommand, se_CreateOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOriginEndpointCommand}.
 */
export interface CreateOriginEndpointCommandInput extends CreateOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateOriginEndpointCommand}.
 */
export interface CreateOriginEndpointCommandOutput extends CreateOriginEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>The endpoint is attached to a channel, and represents the output of the live content. You can associate multiple endpoints to a single channel. Each endpoint gives players and downstream CDNs (such as Amazon CloudFront) access to the content for playback. Content can't be served from a channel until it has an endpoint. You can create only one endpoint with each request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CreateOriginEndpointCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CreateOriginEndpointCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // CreateOriginEndpointRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   ContainerType: "TS" || "CMAF", // required
 *   Segment: { // Segment
 *     SegmentDurationSeconds: Number("int"),
 *     SegmentName: "STRING_VALUE",
 *     TsUseAudioRenditionGroup: true || false,
 *     IncludeIframeOnlyStreams: true || false,
 *     TsIncludeDvbSubtitles: true || false,
 *     Scte: { // Scte
 *       ScteFilter: [ // ScteFilterList
 *         "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY" || "PROGRAM",
 *       ],
 *     },
 *     Encryption: { // Encryption
 *       ConstantInitializationVector: "STRING_VALUE",
 *       EncryptionMethod: { // EncryptionMethod
 *         TsEncryptionMethod: "AES_128" || "SAMPLE_AES",
 *         CmafEncryptionMethod: "CENC" || "CBCS",
 *       },
 *       KeyRotationIntervalSeconds: Number("int"),
 *       SpekeKeyProvider: { // SpekeKeyProvider
 *         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 *           PresetSpeke20Audio: "PRESET_AUDIO_1" || "PRESET_AUDIO_2" || "PRESET_AUDIO_3" || "SHARED" || "UNENCRYPTED", // required
 *           PresetSpeke20Video: "PRESET_VIDEO_1" || "PRESET_VIDEO_2" || "PRESET_VIDEO_3" || "PRESET_VIDEO_4" || "PRESET_VIDEO_5" || "PRESET_VIDEO_6" || "PRESET_VIDEO_7" || "PRESET_VIDEO_8" || "SHARED" || "UNENCRYPTED", // required
 *         },
 *         ResourceId: "STRING_VALUE", // required
 *         DrmSystems: [ // DrmSystems // required
 *           "CLEAR_KEY_AES_128" || "FAIRPLAY" || "PLAYREADY" || "WIDEVINE",
 *         ],
 *         RoleArn: "STRING_VALUE", // required
 *         Url: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   StartoverWindowSeconds: Number("int"),
 *   HlsManifests: [ // CreateHlsManifests
 *     { // CreateHlsManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ChildManifestName: "STRING_VALUE",
 *       ScteHls: { // ScteHls
 *         AdMarkerHls: "DATERANGE",
 *       },
 *       ManifestWindowSeconds: Number("int"),
 *       ProgramDateTimeIntervalSeconds: Number("int"),
 *     },
 *   ],
 *   LowLatencyHlsManifests: [ // CreateLowLatencyHlsManifests
 *     { // CreateLowLatencyHlsManifestConfiguration
 *       ManifestName: "STRING_VALUE", // required
 *       ChildManifestName: "STRING_VALUE",
 *       ScteHls: {
 *         AdMarkerHls: "DATERANGE",
 *       },
 *       ManifestWindowSeconds: Number("int"),
 *       ProgramDateTimeIntervalSeconds: Number("int"),
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginEndpointResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   OriginEndpointName: "STRING_VALUE", // required
 * //   ContainerType: "TS" || "CMAF", // required
 * //   Segment: { // Segment
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentName: "STRING_VALUE",
 * //     TsUseAudioRenditionGroup: true || false,
 * //     IncludeIframeOnlyStreams: true || false,
 * //     TsIncludeDvbSubtitles: true || false,
 * //     Scte: { // Scte
 * //       ScteFilter: [ // ScteFilterList
 * //         "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY" || "PROGRAM",
 * //       ],
 * //     },
 * //     Encryption: { // Encryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: { // EncryptionMethod
 * //         TsEncryptionMethod: "AES_128" || "SAMPLE_AES",
 * //         CmafEncryptionMethod: "CENC" || "CBCS",
 * //       },
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: { // SpekeKeyProvider
 * //         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 * //           PresetSpeke20Audio: "PRESET_AUDIO_1" || "PRESET_AUDIO_2" || "PRESET_AUDIO_3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET_VIDEO_1" || "PRESET_VIDEO_2" || "PRESET_VIDEO_3" || "PRESET_VIDEO_4" || "PRESET_VIDEO_5" || "PRESET_VIDEO_6" || "PRESET_VIDEO_7" || "PRESET_VIDEO_8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         DrmSystems: [ // DrmSystems // required
 * //           "CLEAR_KEY_AES_128" || "FAIRPLAY" || "PLAYREADY" || "WIDEVINE",
 * //         ],
 * //         RoleArn: "STRING_VALUE", // required
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   StartoverWindowSeconds: Number("int"),
 * //   HlsManifests: [ // GetHlsManifests
 * //     { // GetHlsManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       ChildManifestName: "STRING_VALUE",
 * //       ManifestWindowSeconds: Number("int"),
 * //       ProgramDateTimeIntervalSeconds: Number("int"),
 * //       ScteHls: { // ScteHls
 * //         AdMarkerHls: "DATERANGE",
 * //       },
 * //     },
 * //   ],
 * //   LowLatencyHlsManifests: [ // GetLowLatencyHlsManifests
 * //     { // GetLowLatencyHlsManifestConfiguration
 * //       ManifestName: "STRING_VALUE", // required
 * //       Url: "STRING_VALUE", // required
 * //       ChildManifestName: "STRING_VALUE",
 * //       ManifestWindowSeconds: Number("int"),
 * //       ProgramDateTimeIntervalSeconds: Number("int"),
 * //       ScteHls: {
 * //         AdMarkerHls: "DATERANGE",
 * //       },
 * //     },
 * //   ],
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOriginEndpointCommandInput - {@link CreateOriginEndpointCommandInput}
 * @returns {@link CreateOriginEndpointCommandOutput}
 * @see {@link CreateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 */
export class CreateOriginEndpointCommand extends $Command<
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
  MediaPackageV2ClientResolvedConfig
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
  constructor(readonly input: CreateOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOriginEndpointCommandInput, CreateOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOriginEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageV2Client";
    const commandName = "CreateOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mediapackagev2",
        operation: "CreateOriginEndpoint",
      },
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
  private serialize(input: CreateOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOriginEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOriginEndpointCommandOutput> {
    return de_CreateOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
