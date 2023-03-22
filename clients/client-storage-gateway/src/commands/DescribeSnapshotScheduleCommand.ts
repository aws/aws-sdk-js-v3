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
  DescribeSnapshotScheduleInput,
  DescribeSnapshotScheduleInputFilterSensitiveLog,
  DescribeSnapshotScheduleOutput,
  DescribeSnapshotScheduleOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSnapshotScheduleCommand,
  serializeAws_json1_1DescribeSnapshotScheduleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 *
 * The input for {@link DescribeSnapshotScheduleCommand}.
 */
export interface DescribeSnapshotScheduleCommandInput extends DescribeSnapshotScheduleInput {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotScheduleCommand}.
 */
export interface DescribeSnapshotScheduleCommandOutput extends DescribeSnapshotScheduleOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
 *          information includes intervals at which snapshots are automatically initiated on the
 *          volume. This operation is only supported in the cached volume and stored volume
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeSnapshotScheduleCommandInput - {@link DescribeSnapshotScheduleCommandInput}
 * @returns {@link DescribeSnapshotScheduleCommandOutput}
 * @see {@link DescribeSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotScheduleCommandOutput} for command's `response` shape.
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
 *
 * @example To describe snapshot schedule for gateway volume
 * ```javascript
 * // Describes the snapshot schedule for the specified gateway volume including intervals at which snapshots are automatically initiated.
 * const input = {
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new DescribeSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Description": "sgw-AABB1122:vol-AABB1122:Schedule",
 *   "RecurrenceInHours": 24,
 *   "StartAt": 6,
 *   "Timezone": "GMT+7:00",
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * // example id: to-describe-snapshot-schedule-for-gateway-volume-1471471139538
 * ```
 *
 */
export class DescribeSnapshotScheduleCommand extends $Command<
  DescribeSnapshotScheduleCommandInput,
  DescribeSnapshotScheduleCommandOutput,
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
  constructor(readonly input: DescribeSnapshotScheduleCommandInput) {
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
  ): Handler<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeSnapshotScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotScheduleInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSnapshotScheduleOutputFilterSensitiveLog,
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
  private serialize(input: DescribeSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSnapshotScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotScheduleCommandOutput> {
    return deserializeAws_json1_1DescribeSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
