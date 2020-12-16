import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { ListBackendJobsRequest, ListBackendJobsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListBackendJobsCommand,
  serializeAws_restJson1ListBackendJobsCommand,
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

export type ListBackendJobsCommandInput = ListBackendJobsRequest;
export type ListBackendJobsCommandOutput = ListBackendJobsResponse & __MetadataBearer;

/**
 * <p>Lists the jobs for the backend of an Amplify app.</p>
 */
export class ListBackendJobsCommand extends $Command<
  ListBackendJobsCommandInput,
  ListBackendJobsCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBackendJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackendJobsCommandInput, ListBackendJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "ListBackendJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackendJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBackendJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackendJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackendJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackendJobsCommandOutput> {
    return deserializeAws_restJson1ListBackendJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
