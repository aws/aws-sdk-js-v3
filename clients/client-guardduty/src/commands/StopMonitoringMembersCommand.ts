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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  StopMonitoringMembersRequest,
  StopMonitoringMembersRequestFilterSensitiveLog,
  StopMonitoringMembersResponse,
  StopMonitoringMembersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StopMonitoringMembersCommand,
  serializeAws_restJson1StopMonitoringMembersCommand,
} from "../protocols/Aws_restJson1";

export interface StopMonitoringMembersCommandInput extends StopMonitoringMembersRequest {}
export interface StopMonitoringMembersCommandOutput extends StopMonitoringMembersResponse, __MetadataBearer {}

/**
 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
 *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
 *       accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StopMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StopMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new StopMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class StopMonitoringMembersCommand extends $Command<
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: StopMonitoringMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopMonitoringMembersCommandInput, StopMonitoringMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopMonitoringMembersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "StopMonitoringMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMonitoringMembersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopMonitoringMembersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMonitoringMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopMonitoringMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMonitoringMembersCommandOutput> {
    return deserializeAws_restJson1StopMonitoringMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
