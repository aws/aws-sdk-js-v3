import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListClustersCommand,
  serializeAws_restJson1ListClustersCommand,
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

export type ListClustersCommandInput = ListClustersRequest;
export type ListClustersCommandOutput = ListClustersResponse & __MetadataBearer;

/**
 * <p>Lists the Amazon EKS clusters in your AWS account in the specified Region.</p>
 */
export class ListClustersCommand extends $Command<
  ListClustersCommandInput,
  ListClustersCommandOutput,
  EKSClientResolvedConfig
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
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClustersCommandInput, ListClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClustersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClustersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersCommandOutput> {
    return deserializeAws_restJson1ListClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
