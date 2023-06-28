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

import { CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput } from "../models/models_0";
import { de_CreateCachediSCSIVolumeCommand, se_CreateCachediSCSIVolumeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCachediSCSIVolumeCommand}.
 */
export interface CreateCachediSCSIVolumeCommandInput extends CreateCachediSCSIVolumeInput {}
/**
 * @public
 *
 * The output of {@link CreateCachediSCSIVolumeCommand}.
 */
export interface CreateCachediSCSIVolumeCommandOutput extends CreateCachediSCSIVolumeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
 *          supported in the cached volume gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a cached volume.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 *
 *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
 *          target name, an IP address on which to expose the target, and a unique client token. In
 *          response, the gateway creates the volume and returns information about it. This information
 *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
 *          initiators can use to connect to the volume target.</p>
 *
 *          <p>Optionally, you can provide the ARN for an existing volume as the
 *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
 *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
 *          equal to or larger than the size of the copied volume, in bytes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateCachediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateCachediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateCachediSCSIVolumeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   VolumeSizeInBytes: Number("long"), // required
 *   SnapshotId: "STRING_VALUE",
 *   TargetName: "STRING_VALUE", // required
 *   SourceVolumeARN: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCachediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCachediSCSIVolumeOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   TargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCachediSCSIVolumeCommandInput - {@link CreateCachediSCSIVolumeCommandInput}
 * @returns {@link CreateCachediSCSIVolumeCommandOutput}
 * @see {@link CreateCachediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateCachediSCSIVolumeCommandOutput} for command's `response` shape.
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
 * @example To create a cached iSCSI volume
 * ```javascript
 * // Creates a cached volume on a specified cached gateway.
 * const input = {
 *   "ClientToken": "cachedvol112233",
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "NetworkInterfaceId": "10.1.1.1",
 *   "SnapshotId": "snap-f47b7b94",
 *   "TargetName": "my-volume",
 *   "VolumeSizeInBytes": 536870912000
 * };
 * const command = new CreateCachediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * // example id: to-create-a-cached-iscsi-volume-1471296661787
 * ```
 *
 */
export class CreateCachediSCSIVolumeCommand extends $Command<
  CreateCachediSCSIVolumeCommandInput,
  CreateCachediSCSIVolumeCommandOutput,
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
  constructor(readonly input: CreateCachediSCSIVolumeCommandInput) {
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
  ): Handler<CreateCachediSCSIVolumeCommandInput, CreateCachediSCSIVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCachediSCSIVolumeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateCachediSCSIVolumeCommand";
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
  private serialize(input: CreateCachediSCSIVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCachediSCSIVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCachediSCSIVolumeCommandOutput> {
    return de_CreateCachediSCSIVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
