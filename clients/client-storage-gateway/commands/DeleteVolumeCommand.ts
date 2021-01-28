import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteVolumeInput, DeleteVolumeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteVolumeCommand,
  serializeAws_json1_1DeleteVolumeCommand,
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

export type DeleteVolumeCommandInput = DeleteVolumeInput;
export type DeleteVolumeCommandOutput = DeleteVolumeOutput & __MetadataBearer;

/**
 * <p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API.
 *          This operation is only supported in the cached volume and stored volume types. For stored
 *          volume gateways, the local disk that was configured as the storage volume is not deleted.
 *          You can reuse the local disk to create another storage volume.</p>
 *
 *          <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you
 *          are deleting. You should also make sure there is no snapshot in progress. You can use the
 *          Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are
 *          deleting and check the snapshot status. For more information, go to <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API
 *             Reference</i>.</p>
 *
 *          <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume
 *          you want to delete.</p>
 */
export class DeleteVolumeCommand extends $Command<
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVolumeCommandInput) {
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
  ): Handler<DeleteVolumeCommandInput, DeleteVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVolumeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVolumeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVolumeCommandOutput> {
    return deserializeAws_json1_1DeleteVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
