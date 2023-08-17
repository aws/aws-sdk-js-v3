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
} from "@smithy/types";

import { CreateImpersonationRoleRequest, CreateImpersonationRoleResponse } from "../models/models_0";
import { de_CreateImpersonationRoleCommand, se_CreateImpersonationRoleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandInput extends CreateImpersonationRoleRequest {}
/**
 * @public
 *
 * The output of {@link CreateImpersonationRoleCommand}.
 */
export interface CreateImpersonationRoleCommandOutput extends CreateImpersonationRoleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an impersonation role for the given WorkMail organization.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request completes no more than one
 *          time. With an idempotent request, if the original request completes successfully, any
 *          subsequent retries also complete successfully without performing any further
 *          actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // CreateImpersonationRoleRequest
 *   ClientToken: "STRING_VALUE",
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "FULL_ACCESS" || "READ_ONLY", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // ImpersonationRuleList // required
 *     { // ImpersonationRule
 *       ImpersonationRuleId: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Effect: "ALLOW" || "DENY", // required
 *       TargetUsers: [ // TargetUsers
 *         "STRING_VALUE",
 *       ],
 *       NotTargetUsers: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * // { // CreateImpersonationRoleResponse
 * //   ImpersonationRoleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImpersonationRoleCommandInput - {@link CreateImpersonationRoleCommandInput}
 * @returns {@link CreateImpersonationRoleCommandOutput}
 * @see {@link CreateImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link CreateImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
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
export class CreateImpersonationRoleCommand extends $Command<
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
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
  constructor(readonly input: CreateImpersonationRoleCommandInput) {
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
  ): Handler<CreateImpersonationRoleCommandInput, CreateImpersonationRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImpersonationRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CreateImpersonationRoleCommand";
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
  private serialize(input: CreateImpersonationRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateImpersonationRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImpersonationRoleCommandOutput> {
    return de_CreateImpersonationRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
