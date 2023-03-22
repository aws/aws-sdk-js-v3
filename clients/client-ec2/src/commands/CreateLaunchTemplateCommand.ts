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
  CreateLaunchTemplateRequest,
  CreateLaunchTemplateRequestFilterSensitiveLog,
  CreateLaunchTemplateResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateLaunchTemplateCommand,
  serializeAws_ec2CreateLaunchTemplateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CreateLaunchTemplateCommand}.
 */
export interface CreateLaunchTemplateCommandInput extends CreateLaunchTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchTemplateCommand}.
 */
export interface CreateLaunchTemplateCommandOutput extends CreateLaunchTemplateResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a launch template.</p>
 *          <p>A launch template contains the parameters to launch an instance. When you launch an
 *             instance using <a>RunInstances</a>, you can specify a launch template instead
 *             of providing the launch parameters in the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch
 *                 an instance from a launch template</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>If you want to clone an existing launch template as the basis for creating a new
 *             launch template, you can use the Amazon EC2 console. The API, SDKs, and CLI do not support
 *             cloning a template. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template-from-existing-launch-template">Create a launch template from an existing launch template</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateLaunchTemplateCommandInput - {@link CreateLaunchTemplateCommandInput}
 * @returns {@link CreateLaunchTemplateCommandOutput}
 * @see {@link CreateLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To create a launch template
 * ```javascript
 * // This example creates a launch template that specifies the subnet in which to launch the instance, assigns a public IP address and an IPv6 address to the instance, and creates a tag for the instance.
 * const input = {
 *   "LaunchTemplateData": {
 *     "ImageId": "ami-8c1be5f6",
 *     "InstanceType": "t2.small",
 *     "NetworkInterfaces": [
 *       {
 *         "AssociatePublicIpAddress": true,
 *         "DeviceIndex": 0,
 *         "Ipv6AddressCount": 1,
 *         "SubnetId": "subnet-7b16de0c"
 *       }
 *     ],
 *     "TagSpecifications": [
 *       {
 *         "ResourceType": "instance",
 *         "Tags": [
 *           {
 *             "Key": "Name",
 *             "Value": "webserver"
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   "LaunchTemplateName": "my-template",
 *   "VersionDescription": "WebVersion1"
 * };
 * const command = new CreateLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplate": {
 *     "CreateTime": "2017-11-27T09:13:24.000Z",
 *     "CreatedBy": "arn:aws:iam::123456789012:root",
 *     "DefaultVersionNumber": 1,
 *     "LatestVersionNumber": 1,
 *     "LaunchTemplateId": "lt-01238c059e3466abc",
 *     "LaunchTemplateName": "my-template"
 *   }
 * }
 * *\/
 * // example id: to-create-a-launch-template-1529023655488
 * ```
 *
 */
export class CreateLaunchTemplateCommand extends $Command<
  CreateLaunchTemplateCommandInput,
  CreateLaunchTemplateCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateLaunchTemplateCommandInput) {
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
  ): Handler<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateLaunchTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateLaunchTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateLaunchTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchTemplateCommandOutput> {
    return deserializeAws_ec2CreateLaunchTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
