import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { RebootReplicationInstanceMessage, RebootReplicationInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RebootReplicationInstanceCommand,
  serializeAws_json1_1RebootReplicationInstanceCommand,
} from "../protocols/Aws_json1_1";
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

export type RebootReplicationInstanceCommandInput = RebootReplicationInstanceMessage;
export type RebootReplicationInstanceCommandOutput = RebootReplicationInstanceResponse & __MetadataBearer;

/**
 * <p>Reboots a replication instance. Rebooting results in a momentary outage, until the
 *          replication instance becomes available again.</p>
 */
export class RebootReplicationInstanceCommand extends $Command<
  RebootReplicationInstanceCommandInput,
  RebootReplicationInstanceCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootReplicationInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootReplicationInstanceCommandInput, RebootReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "RebootReplicationInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootReplicationInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RebootReplicationInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RebootReplicationInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RebootReplicationInstanceCommandOutput> {
    return deserializeAws_json1_1RebootReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
