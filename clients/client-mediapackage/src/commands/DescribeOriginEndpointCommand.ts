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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeOriginEndpointRequest, DescribeOriginEndpointResponse } from "../models/models_0";
import { de_DescribeOriginEndpointCommand, se_DescribeOriginEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOriginEndpointCommand}.
 */
export interface DescribeOriginEndpointCommandInput extends DescribeOriginEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOriginEndpointCommand}.
 */
export interface DescribeOriginEndpointCommandOutput extends DescribeOriginEndpointResponse, __MetadataBearer {}

/**
 * @public
 * Gets details about an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // DescribeOriginEndpointRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeOriginEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOriginEndpointResponse
 * //   Arn: "STRING_VALUE",
 * //   Authorization: { // Authorization
 * //     CdnIdentifierSecret: "STRING_VALUE", // required
 * //     SecretsRoleArn: "STRING_VALUE", // required
 * //   },
 * //   ChannelId: "STRING_VALUE",
 * //   CmafPackage: { // CmafPackage
 * //     Encryption: { // CmafEncryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: "SAMPLE_AES" || "AES_CTR",
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: { // SpekeKeyProvider
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: { // EncryptionContractConfiguration
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // __listOf__string // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     HlsManifests: [ // __listOfHlsManifest
 * //       { // HlsManifest
 * //         AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 * //         Id: "STRING_VALUE", // required
 * //         IncludeIframeOnlyStream: true || false,
 * //         ManifestName: "STRING_VALUE",
 * //         PlaylistType: "NONE" || "EVENT" || "VOD",
 * //         PlaylistWindowSeconds: Number("int"),
 * //         ProgramDateTimeIntervalSeconds: Number("int"),
 * //         Url: "STRING_VALUE",
 * //         AdTriggers: [ // AdTriggers
 * //           "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //         ],
 * //         AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //       },
 * //     ],
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentPrefix: "STRING_VALUE",
 * //     StreamSelection: { // StreamSelection
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //   },
 * //   CreatedAt: "STRING_VALUE",
 * //   DashPackage: { // DashPackage
 * //     AdTriggers: [
 * //       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //     ],
 * //     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //     Encryption: { // DashEncryption
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     IncludeIframeOnlyStream: true || false,
 * //     ManifestLayout: "FULL" || "COMPACT",
 * //     ManifestWindowSeconds: Number("int"),
 * //     MinBufferTimeSeconds: Number("int"),
 * //     MinUpdatePeriodSeconds: Number("int"),
 * //     PeriodTriggers: [ // __listOf__PeriodTriggersElement
 * //       "ADS",
 * //     ],
 * //     Profile: "NONE" || "HBBTV_1_5" || "HYBRIDCAST" || "DVB_DASH_2014",
 * //     SegmentDurationSeconds: Number("int"),
 * //     SegmentTemplateFormat: "NUMBER_WITH_TIMELINE" || "TIME_WITH_TIMELINE" || "NUMBER_WITH_DURATION",
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //     SuggestedPresentationDelaySeconds: Number("int"),
 * //     UtcTiming: "NONE" || "HTTP-HEAD" || "HTTP-ISO" || "HTTP-XSDATE",
 * //     UtcTimingUri: "STRING_VALUE",
 * //   },
 * //   Description: "STRING_VALUE",
 * //   HlsPackage: { // HlsPackage
 * //     AdMarkers: "NONE" || "SCTE35_ENHANCED" || "PASSTHROUGH" || "DATERANGE",
 * //     AdTriggers: [
 * //       "SPLICE_INSERT" || "BREAK" || "PROVIDER_ADVERTISEMENT" || "DISTRIBUTOR_ADVERTISEMENT" || "PROVIDER_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_PLACEMENT_OPPORTUNITY" || "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY" || "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
 * //     ],
 * //     AdsOnDeliveryRestrictions: "NONE" || "RESTRICTED" || "UNRESTRICTED" || "BOTH",
 * //     Encryption: { // HlsEncryption
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       EncryptionMethod: "AES_128" || "SAMPLE_AES",
 * //       KeyRotationIntervalSeconds: Number("int"),
 * //       RepeatExtXKey: true || false,
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     IncludeDvbSubtitles: true || false,
 * //     IncludeIframeOnlyStream: true || false,
 * //     PlaylistType: "NONE" || "EVENT" || "VOD",
 * //     PlaylistWindowSeconds: Number("int"),
 * //     ProgramDateTimeIntervalSeconds: Number("int"),
 * //     SegmentDurationSeconds: Number("int"),
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //     UseAudioRenditionGroup: true || false,
 * //   },
 * //   Id: "STRING_VALUE",
 * //   ManifestName: "STRING_VALUE",
 * //   MssPackage: { // MssPackage
 * //     Encryption: { // MssEncryption
 * //       SpekeKeyProvider: {
 * //         CertificateArn: "STRING_VALUE",
 * //         EncryptionContractConfiguration: {
 * //           PresetSpeke20Audio: "PRESET-AUDIO-1" || "PRESET-AUDIO-2" || "PRESET-AUDIO-3" || "SHARED" || "UNENCRYPTED", // required
 * //           PresetSpeke20Video: "PRESET-VIDEO-1" || "PRESET-VIDEO-2" || "PRESET-VIDEO-3" || "PRESET-VIDEO-4" || "PRESET-VIDEO-5" || "PRESET-VIDEO-6" || "PRESET-VIDEO-7" || "PRESET-VIDEO-8" || "SHARED" || "UNENCRYPTED", // required
 * //         },
 * //         ResourceId: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SystemIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     ManifestWindowSeconds: Number("int"),
 * //     SegmentDurationSeconds: Number("int"),
 * //     StreamSelection: {
 * //       MaxVideoBitsPerSecond: Number("int"),
 * //       MinVideoBitsPerSecond: Number("int"),
 * //       StreamOrder: "ORIGINAL" || "VIDEO_BITRATE_ASCENDING" || "VIDEO_BITRATE_DESCENDING",
 * //     },
 * //   },
 * //   Origination: "ALLOW" || "DENY",
 * //   StartoverWindowSeconds: Number("int"),
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TimeDelaySeconds: Number("int"),
 * //   Url: "STRING_VALUE",
 * //   Whitelist: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOriginEndpointCommandInput - {@link DescribeOriginEndpointCommandInput}
 * @returns {@link DescribeOriginEndpointCommandOutput}
 * @see {@link DescribeOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
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
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 */
export class DescribeOriginEndpointCommand extends $Command<
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: DescribeOriginEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOriginEndpointCommandInput, DescribeOriginEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOriginEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "DescribeOriginEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaPackage",
        operation: "DescribeOriginEndpoint",
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
  private serialize(input: DescribeOriginEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOriginEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOriginEndpointCommandOutput> {
    return de_DescribeOriginEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
