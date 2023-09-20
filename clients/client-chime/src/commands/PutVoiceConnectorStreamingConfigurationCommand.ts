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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationResponse,
} from "../models/models_1";
import {
  de_PutVoiceConnectorStreamingConfigurationCommand,
  se_PutVoiceConnectorStreamingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandInput
  extends PutVoiceConnectorStreamingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorStreamingConfigurationCommand}.
 */
export interface PutVoiceConnectorStreamingConfigurationCommandOutput
  extends PutVoiceConnectorStreamingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming
 *             configuration specifies whether media streaming is enabled for sending to Kinesis.
 *             It also sets the retention period, in hours, for the Amazon Kinesis data.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_PutVoiceConnectorStreamingConfiguration.html">PutVoiceConnectorStreamingConfiguration</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutVoiceConnectorStreamingConfigurationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutVoiceConnectorStreamingConfigurationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // PutVoiceConnectorStreamingConfigurationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   StreamingConfiguration: { // StreamingConfiguration
 *     DataRetentionInHours: Number("int"), // required
 *     Disabled: true || false,
 *     StreamingNotificationTargets: [ // StreamingNotificationTargetList
 *       { // StreamingNotificationTarget
 *         NotificationTarget: "EventBridge" || "SNS" || "SQS", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutVoiceConnectorStreamingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorStreamingConfigurationResponse
 * //   StreamingConfiguration: { // StreamingConfiguration
 * //     DataRetentionInHours: Number("int"), // required
 * //     Disabled: true || false,
 * //     StreamingNotificationTargets: [ // StreamingNotificationTargetList
 * //       { // StreamingNotificationTarget
 * //         NotificationTarget: "EventBridge" || "SNS" || "SQS", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorStreamingConfigurationCommandInput - {@link PutVoiceConnectorStreamingConfigurationCommandInput}
 * @returns {@link PutVoiceConnectorStreamingConfigurationCommandOutput}
 * @see {@link PutVoiceConnectorStreamingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorStreamingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class PutVoiceConnectorStreamingConfigurationCommand extends $Command<
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: PutVoiceConnectorStreamingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutVoiceConnectorStreamingConfigurationCommandInput,
    PutVoiceConnectorStreamingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        PutVoiceConnectorStreamingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutVoiceConnectorStreamingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "UCBuzzConsoleService",
        operation: "PutVoiceConnectorStreamingConfiguration",
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
  private serialize(
    input: PutVoiceConnectorStreamingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutVoiceConnectorStreamingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> {
    return de_PutVoiceConnectorStreamingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
