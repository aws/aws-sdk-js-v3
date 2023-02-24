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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  VerifyUserAttributeRequest,
  VerifyUserAttributeRequestFilterSensitiveLog,
  VerifyUserAttributeResponse,
  VerifyUserAttributeResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1VerifyUserAttributeCommand,
  serializeAws_json1_1VerifyUserAttributeCommand,
} from "../protocols/Aws_json1_1";

export interface VerifyUserAttributeCommandInput extends VerifyUserAttributeRequest {}
export interface VerifyUserAttributeCommandOutput extends VerifyUserAttributeResponse, __MetadataBearer {}

/**
 * <p>Verifies the specified user attributes in the user pool.</p>
 *         <p>
 *             If your user pool requires verification before Amazon Cognito updates the attribute value,
 *             VerifyUserAttribute updates the affected attribute to its pending value. For more information,
 *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserAttributeUpdateSettingsType.html">
 *             UserAttributeUpdateSettingsType</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifyUserAttributeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifyUserAttributeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new VerifyUserAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyUserAttributeCommandInput} for command's `input` shape.
 * @see {@link VerifyUserAttributeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class VerifyUserAttributeCommand extends $Command<
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
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

  constructor(readonly input: VerifyUserAttributeCommandInput) {
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
  ): Handler<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyUserAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "VerifyUserAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyUserAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VerifyUserAttributeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyUserAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1VerifyUserAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyUserAttributeCommandOutput> {
    return deserializeAws_json1_1VerifyUserAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
