import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteSnapshotScheduleInput, DeleteSnapshotScheduleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSnapshotScheduleCommand,
  serializeAws_json1_1DeleteSnapshotScheduleCommand,
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

export type DeleteSnapshotScheduleCommandInput = DeleteSnapshotScheduleInput;
export type DeleteSnapshotScheduleCommandOutput = DeleteSnapshotScheduleOutput & __MetadataBearer;

/**
 * <p>Deletes a snapshot of a volume.</p>
 *
 *          <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API
 *          action enables you to delete a snapshot schedule for a volume. For more information, see
 *             <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/backing-up-volumes.html">Backing up your
 *             volumes</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). This operation is only supported in
 *          stored and cached volume gateway types.</p>
 *
 *          <note>
 *
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>
 *          </note>
 */
export class DeleteSnapshotScheduleCommand extends $Command<
  DeleteSnapshotScheduleCommandInput,
  DeleteSnapshotScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSnapshotScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSnapshotScheduleCommandInput, DeleteSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSnapshotScheduleInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSnapshotScheduleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotScheduleCommandOutput> {
    return deserializeAws_json1_1DeleteSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
