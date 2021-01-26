import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ExportSnapshotRequest, ExportSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1ExportSnapshotCommand,
  serializeAws_json1_1ExportSnapshotCommand,
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

export type ExportSnapshotCommandInput = ExportSnapshotRequest;
export type ExportSnapshotCommandOutput = ExportSnapshotResult & __MetadataBearer;

/**
 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
 *       This operation results in an export snapshot record that can be used with the <code>create
 *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
 *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
 *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
 *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
 *       source Lightsail snapshot.</p>
 *          <p></p>
 *          <p>The <code>export snapshot</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>source snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 *          <note>
 *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
 *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
 *          </note>
 */
export class ExportSnapshotCommand extends $Command<
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportSnapshotCommandInput) {
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
  ): Handler<ExportSnapshotCommandInput, ExportSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ExportSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportSnapshotCommandOutput> {
    return deserializeAws_json1_1ExportSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
