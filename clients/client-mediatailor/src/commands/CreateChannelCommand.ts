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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { de_CreateChannelCommand, se_CreateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // CreateChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 *   FillerSlate: { // SlateSource
 *     SourceLocationName: "STRING_VALUE",
 *     VodSourceName: "STRING_VALUE",
 *   },
 *   Outputs: [ // RequestOutputs // required
 *     { // RequestOutputItem
 *       DashPlaylistSettings: { // DashPlaylistSettings
 *         ManifestWindowSeconds: Number("int"),
 *         MinBufferTimeSeconds: Number("int"),
 *         MinUpdatePeriodSeconds: Number("int"),
 *         SuggestedPresentationDelaySeconds: Number("int"),
 *       },
 *       HlsPlaylistSettings: { // HlsPlaylistSettings
 *         ManifestWindowSeconds: Number("int"),
 *         AdMarkupType: [ // adMarkupTypes
 *           "DATERANGE" || "SCTE35_ENHANCED",
 *         ],
 *       },
 *       ManifestName: "STRING_VALUE", // required
 *       SourceGroup: "STRING_VALUE", // required
 *     },
 *   ],
 *   PlaybackMode: "LOOP" || "LINEAR", // required
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tier: "BASIC" || "STANDARD",
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelName: "STRING_VALUE",
 * //   ChannelState: "RUNNING" || "STOPPED",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FillerSlate: { // SlateSource
 * //     SourceLocationName: "STRING_VALUE",
 * //     VodSourceName: "STRING_VALUE",
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Outputs: [ // ResponseOutputs
 * //     { // ResponseOutputItem
 * //       DashPlaylistSettings: { // DashPlaylistSettings
 * //         ManifestWindowSeconds: Number("int"),
 * //         MinBufferTimeSeconds: Number("int"),
 * //         MinUpdatePeriodSeconds: Number("int"),
 * //         SuggestedPresentationDelaySeconds: Number("int"),
 * //       },
 * //       HlsPlaylistSettings: { // HlsPlaylistSettings
 * //         ManifestWindowSeconds: Number("int"),
 * //         AdMarkupType: [ // adMarkupTypes
 * //           "DATERANGE" || "SCTE35_ENHANCED",
 * //         ],
 * //       },
 * //       ManifestName: "STRING_VALUE", // required
 * //       PlaybackUrl: "STRING_VALUE", // required
 * //       SourceGroup: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   PlaybackMode: "STRING_VALUE",
 * //   Tags: { // __mapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class CreateChannelCommand extends $Command<
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
  MediaTailorClientResolvedConfig
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
  constructor(readonly input: CreateChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelCommandInput, CreateChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "CreateChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "CreateChannel",
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
  private serialize(input: CreateChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelCommandOutput> {
    return de_CreateChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
