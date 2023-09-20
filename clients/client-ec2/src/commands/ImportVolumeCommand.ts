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
  ImportVolumeRequest,
  ImportVolumeRequestFilterSensitiveLog,
  ImportVolumeResult,
  ImportVolumeResultFilterSensitiveLog,
} from "../models/models_6";
import { de_ImportVolumeCommand, se_ImportVolumeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportVolumeCommand}.
 */
export interface ImportVolumeCommandInput extends ImportVolumeRequest {}
/**
 * @public
 *
 * The output of {@link ImportVolumeCommand}.
 */
export interface ImportVolumeCommandOutput extends ImportVolumeResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an import volume task using metadata from the specified disk image.</p>
 *          <p>This API action supports only single-volume VMs. To import multi-volume VMs, use
 *    <a>ImportImage</a> instead. To import a disk to a snapshot, use
 *    <a>ImportSnapshot</a> instead.</p>
 *          <p>This API action is not supported by the Command Line Interface (CLI). For
 *    information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ImportVolumeRequest
 *   AvailabilityZone: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   Image: { // DiskImageDetail
 *     Bytes: Number("long"), // required
 *     Format: "VMDK" || "RAW" || "VHD", // required
 *     ImportManifestUrl: "STRING_VALUE", // required
 *   },
 *   Volume: { // VolumeDetail
 *     Size: Number("long"), // required
 *   },
 * };
 * const command = new ImportVolumeCommand(input);
 * const response = await client.send(command);
 * // { // ImportVolumeResult
 * //   ConversionTask: { // ConversionTask
 * //     ConversionTaskId: "STRING_VALUE",
 * //     ExpirationTime: "STRING_VALUE",
 * //     ImportInstance: { // ImportInstanceTaskDetails
 * //       Description: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Platform: "Windows",
 * //       Volumes: [ // ImportInstanceVolumeDetailSet
 * //         { // ImportInstanceVolumeDetailItem
 * //           AvailabilityZone: "STRING_VALUE",
 * //           BytesConverted: Number("long"),
 * //           Description: "STRING_VALUE",
 * //           Image: { // DiskImageDescription
 * //             Checksum: "STRING_VALUE",
 * //             Format: "VMDK" || "RAW" || "VHD",
 * //             ImportManifestUrl: "STRING_VALUE",
 * //             Size: Number("long"),
 * //           },
 * //           Status: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           Volume: { // DiskImageVolumeDescription
 * //             Id: "STRING_VALUE",
 * //             Size: Number("long"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ImportVolume: { // ImportVolumeTaskDetails
 * //       AvailabilityZone: "STRING_VALUE",
 * //       BytesConverted: Number("long"),
 * //       Description: "STRING_VALUE",
 * //       Image: {
 * //         Checksum: "STRING_VALUE",
 * //         Format: "VMDK" || "RAW" || "VHD",
 * //         ImportManifestUrl: "STRING_VALUE",
 * //         Size: Number("long"),
 * //       },
 * //       Volume: {
 * //         Id: "STRING_VALUE",
 * //         Size: Number("long"),
 * //       },
 * //     },
 * //     State: "active" || "cancelling" || "cancelled" || "completed",
 * //     StatusMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportVolumeCommandInput - {@link ImportVolumeCommandInput}
 * @returns {@link ImportVolumeCommandOutput}
 * @see {@link ImportVolumeCommandInput} for command's `input` shape.
 * @see {@link ImportVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ImportVolumeCommand extends $Command<
  ImportVolumeCommandInput,
  ImportVolumeCommandOutput,
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
  constructor(readonly input: ImportVolumeCommandInput) {
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
  ): Handler<ImportVolumeCommandInput, ImportVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportVolumeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportVolumeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportVolumeResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ImportVolume",
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
  private serialize(input: ImportVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportVolumeCommandOutput> {
    return de_ImportVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
