import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { FinalizeCutoverRequest, SourceServer } from "../models/models_0";
import {
  deserializeAws_restJson1FinalizeCutoverCommand,
  serializeAws_restJson1FinalizeCutoverCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type FinalizeCutoverCommandInput = FinalizeCutoverRequest;
export type FinalizeCutoverCommandOutput = SourceServer & __MetadataBearer;

/**
 * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.</p>
 */
export class FinalizeCutoverCommand extends $Command<
  FinalizeCutoverCommandInput,
  FinalizeCutoverCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "FinalizeCutoverCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FinalizeCutoverRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
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
