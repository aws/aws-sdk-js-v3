// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterImageRequest, RegisterImageResult } from "../models/models_6";
import { de_RegisterImageCommand, se_RegisterImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterImageCommand}.
 */
export interface RegisterImageCommandInput extends RegisterImageRequest {}
/**
 * @public
 *
 * The output of {@link RegisterImageCommand}.
 */
export interface RegisterImageCommandOutput extends RegisterImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Registers an AMI. When you're creating an AMI, this is the final step you must complete
 *       before you can launch an instance from the AMI. For more information about creating AMIs, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html">Create your
 *         own AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <note>
 *             <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers the AMI
 *         in a single request, so you don't have to register the AMI yourself. We recommend that you
 *         always use <a>CreateImage</a> unless you have a specific reason to use
 *         RegisterImage.</p>
 *          </note>
 *          <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration.
 *        If you make changes to an image, deregister the previous image and register the new image.</p>
 *          <p>
 *             <b>Register a snapshot of a root device volume</b>
 *          </p>
 *          <p>You can use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from
 *        a snapshot of a root device volume. You specify the snapshot using a block device mapping.
 *        You can't set the encryption state of the volume using the block device mapping. If the
 *        snapshot is encrypted, or encryption by default is enabled, the root volume of an instance
 *        launched from the AMI is encrypted.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot">Create a Linux AMI from a snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with Amazon EBS-backed AMIs</a>
 *        in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>
 *             <b>Amazon Web Services Marketplace product codes</b>
 *          </p>
 *          <p>If any snapshots have Amazon Web Services Marketplace product codes, they are copied to the new
 *       AMI.</p>
 *          <p>Windows and some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE
 *       Linux Enterprise Server (SLES), use the Amazon EC2 billing product code associated with an AMI to
 *       verify the subscription status for package updates. To create a new AMI for operating systems
 *       that require a billing product code, instead of registering the AMI, do the following to
 *       preserve the billing product code association:</p>
 *          <ol>
 *             <li>
 *                <p>Launch an instance from an existing AMI with that billing product code.</p>
 *             </li>
 *             <li>
 *                <p>Customize the instance.</p>
 *             </li>
 *             <li>
 *                <p>Create an AMI from the instance using <a>CreateImage</a>.</p>
 *             </li>
 *          </ol>
 *          <p>If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched
 *       from an AMI with a billing product code, make sure that the Reserved Instance has the matching
 *       billing product code. If you purchase a Reserved Instance without the matching billing product
 *       code, the Reserved Instance will not be applied to the On-Demand Instance. For information
 *       about how to obtain the platform details and billing information of an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand AMI
 *         billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterImageRequest
 *   ImageLocation: "STRING_VALUE",
 *   Architecture: "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 *   BlockDeviceMappings: [ // BlockDeviceMappingRequestList
 *     { // BlockDeviceMapping
 *       DeviceName: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *       Ebs: { // EbsBlockDevice
 *         DeleteOnTermination: true || false,
 *         Iops: Number("int"),
 *         SnapshotId: "STRING_VALUE",
 *         VolumeSize: Number("int"),
 *         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *         KmsKeyId: "STRING_VALUE",
 *         Throughput: Number("int"),
 *         OutpostArn: "STRING_VALUE",
 *         Encrypted: true || false,
 *       },
 *       NoDevice: "STRING_VALUE",
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   EnaSupport: true || false,
 *   KernelId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   BillingProducts: [ // BillingProductList
 *     "STRING_VALUE",
 *   ],
 *   RamdiskId: "STRING_VALUE",
 *   RootDeviceName: "STRING_VALUE",
 *   SriovNetSupport: "STRING_VALUE",
 *   VirtualizationType: "STRING_VALUE",
 *   BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 *   TpmSupport: "v2.0",
 *   UefiData: "STRING_VALUE",
 *   ImdsSupport: "v2.0",
 * };
 * const command = new RegisterImageCommand(input);
 * const response = await client.send(command);
 * // { // RegisterImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterImageCommandInput - {@link RegisterImageCommandInput}
 * @returns {@link RegisterImageCommandOutput}
 * @see {@link RegisterImageCommandInput} for command's `input` shape.
 * @see {@link RegisterImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RegisterImageCommand extends $Command<
  RegisterImageCommandInput,
  RegisterImageCommandOutput,
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
  constructor(readonly input: RegisterImageCommandInput) {
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
  ): Handler<RegisterImageCommandInput, RegisterImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RegisterImage",
      },
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
  private serialize(input: RegisterImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterImageCommandOutput> {
    return de_RegisterImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
