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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/models_0";
import { de_DeliverConfigSnapshotCommand, se_DeliverConfigSnapshotCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeliverConfigSnapshotCommand}.
 */
export interface DeliverConfigSnapshotCommandInput extends DeliverConfigSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeliverConfigSnapshotCommand}.
 */
export interface DeliverConfigSnapshotCommandOutput extends DeliverConfigSnapshotResponse, __MetadataBearer {}

/**
 * @public
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 *          <ul>
 *             <li>
 *                <p>Notification of the start of the delivery.</p>
 *             </li>
 *             <li>
 *                <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 *             </li>
 *             <li>
 *                <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeliverConfigSnapshotRequest
 *   deliveryChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeliverConfigSnapshotResponse
 * //   configSnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeliverConfigSnapshotCommandInput - {@link DeliverConfigSnapshotCommandInput}
 * @returns {@link DeliverConfigSnapshotCommandOutput}
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *  <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 *
 * @throws {@link NoRunningConfigurationRecorderException} (client fault)
 *  <p>There is no configuration recorder running.</p>
 *
 * @throws {@link NoSuchDeliveryChannelException} (client fault)
 *  <p>You have specified a delivery channel that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DeliverConfigSnapshotCommand extends $Command<
  DeliverConfigSnapshotCommandInput,
  DeliverConfigSnapshotCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DeliverConfigSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeliverConfigSnapshotCommandInput, DeliverConfigSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeliverConfigSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeliverConfigSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DeliverConfigSnapshot",
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
  private serialize(input: DeliverConfigSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeliverConfigSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeliverConfigSnapshotCommandOutput> {
    return de_DeliverConfigSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
