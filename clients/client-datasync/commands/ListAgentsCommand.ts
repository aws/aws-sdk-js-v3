import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAgentsCommand,
  serializeAws_json1_1ListAgentsCommand,
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

export type ListAgentsCommandInput = ListAgentsRequest;
export type ListAgentsCommandOutput = ListAgentsResponse & __MetadataBearer;

/**
 * <p>Returns a list of agents owned by an AWS account in the AWS Region specified in the
 *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
 *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
 *       pagination that enables you to optionally reduce the number of agents returned in a
 *       response.</p>
 *          <p>If you have more agents than are returned in a response (that is, the response returns
 *       only a truncated list of your agents), the response contains a marker that you can specify in
 *       your next request to fetch the next page of agents.</p>
 */
export class ListAgentsCommand extends $Command<
  ListAgentsCommandInput,
  ListAgentsCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAgentsCommandInput, ListAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAgentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAgentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAgentsCommandOutput> {
    return deserializeAws_json1_1ListAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
