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
import { DescribeGlobalReplicationGroupsMessage, DescribeGlobalReplicationGroupsResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeGlobalReplicationGroupsCommand,
  serializeAws_queryDescribeGlobalReplicationGroupsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeGlobalReplicationGroupsCommand}.
 */
export interface DescribeGlobalReplicationGroupsCommandInput extends DescribeGlobalReplicationGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalReplicationGroupsCommand}.
 */
export interface DescribeGlobalReplicationGroupsCommandOutput
  extends DescribeGlobalReplicationGroupsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeGlobalReplicationGroupsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeGlobalReplicationGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeGlobalReplicationGroupsCommandInput - {@link DescribeGlobalReplicationGroupsCommandInput}
 * @returns {@link DescribeGlobalReplicationGroupsCommandOutput}
 * @see {@link DescribeGlobalReplicationGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalReplicationGroupsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 *
 */
export class DescribeGlobalReplicationGroupsCommand extends $Command<
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalReplicationGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeGlobalReplicationGroupsCommand";
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
  private serialize(
    input: DescribeGlobalReplicationGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeGlobalReplicationGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGlobalReplicationGroupsCommandOutput> {
    return deserializeAws_queryDescribeGlobalReplicationGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
