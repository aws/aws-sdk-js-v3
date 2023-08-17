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

import { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import { de_UpdateJobShipmentStateCommand, se_UpdateJobShipmentStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the state when a shipment state changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // UpdateJobShipmentStateRequest
 *   JobId: "STRING_VALUE", // required
 *   ShipmentState: "RECEIVED" || "RETURNED", // required
 * };
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateJobShipmentStateCommandInput - {@link UpdateJobShipmentStateCommandInput}
 * @returns {@link UpdateJobShipmentStateCommandOutput}
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: UpdateJobShipmentStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateJobShipmentStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobShipmentStateCommandOutput> {
    return de_UpdateJobShipmentStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
