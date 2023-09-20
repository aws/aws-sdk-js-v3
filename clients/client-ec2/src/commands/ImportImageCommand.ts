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
import {
  ImportImageRequest,
  ImportImageRequestFilterSensitiveLog,
  ImportImageResult,
  ImportImageResultFilterSensitiveLog,
} from "../models/models_6";
import { de_ImportImageCommand, se_ImportImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportImageCommand}.
 */
export interface ImportImageCommandInput extends ImportImageRequest {}
/**
 * @public
 *
 * The output of {@link ImportImageCommand}.
 */
export interface ImportImageCommandOutput extends ImportImageResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>To import your virtual machines (VMs) with a console-based experience, you can use the
 *     <i>Import virtual machine images to Amazon Web Services</i> template in the <a href="https://console.aws.amazon.com/migrationhub/orchestrator">Migration Hub Orchestrator console</a>. For more
 *     information, see the <a href="https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/import-vm-images.html">
 *                   <i>Migration Hub Orchestrator User Guide</i>
 *                </a>.</p>
 *          </note>
 *          <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI).</p>
 *          <important>
 *             <p>Amazon Web Services VM Import/Export strongly recommends specifying a value for either the
 *      <code>--license-type</code> or <code>--usage-operation</code> parameter when you create a new
 *     VM Import task. This ensures your operating system is licensed appropriately and your billing is
 *     optimized.</p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a
 *    VM as an image using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ImportImageRequest
 *   Architecture: "STRING_VALUE",
 *   ClientData: { // ClientData
 *     Comment: "STRING_VALUE",
 *     UploadEnd: new Date("TIMESTAMP"),
 *     UploadSize: Number("double"),
 *     UploadStart: new Date("TIMESTAMP"),
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DiskContainers: [ // ImageDiskContainerList
 *     { // ImageDiskContainer
 *       Description: "STRING_VALUE",
 *       DeviceName: "STRING_VALUE",
 *       Format: "STRING_VALUE",
 *       SnapshotId: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *       UserBucket: { // UserBucket
 *         S3Bucket: "STRING_VALUE",
 *         S3Key: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   DryRun: true || false,
 *   Encrypted: true || false,
 *   Hypervisor: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   LicenseType: "STRING_VALUE",
 *   Platform: "STRING_VALUE",
 *   RoleName: "STRING_VALUE",
 *   LicenseSpecifications: [ // ImportImageLicenseSpecificationListRequest
 *     { // ImportImageLicenseConfigurationRequest
 *       LicenseConfigurationArn: "STRING_VALUE",
 *     },
 *   ],
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   UsageOperation: "STRING_VALUE",
 *   BootMode: "legacy-bios" || "uefi" || "uefi-preferred",
 * };
 * const command = new ImportImageCommand(input);
 * const response = await client.send(command);
 * // { // ImportImageResult
 * //   Architecture: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Encrypted: true || false,
 * //   Hypervisor: "STRING_VALUE",
 * //   ImageId: "STRING_VALUE",
 * //   ImportTaskId: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   LicenseType: "STRING_VALUE",
 * //   Platform: "STRING_VALUE",
 * //   Progress: "STRING_VALUE",
 * //   SnapshotDetails: [ // SnapshotDetailList
 * //     { // SnapshotDetail
 * //       Description: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE",
 * //       DiskImageSize: Number("double"),
 * //       Format: "STRING_VALUE",
 * //       Progress: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       UserBucket: { // UserBucketDetails
 * //         S3Bucket: "STRING_VALUE",
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Status: "STRING_VALUE",
 * //   StatusMessage: "STRING_VALUE",
 * //   LicenseSpecifications: [ // ImportImageLicenseSpecificationListResponse
 * //     { // ImportImageLicenseConfigurationResponse
 * //       LicenseConfigurationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UsageOperation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportImageCommandInput - {@link ImportImageCommandInput}
 * @returns {@link ImportImageCommandOutput}
 * @see {@link ImportImageCommandInput} for command's `input` shape.
 * @see {@link ImportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ImportImageCommand extends $Command<
  ImportImageCommandInput,
  ImportImageCommandOutput,
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
  constructor(readonly input: ImportImageCommandInput) {
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
  ): Handler<ImportImageCommandInput, ImportImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportImageResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ImportImage",
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
  private serialize(input: ImportImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportImageCommandOutput> {
    return de_ImportImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
