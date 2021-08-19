import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSnapshotsCommand,
  serializeAws_json1_1DescribeSnapshotsCommand,
} from "../protocols/Aws_json1_1";
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

export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResponse, __MetadataBearer {}

/**
 * <p>Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
 *          or just the snapshots associated with a particular cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeSnapshotsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DescribeSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return deserializeAws_json1_1DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
