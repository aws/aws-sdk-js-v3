import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateVersionRequest, CreateLaunchTemplateVersionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateLaunchTemplateVersionCommand,
  serializeAws_ec2CreateLaunchTemplateVersionCommand,
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

export type CreateLaunchTemplateVersionCommandInput = CreateLaunchTemplateVersionRequest;
export type CreateLaunchTemplateVersionCommandOutput = CreateLaunchTemplateVersionResult & __MetadataBearer;

/**
 * <p>Creates a new version for a launch template. You can specify an existing version of
 *             launch template from which to base the new version.</p>
 *         <p>Launch template versions are numbered in the order in which they are created. You
 *             cannot specify, change, or replace the numbering of launch template versions.</p>
 *         <p>For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Managing launch template versions</a>in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreateLaunchTemplateVersionCommand extends $Command<
  CreateLaunchTemplateVersionCommandInput,
  CreateLaunchTemplateVersionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLaunchTemplateVersionCommandInput) {
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
  ): Handler<CreateLaunchTemplateVersionCommandInput, CreateLaunchTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLaunchTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchTemplateVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchTemplateVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLaunchTemplateVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateLaunchTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLaunchTemplateVersionCommandOutput> {
    return deserializeAws_ec2CreateLaunchTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
