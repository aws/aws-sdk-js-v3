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
  UpdateUserPoolDomainRequest,
  UpdateUserPoolDomainRequestFilterSensitiveLog,
  UpdateUserPoolDomainResponse,
  UpdateUserPoolDomainResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateUserPoolDomainCommand,
  serializeAws_json1_1UpdateUserPoolDomainCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateUserPoolDomainCommandInput extends UpdateUserPoolDomainRequest {}
export interface UpdateUserPoolDomainCommandOutput extends UpdateUserPoolDomainResponse, __MetadataBearer {}

/**
 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
 *             pool.</p>
 *         <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
 *             certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p>
 *         <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and
 *             sign-in pages for your application. When you set up a custom domain, you provide a
 *             certificate that you manage with Certificate Manager (ACM). When necessary, you can use this
 *             operation to change the certificate that you applied to your custom domain.</p>
 *         <p>Usually, this is unnecessary following routine certificate renewal with ACM. When
 *             you renew your existing certificate in ACM, the ARN for your certificate remains the
 *             same, and your custom domain uses the new certificate automatically.</p>
 *         <p>However, if you replace your existing certificate with a new one, ACM gives the new
 *             certificate a new ARN. To apply the new certificate to your custom domain, you must
 *             provide this ARN to Amazon Cognito.</p>
 *         <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as
 *             the Amazon Web Services Region.</p>
 *         <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new
 *             certificate to your custom domain.</p>
 *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new UpdateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class UpdateUserPoolDomainCommand extends $Command<
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
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

  constructor(readonly input: UpdateUserPoolDomainCommandInput) {
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
  ): Handler<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserPoolDomainCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateUserPoolDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserPoolDomainRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserPoolDomainResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserPoolDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserPoolDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserPoolDomainCommandOutput> {
    return deserializeAws_json1_1UpdateUserPoolDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
