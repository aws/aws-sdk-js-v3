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
  IncreaseNodeGroupsInGlobalReplicationGroupMessage,
  IncreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog,
  IncreaseNodeGroupsInGlobalReplicationGroupResult,
  IncreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
  serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandInput
  extends IncreaseNodeGroupsInGlobalReplicationGroupMessage {}
export interface IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  extends IncreaseNodeGroupsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * <p>Increase the number of node groups in the Global datastore</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, IncreaseNodeGroupsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new IncreaseNodeGroupsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class IncreaseNodeGroupsInGlobalReplicationGroupCommand extends $Command<
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
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

  constructor(readonly input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput) {
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
    IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        IncreaseNodeGroupsInGlobalReplicationGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "IncreaseNodeGroupsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupMessageFilterSensitiveLog,
      outputFilterSensitiveLog: IncreaseNodeGroupsInGlobalReplicationGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
