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
  DescribeLaunchTemplateVersionsRequest,
  DescribeLaunchTemplateVersionsResult,
  DescribeLaunchTemplateVersionsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeLaunchTemplateVersionsCommand,
  serializeAws_ec2DescribeLaunchTemplateVersionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeLaunchTemplateVersionsCommand}.
 */
export interface DescribeLaunchTemplateVersionsCommandInput extends DescribeLaunchTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchTemplateVersionsCommand}.
 */
export interface DescribeLaunchTemplateVersionsCommandOutput
  extends DescribeLaunchTemplateVersionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more versions of a specified launch template. You can describe all
 *             versions, individual versions, or a range of versions. You can also describe all the
 *             latest versions or all the default versions of all the launch templates in your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplateVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplateVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   DryRun: true || false,
 *   LaunchTemplateId: "STRING_VALUE",
 *   LaunchTemplateName: "STRING_VALUE",
 *   Versions: [
 *     "STRING_VALUE",
 *   ],
 *   MinVersion: "STRING_VALUE",
 *   MaxVersion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResolveAlias: true || false,
 * };
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeLaunchTemplateVersionsCommandInput - {@link DescribeLaunchTemplateVersionsCommandInput}
 * @returns {@link DescribeLaunchTemplateVersionsCommandOutput}
 * @see {@link DescribeLaunchTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe the versions for a launch template
 * ```javascript
 * // This example describes the versions for the specified launch template.
 * const input = {
 *   "LaunchTemplateId": "068f72b72934aff71"
 * };
 * const command = new DescribeLaunchTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplateVersions": [
 *     {
 *       "CreateTime": "2017-11-20T13:12:32.000Z",
 *       "CreatedBy": "arn:aws:iam::123456789102:root",
 *       "DefaultVersion": false,
 *       "LaunchTemplateData": {
 *         "ImageId": "ami-6057e21a",
 *         "InstanceType": "t2.medium",
 *         "KeyName": "kp-us-east",
 *         "NetworkInterfaces": [
 *           {
 *             "DeviceIndex": 0,
 *             "Groups": [
 *               "sg-7c227019"
 *             ],
 *             "SubnetId": "subnet-1a2b3c4d"
 *           }
 *         ]
 *       },
 *       "LaunchTemplateId": "lt-068f72b72934aff71",
 *       "LaunchTemplateName": "Webservers",
 *       "VersionNumber": 2
 *     },
 *     {
 *       "CreateTime": "2017-11-20T12:52:33.000Z",
 *       "CreatedBy": "arn:aws:iam::123456789102:root",
 *       "DefaultVersion": true,
 *       "LaunchTemplateData": {
 *         "ImageId": "ami-aabbcc11",
 *         "InstanceType": "t2.medium",
 *         "KeyName": "kp-us-east",
 *         "NetworkInterfaces": [
 *           {
 *             "AssociatePublicIpAddress": true,
 *             "DeleteOnTermination": false,
 *             "DeviceIndex": 0,
 *             "Groups": [
 *               "sg-7c227019"
 *             ],
 *             "SubnetId": "subnet-7b16de0c"
 *           }
 *         ],
 *         "UserData": ""
 *       },
 *       "LaunchTemplateId": "lt-068f72b72934aff71",
 *       "LaunchTemplateName": "Webservers",
 *       "VersionNumber": 1
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-versions-for-a-launch-template-1529344425048
 * ```
 *
 */
export class DescribeLaunchTemplateVersionsCommand extends $Command<
  DescribeLaunchTemplateVersionsCommandInput,
  DescribeLaunchTemplateVersionsCommandOutput,
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
  constructor(readonly input: DescribeLaunchTemplateVersionsCommandInput) {
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
  ): Handler<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLaunchTemplateVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLaunchTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeLaunchTemplateVersionsResultFilterSensitiveLog,
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
  private serialize(
    input: DescribeLaunchTemplateVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLaunchTemplateVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLaunchTemplateVersionsCommandOutput> {
    return deserializeAws_ec2DescribeLaunchTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
