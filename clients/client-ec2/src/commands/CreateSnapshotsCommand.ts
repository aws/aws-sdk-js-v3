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

export interface CreateSnapshotsCommandInput extends CreateSnapshotsRequest {}
export interface CreateSnapshotsCommandOutput extends CreateSnapshotsResult, __MetadataBearer {}

/**
 * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3.
 *     Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot
 *     each that is crash-consistent across the instance. Boot volumes can be excluded by changing the
 *     parameters. </p>
 *
 *          <p>You can create multi-volume snapshots of instances in a Region and instances on an
 *   	Outpost. If you create snapshots from an instance in a Region, the snapshots must be stored
 *   	in the same Region as the instance. If you create snapshots from an instance on an Outpost,
 *   	the snapshots can be stored on the same Outpost as the instance, or in the Region for that
 *   	Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotsCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
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
