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

import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingConfigurationsRequest, ListPackagingConfigurationsResponse } from "../models/models_0";
import {
  de_ListPackagingConfigurationsCommand,
  se_ListPackagingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPackagingConfigurationsCommand}.
 */
export interface ListPackagingConfigurationsCommandInput extends ListPackagingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPackagingConfigurationsCommand}.
 */
export interface ListPackagingConfigurationsCommandOutput
  extends ListPackagingConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingConfigurationsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingConfigurationsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const input = { // ListPackagingConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PackagingGroupId: "STRING_VALUE",
 * };
 * const command = new ListPackagingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPackagingConfigurationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PackagingConfigurations: [ // __listOfPackagingConfiguration
 * //     { // PackagingConfiguration
 * //       Arn: "STRING_VALUE",
 * //       CmafPackage: { // CmafPackage
 * //         Encryption: { // CmafEncryption
 * //           ConstantInitializationVector: "STRING_VALUE",
 * //           SpekeKeyProvider: { // SpekeKeyProvider
 * //             EncryptionContractConfiguration: { // EncryptionContractConfiguration
 * //               PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //               PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //             },
 * //             RoleArn: "STRING_VALUE", // required
 * //             SystemIds: [ // __listOf__string // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Url: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         HlsManifests: [ // __listOfHlsManifest // required
 * //           { // HlsManifest
 * //             AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH",
 * //             IncludeIframeOnlyStream: true || false,
 * //             ManifestName: "STRING_VALUE",
 * //             ProgramDateTimeIntervalSeconds: Number("int"),
 * //             RepeatExtXKey: true || false,
 * //             StreamSelection: { // StreamSelection
 * //               MaxVideoBitsPerSecond: Number("int"),
 * //               MinVideoBitsPerSecond: Number("int"),
 * //               StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //             },
 * //           },
 * //         ],
 * //         IncludeEncoderConfigurationInSegments: true || false,
 * //         SegmentDurationSeconds: Number("int"),
 * //       },
 * //       CreatedAt: "STRING_VALUE",
 * //       DashPackage: { // DashPackage
 * //         DashManifests: [ // __listOfDashManifest // required
 * //           { // DashManifest
 * //             ManifestLayout: "FULL" || "COMPACT",
 * //             ManifestName: "STRING_VALUE",
 * //             MinBufferTimeSeconds: Number("int"),
 * //             Profile: "NONE" || "HBBTV_1_5",
 * //             ScteMarkersSource: "SEGMENTS" || "MANIFEST",
 * //             StreamSelection: {
 * //               MaxVideoBitsPerSecond: Number("int"),
 * //               MinVideoBitsPerSecond: Number("int"),
 * //               StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //             },
 * //           },
 * //         ],
 * //         Encryption: { // DashEncryption
 * //           SpekeKeyProvider: {
 * //             EncryptionContractConfiguration: {
 * //               PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //               PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //             },
 * //             RoleArn: "STRING_VALUE", // required
 * //             SystemIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Url: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         IncludeEncoderConfigurationInSegments: true || false,
 * //         IncludeIframeOnlyStream: true || false,
 * //         PeriodTriggers: [ // __listOf__PeriodTriggersElement
 * //           "ADS",
 * //         ],
 * //         SegmentDurationSeconds: Number("int"),
 * //         SegmentTemplateFormat: "NUMBER_WITH_TIMELINE" || "TIME_WITH_TIMELINE" || "NUMBER_WITH_DURATION",
 * //       },
 * //       HlsPackage: { // HlsPackage
 * //         Encryption: { // HlsEncryption
 * //           ConstantInitializationVector: "STRING_VALUE",
 * //           EncryptionMethod: "AES_128" || "SAMPLE_AES",
 * //           SpekeKeyProvider: {
 * //             EncryptionContractConfiguration: {
 * //               PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //               PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //             },
 * //             RoleArn: "STRING_VALUE", // required
 * //             SystemIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Url: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         HlsManifests: [ // required
 * //           {
 * //             AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH",
 * //             IncludeIframeOnlyStream: true || false,
 * //             ManifestName: "STRING_VALUE",
 * //             ProgramDateTimeIntervalSeconds: Number("int"),
 * //             RepeatExtXKey: true || false,
 * //             StreamSelection: {
 * //               MaxVideoBitsPerSecond: Number("int"),
 * //               MinVideoBitsPerSecond: Number("int"),
 * //               StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //             },
 * //           },
 * //         ],
 * //         IncludeDvbSubtitles: true || false,
 * //         SegmentDurationSeconds: Number("int"),
 * //         UseAudioRenditionGroup: true || false,
 * //       },
 * //       Id: "STRING_VALUE",
 * //       MssPackage: { // MssPackage
 * //         Encryption: { // MssEncryption
 * //           SpekeKeyProvider: {
 * //             EncryptionContractConfiguration: {
 * //               PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //               PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //             },
 * //             RoleArn: "STRING_VALUE", // required
 * //             SystemIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Url: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         MssManifests: [ // __listOfMssManifest // required
 * //           { // MssManifest
 * //             ManifestName: "STRING_VALUE",
 * //             StreamSelection: {
 * //               MaxVideoBitsPerSecond: Number("int"),
 * //               MinVideoBitsPerSecond: Number("int"),
 * //               StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //             },
 * //           },
 * //         ],
 * //         SegmentDurationSeconds: Number("int"),
 * //       },
 * //       PackagingGroupId: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPackagingConfigurationsCommandInput - {@link ListPackagingConfigurationsCommandInput}
 * @returns {@link ListPackagingConfigurationsCommandOutput}
 * @see {@link ListPackagingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 */
export class ListPackagingConfigurationsCommand extends $Command<
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
  MediaPackageVodClientResolvedConfig
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
  constructor(readonly input: ListPackagingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackagingConfigurationsCommandInput, ListPackagingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPackagingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "ListPackagingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaPackageVod",
        operation: "ListPackagingConfigurations",
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
  private serialize(input: ListPackagingConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPackagingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPackagingConfigurationsCommandOutput> {
    return de_ListPackagingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
