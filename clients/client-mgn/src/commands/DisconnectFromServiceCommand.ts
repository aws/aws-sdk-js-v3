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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DisconnectFromServiceRequest,
  DisconnectFromServiceRequestFilterSensitiveLog,
  SourceServer,
  SourceServerFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisconnectFromServiceCommand,
  serializeAws_restJson1DisconnectFromServiceCommand,
} from "../protocols/Aws_restJson1";

export interface DisconnectFromServiceCommandInput extends DisconnectFromServiceRequest {}
export interface DisconnectFromServiceCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communicating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DisconnectFromServiceCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DisconnectFromServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DisconnectFromServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectFromServiceCommandInput} for command's `input` shape.
 * @see {@link DisconnectFromServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class DisconnectFromServiceCommand extends $Command<
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
  MgnClientResolvedConfig
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

  constructor(readonly input: DisconnectFromServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisconnectFromServiceCommandInput, DisconnectFromServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisconnectFromServiceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DisconnectFromServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisconnectFromServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SourceServerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisconnectFromServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisconnectFromServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisconnectFromServiceCommandOutput> {
    return deserializeAws_restJson1DisconnectFromServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
