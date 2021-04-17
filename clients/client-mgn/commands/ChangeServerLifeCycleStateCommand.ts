import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ChangeServerLifeCycleStateRequest, SourceServer } from "../models/models_0";
import {
  deserializeAws_restJson1ChangeServerLifeCycleStateCommand,
  serializeAws_restJson1ChangeServerLifeCycleStateCommand,
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

export interface ChangeServerLifeCycleStateCommandInput extends ChangeServerLifeCycleStateRequest {}
export interface ChangeServerLifeCycleStateCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
 */
export class ChangeServerLifeCycleStateCommand extends $Command<
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ChangeServerLifeCycleStateCommandInput) {
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
  ): Handler<ChangeServerLifeCycleStateCommandInput, ChangeServerLifeCycleStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "ChangeServerLifeCycleStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangeServerLifeCycleStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangeServerLifeCycleStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ChangeServerLifeCycleStateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ChangeServerLifeCycleStateCommandOutput> {
    return deserializeAws_restJson1ChangeServerLifeCycleStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
