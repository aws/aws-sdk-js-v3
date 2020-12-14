import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { ListContainersInput, ListContainersOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListContainersCommand,
  serializeAws_json1_1ListContainersCommand,
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

export type ListContainersCommandInput = ListContainersInput;
export type ListContainersCommandOutput = ListContainersOutput & __MetadataBearer;

/**
 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p>
 *          <p>You can query to receive all the containers in one response. Or you can include the
 *             <code>MaxResults</code> parameter to receive a limited number of containers in each
 *          response. In this case, the response includes a token. To get the next set of containers,
 *          send the command again, this time with the <code>NextToken</code> parameter (with the
 *          returned token as its value). The next set of responses appears, with a token if there are
 *          still more containers to receive. </p>
 *          <p>See also <a>DescribeContainer</a>, which gets the properties of one
 *          container. </p>
 */
export class ListContainersCommand extends $Command<
  ListContainersCommandInput,
  ListContainersCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContainersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContainersCommandInput, ListContainersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "ListContainersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContainersInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListContainersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContainersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListContainersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContainersCommandOutput> {
    return deserializeAws_json1_1ListContainersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
