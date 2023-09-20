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
import { de_DeleteAccountPasswordPolicyCommand, se_DeleteAccountPasswordPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccountPasswordPolicyCommand}.
 */
export interface DeleteAccountPasswordPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the password policy for the Amazon Web Services account. There are no parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountPasswordPolicyCommandInput - {@link DeleteAccountPasswordPolicyCommandInput}
 * @returns {@link DeleteAccountPasswordPolicyCommandOutput}
 * @see {@link DeleteAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To delete the current account password policy
 * ```javascript
 * // The following command removes the password policy from the current AWS account:
 * const input = undefined;
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * await client.send(command);
 * // example id: 9ddf755e-495c-49bc-ae3b-ea6cc9b8ebcf
 * ```
 *
 */
export class DeleteAccountPasswordPolicyCommand extends $Command<
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
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
  constructor(readonly input: DeleteAccountPasswordPolicyCommandInput) {
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
  ): Handler<DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccountPasswordPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteAccountPasswordPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "DeleteAccountPasswordPolicy",
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
  private serialize(input: DeleteAccountPasswordPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAccountPasswordPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAccountPasswordPolicyCommandOutput> {
    return de_DeleteAccountPasswordPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
