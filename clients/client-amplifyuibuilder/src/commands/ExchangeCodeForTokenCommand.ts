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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import {
  ExchangeCodeForTokenRequest,
  ExchangeCodeForTokenRequestFilterSensitiveLog,
  ExchangeCodeForTokenResponse,
  ExchangeCodeForTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExchangeCodeForTokenCommand,
  serializeAws_restJson1ExchangeCodeForTokenCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ExchangeCodeForTokenCommand}.
 */
export interface ExchangeCodeForTokenCommandInput extends ExchangeCodeForTokenRequest {}
/**
 * @public
 *
 * The output of {@link ExchangeCodeForTokenCommand}.
 */
export interface ExchangeCodeForTokenCommandOutput extends ExchangeCodeForTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Exchanges an access code for a token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExchangeCodeForTokenCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExchangeCodeForTokenCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExchangeCodeForTokenRequest
 *   provider: "STRING_VALUE", // required
 *   request: { // ExchangeCodeForTokenRequestBody
 *     code: "STRING_VALUE", // required
 *     redirectUri: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *   },
 * };
 * const command = new ExchangeCodeForTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ExchangeCodeForTokenCommandInput - {@link ExchangeCodeForTokenCommandInput}
 * @returns {@link ExchangeCodeForTokenCommandOutput}
 * @see {@link ExchangeCodeForTokenCommandInput} for command's `input` shape.
 * @see {@link ExchangeCodeForTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 *
 */
export class ExchangeCodeForTokenCommand extends $Command<
  ExchangeCodeForTokenCommandInput,
  ExchangeCodeForTokenCommandOutput,
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
  constructor(readonly input: ExchangeCodeForTokenCommandInput) {
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
  ): Handler<ExchangeCodeForTokenCommandInput, ExchangeCodeForTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExchangeCodeForTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "ExchangeCodeForTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExchangeCodeForTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExchangeCodeForTokenResponseFilterSensitiveLog,
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
  private serialize(input: ExchangeCodeForTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExchangeCodeForTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExchangeCodeForTokenCommandOutput> {
    return deserializeAws_restJson1ExchangeCodeForTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
