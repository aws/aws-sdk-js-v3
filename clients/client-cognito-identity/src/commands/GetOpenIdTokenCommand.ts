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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import {
  GetOpenIdTokenInput,
  GetOpenIdTokenInputFilterSensitiveLog,
  GetOpenIdTokenResponse,
  GetOpenIdTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetOpenIdTokenCommand,
  serializeAws_json1_1GetOpenIdTokenCommand,
} from "../protocols/Aws_json1_1";

export interface GetOpenIdTokenCommandInput extends GetOpenIdTokenInput {}
export interface GetOpenIdTokenCommandOutput extends GetOpenIdTokenResponse, __MetadataBearer {}

/**
 * <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by
 *             <a>GetId</a>. You can optionally add additional logins for the identity.
 *          Supplying multiple logins creates an implicit link.</p>
 *          <p>The OpenID token is valid for 10 minutes.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetOpenIdTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpenIdTokenCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export class GetOpenIdTokenCommand extends $Command<
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput,
  CognitoIdentityClientResolvedConfig
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

  constructor(readonly input: GetOpenIdTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOpenIdTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetOpenIdTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOpenIdTokenInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetOpenIdTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOpenIdTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOpenIdTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOpenIdTokenCommandOutput> {
    return deserializeAws_json1_1GetOpenIdTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
