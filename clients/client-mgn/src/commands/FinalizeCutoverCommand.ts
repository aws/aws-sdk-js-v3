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
  FinalizeCutoverRequest,
  FinalizeCutoverRequestFilterSensitiveLog,
  SourceServer,
  SourceServerFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1FinalizeCutoverCommand,
  serializeAws_restJson1FinalizeCutoverCommand,
} from "../protocols/Aws_restJson1";

export interface FinalizeCutoverCommandInput extends FinalizeCutoverRequest {}
export interface FinalizeCutoverCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, FinalizeCutoverCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, FinalizeCutoverCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new FinalizeCutoverCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FinalizeCutoverCommandInput} for command's `input` shape.
 * @see {@link FinalizeCutoverCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class FinalizeCutoverCommand extends $Command<
  FinalizeCutoverCommandInput,
  FinalizeCutoverCommandOutput,
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

  constructor(readonly input: FinalizeCutoverCommandInput) {
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
  ): Handler<FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FinalizeCutoverCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "FinalizeCutoverCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FinalizeCutoverRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SourceServerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FinalizeCutoverCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1FinalizeCutoverCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FinalizeCutoverCommandOutput> {
    return deserializeAws_restJson1FinalizeCutoverCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
