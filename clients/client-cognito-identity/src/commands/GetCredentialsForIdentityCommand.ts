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
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityInputFilterSensitiveLog,
  GetCredentialsForIdentityResponse,
  GetCredentialsForIdentityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCredentialsForIdentityCommand,
  serializeAws_json1_1GetCredentialsForIdentityCommand,
} from "../protocols/Aws_json1_1";

export interface GetCredentialsForIdentityCommandInput extends GetCredentialsForIdentityInput {}
export interface GetCredentialsForIdentityCommandOutput extends GetCredentialsForIdentityResponse, __MetadataBearer {}

/**
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export class GetCredentialsForIdentityCommand extends $Command<
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
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

  constructor(readonly input: GetCredentialsForIdentityCommandInput) {
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
  ): Handler<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCredentialsForIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "GetCredentialsForIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCredentialsForIdentityInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetCredentialsForIdentityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCredentialsForIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCredentialsForIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCredentialsForIdentityCommandOutput> {
    return deserializeAws_json1_1GetCredentialsForIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
