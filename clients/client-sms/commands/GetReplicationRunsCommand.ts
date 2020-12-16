import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetReplicationRunsRequest, GetReplicationRunsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetReplicationRunsCommand,
  serializeAws_json1_1GetReplicationRunsCommand,
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

export type GetReplicationRunsCommandInput = GetReplicationRunsRequest;
export type GetReplicationRunsCommandOutput = GetReplicationRunsResponse & __MetadataBearer;

/**
 * <p>Describes the replication runs for the specified replication job.</p>
 */
export class GetReplicationRunsCommand extends $Command<
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetReplicationRunsCommandInput) {
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
  ): Handler<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetReplicationRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReplicationRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetReplicationRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReplicationRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReplicationRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReplicationRunsCommandOutput> {
    return deserializeAws_json1_1GetReplicationRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
