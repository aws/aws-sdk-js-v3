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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { PutVoiceConnectorOriginationRequest, PutVoiceConnectorOriginationResponse } from "../models/models_0";
import {
  de_PutVoiceConnectorOriginationCommand,
  se_PutVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandInput extends PutVoiceConnectorOriginationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandOutput
  extends PutVoiceConnectorOriginationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates a Voice Connector's origination settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorOriginationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Origination: { // Origination
 *     Routes: [ // OriginationRouteList
 *       { // OriginationRoute
 *         Host: "STRING_VALUE",
 *         Port: Number("int"),
 *         Protocol: "TCP" || "UDP",
 *         Priority: Number("int"),
 *         Weight: Number("int"),
 *       },
 *     ],
 *     Disabled: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorOriginationResponse
 * //   Origination: { // Origination
 * //     Routes: [ // OriginationRouteList
 * //       { // OriginationRoute
 * //         Host: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Protocol: "TCP" || "UDP",
 * //         Priority: Number("int"),
 * //         Weight: Number("int"),
 * //       },
 * //     ],
 * //     Disabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorOriginationCommandInput - {@link PutVoiceConnectorOriginationCommandInput}
 * @returns {@link PutVoiceConnectorOriginationCommandOutput}
 * @see {@link PutVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorOriginationCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 */
export class PutVoiceConnectorOriginationCommand extends $Command<
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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
  constructor(readonly input: PutVoiceConnectorOriginationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutVoiceConnectorOriginationCommandInput, PutVoiceConnectorOriginationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVoiceConnectorOriginationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "PutVoiceConnectorOriginationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "PutVoiceConnectorOrigination",
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
  private serialize(input: PutVoiceConnectorOriginationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutVoiceConnectorOriginationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVoiceConnectorOriginationCommandOutput> {
    return de_PutVoiceConnectorOriginationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
