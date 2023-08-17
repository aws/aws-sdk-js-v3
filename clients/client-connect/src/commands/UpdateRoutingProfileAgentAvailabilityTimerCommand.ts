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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateRoutingProfileAgentAvailabilityTimerRequest } from "../models/models_1";
import {
  de_UpdateRoutingProfileAgentAvailabilityTimerCommand,
  se_UpdateRoutingProfileAgentAvailabilityTimerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandInput
  extends UpdateRoutingProfileAgentAvailabilityTimerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Whether agents with this routing profile will have their routing order calculated based on
 *     <i>time since their last inbound contact</i> or <i>longest idle
 *     time</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileAgentAvailabilityTimerRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND", // required
 * };
 * const command = new UpdateRoutingProfileAgentAvailabilityTimerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileAgentAvailabilityTimerCommandInput - {@link UpdateRoutingProfileAgentAvailabilityTimerCommandInput}
 * @returns {@link UpdateRoutingProfileAgentAvailabilityTimerCommandOutput}
 * @see {@link UpdateRoutingProfileAgentAvailabilityTimerCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileAgentAvailabilityTimerCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateRoutingProfileAgentAvailabilityTimerCommand extends $Command<
  UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
  UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateRoutingProfileAgentAvailabilityTimerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    UpdateRoutingProfileAgentAvailabilityTimerCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateRoutingProfileAgentAvailabilityTimerCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateRoutingProfileAgentAvailabilityTimerCommand";
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
  private serialize(
    input: UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateRoutingProfileAgentAvailabilityTimerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRoutingProfileAgentAvailabilityTimerCommandOutput> {
    return de_UpdateRoutingProfileAgentAvailabilityTimerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
