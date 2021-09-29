import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationSnapshotCommand,
  serializeAws_json1_1DeleteApplicationSnapshotCommand,
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

export interface DeleteApplicationSnapshotCommandInput extends DeleteApplicationSnapshotRequest {}
export interface DeleteApplicationSnapshotCommandOutput extends DeleteApplicationSnapshotResponse, __MetadataBearer {}

/**
 * <p>Deletes a snapshot of application state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new DeleteApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteApplicationSnapshotCommand extends $Command<
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationSnapshotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApplicationSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
