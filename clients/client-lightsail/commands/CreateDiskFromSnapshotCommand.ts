import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskFromSnapshotRequest, CreateDiskFromSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDiskFromSnapshotCommand,
  serializeAws_json1_1CreateDiskFromSnapshotCommand,
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

export type CreateDiskFromSnapshotCommandInput = CreateDiskFromSnapshotRequest;
export type CreateDiskFromSnapshotCommandOutput = CreateDiskFromSnapshotResult & __MetadataBearer;

/**
 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting
 *       disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g.,
 *         <code>us-east-2a</code>).</p>
 *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control via
 *       request tags and resource tags applied to the resource identified by <code>disk snapshot
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateDiskFromSnapshotCommand extends $Command<
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDiskFromSnapshotCommandInput) {
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
  ): Handler<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDiskFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDiskFromSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDiskFromSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDiskFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDiskFromSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDiskFromSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateDiskFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
