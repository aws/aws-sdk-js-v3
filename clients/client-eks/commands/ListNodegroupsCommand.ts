import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListNodegroupsRequest, ListNodegroupsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListNodegroupsCommand,
  serializeAws_restJson1ListNodegroupsCommand,
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

export type ListNodegroupsCommandInput = ListNodegroupsRequest;
export type ListNodegroupsCommandOutput = ListNodegroupsResponse & __MetadataBearer;

/**
 * <p>Lists the Amazon EKS managed node groups associated with the specified cluster in your
 *             AWS account in the specified Region. Self-managed node groups are not listed.</p>
 */
export class ListNodegroupsCommand extends $Command<
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNodegroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNodegroupsCommandInput, ListNodegroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListNodegroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNodegroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListNodegroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNodegroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNodegroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNodegroupsCommandOutput> {
    return deserializeAws_restJson1ListNodegroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
