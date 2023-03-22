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
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/models_3";
import {
  deserializeAws_ec2DescribeImageAttributeCommand,
  serializeAws_ec2DescribeImageAttributeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeImageAttributeCommand}.
 */
export interface DescribeImageAttributeCommandInput extends DescribeImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageAttributeCommand}.
 */
export interface DescribeImageAttributeCommandOutput extends ImageAttribute, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeImageAttributeCommandInput - {@link DescribeImageAttributeCommandInput}
 * @returns {@link DescribeImageAttributeCommandOutput}
 * @see {@link DescribeImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe the launch permissions for an AMI
 * ```javascript
 * // This example describes the launch permissions for the specified AMI.
 * const input = {
 *   "Attribute": "launchPermission",
 *   "ImageId": "ami-5731123e"
 * };
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImageId": "ami-5731123e",
 *   "LaunchPermissions": [
 *     {
 *       "UserId": "123456789012"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-launch-permissions-for-an-ami-1529025296264
 * ```
 *
 */
export class DescribeImageAttributeCommand extends $Command<
  DescribeImageAttributeCommandInput,
  DescribeImageAttributeCommandOutput,
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
  constructor(readonly input: DescribeImageAttributeCommandInput) {
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
  ): Handler<DescribeImageAttributeCommandInput, DescribeImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeImageAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageAttributeCommandOutput> {
    return deserializeAws_ec2DescribeImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
