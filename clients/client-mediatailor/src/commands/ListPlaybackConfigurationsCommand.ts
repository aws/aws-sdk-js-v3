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
import { ListPlaybackConfigurationsRequest, ListPlaybackConfigurationsResponse } from "../models/models_0";
import { de_ListPlaybackConfigurationsCommand, se_ListPlaybackConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPlaybackConfigurationsCommand}.
 */
export interface ListPlaybackConfigurationsCommandInput extends ListPlaybackConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPlaybackConfigurationsCommand}.
 */
export interface ListPlaybackConfigurationsCommandOutput extends ListPlaybackConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves existing playback configurations. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with Configurations in AWS Elemental MediaTailor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPlaybackConfigurationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPlaybackConfigurationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListPlaybackConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlaybackConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlaybackConfigurationsResponse
 * //   Items: [ // __listOfPlaybackConfiguration
 * //     { // PlaybackConfiguration
 * //       AdDecisionServerUrl: "STRING_VALUE",
 * //       AvailSuppression: { // AvailSuppression
 * //         Mode: "OFF" || "BEHIND_LIVE_EDGE" || "AFTER_LIVE_EDGE",
 * //         Value: "STRING_VALUE",
 * //         FillPolicy: "FULL_AVAIL_ONLY" || "PARTIAL_AVAIL",
 * //       },
 * //       Bumper: { // Bumper
 * //         EndUrl: "STRING_VALUE",
 * //         StartUrl: "STRING_VALUE",
 * //       },
 * //       CdnConfiguration: { // CdnConfiguration
 * //         AdSegmentUrlPrefix: "STRING_VALUE",
 * //         ContentSegmentUrlPrefix: "STRING_VALUE",
 * //       },
 * //       ConfigurationAliases: { // ConfigurationAliasesResponse
 * //         "<keys>": { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       DashConfiguration: { // DashConfiguration
 * //         ManifestEndpointPrefix: "STRING_VALUE",
 * //         MpdLocation: "STRING_VALUE",
 * //         OriginManifestType: "SINGLE_PERIOD" || "MULTI_PERIOD",
 * //       },
 * //       HlsConfiguration: { // HlsConfiguration
 * //         ManifestEndpointPrefix: "STRING_VALUE",
 * //       },
 * //       LivePreRollConfiguration: { // LivePreRollConfiguration
 * //         AdDecisionServerUrl: "STRING_VALUE",
 * //         MaxDurationSeconds: Number("int"),
 * //       },
 * //       LogConfiguration: { // LogConfiguration
 * //         PercentEnabled: Number("int"), // required
 * //       },
 * //       ManifestProcessingRules: { // ManifestProcessingRules
 * //         AdMarkerPassthrough: { // AdMarkerPassthrough
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       Name: "STRING_VALUE",
 * //       PersonalizationThresholdSeconds: Number("int"),
 * //       PlaybackConfigurationArn: "STRING_VALUE",
 * //       PlaybackEndpointPrefix: "STRING_VALUE",
 * //       SessionInitializationEndpointPrefix: "STRING_VALUE",
 * //       SlateAdUrl: "STRING_VALUE",
 * //       Tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       TranscodeProfileName: "STRING_VALUE",
 * //       VideoContentSourceUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlaybackConfigurationsCommandInput - {@link ListPlaybackConfigurationsCommandInput}
 * @returns {@link ListPlaybackConfigurationsCommandOutput}
 * @see {@link ListPlaybackConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPlaybackConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ListPlaybackConfigurationsCommand extends $Command<
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
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
  constructor(readonly input: ListPlaybackConfigurationsCommandInput) {
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
  ): Handler<ListPlaybackConfigurationsCommandInput, ListPlaybackConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPlaybackConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListPlaybackConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ListPlaybackConfigurations",
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
  private serialize(input: ListPlaybackConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPlaybackConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPlaybackConfigurationsCommandOutput> {
    return de_ListPlaybackConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
