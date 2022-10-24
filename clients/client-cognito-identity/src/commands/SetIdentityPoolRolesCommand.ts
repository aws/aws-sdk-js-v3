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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetIdentityPoolRolesInput, SetIdentityPoolRolesInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1SetIdentityPoolRolesCommand,
  serializeAws_json1_1SetIdentityPoolRolesCommand,
} from "../protocols/Aws_json1_1";

export interface SetIdentityPoolRolesCommandInput extends SetIdentityPoolRolesInput {}
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export class SetIdentityPoolRolesCommand extends $Command<
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
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

  constructor(readonly input: SetIdentityPoolRolesCommandInput) {
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
  ): Handler<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetIdentityPoolRolesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "SetIdentityPoolRolesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetIdentityPoolRolesInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetIdentityPoolRolesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetIdentityPoolRolesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetIdentityPoolRolesCommandOutput> {
    return deserializeAws_json1_1SetIdentityPoolRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
