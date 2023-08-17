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

import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import { de_UpdateSnapshotScheduleCommand, se_UpdateSnapshotScheduleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotScheduleCommand}.
 */
export interface UpdateSnapshotScheduleCommandInput extends UpdateSnapshotScheduleInput {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotScheduleCommand}.
 */
export interface UpdateSnapshotScheduleCommandOutput extends UpdateSnapshotScheduleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
 *          supported in the cached volume and stored volume gateway types.</p>
 *
 *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
 *          creation time of the volume. You can use this API to change the snapshot schedule
 *          configured for the volume.</p>
 *
 *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
 *          update, and the schedule information, including when you want the snapshot to begin on a
 *          day and the frequency (in hours) of snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSnapshotScheduleInput
 *   VolumeARN: "STRING_VALUE", // required
 *   StartAt: Number("int"), // required
 *   RecurrenceInHours: Number("int"), // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotScheduleOutput
 * //   VolumeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSnapshotScheduleCommandInput - {@link UpdateSnapshotScheduleCommandInput}
 * @returns {@link UpdateSnapshotScheduleCommandOutput}
 * @see {@link UpdateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotScheduleCommandOutput} for command's `response` shape.
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
 * @example To update a volume snapshot schedule
 * ```javascript
 * // Updates a snapshot schedule configured for a gateway volume.
 * const input = {
 *   "Description": "Hourly snapshot",
 *   "RecurrenceInHours": 1,
 *   "StartAt": 0,
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * // example id: to-update-a-volume-snapshot-schedule-1472152757068
 * ```
 *
 */
export class UpdateSnapshotScheduleCommand extends $Command<
  UpdateSnapshotScheduleCommandInput,
  UpdateSnapshotScheduleCommandOutput,
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
  constructor(readonly input: UpdateSnapshotScheduleCommandInput) {
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
  ): Handler<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSnapshotScheduleCommand";
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
  private serialize(input: UpdateSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSnapshotScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSnapshotScheduleCommandOutput> {
    return de_UpdateSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
