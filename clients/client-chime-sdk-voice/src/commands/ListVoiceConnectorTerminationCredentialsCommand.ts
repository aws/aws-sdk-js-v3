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
import {
  ListVoiceConnectorTerminationCredentialsRequest,
  ListVoiceConnectorTerminationCredentialsResponse,
  ListVoiceConnectorTerminationCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListVoiceConnectorTerminationCredentialsCommand,
  se_ListVoiceConnectorTerminationCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVoiceConnectorTerminationCredentialsCommand}.
 */
export interface ListVoiceConnectorTerminationCredentialsCommandInput
  extends ListVoiceConnectorTerminationCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceConnectorTerminationCredentialsCommand}.
 */
export interface ListVoiceConnectorTerminationCredentialsCommandOutput
  extends ListVoiceConnectorTerminationCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListVoiceConnectorTerminationCredentialsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListVoiceConnectorTerminationCredentialsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListVoiceConnectorTerminationCredentialsRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new ListVoiceConnectorTerminationCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceConnectorTerminationCredentialsResponse
 * //   Usernames: [ // SensitiveStringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVoiceConnectorTerminationCredentialsCommandInput - {@link ListVoiceConnectorTerminationCredentialsCommandInput}
 * @returns {@link ListVoiceConnectorTerminationCredentialsCommandOutput}
 * @see {@link ListVoiceConnectorTerminationCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorTerminationCredentialsCommandOutput} for command's `response` shape.
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
export class ListVoiceConnectorTerminationCredentialsCommand extends $Command<
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
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
  constructor(readonly input: ListVoiceConnectorTerminationCredentialsCommandInput) {
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
    ListVoiceConnectorTerminationCredentialsCommandInput,
    ListVoiceConnectorTerminationCredentialsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListVoiceConnectorTerminationCredentialsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "ListVoiceConnectorTerminationCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListVoiceConnectorTerminationCredentialsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKTelephonyService",
        operation: "ListVoiceConnectorTerminationCredentials",
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
    input: ListVoiceConnectorTerminationCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListVoiceConnectorTerminationCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> {
    return de_ListVoiceConnectorTerminationCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
