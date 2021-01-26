import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListClustersInput, ListClustersOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListClustersCommand,
  serializeAws_json1_1ListClustersCommand,
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

export type ListClustersCommandInput = ListClustersInput;
export type ListClustersCommandOutput = ListClustersOutput & __MetadataBearer;

/**
 * <p>Provides the status of all clusters visible to this AWS account. Allows you to filter
 *          the list of clusters based on certain criteria; for example, filtering by cluster creation
 *          date and time or by status. This call returns a maximum of 50 clusters per call, but
 *          returns a marker to track the paging of the cluster list across multiple ListClusters
 *          calls.</p>
 */
export class ListClustersCommand extends $Command<
  ListClustersCommandInput,
  ListClustersCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClustersCommandInput, ListClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClustersInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListClustersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersCommandOutput> {
    return deserializeAws_json1_1ListClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
