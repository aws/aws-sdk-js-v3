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
  ValidateResourcePolicyRequest,
  ValidateResourcePolicyRequestFilterSensitiveLog,
  ValidateResourcePolicyResponse,
  ValidateResourcePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ValidateResourcePolicyCommand,
  serializeAws_json1_1ValidateResourcePolicyCommand,
} from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

export interface ValidateResourcePolicyCommandInput extends ValidateResourcePolicyRequest {}
export interface ValidateResourcePolicyCommandOutput extends ValidateResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Validates that a resource policy does not grant a wide range of principals access to
 *       your secret. A resource-based policy is optional for secrets.</p>
 *          <p>The API performs three checks when validating the policy:</p>
 *          <ul>
 *             <li>
 *                <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not
 *           allow broad access to your secret, for example policies that use a wildcard for the principal.</p>
 *             </li>
 *             <li>
 *                <p>Checks for correct syntax in a policy.</p>
 *             </li>
 *             <li>
 *                <p>Verifies the policy does not lock out a caller.</p>
 *             </li>
 *          </ul>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:ValidateResourcePolicy</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ValidateResourcePolicyCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ValidateResourcePolicyCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new ValidateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link ValidateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 */
export class ValidateResourcePolicyCommand extends $Command<
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
  SecretsManagerClientResolvedConfig
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

  constructor(readonly input: ValidateResourcePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ValidateResourcePolicyCommandInput, ValidateResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateResourcePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ValidateResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateResourcePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateResourcePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ValidateResourcePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateResourcePolicyCommandOutput> {
    return deserializeAws_json1_1ValidateResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
