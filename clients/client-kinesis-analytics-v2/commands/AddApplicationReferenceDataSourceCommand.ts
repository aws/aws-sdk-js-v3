import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisAnalyticsV2Client";
import {
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse
} from "../models/index";
import {
  deserializeAws_json1_1AddApplicationReferenceDataSourceCommand,
  serializeAws_json1_1AddApplicationReferenceDataSourceCommand
} from "../protocols/Aws_json1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type AddApplicationReferenceDataSourceCommandInput = AddApplicationReferenceDataSourceRequest;
export type AddApplicationReferenceDataSourceCommandOutput = AddApplicationReferenceDataSourceResponse &
  __MetadataBearer;

export class AddApplicationReferenceDataSourceCommand extends $Command<
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddApplicationReferenceDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddApplicationReferenceDataSourceCommandInput,
    AddApplicationReferenceDataSourceCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

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
    input: AddApplicationReferenceDataSourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationReferenceDataSourceCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddApplicationReferenceDataSourceCommandOutput> {
    return deserializeAws_json1_1AddApplicationReferenceDataSourceCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
