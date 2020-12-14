import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListContainerInstancesRequest, ListContainerInstancesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListContainerInstancesCommand,
  serializeAws_json1_1ListContainerInstancesCommand,
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

export type ListContainerInstancesCommandInput = ListContainerInstancesRequest;
export type ListContainerInstancesCommandOutput = ListContainerInstancesResponse & __MetadataBearer;

/**
 * <p>Returns a list of container instances in a specified cluster. You can filter the
 * 			results of a <code>ListContainerInstances</code> operation with cluster query language
 * 			statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class ListContainerInstancesCommand extends $Command<
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContainerInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListContainerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContainerInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListContainerInstancesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContainerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContainerInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContainerInstancesCommandOutput> {
    return deserializeAws_json1_1ListContainerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
