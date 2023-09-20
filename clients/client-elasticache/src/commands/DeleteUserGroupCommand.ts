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
import { DeleteUserGroupMessage, UserGroup } from "../models/models_0";
import { de_DeleteUserGroupCommand, se_DeleteUserGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserGroupCommand}.
 */
export interface DeleteUserGroupCommandInput extends DeleteUserGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteUserGroupCommand}.
 */
export interface DeleteUserGroupCommandOutput extends UserGroup, __MetadataBearer {}

/**
 * @public
 * <p>For Redis engine version 6.0 onwards: Deletes a user group. The user group must first
 *             be disassociated from the replication group before it can be deleted. For more
 *             information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteUserGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteUserGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteUserGroupMessage
 *   UserGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserGroupCommand(input);
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
 * @param DeleteUserGroupCommandInput - {@link DeleteUserGroupCommandInput}
 * @returns {@link DeleteUserGroupCommandOutput}
 * @see {@link DeleteUserGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteUserGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
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
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class DeleteUserGroupCommand extends $Command<
  DeleteUserGroupCommandInput,
  DeleteUserGroupCommandOutput,
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
  constructor(readonly input: DeleteUserGroupCommandInput) {
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
  ): Handler<DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteUserGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteUserGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DeleteUserGroup",
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
  private serialize(input: DeleteUserGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteUserGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserGroupCommandOutput> {
    return de_DeleteUserGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
