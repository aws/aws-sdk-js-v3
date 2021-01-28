import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EnableSnapshotCopyMessage, EnableSnapshotCopyResult } from "../models/models_0";
import {
  deserializeAws_queryEnableSnapshotCopyCommand,
  serializeAws_queryEnableSnapshotCopyCommand,
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

export type EnableSnapshotCopyCommandInput = EnableSnapshotCopyMessage;
export type EnableSnapshotCopyCommandOutput = EnableSnapshotCopyResult & __MetadataBearer;

/**
 * <p>Enables the automatic copy of snapshots from one region to another region for a
 *             specified cluster.</p>
 */
export class EnableSnapshotCopyCommand extends $Command<
  EnableSnapshotCopyCommandInput,
  EnableSnapshotCopyCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableSnapshotCopyCommandInput) {
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
  ): Handler<EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "EnableSnapshotCopyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSnapshotCopyMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EnableSnapshotCopyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableSnapshotCopyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableSnapshotCopyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableSnapshotCopyCommandOutput> {
    return deserializeAws_queryEnableSnapshotCopyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
