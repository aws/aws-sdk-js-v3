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

import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/models_0";
import { de_DescribeStorediSCSIVolumesCommand, se_DescribeStorediSCSIVolumesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorediSCSIVolumesCommand}.
 */
export interface DescribeStorediSCSIVolumesCommandInput extends DescribeStorediSCSIVolumesInput {}
/**
 * @public
 *
 * The output of {@link DescribeStorediSCSIVolumesCommand}.
 */
export interface DescribeStorediSCSIVolumesCommandOutput extends DescribeStorediSCSIVolumesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of the gateway volumes specified in the request. The list of
 *          gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only
 *          supported in stored volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeStorediSCSIVolumesInput
 *   VolumeARNs: [ // VolumeARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorediSCSIVolumesOutput
 * //   StorediSCSIVolumes: [ // StorediSCSIVolumes
 * //     { // StorediSCSIVolume
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeStatus: "STRING_VALUE",
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeProgress: Number("double"),
 * //       VolumeDiskId: "STRING_VALUE",
 * //       SourceSnapshotId: "STRING_VALUE",
 * //       PreservedExistingData: true || false,
 * //       VolumeiSCSIAttributes: { // VolumeiSCSIAttributes
 * //         TargetARN: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         NetworkInterfacePort: Number("int"),
 * //         LunNumber: Number("int"),
 * //         ChapEnabled: true || false,
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       VolumeUsedInBytes: Number("long"),
 * //       KMSKey: "STRING_VALUE",
 * //       TargetName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStorediSCSIVolumesCommandInput - {@link DescribeStorediSCSIVolumesCommandInput}
 * @returns {@link DescribeStorediSCSIVolumesCommandOutput}
 * @see {@link DescribeStorediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorediSCSIVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To describe the volumes of a gateway
 * ```javascript
 * // Returns the description of the gateway volumes specified in the request belonging to the same gateway.
 * const input = {
 *   "VolumeARNs": [
 *     "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 *   ]
 * };
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StorediSCSIVolumes": [
 *     {
 *       "PreservedExistingData": false,
 *       "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       "VolumeDiskId": "pci-0000:03:00.0-scsi-0:0:0:0",
 *       "VolumeId": "vol-1122AABB",
 *       "VolumeProgress": 23.7,
 *       "VolumeSizeInBytes": 1099511627776,
 *       "VolumeStatus": "BOOTSTRAPPING",
 *       "VolumeiSCSIAttributes": {
 *         "ChapEnabled": true,
 *         "NetworkInterfaceId": "10.243.43.207",
 *         "NetworkInterfacePort": 3260,
 *         "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-volumes-of-a-gateway-1471472640660
 * ```
 *
 */
export class DescribeStorediSCSIVolumesCommand extends $Command<
  DescribeStorediSCSIVolumesCommandInput,
  DescribeStorediSCSIVolumesCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DescribeStorediSCSIVolumesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStorediSCSIVolumesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeStorediSCSIVolumesCommand";
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
  private serialize(input: DescribeStorediSCSIVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStorediSCSIVolumesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStorediSCSIVolumesCommandOutput> {
    return de_DescribeStorediSCSIVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
