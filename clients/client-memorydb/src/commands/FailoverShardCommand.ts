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

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { FailoverShardRequest, FailoverShardResponse } from "../models/models_0";
import {
  deserializeAws_json1_1FailoverShardCommand,
  serializeAws_json1_1FailoverShardCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link FailoverShardCommand}.
 */
export interface FailoverShardCommandInput extends FailoverShardRequest {}
/**
 * @public
 *
 * The output of {@link FailoverShardCommand}.
 */
export interface FailoverShardCommandOutput extends FailoverShardResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating
 *          a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, FailoverShardCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, FailoverShardCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new FailoverShardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param FailoverShardCommandInput - {@link FailoverShardCommandInput}
 * @returns {@link FailoverShardCommandOutput}
 * @see {@link FailoverShardCommandInput} for command's `input` shape.
 * @see {@link FailoverShardCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link APICallRateForCustomerExceededFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidKMSKeyFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ShardNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TestFailoverNotAvailableFault} (client fault)
 *  <p></p>
 *
 *
 */
export class FailoverShardCommand extends $Command<
  FailoverShardCommandInput,
  FailoverShardCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: FailoverShardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverShardCommandInput, FailoverShardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, FailoverShardCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "FailoverShardCommand";
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
  private serialize(input: FailoverShardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1FailoverShardCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverShardCommandOutput> {
    return deserializeAws_json1_1FailoverShardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
