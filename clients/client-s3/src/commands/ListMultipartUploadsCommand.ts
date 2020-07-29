import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListMultipartUploadsOutput, ListMultipartUploadsRequest } from "../models/index";
import {
  deserializeAws_restXmlListMultipartUploadsCommand,
  serializeAws_restXmlListMultipartUploadsCommand,
} from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
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

export type ListMultipartUploadsCommandInput = ListMultipartUploadsRequest;
export type ListMultipartUploadsCommandOutput = ListMultipartUploadsOutput & __MetadataBearer;

export class ListMultipartUploadsCommand extends $Command<
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMultipartUploadsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultipartUploadsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListMultipartUploadsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultipartUploadsCommandOutput> {
    return deserializeAws_restXmlListMultipartUploadsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
