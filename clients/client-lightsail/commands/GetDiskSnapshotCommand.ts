import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDiskSnapshotRequest, GetDiskSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDiskSnapshotCommand,
  serializeAws_json1_1GetDiskSnapshotCommand,
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

export type GetDiskSnapshotCommandInput = GetDiskSnapshotRequest;
export type GetDiskSnapshotCommandOutput = GetDiskSnapshotResult & __MetadataBearer;

/**
 * <p>Returns information about a specific block storage disk snapshot.</p>
 */
export class GetDiskSnapshotCommand extends $Command<
  GetDiskSnapshotCommandInput,
  GetDiskSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDiskSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiskSnapshotCommandInput, GetDiskSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetDiskSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiskSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiskSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiskSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDiskSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiskSnapshotCommandOutput> {
    return deserializeAws_json1_1GetDiskSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
