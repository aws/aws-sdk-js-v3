import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { SnapshotSchedule } from "../models/models_0";
import { ModifySnapshotScheduleMessage } from "../models/models_1";
import {
  deserializeAws_queryModifySnapshotScheduleCommand,
  serializeAws_queryModifySnapshotScheduleCommand,
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

export type ModifySnapshotScheduleCommandInput = ModifySnapshotScheduleMessage;
export type ModifySnapshotScheduleCommandOutput = SnapshotSchedule & __MetadataBearer;

/**
 * <p>Modifies a snapshot schedule. Any schedule associated with a cluster is modified
 *             asynchronously.</p>
 */
export class ModifySnapshotScheduleCommand extends $Command<
  ModifySnapshotScheduleCommandInput,
  ModifySnapshotScheduleCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifySnapshotScheduleCommandInput) {
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
  ): Handler<ModifySnapshotScheduleCommandInput, ModifySnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySnapshotScheduleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SnapshotSchedule.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifySnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifySnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifySnapshotScheduleCommandOutput> {
    return deserializeAws_queryModifySnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
