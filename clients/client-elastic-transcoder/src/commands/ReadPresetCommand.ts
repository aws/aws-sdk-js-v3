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
import { ReadPresetRequest, ReadPresetResponse } from "../models/models_0";
import { de_ReadPresetCommand, se_ReadPresetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReadPresetCommand}.
 */
export interface ReadPresetCommandInput extends ReadPresetRequest {}
/**
 * @public
 *
 * The output of {@link ReadPresetCommand}.
 */
export interface ReadPresetCommandOutput extends ReadPresetResponse, __MetadataBearer {}

/**
 * @public
 * <p>The ReadPreset operation gets detailed information about a preset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ReadPresetCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ReadPresetCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = { // ReadPresetRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new ReadPresetCommand(input);
 * const response = await client.send(command);
 * // { // ReadPresetResponse
 * //   Preset: { // Preset
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Container: "STRING_VALUE",
 * //     Audio: { // AudioParameters
 * //       Codec: "STRING_VALUE",
 * //       SampleRate: "STRING_VALUE",
 * //       BitRate: "STRING_VALUE",
 * //       Channels: "STRING_VALUE",
 * //       AudioPackingMode: "STRING_VALUE",
 * //       CodecOptions: { // AudioCodecOptions
 * //         Profile: "STRING_VALUE",
 * //         BitDepth: "STRING_VALUE",
 * //         BitOrder: "STRING_VALUE",
 * //         Signed: "STRING_VALUE",
 * //       },
 * //     },
 * //     Video: { // VideoParameters
 * //       Codec: "STRING_VALUE",
 * //       CodecOptions: { // CodecOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       KeyframesMaxDist: "STRING_VALUE",
 * //       FixedGOP: "STRING_VALUE",
 * //       BitRate: "STRING_VALUE",
 * //       FrameRate: "STRING_VALUE",
 * //       MaxFrameRate: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       MaxWidth: "STRING_VALUE",
 * //       MaxHeight: "STRING_VALUE",
 * //       DisplayAspectRatio: "STRING_VALUE",
 * //       SizingPolicy: "STRING_VALUE",
 * //       PaddingPolicy: "STRING_VALUE",
 * //       Watermarks: [ // PresetWatermarks
 * //         { // PresetWatermark
 * //           Id: "STRING_VALUE",
 * //           MaxWidth: "STRING_VALUE",
 * //           MaxHeight: "STRING_VALUE",
 * //           SizingPolicy: "STRING_VALUE",
 * //           HorizontalAlign: "STRING_VALUE",
 * //           HorizontalOffset: "STRING_VALUE",
 * //           VerticalAlign: "STRING_VALUE",
 * //           VerticalOffset: "STRING_VALUE",
 * //           Opacity: "STRING_VALUE",
 * //           Target: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Thumbnails: { // Thumbnails
 * //       Format: "STRING_VALUE",
 * //       Interval: "STRING_VALUE",
 * //       Resolution: "STRING_VALUE",
 * //       AspectRatio: "STRING_VALUE",
 * //       MaxWidth: "STRING_VALUE",
 * //       MaxHeight: "STRING_VALUE",
 * //       SizingPolicy: "STRING_VALUE",
 * //       PaddingPolicy: "STRING_VALUE",
 * //     },
 * //     Type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ReadPresetCommandInput - {@link ReadPresetCommandInput}
 * @returns {@link ReadPresetCommandOutput}
 * @see {@link ReadPresetCommandInput} for command's `input` shape.
 * @see {@link ReadPresetCommandOutput} for command's `response` shape.
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
export class ReadPresetCommand extends $Command<
  ReadPresetCommandInput,
  ReadPresetCommandOutput,
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
  constructor(readonly input: ReadPresetCommandInput) {
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
  ): Handler<ReadPresetCommandInput, ReadPresetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReadPresetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ReadPresetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EtsCustomerService",
        operation: "ReadPreset",
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
  private serialize(input: ReadPresetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReadPresetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReadPresetCommandOutput> {
    return de_ReadPresetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
