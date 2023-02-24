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
  CreateLaunchTemplateVersionRequest,
  CreateLaunchTemplateVersionRequestFilterSensitiveLog,
  CreateLaunchTemplateVersionResult,
  CreateLaunchTemplateVersionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateLaunchTemplateVersionCommand,
  serializeAws_ec2CreateLaunchTemplateVersionCommand,
} from "../protocols/Aws_ec2";

export interface CreateLaunchTemplateVersionCommandInput extends CreateLaunchTemplateVersionRequest {}
export interface CreateLaunchTemplateVersionCommandOutput extends CreateLaunchTemplateVersionResult, __MetadataBearer {}

/**
 * <p>Creates a new version of a launch template. You can specify an existing version of
 *             launch template from which to base the new version.</p>
 *          <p>Launch template versions are numbered in the order in which they are created. You
 *             cannot specify, change, or replace the numbering of launch template versions.</p>
 *          <p>Launch templates are immutable; after you create a launch template, you can't modify
 *             it. Instead, you can create a new version of the launch template that includes any
 *             changes you require.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Modify a launch template (manage launch template versions)</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateLaunchTemplateVersionCommand extends $Command<
  CreateLaunchTemplateVersionCommandInput,
  CreateLaunchTemplateVersionCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchTemplateVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLaunchTemplateVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchTemplateVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchTemplateVersionResultFilterSensitiveLog,
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
