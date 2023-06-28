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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImageAttributeRequest, ImageAttribute } from "../models/models_3";
import { de_DescribeImageAttributeCommand, se_DescribeImageAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * const input = { // DescribeImageAttributeRequest
 *   Attribute: "description" || "kernel" || "ramdisk" || "launchPermission" || "productCodes" || "blockDeviceMapping" || "sriovNetSupport" || "bootMode" || "tpmSupport" || "uefiData" || "lastLaunchedTime" || "imdsSupport", // required
 *   ImageId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ImageAttribute
 * //   BlockDeviceMappings: [ // BlockDeviceMappingList
 * //     { // BlockDeviceMapping
 * //       DeviceName: "STRING_VALUE",
 * //       VirtualName: "STRING_VALUE",
 * //       Ebs: { // EbsBlockDevice
 * //         DeleteOnTermination: true || false,
 * //         Iops: Number("int"),
 * //         SnapshotId: "STRING_VALUE",
 * //         VolumeSize: Number("int"),
 * //         VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //         KmsKeyId: "STRING_VALUE",
 * //         Throughput: Number("int"),
 * //         OutpostArn: "STRING_VALUE",
 * //         Encrypted: true || false,
 * //       },
 * //       NoDevice: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ImageId: "STRING_VALUE",
 * //   LaunchPermissions: [ // LaunchPermissionList
 * //     { // LaunchPermission
 * //       Group: "all",
 * //       UserId: "STRING_VALUE",
 * //       OrganizationArn: "STRING_VALUE",
 * //       OrganizationalUnitArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   Description: { // AttributeValue
 * //     Value: "STRING_VALUE",
 * //   },
 * //   KernelId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   RamdiskId: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   SriovNetSupport: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   BootMode: {
 * //     Value: "STRING_VALUE",
 * //   },
 * //   TpmSupport: "<AttributeValue>",
 * //   UefiData: "<AttributeValue>",
 * //   LastLaunchedTime: "<AttributeValue>",
 * //   ImdsSupport: "<AttributeValue>",
 * // };
 *
 * ```
 *
 * @param DescribeImageAttributeCommandInput - {@link DescribeImageAttributeCommandInput}
 * @returns {@link DescribeImageAttributeCommandOutput}
 * @see {@link DescribeImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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
    return se_DescribeImageAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageAttributeCommandOutput> {
    return de_DescribeImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
