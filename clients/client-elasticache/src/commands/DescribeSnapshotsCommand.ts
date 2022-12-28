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
  DescribeSnapshotsListMessage,
  DescribeSnapshotsListMessageFilterSensitiveLog,
  DescribeSnapshotsMessage,
  DescribeSnapshotsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeSnapshotsCommand,
  serializeAws_queryDescribeSnapshotsCommand,
} from "../protocols/Aws_query";

export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsMessage {}
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsListMessage, __MetadataBearer {}

/**
 * <p>Returns information about cluster or replication group snapshots.
 *             By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally
 *             describe a single snapshot, or just the snapshots associated with a particular cache
 *             cluster.</p>
 *          <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeSnapshotsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
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

  constructor(readonly input: DescribeSnapshotsCommandInput) {
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
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotsListMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return deserializeAws_queryDescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
