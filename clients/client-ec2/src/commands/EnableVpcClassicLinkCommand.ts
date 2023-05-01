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
import { EnableVpcClassicLinkRequest, EnableVpcClassicLinkResult } from "../models/models_5";
import { de_EnableVpcClassicLinkCommand, se_EnableVpcClassicLinkCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link EnableVpcClassicLinkCommand}.
 */
export interface EnableVpcClassicLinkCommandInput extends EnableVpcClassicLinkRequest {}
/**
 * @public
 *
 * The output of {@link EnableVpcClassicLinkCommand}.
 */
export interface EnableVpcClassicLinkCommandOutput extends EnableVpcClassicLinkResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your
 * 			ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot
 * 			enable your VPC for ClassicLink if any of your VPC route tables have existing routes for
 * 			address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local
 * 			routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address
 * 			ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableVpcClassicLinkRequest
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new EnableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * // { // EnableVpcClassicLinkResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableVpcClassicLinkCommandInput - {@link EnableVpcClassicLinkCommandInput}
 * @returns {@link EnableVpcClassicLinkCommandOutput}
 * @see {@link EnableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableVpcClassicLinkCommand extends $Command<
  EnableVpcClassicLinkCommandInput,
  EnableVpcClassicLinkCommandOutput,
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
  constructor(readonly input: EnableVpcClassicLinkCommandInput) {
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
  ): Handler<EnableVpcClassicLinkCommandInput, EnableVpcClassicLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableVpcClassicLinkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVpcClassicLinkCommand";
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
  private serialize(input: EnableVpcClassicLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableVpcClassicLinkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableVpcClassicLinkCommandOutput> {
    return de_EnableVpcClassicLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
