import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateSnapshotInput, CreateSnapshotOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSnapshotCommand,
  serializeAws_json1_1CreateSnapshotCommand,
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

export type CreateSnapshotCommandInput = CreateSnapshotInput;
export type CreateSnapshotCommandOutput = CreateSnapshotOutput & __MetadataBearer;

/**
 * <p>Initiates a snapshot of a volume.</p>
 *
 *          <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data
 *          to Amazon Simple Storage (Amazon S3) for durable off-site recovery, as well as import the
 *          data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2).
 *          You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API
 *          enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a
 *             snapshot schedule</a>.</p>
 *
 *          <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its
 *          Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS
 *          Storage Gateway takes the snapshot of specified volume, the snapshot and description
 *          appears in the AWS Storage Gateway console. In response, AWS Storage Gateway returns you a
 *          snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it
 *          when you want to create a volume from a snapshot. This operation is only supported in
 *          stored and cached volume gateway type.</p>
 *
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 *
 *          <important>
 *             <p>Volume and snapshot IDs are changing to a longer length ID format. For more
 *             information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p>
 *          </important>
 */
export class CreateSnapshotCommand extends $Command<
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSnapshotCommandInput) {
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
  ): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
