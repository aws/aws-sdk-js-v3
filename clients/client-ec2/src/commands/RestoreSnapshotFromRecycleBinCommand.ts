import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreSnapshotFromRecycleBinRequest, RestoreSnapshotFromRecycleBinResult } from "../models/models_6";
import {
  deserializeAws_ec2RestoreSnapshotFromRecycleBinCommand,
  serializeAws_ec2RestoreSnapshotFromRecycleBinCommand,
} from "../protocols/Aws_ec2";

export interface RestoreSnapshotFromRecycleBinCommandInput extends RestoreSnapshotFromRecycleBinRequest {}
export interface RestoreSnapshotFromRecycleBinCommandOutput
  extends RestoreSnapshotFromRecycleBinResult,
    __MetadataBearer {}

/**
 * <p>Restores a snapshot from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-snaps.html#recycle-bin-restore-snaps">Restore
 *       snapshots from the Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreSnapshotFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreSnapshotFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreSnapshotFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreSnapshotFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreSnapshotFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RestoreSnapshotFromRecycleBinCommand extends $Command<
  RestoreSnapshotFromRecycleBinCommandInput,
  RestoreSnapshotFromRecycleBinCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreSnapshotFromRecycleBinCommandInput) {
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
  ): Handler<RestoreSnapshotFromRecycleBinCommandInput, RestoreSnapshotFromRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreSnapshotFromRecycleBinCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreSnapshotFromRecycleBinRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreSnapshotFromRecycleBinResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreSnapshotFromRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RestoreSnapshotFromRecycleBinCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreSnapshotFromRecycleBinCommandOutput> {
    return deserializeAws_ec2RestoreSnapshotFromRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
