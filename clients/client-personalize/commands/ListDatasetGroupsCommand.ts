import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListDatasetGroupsCommand,
  serializeAws_json1_1ListDatasetGroupsCommand,
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

export type ListDatasetGroupsCommandInput = ListDatasetGroupsRequest;
export type ListDatasetGroupsCommandOutput = ListDatasetGroupsResponse & __MetadataBearer;

/**
 * <p>Returns a list of dataset groups. The response provides the properties for each dataset
 *       group, including the Amazon Resource Name (ARN). For more information on dataset groups, see
 *         <a>CreateDatasetGroup</a>.</p>
 */
export class ListDatasetGroupsCommand extends $Command<
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDatasetGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListDatasetGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDatasetGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDatasetGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDatasetGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDatasetGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetGroupsCommandOutput> {
    return deserializeAws_json1_1ListDatasetGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
