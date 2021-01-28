import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListClusterJobsCommand,
  serializeAws_json1_1ListClusterJobsCommand,
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

export type ListClusterJobsCommandInput = ListClusterJobsRequest;
export type ListClusterJobsCommandOutput = ListClusterJobsResult & __MetadataBearer;

/**
 * <p>Returns an array of <code>JobListEntry</code> objects of the specified length. Each
 *         <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's
 *       state, a job's ID, and other information.</p>
 */
export class ListClusterJobsCommand extends $Command<
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClusterJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterJobsCommandInput, ListClusterJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "ListClusterJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClusterJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClusterJobsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClusterJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListClusterJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterJobsCommandOutput> {
    return deserializeAws_json1_1ListClusterJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
