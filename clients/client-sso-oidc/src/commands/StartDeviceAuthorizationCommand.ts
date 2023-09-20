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

import { StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse } from "../models/models_0";
import { de_StartDeviceAuthorizationCommand, se_StartDeviceAuthorizationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandInput extends StartDeviceAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandOutput extends StartDeviceAuthorizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates device authorization by requesting a pair of verification codes from the
 *       authorization service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // StartDeviceAuthorizationRequest
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   startUrl: "STRING_VALUE", // required
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // StartDeviceAuthorizationResponse
 * //   deviceCode: "STRING_VALUE",
 * //   userCode: "STRING_VALUE",
 * //   verificationUri: "STRING_VALUE",
 * //   verificationUriComplete: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   interval: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDeviceAuthorizationCommandInput - {@link StartDeviceAuthorizationCommandInput}
 * @returns {@link StartDeviceAuthorizationCommandOutput}
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientException} (client fault)
 *  <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link SlowDownException} (client fault)
 *  <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 */
export class StartDeviceAuthorizationCommand extends $Command<
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
  SSOOIDCClientResolvedConfig
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
  constructor(readonly input: StartDeviceAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDeviceAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "StartDeviceAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSSOOIDCService",
        operation: "StartDeviceAuthorization",
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
  private serialize(input: StartDeviceAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDeviceAuthorizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeviceAuthorizationCommandOutput> {
    return de_StartDeviceAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
