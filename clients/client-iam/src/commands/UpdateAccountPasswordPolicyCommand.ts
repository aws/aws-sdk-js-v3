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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccountPasswordPolicyRequest } from "../models/models_1";
import { de_UpdateAccountPasswordPolicyCommand, se_UpdateAccountPasswordPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountPasswordPolicyCommand}.
 */
export interface UpdateAccountPasswordPolicyCommandInput extends UpdateAccountPasswordPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountPasswordPolicyCommand}.
 */
export interface UpdateAccountPasswordPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the password policy settings for the Amazon Web Services account.</p>
 *          <note>
 *             <p>This operation does not support partial updates. No parameters are required, but
 *                 if you do not specify a parameter, that parameter's value reverts to its default
 *                 value. See the <b>Request Parameters</b> section for each
 *                 parameter's default value. Also note that some parameters do not allow the default
 *                 parameter to be explicitly set. Instead, to invoke the default value, do not include
 *                 that parameter when you invoke the operation.</p>
 *          </note>
 *          <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateAccountPasswordPolicyRequest
 *   MinimumPasswordLength: Number("int"),
 *   RequireSymbols: true || false,
 *   RequireNumbers: true || false,
 *   RequireUppercaseCharacters: true || false,
 *   RequireLowercaseCharacters: true || false,
 *   AllowUsersToChangePassword: true || false,
 *   MaxPasswordAge: Number("int"),
 *   PasswordReusePrevention: Number("int"),
 *   HardExpiry: true || false,
 * };
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountPasswordPolicyCommandInput - {@link UpdateAccountPasswordPolicyCommandInput}
 * @returns {@link UpdateAccountPasswordPolicyCommandOutput}
 * @see {@link UpdateAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To set or change the current account password policy
 * ```javascript
 * // The following command sets the password policy to require a minimum length of eight characters and to require one or more numbers in the password:
 * const input = {
 *   "MinimumPasswordLength": 8,
 *   "RequireNumbers": true
 * };
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * await client.send(command);
 * // example id: c263a1af-37dc-4423-8dba-9790284ef5e0
 * ```
 *
 */
export class UpdateAccountPasswordPolicyCommand extends $Command<
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: UpdateAccountPasswordPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountPasswordPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateAccountPasswordPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "UpdateAccountPasswordPolicy",
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
  private serialize(input: UpdateAccountPasswordPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccountPasswordPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountPasswordPolicyCommandOutput> {
    return de_UpdateAccountPasswordPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
