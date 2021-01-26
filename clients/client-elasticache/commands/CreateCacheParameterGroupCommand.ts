import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateCacheParameterGroupCommand,
  serializeAws_queryCreateCacheParameterGroupCommand,
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

export type CreateCacheParameterGroupCommandInput = CreateCacheParameterGroupMessage;
export type CreateCacheParameterGroupCommandOutput = CreateCacheParameterGroupResult & __MetadataBearer;

/**
 * <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache
 *             cache parameter group is a collection of parameters and their values that are applied to all of the nodes
 *             in any cluster or replication group using the CacheParameterGroup.</p>
 *         <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group
 *             for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can
 *             change the values of specific parameters. For more information, see:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p>
 *             </li>
 *          </ul>
 */
export class CreateCacheParameterGroupCommand extends $Command<
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCacheParameterGroupCommandInput) {
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
  ): Handler<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCacheParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCacheParameterGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCacheParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCacheParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCacheParameterGroupCommandOutput> {
    return deserializeAws_queryCreateCacheParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
