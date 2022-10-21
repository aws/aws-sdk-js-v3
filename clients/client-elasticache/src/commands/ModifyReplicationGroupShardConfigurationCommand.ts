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
import {
  ModifyReplicationGroupShardConfigurationMessage,
  ModifyReplicationGroupShardConfigurationMessageFilterSensitiveLog,
  ModifyReplicationGroupShardConfigurationResult,
  ModifyReplicationGroupShardConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyReplicationGroupShardConfigurationCommand,
  serializeAws_queryModifyReplicationGroupShardConfigurationCommand,
} from "../protocols/Aws_query";

export interface ModifyReplicationGroupShardConfigurationCommandInput
  extends ModifyReplicationGroupShardConfigurationMessage {}
export interface ModifyReplicationGroupShardConfigurationCommandOutput
  extends ModifyReplicationGroupShardConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Modifies a replication group's shards (node groups) by allowing you to
 *             add shards, remove shards, or rebalance the keyspaces among existing shards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyReplicationGroupShardConfigurationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyReplicationGroupShardConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReplicationGroupShardConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationGroupShardConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class ModifyReplicationGroupShardConfigurationCommand extends $Command<
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
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

  constructor(readonly input: ModifyReplicationGroupShardConfigurationCommandInput) {
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
  ): Handler<
    ModifyReplicationGroupShardConfigurationCommandInput,
    ModifyReplicationGroupShardConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ModifyReplicationGroupShardConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyReplicationGroupShardConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyReplicationGroupShardConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyReplicationGroupShardConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyReplicationGroupShardConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyReplicationGroupShardConfigurationCommandOutput> {
    return deserializeAws_queryModifyReplicationGroupShardConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
