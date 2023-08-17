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
  PutVoiceConnectorProxyRequest,
  PutVoiceConnectorProxyRequestFilterSensitiveLog,
  PutVoiceConnectorProxyResponse,
  PutVoiceConnectorProxyResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PutVoiceConnectorProxyCommand, se_PutVoiceConnectorProxyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorProxyCommand}.
 */
export interface PutVoiceConnectorProxyCommandInput extends PutVoiceConnectorProxyRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorProxyCommand}.
 */
export interface PutVoiceConnectorProxyCommandOutput extends PutVoiceConnectorProxyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorProxyCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorProxyCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorProxyRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   DefaultSessionExpiryMinutes: Number("int"), // required
 *   PhoneNumberPoolCountries: [ // CountryList // required
 *     "STRING_VALUE",
 *   ],
 *   FallBackPhoneNumber: "STRING_VALUE",
 *   Disabled: true || false,
 * };
 * const command = new PutVoiceConnectorProxyCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorProxyResponse
 * //   Proxy: { // Proxy
 * //     DefaultSessionExpiryMinutes: Number("int"),
 * //     Disabled: true || false,
 * //     FallBackPhoneNumber: "STRING_VALUE",
 * //     PhoneNumberCountries: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorProxyCommandInput - {@link PutVoiceConnectorProxyCommandInput}
 * @returns {@link PutVoiceConnectorProxyCommandOutput}
 * @see {@link PutVoiceConnectorProxyCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorProxyCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
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
export class PutVoiceConnectorProxyCommand extends $Command<
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
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
  constructor(readonly input: PutVoiceConnectorProxyCommandInput) {
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
  ): Handler<PutVoiceConnectorProxyCommandInput, PutVoiceConnectorProxyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVoiceConnectorProxyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "PutVoiceConnectorProxyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutVoiceConnectorProxyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutVoiceConnectorProxyResponseFilterSensitiveLog,
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
  private serialize(input: PutVoiceConnectorProxyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutVoiceConnectorProxyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutVoiceConnectorProxyCommandOutput> {
    return de_PutVoiceConnectorProxyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
