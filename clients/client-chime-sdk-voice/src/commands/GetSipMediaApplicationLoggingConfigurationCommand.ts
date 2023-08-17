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
  GetSipMediaApplicationLoggingConfigurationRequest,
  GetSipMediaApplicationLoggingConfigurationResponse,
} from "../models/models_0";
import {
  de_GetSipMediaApplicationLoggingConfigurationCommand,
  se_GetSipMediaApplicationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface GetSipMediaApplicationLoggingConfigurationCommandInput
  extends GetSipMediaApplicationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetSipMediaApplicationLoggingConfigurationCommand}.
 */
export interface GetSipMediaApplicationLoggingConfigurationCommandOutput
  extends GetSipMediaApplicationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the logging configuration for the specified SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipMediaApplicationLoggingConfigurationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipMediaApplicationLoggingConfigurationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipMediaApplicationLoggingConfigurationRequest
 *   SipMediaApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetSipMediaApplicationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetSipMediaApplicationLoggingConfigurationResponse
 * //   SipMediaApplicationLoggingConfiguration: { // SipMediaApplicationLoggingConfiguration
 * //     EnableSipMediaApplicationMessageLogs: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSipMediaApplicationLoggingConfigurationCommandInput - {@link GetSipMediaApplicationLoggingConfigurationCommandInput}
 * @returns {@link GetSipMediaApplicationLoggingConfigurationCommandOutput}
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetSipMediaApplicationLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class GetSipMediaApplicationLoggingConfigurationCommand extends $Command<
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
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
  constructor(readonly input: GetSipMediaApplicationLoggingConfigurationCommandInput) {
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
  ): Handler<
    GetSipMediaApplicationLoggingConfigurationCommandInput,
    GetSipMediaApplicationLoggingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetSipMediaApplicationLoggingConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetSipMediaApplicationLoggingConfigurationCommand";
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
  private serialize(
    input: GetSipMediaApplicationLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSipMediaApplicationLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> {
    return de_GetSipMediaApplicationLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
