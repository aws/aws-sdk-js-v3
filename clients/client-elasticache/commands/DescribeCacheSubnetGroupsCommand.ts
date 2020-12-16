import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheSubnetGroupMessage, DescribeCacheSubnetGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeCacheSubnetGroupsCommand,
  serializeAws_queryDescribeCacheSubnetGroupsCommand,
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

export type DescribeCacheSubnetGroupsCommandInput = DescribeCacheSubnetGroupsMessage;
export type DescribeCacheSubnetGroupsCommandOutput = CacheSubnetGroupMessage & __MetadataBearer;

/**
 * <p>Returns a list of cache subnet group
 *             descriptions. If a subnet group name is specified, the list  contains only the
 *             description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
 *         </p>
 */
export class DescribeCacheSubnetGroupsCommand extends $Command<
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCacheSubnetGroupsCommandInput) {
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
  ): Handler<DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheSubnetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCacheSubnetGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CacheSubnetGroupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCacheSubnetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCacheSubnetGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheSubnetGroupsCommandOutput> {
    return deserializeAws_queryDescribeCacheSubnetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
