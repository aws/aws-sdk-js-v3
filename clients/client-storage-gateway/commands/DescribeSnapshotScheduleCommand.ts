import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeSnapshotScheduleInput, DescribeSnapshotScheduleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSnapshotScheduleCommand,
  serializeAws_json1_1DescribeSnapshotScheduleCommand,
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

export type DescribeSnapshotScheduleCommandInput = DescribeSnapshotScheduleInput;
export type DescribeSnapshotScheduleCommandOutput = DescribeSnapshotScheduleOutput & __MetadataBearer;

/**
 * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
 *          information includes intervals at which snapshots are automatically initiated on the
 *          volume. This operation is only supported in the cached volume and stored volume
 *          types.</p>
 */
export class DescribeSnapshotScheduleCommand extends $Command<
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotScheduleCommandInput) {
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
  ): Handler<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotScheduleInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotScheduleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotScheduleCommandOutput> {
    return deserializeAws_json1_1DescribeSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
