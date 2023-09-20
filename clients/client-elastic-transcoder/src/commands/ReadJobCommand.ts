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

import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ReadJobRequest, ReadJobResponse } from "../models/models_0";
import { de_ReadJobCommand, se_ReadJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReadJobCommand}.
 */
export interface ReadJobCommandInput extends ReadJobRequest {}
/**
 * @public
 *
 * The output of {@link ReadJobCommand}.
 */
export interface ReadJobCommandOutput extends ReadJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ReadJob operation returns detailed information about a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ReadJobRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new ReadJobCommand(input);
 * const response = await client.send(command);
 * // { // ReadJobResponse
 * //   Job: { // Job
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     PipelineId: "STRING_VALUE",
 * //     Input: { // JobInput
 * //       Key: "STRING_VALUE",
 * //       FrameRate: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       Interlaced: "STRING_VALUE",
 * //       Container: "STRING_VALUE",
 * //       Encryption: { // Encryption
 * //         Mode: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         KeyMd5: "STRING_VALUE",
 * //         InitializationVector: "STRING_VALUE",
 * //       },
 * //       TimeSpan: { // TimeSpan
 * //         StartTime: "STRING_VALUE",
 * //         Duration: "STRING_VALUE",
 * //       },
 * //       InputCaptions: { // InputCaptions
 * //         MergePolicy: "STRING_VALUE",
 * //         CaptionSources: [ // CaptionSources
 * //           { // CaptionSource
 * //             Key: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //             TimeOffset: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             Encryption: {
 * //               Mode: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //               KeyMd5: "STRING_VALUE",
 * //               InitializationVector: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       DetectedProperties: { // DetectedProperties
 * //         Width: Number("int"),
 * //         Height: Number("int"),
 * //         FrameRate: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         DurationMillis: Number("long"),
 * //       },
 * //     },
 * //     Inputs: [ // JobInputs
 * //       {
 * //         Key: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         Interlaced: "STRING_VALUE",
 * //         Container: "STRING_VALUE",
 * //         Encryption: "<Encryption>",
 * //         TimeSpan: {
 * //           StartTime: "STRING_VALUE",
 * //           Duration: "STRING_VALUE",
 * //         },
 * //         InputCaptions: {
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         DetectedProperties: {
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //         },
 * //       },
 * //     ],
 * //     Output: { // JobOutput
 * //       Id: "STRING_VALUE",
 * //       Key: "STRING_VALUE",
 * //       ThumbnailPattern: "STRING_VALUE",
 * //       ThumbnailEncryption: "<Encryption>",
 * //       Rotate: "STRING_VALUE",
 * //       PresetId: "STRING_VALUE",
 * //       SegmentDuration: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusDetail: "STRING_VALUE",
 * //       Duration: Number("long"),
 * //       Width: Number("int"),
 * //       Height: Number("int"),
 * //       FrameRate: "STRING_VALUE",
 * //       FileSize: Number("long"),
 * //       DurationMillis: Number("long"),
 * //       Watermarks: [ // JobWatermarks
 * //         { // JobWatermark
 * //           PresetWatermarkId: "STRING_VALUE",
 * //           InputKey: "STRING_VALUE",
 * //           Encryption: "<Encryption>",
 * //         },
 * //       ],
 * //       AlbumArt: { // JobAlbumArt
 * //         MergePolicy: "STRING_VALUE",
 * //         Artwork: [ // Artworks
 * //           { // Artwork
 * //             InputKey: "STRING_VALUE",
 * //             MaxWidth: "STRING_VALUE",
 * //             MaxHeight: "STRING_VALUE",
 * //             SizingPolicy: "STRING_VALUE",
 * //             PaddingPolicy: "STRING_VALUE",
 * //             AlbumArtFormat: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //       },
 * //       Composition: [ // Composition
 * //         { // Clip
 * //           TimeSpan: "<TimeSpan>",
 * //         },
 * //       ],
 * //       Captions: { // Captions
 * //         MergePolicy: "STRING_VALUE",
 * //         CaptionSources: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Language: "STRING_VALUE",
 * //             TimeOffset: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         CaptionFormats: [ // CaptionFormats
 * //           { // CaptionFormat
 * //             Format: "STRING_VALUE",
 * //             Pattern: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //       },
 * //       Encryption: "<Encryption>",
 * //       AppliedColorSpaceConversion: "STRING_VALUE",
 * //     },
 * //     Outputs: [ // JobOutputs
 * //       {
 * //         Id: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         ThumbnailPattern: "STRING_VALUE",
 * //         ThumbnailEncryption: "<Encryption>",
 * //         Rotate: "STRING_VALUE",
 * //         PresetId: "STRING_VALUE",
 * //         SegmentDuration: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusDetail: "STRING_VALUE",
 * //         Duration: Number("long"),
 * //         Width: Number("int"),
 * //         Height: Number("int"),
 * //         FrameRate: "STRING_VALUE",
 * //         FileSize: Number("long"),
 * //         DurationMillis: Number("long"),
 * //         Watermarks: [
 * //           {
 * //             PresetWatermarkId: "STRING_VALUE",
 * //             InputKey: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         AlbumArt: {
 * //           MergePolicy: "STRING_VALUE",
 * //           Artwork: [
 * //             {
 * //               InputKey: "STRING_VALUE",
 * //               MaxWidth: "STRING_VALUE",
 * //               MaxHeight: "STRING_VALUE",
 * //               SizingPolicy: "STRING_VALUE",
 * //               PaddingPolicy: "STRING_VALUE",
 * //               AlbumArtFormat: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Composition: [
 * //           {
 * //             TimeSpan: "<TimeSpan>",
 * //           },
 * //         ],
 * //         Captions: {
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //           CaptionFormats: [
 * //             {
 * //               Format: "STRING_VALUE",
 * //               Pattern: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Encryption: "<Encryption>",
 * //         AppliedColorSpaceConversion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutputKeyPrefix: "STRING_VALUE",
 * //     Playlists: [ // Playlists
 * //       { // Playlist
 * //         Name: "STRING_VALUE",
 * //         Format: "STRING_VALUE",
 * //         OutputKeys: [ // OutputKeys
 * //           "STRING_VALUE",
 * //         ],
 * //         HlsContentProtection: { // HlsContentProtection
 * //           Method: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //           LicenseAcquisitionUrl: "STRING_VALUE",
 * //           KeyStoragePolicy: "STRING_VALUE",
 * //         },
 * //         PlayReadyDrm: { // PlayReadyDrm
 * //           Format: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           KeyId: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //           LicenseAcquisitionUrl: "STRING_VALUE",
 * //         },
 * //         Status: "STRING_VALUE",
 * //         StatusDetail: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     UserMetadata: { // UserMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Timing: { // Timing
 * //       SubmitTimeMillis: Number("long"),
 * //       StartTimeMillis: Number("long"),
 * //       FinishTimeMillis: Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ReadJobCommandInput - {@link ReadJobCommandInput}
 * @returns {@link ReadJobCommandOutput}
 * @see {@link ReadJobCommandInput} for command's `input` shape.
 * @see {@link ReadJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 */
export class ReadJobCommand extends $Command<
  ReadJobCommandInput,
  ReadJobCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
  constructor(readonly input: ReadJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReadJobCommandInput, ReadJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReadJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ReadJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EtsCustomerService",
        operation: "ReadJob",
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
  private serialize(input: ReadJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReadJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReadJobCommandOutput> {
    return de_ReadJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
