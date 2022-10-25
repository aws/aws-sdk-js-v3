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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { StartMonitoringMemberRequest, StartMonitoringMemberRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1StartMonitoringMemberCommand,
  serializeAws_restJson1StartMonitoringMemberCommand,
} from "../protocols/Aws_restJson1";

export interface StartMonitoringMemberCommandInput extends StartMonitoringMemberRequest {}
export interface StartMonitoringMemberCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a request to enable data ingest for a member account that has a status of
 *             <code>ACCEPTED_BUT_DISABLED</code>.</p>
 *          <p>For valid member accounts, the status is updated as follows.</p>
 *          <ul>
 *             <li>
 *                <p>If Detective enabled the member account, then the new status is
 *                   <code>ENABLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If Detective cannot enable the member account, the status remains
 *                   <code>ACCEPTED_BUT_DISABLED</code>. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, StartMonitoringMemberCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, StartMonitoringMemberCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new StartMonitoringMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringMemberCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMemberCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class StartMonitoringMemberCommand extends $Command<
  StartMonitoringMemberCommandInput,
  StartMonitoringMemberCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: StartMonitoringMemberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMonitoringMemberCommandInput, StartMonitoringMemberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMonitoringMemberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "StartMonitoringMemberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMonitoringMemberRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMonitoringMemberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMonitoringMemberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMonitoringMemberCommandOutput> {
    return deserializeAws_restJson1StartMonitoringMemberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
