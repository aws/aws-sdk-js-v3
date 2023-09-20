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

import { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/models_0";
import { de_RegisterToWorkMailCommand, se_RegisterToWorkMailCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterToWorkMailCommand}.
 */
export interface RegisterToWorkMailCommandInput extends RegisterToWorkMailRequest {}
/**
 * @public
 *
 * The output of {@link RegisterToWorkMailCommand}.
 */
export interface RegisterToWorkMailCommandOutput extends RegisterToWorkMailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Registers an existing and disabled user, group, or resource for WorkMail use by
 *          associating a mailbox and calendaring capabilities. It performs no change if the user,
 *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
 *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
 *          functionality for this operation is <i>Enable</i>.</p>
 *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
 *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, RegisterToWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, RegisterToWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // RegisterToWorkMailRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 *   Email: "STRING_VALUE", // required
 * };
 * const command = new RegisterToWorkMailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterToWorkMailCommandInput - {@link RegisterToWorkMailCommandInput}
 * @returns {@link RegisterToWorkMailCommandOutput}
 * @see {@link RegisterToWorkMailCommandInput} for command's `input` shape.
 * @see {@link RegisterToWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link EmailAddressInUseException} (client fault)
 *  <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 *
 * @throws {@link EntityAlreadyRegisteredException} (client fault)
 *  <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *  <p>The domain specified is not found in your organization.</p>
 *
 * @throws {@link MailDomainStateException} (client fault)
 *  <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 */
export class RegisterToWorkMailCommand extends $Command<
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: RegisterToWorkMailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterToWorkMailCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "RegisterToWorkMailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkMailService",
        operation: "RegisterToWorkMail",
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
  private serialize(input: RegisterToWorkMailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterToWorkMailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterToWorkMailCommandOutput> {
    return de_RegisterToWorkMailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
