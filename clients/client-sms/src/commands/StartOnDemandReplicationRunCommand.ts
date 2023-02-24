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
  StartOnDemandReplicationRunRequest,
  StartOnDemandReplicationRunRequestFilterSensitiveLog,
  StartOnDemandReplicationRunResponse,
  StartOnDemandReplicationRunResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartOnDemandReplicationRunCommand,
  serializeAws_json1_1StartOnDemandReplicationRunCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface StartOnDemandReplicationRunCommandInput extends StartOnDemandReplicationRunRequest {}
export interface StartOnDemandReplicationRunCommandOutput
  extends StartOnDemandReplicationRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *         <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, StartOnDemandReplicationRunCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, StartOnDemandReplicationRunCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new StartOnDemandReplicationRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandReplicationRunCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandReplicationRunCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class StartOnDemandReplicationRunCommand extends $Command<
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: StartOnDemandReplicationRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartOnDemandReplicationRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StartOnDemandReplicationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOnDemandReplicationRunRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartOnDemandReplicationRunResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOnDemandReplicationRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartOnDemandReplicationRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOnDemandReplicationRunCommandOutput> {
    return deserializeAws_json1_1StartOnDemandReplicationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
