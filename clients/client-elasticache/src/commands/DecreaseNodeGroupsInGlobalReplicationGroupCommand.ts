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
  DecreaseNodeGroupsInGlobalReplicationGroupMessage,
  DecreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog,
  DecreaseNodeGroupsInGlobalReplicationGroupResult,
  DecreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand,
  serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandInput
  extends DecreaseNodeGroupsInGlobalReplicationGroupMessage {}
export interface DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  extends DecreaseNodeGroupsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Decreases the number of node groups in a Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DecreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DecreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DecreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
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

  constructor(readonly input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
    DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DecreaseNodeGroupsInGlobalReplicationGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DecreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DecreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
