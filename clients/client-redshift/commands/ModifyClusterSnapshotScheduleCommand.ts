import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSnapshotScheduleMessage } from "../models/models_1";
import {
  deserializeAws_queryModifyClusterSnapshotScheduleCommand,
  serializeAws_queryModifyClusterSnapshotScheduleCommand,
} from "../protocols/Aws_query";
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

export type ModifyClusterSnapshotScheduleCommandInput = ModifyClusterSnapshotScheduleMessage;
export type ModifyClusterSnapshotScheduleCommandOutput = __MetadataBearer;

/**
 * <p>Modifies a snapshot schedule for a cluster.</p>
 */
export class ModifyClusterSnapshotScheduleCommand extends $Command<
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterSnapshotScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterSnapshotScheduleCommandInput, ModifyClusterSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterSnapshotScheduleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterSnapshotScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput> {
    return deserializeAws_queryModifyClusterSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
