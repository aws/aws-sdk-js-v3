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

import { ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsOutput } from "../models/models_0";
import { de_ListVolumeRecoveryPointsCommand, se_ListVolumeRecoveryPointsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVolumeRecoveryPointsCommand}.
 */
export interface ListVolumeRecoveryPointsCommandInput extends ListVolumeRecoveryPointsInput {}
/**
 * @public
 *
 * The output of {@link ListVolumeRecoveryPointsCommand}.
 */
export interface ListVolumeRecoveryPointsCommandOutput extends ListVolumeRecoveryPointsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the recovery points for a specified gateway. This operation is only supported in
 *          the cached volume gateway type.</p>
 *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time at
 *          which all data of the volume is consistent and from which you can create a snapshot or
 *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
 *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumeRecoveryPointsInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumeRecoveryPointsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   VolumeRecoveryPointInfos: [ // VolumeRecoveryPointInfos
 * //     { // VolumeRecoveryPointInfo
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeRecoveryPointTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumeRecoveryPointsCommandInput - {@link ListVolumeRecoveryPointsCommandInput}
 * @returns {@link ListVolumeRecoveryPointsCommandOutput}
 * @see {@link ListVolumeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeRecoveryPointsCommandOutput} for command's `response` shape.
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
 * @example To list recovery points for a gateway
 * ```javascript
 * // Lists the recovery points for a specified gateway in which all data of the volume is consistent and can be used to create a snapshot.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "VolumeRecoveryPointInfos": [
 *     {
 *       "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       "VolumeRecoveryPointTime": "2012-09-04T21:08:44.627Z",
 *       "VolumeSizeInBytes": 536870912000
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-recovery-points-for-a-gateway-1472143015088
 * ```
 *
 */
export class ListVolumeRecoveryPointsCommand extends $Command<
  ListVolumeRecoveryPointsCommandInput,
  ListVolumeRecoveryPointsCommandOutput,
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
  constructor(readonly input: ListVolumeRecoveryPointsCommandInput) {
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
  ): Handler<ListVolumeRecoveryPointsCommandInput, ListVolumeRecoveryPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVolumeRecoveryPointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListVolumeRecoveryPointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "ListVolumeRecoveryPoints",
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
  private serialize(input: ListVolumeRecoveryPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVolumeRecoveryPointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeRecoveryPointsCommandOutput> {
    return de_ListVolumeRecoveryPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
