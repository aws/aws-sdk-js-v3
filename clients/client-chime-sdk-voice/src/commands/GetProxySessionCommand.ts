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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  GetProxySessionRequest,
  GetProxySessionResponse,
  GetProxySessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetProxySessionCommand, se_GetProxySessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProxySessionCommand}.
 */
export interface GetProxySessionCommandInput extends GetProxySessionRequest {}
/**
 * @public
 *
 * The output of {@link GetProxySessionCommand}.
 */
export interface GetProxySessionCommandOutput extends GetProxySessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetProxySessionCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetProxySessionCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetProxySessionRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   ProxySessionId: "STRING_VALUE", // required
 * };
 * const command = new GetProxySessionCommand(input);
 * const response = await client.send(command);
 * // { // GetProxySessionResponse
 * //   ProxySession: { // ProxySession
 * //     VoiceConnectorId: "STRING_VALUE",
 * //     ProxySessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "Open" || "InProgress" || "Closed",
 * //     ExpiryMinutes: Number("int"),
 * //     Capabilities: [ // CapabilityList
 * //       "Voice" || "SMS",
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     EndedTimestamp: new Date("TIMESTAMP"),
 * //     Participants: [ // Participants
 * //       { // Participant
 * //         PhoneNumber: "STRING_VALUE",
 * //         ProxyPhoneNumber: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 * //     GeoMatchLevel: "Country" || "AreaCode",
 * //     GeoMatchParams: { // GeoMatchParams
 * //       Country: "STRING_VALUE", // required
 * //       AreaCode: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProxySessionCommandInput - {@link GetProxySessionCommandInput}
 * @returns {@link GetProxySessionCommandOutput}
 * @see {@link GetProxySessionCommandInput} for command's `input` shape.
 * @see {@link GetProxySessionCommandOutput} for command's `response` shape.
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
export class GetProxySessionCommand extends $Command<
  GetProxySessionCommandInput,
  GetProxySessionCommandOutput,
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
  constructor(readonly input: GetProxySessionCommandInput) {
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
  ): Handler<GetProxySessionCommandInput, GetProxySessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetProxySessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetProxySessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetProxySessionResponseFilterSensitiveLog,
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
  private serialize(input: GetProxySessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetProxySessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProxySessionCommandOutput> {
    return de_GetProxySessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
