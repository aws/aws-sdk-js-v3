import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/models_4";
import {
  deserializeAws_ec2EnableFastSnapshotRestoresCommand,
  serializeAws_ec2EnableFastSnapshotRestoresCommand,
} from "../protocols/Aws_ec2";
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

export type EnableFastSnapshotRestoresCommandInput = EnableFastSnapshotRestoresRequest;
export type EnableFastSnapshotRestoresCommandOutput = EnableFastSnapshotRestoresResult & __MetadataBearer;

/**
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class EnableFastSnapshotRestoresCommand extends $Command<
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableFastSnapshotRestoresCommandInput) {
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
  ): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableFastSnapshotRestoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableFastSnapshotRestoresResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableFastSnapshotRestoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableFastSnapshotRestoresCommandOutput> {
    return deserializeAws_ec2EnableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
