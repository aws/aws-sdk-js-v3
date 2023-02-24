// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  GetUserPoolMfaConfigRequest,
  GetUserPoolMfaConfigRequestFilterSensitiveLog,
  GetUserPoolMfaConfigResponse,
  GetUserPoolMfaConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetUserPoolMfaConfigCommand,
  serializeAws_json1_1GetUserPoolMfaConfigCommand,
} from "../protocols/Aws_json1_1";

export interface GetUserPoolMfaConfigCommandInput extends GetUserPoolMfaConfigRequest {}
export interface GetUserPoolMfaConfigCommandOutput extends GetUserPoolMfaConfigResponse, __MetadataBearer {}

/**
 * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class GetUserPoolMfaConfigCommand extends $Command<
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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

  constructor(readonly input: GetUserPoolMfaConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserPoolMfaConfigCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetUserPoolMfaConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserPoolMfaConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUserPoolMfaConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetUserPoolMfaConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserPoolMfaConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserPoolMfaConfigCommandOutput> {
    return deserializeAws_json1_1GetUserPoolMfaConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
