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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DeliverConfigSnapshotRequest,
  DeliverConfigSnapshotRequestFilterSensitiveLog,
  DeliverConfigSnapshotResponse,
  DeliverConfigSnapshotResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeliverConfigSnapshotCommand,
  serializeAws_json1_1DeliverConfigSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface DeliverConfigSnapshotCommandInput extends DeliverConfigSnapshotRequest {}
export interface DeliverConfigSnapshotCommandOutput extends DeliverConfigSnapshotResponse, __MetadataBearer {}

/**
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Notification of the start of the delivery.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
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
      inputFilterSensitiveLog: DeliverConfigSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeliverConfigSnapshotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeliverConfigSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeliverConfigSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeliverConfigSnapshotCommandOutput> {
    return deserializeAws_json1_1DeliverConfigSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
