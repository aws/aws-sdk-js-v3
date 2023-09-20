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

import {
  GetRandomPasswordRequest,
  GetRandomPasswordResponse,
  GetRandomPasswordResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetRandomPasswordCommand, se_GetRandomPasswordCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRandomPasswordCommand}.
 */
export interface GetRandomPasswordCommandInput extends GetRandomPasswordRequest {}
/**
 * @public
 *
 * The output of {@link GetRandomPasswordCommand}.
 */
export interface GetRandomPasswordCommandOutput extends GetRandomPasswordResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates a random password. We recommend that you specify the
 *       maximum length and include every character type that the system you are generating a password
 *       for can support.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:GetRandomPassword</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, GetRandomPasswordCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, GetRandomPasswordCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const input = { // GetRandomPasswordRequest
 *   PasswordLength: Number("long"),
 *   ExcludeCharacters: "STRING_VALUE",
 *   ExcludeNumbers: true || false,
 *   ExcludePunctuation: true || false,
 *   ExcludeUppercase: true || false,
 *   ExcludeLowercase: true || false,
 *   IncludeSpace: true || false,
 *   RequireEachIncludedType: true || false,
 * };
 * const command = new GetRandomPasswordCommand(input);
 * const response = await client.send(command);
 * // { // GetRandomPasswordResponse
 * //   RandomPassword: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRandomPasswordCommandInput - {@link GetRandomPasswordCommandInput}
 * @returns {@link GetRandomPasswordCommandOutput}
 * @see {@link GetRandomPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRandomPasswordCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 * @example To generate a random password
 * ```javascript
 * // The following example shows how to request a randomly generated password. This example includes the optional flags to require spaces and at least one character of each included type. It specifies a length of 20 characters.
 * const input = {
 *   "IncludeSpace": true,
 *   "PasswordLength": 20,
 *   "RequireEachIncludedType": true
 * };
 * const command = new GetRandomPasswordCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RandomPassword": "EXAMPLE-PASSWORD"
 * }
 * *\/
 * // example id: to-generate-a-random-password-1524000546092
 * ```
 *
 */
export class GetRandomPasswordCommand extends $Command<
  GetRandomPasswordCommandInput,
  GetRandomPasswordCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetRandomPasswordCommandInput) {
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
  ): Handler<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRandomPasswordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "GetRandomPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetRandomPasswordResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "secretsmanager",
        operation: "GetRandomPassword",
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
  private serialize(input: GetRandomPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRandomPasswordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRandomPasswordCommandOutput> {
    return de_GetRandomPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
