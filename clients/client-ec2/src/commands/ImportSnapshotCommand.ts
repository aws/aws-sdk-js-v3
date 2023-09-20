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
  ImportSnapshotRequest,
  ImportSnapshotRequestFilterSensitiveLog,
  ImportSnapshotResult,
  ImportSnapshotResultFilterSensitiveLog,
} from "../models/models_6";
import { de_ImportSnapshotCommand, se_ImportSnapshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportSnapshotCommand}.
 */
export interface ImportSnapshotCommandInput extends ImportSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ImportSnapshotCommand}.
 */
export interface ImportSnapshotCommandOutput extends ImportSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Imports a disk into an EBS snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html">Importing a disk as a snapshot using VM Import/Export</a> in the
 *    <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ImportSnapshotRequest
 *   ClientData: { // ClientData
 *     Comment: "STRING_VALUE",
 *     UploadEnd: new Date("TIMESTAMP"),
 *     UploadSize: Number("double"),
 *     UploadStart: new Date("TIMESTAMP"),
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DiskContainer: { // SnapshotDiskContainer
 *     Description: "STRING_VALUE",
 *     Format: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *     UserBucket: { // UserBucket
 *       S3Bucket: "STRING_VALUE",
 *       S3Key: "STRING_VALUE",
 *     },
 *   },
 *   DryRun: true || false,
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   RoleName: "STRING_VALUE",
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
 * };
 * const command = new ImportSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ImportSnapshotResult
 * //   Description: "STRING_VALUE",
 * //   ImportTaskId: "STRING_VALUE",
 * //   SnapshotTaskDetail: { // SnapshotTaskDetail
 * //     Description: "STRING_VALUE",
 * //     DiskImageSize: Number("double"),
 * //     Encrypted: true || false,
 * //     Format: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     Progress: "STRING_VALUE",
 * //     SnapshotId: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     Url: "STRING_VALUE",
 * //     UserBucket: { // UserBucketDetails
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Key: "STRING_VALUE",
 * //     },
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ImportSnapshotCommandInput - {@link ImportSnapshotCommandInput}
 * @returns {@link ImportSnapshotCommandOutput}
 * @see {@link ImportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ImportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ImportSnapshotCommand extends $Command<
  ImportSnapshotCommandInput,
  ImportSnapshotCommandOutput,
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
  constructor(readonly input: ImportSnapshotCommandInput) {
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
  ): Handler<ImportSnapshotCommandInput, ImportSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportSnapshotResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ImportSnapshot",
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
  private serialize(input: ImportSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSnapshotCommandOutput> {
    return de_ImportSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
