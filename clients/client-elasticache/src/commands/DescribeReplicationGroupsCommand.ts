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
  DescribeReplicationGroupsMessage,
  DescribeReplicationGroupsMessageFilterSensitiveLog,
  ReplicationGroupMessage,
  ReplicationGroupMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeReplicationGroupsCommand,
  serializeAws_queryDescribeReplicationGroupsCommand,
} from "../protocols/Aws_query";

export interface DescribeReplicationGroupsCommandInput extends DescribeReplicationGroupsMessage {}
export interface DescribeReplicationGroupsCommandOutput extends ReplicationGroupMessage, __MetadataBearer {}

/**
 * <p>Returns information about a particular
 *             replication group. If no identifier is specified, <code>DescribeReplicationGroups</code>
 *             returns information about all replication groups.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeReplicationGroupsCommand extends $Command<
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
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

  constructor(readonly input: DescribeReplicationGroupsCommandInput) {
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
  ): Handler<DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeReplicationGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationGroupsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicationGroupMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReplicationGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReplicationGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationGroupsCommandOutput> {
    return deserializeAws_queryDescribeReplicationGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
