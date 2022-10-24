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
  UpdateJobShipmentStateRequest,
  UpdateJobShipmentStateRequestFilterSensitiveLog,
  UpdateJobShipmentStateResult,
  UpdateJobShipmentStateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateJobShipmentStateCommand,
  serializeAws_json1_1UpdateJobShipmentStateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {}
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {}

/**
 * <p>Updates the state when a shipment state changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 */
export class UpdateJobShipmentStateCommand extends $Command<
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
  SnowballClientResolvedConfig
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

  constructor(readonly input: UpdateJobShipmentStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobShipmentStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateJobShipmentStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobShipmentStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobShipmentStateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateJobShipmentStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobShipmentStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobShipmentStateCommandOutput> {
    return deserializeAws_json1_1UpdateJobShipmentStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
