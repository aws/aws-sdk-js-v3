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

import { DescribeCachediSCSIVolumesInput, DescribeCachediSCSIVolumesOutput } from "../models/models_0";
import { de_DescribeCachediSCSIVolumesCommand, se_DescribeCachediSCSIVolumesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCachediSCSIVolumesCommand}.
 */
export interface DescribeCachediSCSIVolumesCommandInput extends DescribeCachediSCSIVolumesInput {}
/**
 * @public
 *
 * The output of {@link DescribeCachediSCSIVolumesCommand}.
 */
export interface DescribeCachediSCSIVolumesCommandOutput extends DescribeCachediSCSIVolumesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the gateway volumes specified in the request. This operation is
 *          only supported in the cached volume gateway types.</p>
 *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
 *             Storage Gateway returns volume information sorted by volume Amazon Resource Name
 *          (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeCachediSCSIVolumesInput
 *   VolumeARNs: [ // VolumeARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCachediSCSIVolumesOutput
 * //   CachediSCSIVolumes: [ // CachediSCSIVolumes
 * //     { // CachediSCSIVolume
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeStatus: "STRING_VALUE",
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeProgress: Number("double"),
 * //       SourceSnapshotId: "STRING_VALUE",
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
 * @param DescribeCachediSCSIVolumesCommandInput - {@link DescribeCachediSCSIVolumesCommandInput}
 * @returns {@link DescribeCachediSCSIVolumesCommandOutput}
 * @see {@link DescribeCachediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeCachediSCSIVolumesCommandOutput} for command's `response` shape.
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
 * @example To describe gateway cached iSCSI volumes
 * ```javascript
 * // Returns a description of the gateway cached iSCSI volumes specified in the request.
 * const input = {
 *   "VolumeARNs": [
 *     "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 *   ]
 * };
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CachediSCSIVolumes": [
 *     {
 *       "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       "VolumeId": "vol-1122AABB",
 *       "VolumeSizeInBytes": 1099511627776,
 *       "VolumeStatus": "AVAILABLE",
 *       "VolumeType": "CACHED iSCSI",
 *       "VolumeiSCSIAttributes": {
 *         "ChapEnabled": true,
 *         "LunNumber": 1,
 *         "NetworkInterfaceId": "10.243.43.207",
 *         "NetworkInterfacePort": 3260,
 *         "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-gateway-cached-iscsi-volumes-1471458094649
 * ```
 *
 */
export class DescribeCachediSCSIVolumesCommand extends $Command<
  DescribeCachediSCSIVolumesCommandInput,
  DescribeCachediSCSIVolumesCommandOutput,
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
  constructor(readonly input: DescribeCachediSCSIVolumesCommandInput) {
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
  ): Handler<DescribeCachediSCSIVolumesCommandInput, DescribeCachediSCSIVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCachediSCSIVolumesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeCachediSCSIVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeCachediSCSIVolumes",
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
  private serialize(input: DescribeCachediSCSIVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCachediSCSIVolumesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCachediSCSIVolumesCommandOutput> {
    return de_DescribeCachediSCSIVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
