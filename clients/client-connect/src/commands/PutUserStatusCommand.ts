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
import { PutUserStatusRequest, PutUserStatusResponse } from "../models/models_1";
import { de_PutUserStatusCommand, se_PutUserStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutUserStatusCommand}.
 */
export interface PutUserStatusCommandInput extends PutUserStatusRequest {}
/**
 * @public
 *
 * The output of {@link PutUserStatusCommand}.
 */
export interface PutUserStatusCommandOutput extends PutUserStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the current status of a user or agent in Amazon Connect. If the agent is
 *    currently handling a contact, this sets the agent's next status.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html">Agent status</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-next-status.html">Set your next
 *     status</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, PutUserStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, PutUserStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // PutUserStatusRequest
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AgentStatusId: "STRING_VALUE", // required
 * };
 * const command = new PutUserStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserStatusCommandInput - {@link PutUserStatusCommandInput}
 * @returns {@link PutUserStatusCommandOutput}
 * @see {@link PutUserStatusCommandInput} for command's `input` shape.
 * @see {@link PutUserStatusCommandOutput} for command's `response` shape.
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
export class PutUserStatusCommand extends $Command<
  PutUserStatusCommandInput,
  PutUserStatusCommandOutput,
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
  constructor(readonly input: PutUserStatusCommandInput) {
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
  ): Handler<PutUserStatusCommandInput, PutUserStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutUserStatusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "PutUserStatusCommand";
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
  private serialize(input: PutUserStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutUserStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutUserStatusCommandOutput> {
    return de_PutUserStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
