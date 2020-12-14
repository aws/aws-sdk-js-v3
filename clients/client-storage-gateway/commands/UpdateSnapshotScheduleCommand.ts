import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSnapshotScheduleCommand,
  serializeAws_json1_1UpdateSnapshotScheduleCommand,
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

export type UpdateSnapshotScheduleCommandInput = UpdateSnapshotScheduleInput;
export type UpdateSnapshotScheduleCommandOutput = UpdateSnapshotScheduleOutput & __MetadataBearer;

/**
 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
 *          supported in the cached volume and stored volume gateway types.</p>
 *
 *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
 *          creation time of the volume. You can use this API to change the snapshot schedule
 *          configured for the volume.</p>
 *
 *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
 *          update, and the schedule information, including when you want the snapshot to begin on a
 *          day and the frequency (in hours) of snapshots.</p>
 */
export class UpdateSnapshotScheduleCommand extends $Command<
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSnapshotScheduleCommandInput) {
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
  ): Handler<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSnapshotScheduleInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSnapshotScheduleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSnapshotScheduleCommandOutput> {
    return deserializeAws_json1_1UpdateSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
