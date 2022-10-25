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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  DisconnectRecoveryInstanceRequest,
  DisconnectRecoveryInstanceRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisconnectRecoveryInstanceCommand,
  serializeAws_restJson1DisconnectRecoveryInstanceCommand,
} from "../protocols/Aws_restJson1";

export interface DisconnectRecoveryInstanceCommandInput extends DisconnectRecoveryInstanceRequest {}
export interface DisconnectRecoveryInstanceCommandOutput extends __MetadataBearer {}

/**
 * <p>Disconnect a Recovery Instance from Elastic Disaster Recovery. Data replication is stopped immediately. All AWS resources created by Elastic Disaster Recovery for enabling the replication of the Recovery Instance will be terminated / deleted within 90 minutes. If the agent on the Recovery Instance has not been prevented from communicating with the Elastic Disaster Recovery service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the Recovery Instance will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DisconnectRecoveryInstanceCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DisconnectRecoveryInstanceCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new DisconnectRecoveryInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectRecoveryInstanceCommandInput} for command's `input` shape.
 * @see {@link DisconnectRecoveryInstanceCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class DisconnectRecoveryInstanceCommand extends $Command<
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: DisconnectRecoveryInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectRecoveryInstanceCommandInput, DisconnectRecoveryInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisconnectRecoveryInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DisconnectRecoveryInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectRecoveryInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectRecoveryInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectRecoveryInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisconnectRecoveryInstanceCommandOutput> {
    return deserializeAws_restJson1DisconnectRecoveryInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
