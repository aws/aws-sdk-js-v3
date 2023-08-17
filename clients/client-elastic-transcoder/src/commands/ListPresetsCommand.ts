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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ListPresetsRequest, ListPresetsResponse } from "../models/models_0";
import { de_ListPresetsCommand, se_ListPresetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandInput extends ListPresetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPresetsCommand}.
 */
export interface ListPresetsCommandOutput extends ListPresetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that
 *             you've added in an AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListPresetsCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListPresetsCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ListPresetsRequest
 *   Ascending: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListPresetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPresetsResponse
 * //   Presets: [ // Presets
 * //     { // Preset
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Container: "STRING_VALUE",
 * //       Audio: { // AudioParameters
 * //         Codec: "STRING_VALUE",
 * //         SampleRate: "STRING_VALUE",
 * //         BitRate: "STRING_VALUE",
 * //         Channels: "STRING_VALUE",
 * //         AudioPackingMode: "STRING_VALUE",
 * //         CodecOptions: { // AudioCodecOptions
 * //           Profile: "STRING_VALUE",
 * //           BitDepth: "STRING_VALUE",
 * //           BitOrder: "STRING_VALUE",
 * //           Signed: "STRING_VALUE",
 * //         },
 * //       },
 * //       Video: { // VideoParameters
 * //         Codec: "STRING_VALUE",
 * //         CodecOptions: { // CodecOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         KeyframesMaxDist: "STRING_VALUE",
 * //         FixedGOP: "STRING_VALUE",
 * //         BitRate: "STRING_VALUE",
 * //         FrameRate: "STRING_VALUE",
 * //         MaxFrameRate: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         MaxWidth: "STRING_VALUE",
 * //         MaxHeight: "STRING_VALUE",
 * //         DisplayAspectRatio: "STRING_VALUE",
 * //         SizingPolicy: "STRING_VALUE",
 * //         PaddingPolicy: "STRING_VALUE",
 * //         Watermarks: [ // PresetWatermarks
 * //           { // PresetWatermark
 * //             Id: "STRING_VALUE",
 * //             MaxWidth: "STRING_VALUE",
 * //             MaxHeight: "STRING_VALUE",
 * //             SizingPolicy: "STRING_VALUE",
 * //             HorizontalAlign: "STRING_VALUE",
 * //             HorizontalOffset: "STRING_VALUE",
 * //             VerticalAlign: "STRING_VALUE",
 * //             VerticalOffset: "STRING_VALUE",
 * //             Opacity: "STRING_VALUE",
 * //             Target: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Thumbnails: { // Thumbnails
 * //         Format: "STRING_VALUE",
 * //         Interval: "STRING_VALUE",
 * //         Resolution: "STRING_VALUE",
 * //         AspectRatio: "STRING_VALUE",
 * //         MaxWidth: "STRING_VALUE",
 * //         MaxHeight: "STRING_VALUE",
 * //         SizingPolicy: "STRING_VALUE",
 * //         PaddingPolicy: "STRING_VALUE",
 * //       },
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPresetsCommandInput - {@link ListPresetsCommandInput}
 * @returns {@link ListPresetsCommandOutput}
 * @see {@link ListPresetsCommandInput} for command's `input` shape.
 * @see {@link ListPresetsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 * @throws {@link ElasticTranscoderServiceException}
 * <p>Base exception class for all service exceptions from ElasticTranscoder service.</p>
 *
 */
export class ListPresetsCommand extends $Command<
  ListPresetsCommandInput,
  ListPresetsCommandOutput,
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
  constructor(readonly input: ListPresetsCommandInput) {
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
  ): Handler<ListPresetsCommandInput, ListPresetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPresetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListPresetsCommand";
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
  private serialize(input: ListPresetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPresetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPresetsCommandOutput> {
    return de_ListPresetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
