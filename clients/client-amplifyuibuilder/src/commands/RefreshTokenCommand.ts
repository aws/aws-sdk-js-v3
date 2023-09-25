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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import {
  RefreshTokenRequest,
  RefreshTokenRequestFilterSensitiveLog,
  RefreshTokenResponse,
  RefreshTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RefreshTokenCommand, se_RefreshTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RefreshTokenCommand}.
 */
export interface RefreshTokenCommandInput extends RefreshTokenRequest {}
/**
 * @public
 *
 * The output of {@link RefreshTokenCommand}.
 */
export interface RefreshTokenCommandOutput extends RefreshTokenResponse, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This is for internal use.</p>
 *          </note>
 *          <p>Amplify uses this action to refresh a previously issued access token that might have expired.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, RefreshTokenCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, RefreshTokenCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // RefreshTokenRequest
 *   provider: "STRING_VALUE", // required
 *   refreshTokenBody: { // RefreshTokenRequestBody
 *     token: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *   },
 * };
 * const command = new RefreshTokenCommand(input);
 * const response = await client.send(command);
 * // { // RefreshTokenResponse
 * //   accessToken: "STRING_VALUE", // required
 * //   expiresIn: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param RefreshTokenCommandInput - {@link RefreshTokenCommandInput}
 * @returns {@link RefreshTokenCommandOutput}
 * @see {@link RefreshTokenCommandInput} for command's `input` shape.
 * @see {@link RefreshTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 */
export class RefreshTokenCommand extends $Command<
  RefreshTokenCommandInput,
  RefreshTokenCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
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
  constructor(readonly input: RefreshTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RefreshTokenCommandInput, RefreshTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RefreshTokenCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "RefreshTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RefreshTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RefreshTokenResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyUIBuilder",
        operation: "RefreshToken",
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
  private serialize(input: RefreshTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RefreshTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RefreshTokenCommandOutput> {
    return de_RefreshTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
