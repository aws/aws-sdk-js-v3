// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { PutPlaybackConfigurationRequest, PutPlaybackConfigurationResponse } from "../models/models_0";
import { de_PutPlaybackConfigurationCommand, se_PutPlaybackConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutPlaybackConfigurationCommand}.
 */
export interface PutPlaybackConfigurationCommandInput extends PutPlaybackConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutPlaybackConfigurationCommand}.
 */
export interface PutPlaybackConfigurationCommandOutput extends PutPlaybackConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, PutPlaybackConfigurationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, PutPlaybackConfigurationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // PutPlaybackConfigurationRequest
 *   AdDecisionServerUrl: "STRING_VALUE",
 *   AvailSuppression: { // AvailSuppression
 *     Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 *     Value: "STRING_VALUE",
 *     FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 *   },
 *   Bumper: { // Bumper
 *     EndUrl: "STRING_VALUE",
 *     StartUrl: "STRING_VALUE",
 *   },
 *   CdnConfiguration: { // CdnConfiguration
 *     AdSegmentUrlPrefix: "STRING_VALUE",
 *     ContentSegmentUrlPrefix: "STRING_VALUE",
 *   },
 *   ConfigurationAliases: { // ConfigurationAliasesRequest
 *     "<keys>": { // __mapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DashConfiguration: { // DashConfigurationForPut
 *     MpdLocation: "STRING_VALUE",
 *     OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 *   },
 *   LivePreRollConfiguration: { // LivePreRollConfiguration
 *     AdDecisionServerUrl: "STRING_VALUE",
 *     MaxDurationSeconds: Number("int"),
 *   },
 *   ManifestProcessingRules: { // ManifestProcessingRules
 *     AdMarkerPassthrough: { // AdMarkerPassthrough
 *       Enabled: true || false,
 *     },
 *   },
 *   Name: "STRING_VALUE", // required
 *   PersonalizationThresholdSeconds: Number("int"),
 *   SlateAdUrl: "STRING_VALUE",
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TranscodeProfileName: "STRING_VALUE",
 *   VideoContentSourceUrl: "STRING_VALUE",
 * };
 * const command = new PutPlaybackConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutPlaybackConfigurationResponse
 * //   AdDecisionServerUrl: "STRING_VALUE",
 * //   AvailSuppression: { // AvailSuppression
 * //     Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 * //     Value: "STRING_VALUE",
 * //     FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 * //   },
 * //   Bumper: { // Bumper
 * //     EndUrl: "STRING_VALUE",
 * //     StartUrl: "STRING_VALUE",
 * //   },
 * //   CdnConfiguration: { // CdnConfiguration
 * //     AdSegmentUrlPrefix: "STRING_VALUE",
 * //     ContentSegmentUrlPrefix: "STRING_VALUE",
 * //   },
 * //   ConfigurationAliases: { // ConfigurationAliasesResponse
 * //     "<keys>": { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DashConfiguration: { // DashConfiguration
 * //     ManifestEndpointPrefix: "STRING_VALUE",
 * //     MpdLocation: "STRING_VALUE",
 * //     OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 * //   },
 * //   HlsConfiguration: { // HlsConfiguration
 * //     ManifestEndpointPrefix: "STRING_VALUE",
 * //   },
 * //   LivePreRollConfiguration: { // LivePreRollConfiguration
 * //     AdDecisionServerUrl: "STRING_VALUE",
 * //     MaxDurationSeconds: Number("int"),
 * //   },
 * //   LogConfiguration: { // LogConfiguration
 * //     PercentEnabled: Number("int"), // required
 * //   },
 * //   ManifestProcessingRules: { // ManifestProcessingRules
 * //     AdMarkerPassthrough: { // AdMarkerPassthrough
 * //       Enabled: true || false,
 * //     },
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PersonalizationThresholdSeconds: Number("int"),
 * //   PlaybackConfigurationArn: "STRING_VALUE",
 * //   PlaybackEndpointPrefix: "STRING_VALUE",
 * //   SessionInitializationEndpointPrefix: "STRING_VALUE",
 * //   SlateAdUrl: "STRING_VALUE",
 * //   Tags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TranscodeProfileName: "STRING_VALUE",
 * //   VideoContentSourceUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutPlaybackConfigurationCommandInput - {@link PutPlaybackConfigurationCommandInput}
 * @returns {@link PutPlaybackConfigurationCommandOutput}
 * @see {@link PutPlaybackConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPlaybackConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class PutPlaybackConfigurationCommand extends $Command<
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
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
  constructor(readonly input: PutPlaybackConfigurationCommandInput) {
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
  ): Handler<PutPlaybackConfigurationCommandInput, PutPlaybackConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPlaybackConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "PutPlaybackConfigurationCommand";
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
  private serialize(input: PutPlaybackConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPlaybackConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPlaybackConfigurationCommandOutput> {
    return de_PutPlaybackConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
