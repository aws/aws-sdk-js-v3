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
import { DescribeChannelRequest, DescribeChannelResponse } from "../models/models_0";
import { de_DescribeChannelCommand, se_DescribeChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandInput extends DescribeChannelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandOutput extends DescribeChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a channel. For information about MediaTailor channels, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html">Working with channels</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DescribeChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DescribeChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // DescribeChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelResponse
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
 * //   LogConfiguration: { // LogConfigurationForChannel
 * //     LogTypes: [ // LogTypes
 * //       "AS_RUN",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelCommandInput - {@link DescribeChannelCommandInput}
 * @returns {@link DescribeChannelCommandOutput}
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class DescribeChannelCommand extends $Command<
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
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
  constructor(readonly input: DescribeChannelCommandInput) {
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
  ): Handler<DescribeChannelCommandInput, DescribeChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "DescribeChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "DescribeChannel",
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
  private serialize(input: DescribeChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChannelCommandOutput> {
    return de_DescribeChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
