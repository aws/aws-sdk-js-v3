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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyUserMessage, User } from "../models/models_0";
import { de_ModifyUserCommand, se_ModifyUserCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ModifyUserCommand}.
 */
export interface ModifyUserCommandInput extends ModifyUserMessage {}
/**
 * @public
 *
 * The output of {@link ModifyUserCommand}.
 */
export interface ModifyUserCommandOutput extends User, __MetadataBearer {}

/**
 * @public
 * <p>Changes user password(s) and/or access string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyUserMessage
 *   UserId: "STRING_VALUE", // required
 *   AccessString: "STRING_VALUE",
 *   AppendAccessString: "STRING_VALUE",
 *   Passwords: [ // PasswordListInput
 *     "STRING_VALUE",
 *   ],
 *   NoPasswordRequired: true || false,
 *   AuthenticationMode: { // AuthenticationMode
 *     Type: "password" || "no-password-required" || "iam",
 *     Passwords: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ModifyUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyUserCommandInput - {@link ModifyUserCommandInput}
 * @returns {@link ModifyUserCommandOutput}
 * @see {@link ModifyUserCommandInput} for command's `input` shape.
 * @see {@link ModifyUserCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidUserStateFault} (client fault)
 *  <p>The user is not in active state.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 *
 */
export class ModifyUserCommand extends $Command<
  ModifyUserCommandInput,
  ModifyUserCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: ModifyUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyUserCommandInput, ModifyUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyUserCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyUserCommand";
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
  private serialize(input: ModifyUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyUserCommandOutput> {
    return de_ModifyUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
