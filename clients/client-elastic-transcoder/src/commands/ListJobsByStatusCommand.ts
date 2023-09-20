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
import { ListJobsByStatusRequest, ListJobsByStatusResponse } from "../models/models_0";
import { de_ListJobsByStatusCommand, se_ListJobsByStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListJobsByStatusCommand}.
 */
export interface ListJobsByStatusCommandInput extends ListJobsByStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsByStatusCommand}.
 */
export interface ListJobsByStatusCommandOutput extends ListJobsByStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
 *             body contains one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ListJobsByStatusRequest
 *   Status: "STRING_VALUE", // required
 *   Ascending: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListJobsByStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsByStatusResponse
 * //   Jobs: [ // Jobs
 * //     { // Job
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //       Input: { // JobInput
 * //         Key: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         Interlaced: "STRING_VALUE",
 * //         Container: "STRING_VALUE",
 * //         Encryption: { // Encryption
 * //           Mode: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           KeyMd5: "STRING_VALUE",
 * //           InitializationVector: "STRING_VALUE",
 * //         },
 * //         TimeSpan: { // TimeSpan
 * //           StartTime: "STRING_VALUE",
 * //           Duration: "STRING_VALUE",
 * //         },
 * //         InputCaptions: { // InputCaptions
 * //           MergePolicy: "STRING_VALUE",
 * //           CaptionSources: [ // CaptionSources
 * //             { // CaptionSource
 * //               Key: "STRING_VALUE",
 * //               Language: "STRING_VALUE",
 * //               TimeOffset: "STRING_VALUE",
 * //               Label: "STRING_VALUE",
 * //               Encryption: {
 * //                 Mode: "STRING_VALUE",
 * //                 Key: "STRING_VALUE",
 * //                 KeyMd5: "STRING_VALUE",
 * //                 InitializationVector: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         DetectedProperties: { // DetectedProperties
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //         },
 * //       },
 * //       Inputs: [ // JobInputs
 * //         {
 * //           Key: "STRING_VALUE",
 * //           FrameRate: "STRING_VALUE",
 * //           Resolution: "STRING_VALUE",
 * //           AspectRatio: "STRING_VALUE",
 * //           Interlaced: "STRING_VALUE",
 * //           Container: "STRING_VALUE",
 * //           Encryption: "<Encryption>",
 * //           TimeSpan: {
 * //             StartTime: "STRING_VALUE",
 * //             Duration: "STRING_VALUE",
 * //           },
 * //           InputCaptions: {
 * //             MergePolicy: "STRING_VALUE",
 * //             CaptionSources: [
 * //               {
 * //                 Key: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 TimeOffset: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           DetectedProperties: {
 * //             Width: Number("int"),
 * //             Height: Number("int"),
 * //             FrameRate: "STRING_VALUE",
 * //             FileSize: Number("long"),
 * //             DurationMillis: Number("long"),
 * //           },
 * //         },
 * //       ],
 * //       Output: { // JobOutput
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
 * //         Watermarks: [ // JobWatermarks
 * //           { // JobWatermark
 * //             PresetWatermarkId: "STRING_VALUE",
 * //             InputKey: "STRING_VALUE",
 * //             Encryption: "<Encryption>",
 * //           },
 * //         ],
 * //         AlbumArt: { // JobAlbumArt
 * //           MergePolicy: "STRING_VALUE",
 * //           Artwork: [ // Artworks
 * //             { // Artwork
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
 * //         Composition: [ // Composition
 * //           { // Clip
 * //             TimeSpan: "<TimeSpan>",
 * //           },
 * //         ],
 * //         Captions: { // Captions
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
 * //           CaptionFormats: [ // CaptionFormats
 * //             { // CaptionFormat
 * //               Format: "STRING_VALUE",
 * //               Pattern: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //         },
 * //         Encryption: "<Encryption>",
 * //         AppliedColorSpaceConversion: "STRING_VALUE",
 * //       },
 * //       Outputs: [ // JobOutputs
 * //         {
 * //           Id: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           ThumbnailPattern: "STRING_VALUE",
 * //           ThumbnailEncryption: "<Encryption>",
 * //           Rotate: "STRING_VALUE",
 * //           PresetId: "STRING_VALUE",
 * //           SegmentDuration: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           StatusDetail: "STRING_VALUE",
 * //           Duration: Number("long"),
 * //           Width: Number("int"),
 * //           Height: Number("int"),
 * //           FrameRate: "STRING_VALUE",
 * //           FileSize: Number("long"),
 * //           DurationMillis: Number("long"),
 * //           Watermarks: [
 * //             {
 * //               PresetWatermarkId: "STRING_VALUE",
 * //               InputKey: "STRING_VALUE",
 * //               Encryption: "<Encryption>",
 * //             },
 * //           ],
 * //           AlbumArt: {
 * //             MergePolicy: "STRING_VALUE",
 * //             Artwork: [
 * //               {
 * //                 InputKey: "STRING_VALUE",
 * //                 MaxWidth: "STRING_VALUE",
 * //                 MaxHeight: "STRING_VALUE",
 * //                 SizingPolicy: "STRING_VALUE",
 * //                 PaddingPolicy: "STRING_VALUE",
 * //                 AlbumArtFormat: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           Composition: [
 * //             {
 * //               TimeSpan: "<TimeSpan>",
 * //             },
 * //           ],
 * //           Captions: {
 * //             MergePolicy: "STRING_VALUE",
 * //             CaptionSources: [
 * //               {
 * //                 Key: "STRING_VALUE",
 * //                 Language: "STRING_VALUE",
 * //                 TimeOffset: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //             CaptionFormats: [
 * //               {
 * //                 Format: "STRING_VALUE",
 * //                 Pattern: "STRING_VALUE",
 * //                 Encryption: "<Encryption>",
 * //               },
 * //             ],
 * //           },
 * //           Encryption: "<Encryption>",
 * //           AppliedColorSpaceConversion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OutputKeyPrefix: "STRING_VALUE",
 * //       Playlists: [ // Playlists
 * //         { // Playlist
 * //           Name: "STRING_VALUE",
 * //           Format: "STRING_VALUE",
 * //           OutputKeys: [ // OutputKeys
 * //             "STRING_VALUE",
 * //           ],
 * //           HlsContentProtection: { // HlsContentProtection
 * //             Method: "STRING_VALUE",
 * //             Key: "STRING_VALUE",
 * //             KeyMd5: "STRING_VALUE",
 * //             InitializationVector: "STRING_VALUE",
 * //             LicenseAcquisitionUrl: "STRING_VALUE",
 * //             KeyStoragePolicy: "STRING_VALUE",
 * //           },
 * //           PlayReadyDrm: { // PlayReadyDrm
 * //             Format: "STRING_VALUE",
 * //             Key: "STRING_VALUE",
 * //             KeyMd5: "STRING_VALUE",
 * //             KeyId: "STRING_VALUE",
 * //             InitializationVector: "STRING_VALUE",
 * //             LicenseAcquisitionUrl: "STRING_VALUE",
 * //           },
 * //           Status: "STRING_VALUE",
 * //           StatusDetail: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       UserMetadata: { // UserMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Timing: { // Timing
 * //         SubmitTimeMillis: Number("long"),
 * //         StartTimeMillis: Number("long"),
 * //         FinishTimeMillis: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobsByStatusCommandInput - {@link ListJobsByStatusCommandInput}
 * @returns {@link ListJobsByStatusCommandOutput}
 * @see {@link ListJobsByStatusCommandInput} for command's `input` shape.
 * @see {@link ListJobsByStatusCommandOutput} for command's `response` shape.
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
export class ListJobsByStatusCommand extends $Command<
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
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
  constructor(readonly input: ListJobsByStatusCommandInput) {
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
  ): Handler<ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListJobsByStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListJobsByStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EtsCustomerService",
        operation: "ListJobsByStatus",
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
  private serialize(input: ListJobsByStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListJobsByStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsByStatusCommandOutput> {
    return de_ListJobsByStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
