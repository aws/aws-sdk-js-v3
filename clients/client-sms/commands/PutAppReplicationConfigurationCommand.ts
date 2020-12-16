import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutAppReplicationConfigurationCommand,
  serializeAws_json1_1PutAppReplicationConfigurationCommand,
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

export type PutAppReplicationConfigurationCommandInput = PutAppReplicationConfigurationRequest;
export type PutAppReplicationConfigurationCommandOutput = PutAppReplicationConfigurationResponse & __MetadataBearer;

/**
 * <p>Creates or updates the replication configuration for the specified application.</p>
 */
export class PutAppReplicationConfigurationCommand extends $Command<
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppReplicationConfigurationCommandInput) {
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
  ): Handler<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "PutAppReplicationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppReplicationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppReplicationConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAppReplicationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppReplicationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppReplicationConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAppReplicationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
