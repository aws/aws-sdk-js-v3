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

import {
  ListVolumesInput,
  ListVolumesInputFilterSensitiveLog,
  ListVolumesOutput,
  ListVolumesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVolumesCommand,
  serializeAws_json1_1ListVolumesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * The input for {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandInput extends ListVolumesInput {}
/**
 * The output of {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandOutput extends ListVolumesOutput, __MetadataBearer {}

/**
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
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
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
      inputFilterSensitiveLog: ListVolumesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListVolumesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumesCommandOutput> {
    return deserializeAws_json1_1ListVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
