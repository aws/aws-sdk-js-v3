import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSnapshotsRequest, CreateSnapshotsResult } from "../models/models_1";
import { deserializeAws_ec2CreateSnapshotsCommand, serializeAws_ec2CreateSnapshotsCommand } from "../protocols/Aws_ec2";
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

export type CreateSnapshotsCommandInput = CreateSnapshotsRequest;
export type CreateSnapshotsCommandOutput = CreateSnapshotsResult & __MetadataBearer;

/**
 * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
 *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
 *     each that is crash-consistent across the instance. Boot volumes can be excluded by changing the
 *     parameters. </p>
 */
export class CreateSnapshotsCommand extends $Command<
  CreateSnapshotsCommandInput,
  CreateSnapshotsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSnapshotsCommandInput, CreateSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSnapshotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotsCommandOutput> {
    return deserializeAws_ec2CreateSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
