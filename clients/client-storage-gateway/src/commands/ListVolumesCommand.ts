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

import { ListVolumesInput, ListVolumesOutput } from "../models/models_0";
import { de_ListVolumesCommand, se_ListVolumesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandInput extends ListVolumesInput {}
/**
 * @public
 *
 * The output of {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandOutput extends ListVolumesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 *          response includes only the volume ARNs. If you want additional volume information, use the
 *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
 *
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
 *          the number of volumes in the response. If the number of volumes returned in the response is
 *          truncated, the response includes a Marker field. You can use this Marker value in your
 *          subsequent request to retrieve the next set of volumes. This operation is only supported in
 *          the cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumesInput
 *   GatewayARN: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumesOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   VolumeInfos: [ // VolumeInfos
 * //     { // VolumeInfo
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       GatewayId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumesCommandInput - {@link ListVolumesCommandInput}
 * @returns {@link ListVolumesCommandOutput}
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
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
 * @example To list the iSCSI stored volumes of a gateway
 * ```javascript
 * // Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN up to a maximum of 100 volumes.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Limit": 2,
 *   "Marker": "1"
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Marker": "1",
 *   "VolumeInfos": [
 *     {
 *       "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *       "GatewayId": "sgw-12A3456B",
 *       "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       "VolumeId": "vol-1122AABB",
 *       "VolumeSizeInBytes": 107374182400,
 *       "VolumeType": "STORED"
 *     },
 *     {
 *       "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C",
 *       "GatewayId": "sgw-gw-13B4567C",
 *       "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C/volume/vol-3344CCDD",
 *       "VolumeId": "vol-1122AABB",
 *       "VolumeSizeInBytes": 107374182400,
 *       "VolumeType": "STORED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-iscsi-stored-volumes-of-a-gateway-1472145723653
 * ```
 *
 */
export class ListVolumesCommand extends $Command<
  ListVolumesCommandInput,
  ListVolumesCommandOutput,
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
  constructor(readonly input: ListVolumesCommandInput) {
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
  ): Handler<ListVolumesCommandInput, ListVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListVolumesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumesCommand";
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
  private serialize(input: ListVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVolumesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumesCommandOutput> {
    return de_ListVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
