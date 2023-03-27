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
  CreatePhoneNumberOrderRequest,
  CreatePhoneNumberOrderRequestFilterSensitiveLog,
  CreatePhoneNumberOrderResponse,
  CreatePhoneNumberOrderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePhoneNumberOrderCommand,
  serializeAws_restJson1CreatePhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreatePhoneNumberOrderCommand}.
 */
export interface CreatePhoneNumberOrderCommandInput extends CreatePhoneNumberOrderRequest {}
/**
 * @public
 *
 * The output of {@link CreatePhoneNumberOrderCommand}.
 */
export interface CreatePhoneNumberOrderCommandOutput extends CreatePhoneNumberOrderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreatePhoneNumberOrderCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreatePhoneNumberOrderCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = {
 *   ProductType: "VoiceConnector" || "SipMediaApplicationDialIn", // required
 *   E164PhoneNumbers: [ // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreatePhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreatePhoneNumberOrderCommandInput - {@link CreatePhoneNumberOrderCommandInput}
 * @returns {@link CreatePhoneNumberOrderCommandOutput}
 * @see {@link CreatePhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link CreatePhoneNumberOrderCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreatePhoneNumberOrderCommand extends $Command<
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
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
  constructor(readonly input: CreatePhoneNumberOrderCommandInput) {
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
  ): Handler<CreatePhoneNumberOrderCommandInput, CreatePhoneNumberOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePhoneNumberOrderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "CreatePhoneNumberOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePhoneNumberOrderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePhoneNumberOrderResponseFilterSensitiveLog,
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
  private serialize(input: CreatePhoneNumberOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePhoneNumberOrderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePhoneNumberOrderCommandOutput> {
    return deserializeAws_restJson1CreatePhoneNumberOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
