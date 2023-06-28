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
import { UpdateParticipantRoleConfigRequest, UpdateParticipantRoleConfigResponse } from "../models/models_1";
import {
  de_UpdateParticipantRoleConfigCommand,
  se_UpdateParticipantRoleConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateParticipantRoleConfigCommand}.
 */
export interface UpdateParticipantRoleConfigCommandInput extends UpdateParticipantRoleConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParticipantRoleConfigCommand}.
 */
export interface UpdateParticipantRoleConfigCommandOutput
  extends UpdateParticipantRoleConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates timeouts for when human chat participants are to be considered idle, and when agents
 *    are automatically disconnected from a chat due to idleness. You can set four timers:</p>
 *          <ul>
 *             <li>
 *                <p>Customer idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Customer auto-disconnect timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent auto-disconnect timeout</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateParticipantRoleConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateParticipantRoleConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateParticipantRoleConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ChannelConfiguration: { // UpdateParticipantRoleConfigChannelInfo Union: only one key present
 *     Chat: { // ChatParticipantRoleConfig
 *       ParticipantTimerConfigList: [ // ParticipantTimerConfigList // required
 *         { // ParticipantTimerConfiguration
 *           ParticipantRole: "CUSTOMER" || "AGENT", // required
 *           TimerType: "IDLE" || "DISCONNECT_NONCUSTOMER", // required
 *           TimerValue: { // ParticipantTimerValue Union: only one key present
 *             ParticipantTimerAction: "Unset",
 *             ParticipantTimerDurationInMinutes: Number("int"),
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateParticipantRoleConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateParticipantRoleConfigCommandInput - {@link UpdateParticipantRoleConfigCommandInput}
 * @returns {@link UpdateParticipantRoleConfigCommandOutput}
 * @see {@link UpdateParticipantRoleConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateParticipantRoleConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class UpdateParticipantRoleConfigCommand extends $Command<
  UpdateParticipantRoleConfigCommandInput,
  UpdateParticipantRoleConfigCommandOutput,
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
  constructor(readonly input: UpdateParticipantRoleConfigCommandInput) {
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
  ): Handler<UpdateParticipantRoleConfigCommandInput, UpdateParticipantRoleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateParticipantRoleConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateParticipantRoleConfigCommand";
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
  private serialize(input: UpdateParticipantRoleConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateParticipantRoleConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateParticipantRoleConfigCommandOutput> {
    return de_UpdateParticipantRoleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
