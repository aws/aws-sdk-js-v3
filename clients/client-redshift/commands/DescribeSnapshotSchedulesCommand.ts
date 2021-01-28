import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeSnapshotSchedulesCommand,
  serializeAws_queryDescribeSnapshotSchedulesCommand,
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

export type DescribeSnapshotSchedulesCommandInput = DescribeSnapshotSchedulesMessage;
export type DescribeSnapshotSchedulesCommandOutput = DescribeSnapshotSchedulesOutputMessage & __MetadataBearer;

/**
 * <p>Returns a list of snapshot schedules. </p>
 */
export class DescribeSnapshotSchedulesCommand extends $Command<
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSnapshotSchedulesCommandInput) {
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
  ): Handler<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeSnapshotSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotSchedulesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotSchedulesOutputMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSnapshotSchedulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotSchedulesCommandOutput> {
    return deserializeAws_queryDescribeSnapshotSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
