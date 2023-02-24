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
  CreateImageRequest,
  CreateImageRequestFilterSensitiveLog,
  CreateImageResult,
  CreateImageResultFilterSensitiveLog,
} from "../models/models_1";
import { deserializeAws_ec2CreateImageCommand, serializeAws_ec2CreateImageCommand } from "../protocols/Aws_ec2";

export interface CreateImageCommandInput extends CreateImageRequest {}
export interface CreateImageCommandOutput extends CreateImageResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance
 *      	that is either running or stopped.</p>
 *          <p>By default, when Amazon EC2 creates the new AMI, it reboots the instance so that it can
 * 					take snapshots of the attached volumes while data is at rest, in order to ensure a consistent
 * 					state. You can set the <code>NoReboot</code> parameter to <code>true</code> in the API request,
 * 					or use the <code>--no-reboot</code> option in the CLI to prevent Amazon EC2 from shutting down and
 * 					rebooting the instance.</p>
 *          <important>
 *             <p>If you choose to bypass the shutdown and reboot process by setting the <code>NoReboot</code>
 * 					parameter to <code>true</code> in the API request, or by using the <code>--no-reboot</code> option
 * 					in the CLI, we can't guarantee the file system integrity of the created image.</p>
 *          </important>
 *          <p>If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the
 *      	new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI,
 *      	the instance automatically launches with those additional volumes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Create an Amazon EBS-backed Linux
 *         AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateImageCommand extends $Command<
  CreateImageCommandInput,
  CreateImageCommandOutput,
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

  constructor(readonly input: CreateImageCommandInput) {
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
  ): Handler<CreateImageCommandInput, CreateImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImageCommandOutput> {
    return deserializeAws_ec2CreateImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
