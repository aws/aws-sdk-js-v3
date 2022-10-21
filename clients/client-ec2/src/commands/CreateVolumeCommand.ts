// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
import {
  CreateVolumeRequest,
  CreateVolumeRequestFilterSensitiveLog,
  Volume,
  VolumeFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2CreateVolumeCommand, serializeAws_ec2CreateVolumeCommand } from "../protocols/Aws_ec2";

export interface CreateVolumeCommandInput extends CreateVolumeRequest {}
export interface CreateVolumeCommandOutput extends Volume, __MetadataBearer {}

/**
 * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p>
 *          <p>You can create a new empty volume or restore a volume from an EBS snapshot.
 *       Any Amazon Web Services Marketplace product codes from the snapshot are propagated to the volume.</p>
 *          <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that
 *       support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically
 *       encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2
 *         resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Create an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateVolumeCommand extends $Command<
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateVolumeCommandInput) {
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
  ): Handler<CreateVolumeCommandInput, CreateVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVolumeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VolumeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVolumeCommandOutput> {
    return deserializeAws_ec2CreateVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
