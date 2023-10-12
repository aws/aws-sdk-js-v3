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
import { DescribeImagesRequest, DescribeImagesResult } from "../models/models_3";
import { de_DescribeImagesCommand, se_DescribeImagesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandInput extends DescribeImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandOutput extends DescribeImagesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p>
 *          <p>The images available to you include public images, private images that you own, and private images owned by other
 *        Amazon Web Services accounts for which you have explicit launch permissions.</p>
 *          <p>Recently deregistered images appear in the returned results for a short interval and then
 *       return empty results. After all instances that reference a deregistered AMI are terminated,
 *       specifying the ID of the image will eventually return an error indicating that the AMI ID
 *       cannot be found.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeImagesRequest
 *   ExecutableUsers: [ // ExecutableByStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ImageIds: [ // ImageIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Owners: [ // OwnerStringList
 *     "STRING_VALUE",
 *   ],
 *   IncludeDeprecated: true || false,
 *   IncludeDisabled: true || false,
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagesResult
 * //   Images: [ // ImageList
 * //     { // Image
 * //       Architecture: "i386" || "x86_64" || "arm64" || "x86_64_mac" || "arm64_mac",
 * //       CreationDate: "STRING_VALUE",
 * //       ImageId: "STRING_VALUE",
 * //       ImageLocation: "STRING_VALUE",
 * //       ImageType: "machine" || "kernel" || "ramdisk",
 * //       Public: true || false,
 * //       KernelId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Platform: "Windows",
 * //       PlatformDetails: "STRING_VALUE",
 * //       UsageOperation: "STRING_VALUE",
 * //       ProductCodes: [ // ProductCodeList
 * //         { // ProductCode
 * //           ProductCodeId: "STRING_VALUE",
 * //           ProductCodeType: "devpay" || "marketplace",
 * //         },
 * //       ],
 * //       RamdiskId: "STRING_VALUE",
 * //       State: "pending" || "available" || "invalid" || "deregistered" || "transient" || "failed" || "error" || "disabled",
 * //       BlockDeviceMappings: [ // BlockDeviceMappingList
 * //         { // BlockDeviceMapping
 * //           DeviceName: "STRING_VALUE",
 * //           VirtualName: "STRING_VALUE",
 * //           Ebs: { // EbsBlockDevice
 * //             DeleteOnTermination: true || false,
 * //             Iops: Number("int"),
 * //             SnapshotId: "STRING_VALUE",
 * //             VolumeSize: Number("int"),
 * //             VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //             KmsKeyId: "STRING_VALUE",
 * //             Throughput: Number("int"),
 * //             OutpostArn: "STRING_VALUE",
 * //             Encrypted: true || false,
 * //           },
 * //           NoDevice: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       EnaSupport: true || false,
 * //       Hypervisor: "ovm" || "xen",
 * //       ImageOwnerAlias: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RootDeviceName: "STRING_VALUE",
 * //       RootDeviceType: "ebs" || "instance-store",
 * //       SriovNetSupport: "STRING_VALUE",
 * //       StateReason: { // StateReason
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VirtualizationType: "hvm" || "paravirtual",
 * //       BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * //       TpmSupport: "v2.0",
 * //       DeprecationTime: "STRING_VALUE",
 * //       ImdsSupport: "v2.0",
 * //       SourceInstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImagesCommandInput - {@link DescribeImagesCommandInput}
 * @returns {@link DescribeImagesCommandOutput}
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe an AMI
 * ```javascript
 * // This example describes the specified AMI.
 * const input = {
 *   "ImageIds": [
 *     "ami-5731123e"
 *   ]
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Images": [
 *     {
 *       "Architecture": "x86_64",
 *       "BlockDeviceMappings": [
 *         {
 *           "DeviceName": "/dev/sda1",
 *           "Ebs": {
 *             "DeleteOnTermination": true,
 *             "SnapshotId": "snap-1234567890abcdef0",
 *             "VolumeSize": 8,
 *             "VolumeType": "standard"
 *           }
 *         }
 *       ],
 *       "Description": "An AMI for my server",
 *       "Hypervisor": "xen",
 *       "ImageId": "ami-5731123e",
 *       "ImageLocation": "123456789012/My server",
 *       "ImageType": "machine",
 *       "KernelId": "aki-88aa75e1",
 *       "Name": "My server",
 *       "OwnerId": "123456789012",
 *       "Public": false,
 *       "RootDeviceName": "/dev/sda1",
 *       "RootDeviceType": "ebs",
 *       "State": "available",
 *       "VirtualizationType": "paravirtual"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-an-ami-1529025482866
 * ```
 *
 */
export class DescribeImagesCommand extends $Command<
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
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
  constructor(readonly input: DescribeImagesCommandInput) {
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
  ): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeImages",
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
  private serialize(input: DescribeImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImagesCommandOutput> {
    return de_DescribeImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
