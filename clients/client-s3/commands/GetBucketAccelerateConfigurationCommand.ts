import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../S3Client";
import {
  GetBucketAccelerateConfigurationOutput,
  GetBucketAccelerateConfigurationRequest
} from "../models/index";
import {
  deserializeAws_restXmlGetBucketAccelerateConfigurationCommand,
  serializeAws_restXmlGetBucketAccelerateConfigurationCommand
} from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetBucketAccelerateConfigurationCommandInput = GetBucketAccelerateConfigurationRequest;
export type GetBucketAccelerateConfigurationCommandOutput = GetBucketAccelerateConfigurationOutput;

export class GetBucketAccelerateConfigurationCommand extends $Command<
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketAccelerateConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBucketAccelerateConfigurationCommandInput,
    GetBucketAccelerateConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBucketAccelerateConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketAccelerateConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetBucketAccelerateConfigurationCommandOutput> {
    return deserializeAws_restXmlGetBucketAccelerateConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
