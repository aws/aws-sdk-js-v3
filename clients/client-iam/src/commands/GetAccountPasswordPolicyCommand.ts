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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountPasswordPolicyResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountPasswordPolicyCommand,
  serializeAws_queryGetAccountPasswordPolicyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link GetAccountPasswordPolicyCommand}.
 */
export interface GetAccountPasswordPolicyCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountPasswordPolicyCommand}.
 */
export interface GetAccountPasswordPolicyCommandOutput extends GetAccountPasswordPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the password policy for the Amazon Web Services account. This tells you the complexity
 *             requirements and mandatory rotation periods for the IAM user passwords in your account.
 *             For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetAccountPasswordPolicyCommandInput - {@link GetAccountPasswordPolicyCommandInput}
 * @returns {@link GetAccountPasswordPolicyCommandOutput}
 * @see {@link GetAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 *
 * @example To see the current account password policy
 * ```javascript
 * // The following command displays details about the password policy for the current AWS account.
 * const input = undefined;
 * const command = new GetAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PasswordPolicy": {
 *     "AllowUsersToChangePassword": false,
 *     "ExpirePasswords": false,
 *     "HardExpiry": false,
 *     "MaxPasswordAge": 90,
 *     "MinimumPasswordLength": 8,
 *     "PasswordReusePrevention": 12,
 *     "RequireLowercaseCharacters": false,
 *     "RequireNumbers": true,
 *     "RequireSymbols": true,
 *     "RequireUppercaseCharacters": false
 *   }
 * }
 * *\/
 * // example id: 5e4598c7-c425-431f-8af1-19073b3c4a5f
 * ```
 *
 */
export class GetAccountPasswordPolicyCommand extends $Command<
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
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
  constructor(readonly input: GetAccountPasswordPolicyCommandInput) {
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
  ): Handler<GetAccountPasswordPolicyCommandInput, GetAccountPasswordPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountPasswordPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountPasswordPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetAccountPasswordPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountPasswordPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountPasswordPolicyCommandOutput> {
    return deserializeAws_queryGetAccountPasswordPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
