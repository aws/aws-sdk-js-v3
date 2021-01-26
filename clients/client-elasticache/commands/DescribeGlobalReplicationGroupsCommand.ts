import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeGlobalReplicationGroupsMessage, DescribeGlobalReplicationGroupsResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeGlobalReplicationGroupsCommand,
  serializeAws_queryDescribeGlobalReplicationGroupsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeGlobalReplicationGroupsCommandInput = DescribeGlobalReplicationGroupsMessage;
export type DescribeGlobalReplicationGroupsCommandOutput = DescribeGlobalReplicationGroupsResult & __MetadataBearer;

/**
 * <p>Returns information about a particular global replication group. If no identifier is specified, returns information about all Global Datastores. </p>
 */
export class DescribeGlobalReplicationGroupsCommand extends $Command<
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGlobalReplicationGroupsCommandInput) {
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
  ): Handler<DescribeGlobalReplicationGroupsCommandInput, DescribeGlobalReplicationGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeGlobalReplicationGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalReplicationGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalReplicationGroupsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeGlobalReplicationGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeGlobalReplicationGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGlobalReplicationGroupsCommandOutput> {
    return deserializeAws_queryDescribeGlobalReplicationGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
