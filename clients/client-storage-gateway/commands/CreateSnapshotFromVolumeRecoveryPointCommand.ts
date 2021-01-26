import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import {
  CreateSnapshotFromVolumeRecoveryPointInput,
  CreateSnapshotFromVolumeRecoveryPointOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand,
  serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand,
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

export type CreateSnapshotFromVolumeRecoveryPointCommandInput = CreateSnapshotFromVolumeRecoveryPointInput;
export type CreateSnapshotFromVolumeRecoveryPointCommandOutput = CreateSnapshotFromVolumeRecoveryPointOutput &
  __MetadataBearer;

/**
 * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only
 *          supported in the cached volume gateway type.</p>
 *
 *          <p>A volume recovery point is a point in time at which all data of the volume is consistent
 *          and from which you can create a snapshot. To get a list of volume recovery point for cached
 *          volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p>
 *
 *          <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). You must also provide a description for
 *          the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
 *          its description appear in the AWS Storage Gateway console.
 *           In response, the gateway returns
 *          you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
 *          it when you want to create a volume from a snapshot.</p>
 *
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 */
export class CreateSnapshotFromVolumeRecoveryPointCommand extends $Command<
  CreateSnapshotFromVolumeRecoveryPointCommandInput,
  CreateSnapshotFromVolumeRecoveryPointCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSnapshotFromVolumeRecoveryPointCommandInput) {
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
  ): Handler<CreateSnapshotFromVolumeRecoveryPointCommandInput, CreateSnapshotFromVolumeRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateSnapshotFromVolumeRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotFromVolumeRecoveryPointInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotFromVolumeRecoveryPointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateSnapshotFromVolumeRecoveryPointCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSnapshotFromVolumeRecoveryPointCommandOutput> {
    return deserializeAws_json1_1CreateSnapshotFromVolumeRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
