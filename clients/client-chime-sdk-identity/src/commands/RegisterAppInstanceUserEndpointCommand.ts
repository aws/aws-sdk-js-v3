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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  RegisterAppInstanceUserEndpointRequest,
  RegisterAppInstanceUserEndpointRequestFilterSensitiveLog,
  RegisterAppInstanceUserEndpointResponse,
} from "../models/models_0";
import {
  de_RegisterAppInstanceUserEndpointCommand,
  se_RegisterAppInstanceUserEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandInput extends RegisterAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandOutput
  extends RegisterAppInstanceUserEndpointResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Registers an endpoint under an Amazon Chime <code>AppInstanceUser</code>. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // RegisterAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Type: "APNS" || "APNS_SANDBOX" || "GCM", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   EndpointAttributes: { // EndpointAttributes
 *     DeviceToken: "STRING_VALUE", // required
 *     VoipDeviceToken: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE", // required
 *   AllowMessages: "ALL" || "NONE",
 * };
 * const command = new RegisterAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAppInstanceUserEndpointResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAppInstanceUserEndpointCommandInput - {@link RegisterAppInstanceUserEndpointCommandInput}
 * @returns {@link RegisterAppInstanceUserEndpointCommandOutput}
 * @see {@link RegisterAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link RegisterAppInstanceUserEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
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
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 */
export class RegisterAppInstanceUserEndpointCommand extends $Command<
  RegisterAppInstanceUserEndpointCommandInput,
  RegisterAppInstanceUserEndpointCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
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
  constructor(readonly input: RegisterAppInstanceUserEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAppInstanceUserEndpointCommandInput, RegisterAppInstanceUserEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterAppInstanceUserEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "RegisterAppInstanceUserEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterAppInstanceUserEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeIdentityService",
        operation: "RegisterAppInstanceUserEndpoint",
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
    input: RegisterAppInstanceUserEndpointCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RegisterAppInstanceUserEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterAppInstanceUserEndpointCommandOutput> {
    return de_RegisterAppInstanceUserEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
