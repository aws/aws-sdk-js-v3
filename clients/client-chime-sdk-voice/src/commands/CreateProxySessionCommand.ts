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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  CreateProxySessionRequest,
  CreateProxySessionRequestFilterSensitiveLog,
  CreateProxySessionResponse,
  CreateProxySessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateProxySessionCommand, se_CreateProxySessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateProxySessionCommand}.
 */
export interface CreateProxySessionCommandInput extends CreateProxySessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxySessionCommand}.
 */
export interface CreateProxySessionCommandOutput extends CreateProxySessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a proxy session for the specified Amazon Chime SDK Voice Connector for
 *             the specified participant phone numbers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateProxySessionCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateProxySessionCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateProxySessionRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   ParticipantPhoneNumbers: [ // ParticipantPhoneNumberList // required
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   ExpiryMinutes: Number("int"),
 *   Capabilities: [ // CapabilityList // required
 *     "Voice" || "SMS",
 *   ],
 *   NumberSelectionBehavior: "PreferSticky" || "AvoidSticky",
 *   GeoMatchLevel: "Country" || "AreaCode",
 *   GeoMatchParams: { // GeoMatchParams
 *     Country: "STRING_VALUE", // required
 *     AreaCode: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateProxySessionCommandInput - {@link CreateProxySessionCommandInput}
 * @returns {@link CreateProxySessionCommandOutput}
 * @see {@link CreateProxySessionCommandInput} for command's `input` shape.
 * @see {@link CreateProxySessionCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateProxySessionCommand extends $Command<
  CreateProxySessionCommandInput,
  CreateProxySessionCommandOutput,
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
  constructor(readonly input: CreateProxySessionCommandInput) {
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
  ): Handler<CreateProxySessionCommandInput, CreateProxySessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProxySessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "CreateProxySessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProxySessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProxySessionResponseFilterSensitiveLog,
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
  private serialize(input: CreateProxySessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProxySessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProxySessionCommandOutput> {
    return de_CreateProxySessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
