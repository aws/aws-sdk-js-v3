import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFastSnapshotRestoresRequest, DescribeFastSnapshotRestoresResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeFastSnapshotRestoresCommand,
  serializeAws_ec2DescribeFastSnapshotRestoresCommand,
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

export interface DescribeFastSnapshotRestoresCommandInput extends DescribeFastSnapshotRestoresRequest {}
export interface DescribeFastSnapshotRestoresCommandOutput
  extends DescribeFastSnapshotRestoresResult,
    __MetadataBearer {}

/**
 * <p>Describes the state of fast snapshot restores for your snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DescribeFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFastSnapshotRestoresCommand extends $Command<
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFastSnapshotRestoresCommandInput) {
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
  ): Handler<DescribeFastSnapshotRestoresCommandInput, DescribeFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFastSnapshotRestoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFastSnapshotRestoresResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFastSnapshotRestoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFastSnapshotRestoresCommandOutput> {
    return deserializeAws_ec2DescribeFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
