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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyUserGroupMessage, UserGroup } from "../models/models_0";
import { de_ModifyUserGroupCommand, se_ModifyUserGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyUserGroupCommand}.
 */
export interface ModifyUserGroupCommandInput extends ModifyUserGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyUserGroupCommand}.
 */
export interface ModifyUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * @public
 * <p>Changes the list of users that belong to the user group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ModifyUserGroupMessage
 *   UserGroupId: "STRING_VALUE", // required
 *   UserIdsToAdd: [ // UserIdListInput
 *     "STRING_VALUE",
 *   ],
 *   UserIdsToRemove: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyUserGroupCommand(input);
 * const response = await client.send(command);
 * // { // UserGroup
 * //   UserGroupId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   Engine: "STRING_VALUE",
 * //   UserIds: [ // UserIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   MinimumEngineVersion: "STRING_VALUE",
 * //   PendingChanges: { // UserGroupPendingChanges
 * //     UserIdsToRemove: [
 * //       "STRING_VALUE",
 * //     ],
 * //     UserIdsToAdd: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ReplicationGroups: [ // UGReplicationGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   ARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyUserGroupCommandInput - {@link ModifyUserGroupCommandInput}
 * @returns {@link ModifyUserGroupCommandOutput}
 * @see {@link ModifyUserGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link DefaultUserRequired} (client fault)
 *  <p>You must add default user to a user group.</p>
 *
 * @throws {@link DuplicateUserNameFault} (client fault)
 *  <p>A user with this username already exists.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidUserGroupStateFault} (client fault)
 *  <p>The user group is not in an active state.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link UserGroupNotFoundFault} (client fault)
 *  <p>The user group was not found or does not exist</p>
 *
 * @throws {@link UserNotFoundFault} (client fault)
 *  <p>The user does not exist or could not be found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class ModifyUserGroupCommand extends $Command<
  ModifyUserGroupCommandInput,
  ModifyUserGroupCommandOutput,
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
  constructor(readonly input: ModifyUserGroupCommandInput) {
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
  ): Handler<ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyUserGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyUserGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "ModifyUserGroup",
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
  private serialize(input: ModifyUserGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyUserGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyUserGroupCommandOutput> {
    return de_ModifyUserGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
