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
import { FailoverGlobalReplicationGroupMessage, FailoverGlobalReplicationGroupResult } from "../models/models_0";
import {
  de_FailoverGlobalReplicationGroupCommand,
  se_FailoverGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link FailoverGlobalReplicationGroupCommand}.
 */
export interface FailoverGlobalReplicationGroupCommandInput extends FailoverGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link FailoverGlobalReplicationGroupCommand}.
 */
export interface FailoverGlobalReplicationGroupCommandOutput
  extends FailoverGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Used to failover the primary region to a secondary region. The secondary region will
 *             become primary, and all other clusters will become secondary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, FailoverGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // FailoverGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   PrimaryRegion: "STRING_VALUE", // required
 *   PrimaryReplicationGroupId: "STRING_VALUE", // required
 * };
 * const command = new FailoverGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * // { // FailoverGlobalReplicationGroupResult
 * //   GlobalReplicationGroup: { // GlobalReplicationGroup
 * //     GlobalReplicationGroupId: "STRING_VALUE",
 * //     GlobalReplicationGroupDescription: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     Members: [ // GlobalReplicationGroupMemberList
 * //       { // GlobalReplicationGroupMember
 * //         ReplicationGroupId: "STRING_VALUE",
 * //         ReplicationGroupRegion: "STRING_VALUE",
 * //         Role: "STRING_VALUE",
 * //         AutomaticFailover: "enabled" || "disabled" || "enabling" || "disabling",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClusterEnabled: true || false,
 * //     GlobalNodeGroups: [ // GlobalNodeGroupList
 * //       { // GlobalNodeGroup
 * //         GlobalNodeGroupId: "STRING_VALUE",
 * //         Slots: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AuthTokenEnabled: true || false,
 * //     TransitEncryptionEnabled: true || false,
 * //     AtRestEncryptionEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FailoverGlobalReplicationGroupCommandInput - {@link FailoverGlobalReplicationGroupCommandInput}
 * @returns {@link FailoverGlobalReplicationGroupCommandOutput}
 * @see {@link FailoverGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class FailoverGlobalReplicationGroupCommand extends $Command<
  FailoverGlobalReplicationGroupCommandInput,
  FailoverGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
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
  constructor(readonly input: FailoverGlobalReplicationGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverGlobalReplicationGroupCommandInput, FailoverGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FailoverGlobalReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "FailoverGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "FailoverGlobalReplicationGroup",
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
  private serialize(
    input: FailoverGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_FailoverGlobalReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FailoverGlobalReplicationGroupCommandOutput> {
    return de_FailoverGlobalReplicationGroupCommand(output, context);
  }
}
