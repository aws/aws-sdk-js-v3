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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  GetFederationTokenRequest,
  GetFederationTokenResponse,
  GetFederationTokenResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_GetFederationTokenCommand, se_GetFederationTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Supports SAML sign-in for Amazon Connect. Retrieves a token for federation. The token is
 *    for the Amazon Connect user which corresponds to the IAM credentials that were
 *    used to invoke this action. </p>
 *          <p>For more information about how SAML sign-in works in Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html ">Configure SAML with
 *      IAM for Amazon Connect in the <i>Amazon Connect Administrator
 *      Guide</i>.</a>
 *          </p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *       Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetFederationTokenRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetFederationTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessToken: "STRING_VALUE",
 * //     AccessTokenExpiration: new Date("TIMESTAMP"),
 * //     RefreshToken: "STRING_VALUE",
 * //     RefreshTokenExpiration: new Date("TIMESTAMP"),
 * //   },
 * //   SignInUrl: "STRING_VALUE",
 * //   UserArn: "STRING_VALUE",
 * //   UserId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFederationTokenCommandInput - {@link GetFederationTokenCommandInput}
 * @returns {@link GetFederationTokenCommandOutput}
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class GetFederationTokenCommand extends $Command<
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
  ConnectClientResolvedConfig
> {
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
  constructor(readonly input: GetFederationTokenCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFederationTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetFederationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetFederationTokenResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "GetFederationToken",
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
  private serialize(input: GetFederationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFederationTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFederationTokenCommandOutput> {
    return de_GetFederationTokenCommand(output, context);
  }
}
