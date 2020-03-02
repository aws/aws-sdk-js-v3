import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client";
import {
  ChangeResourceRecordSetsRequest,
  ChangeResourceRecordSetsResponse
} from "../models/index";
import {
  deserializeAws_restXmlChangeResourceRecordSetsCommand,
  serializeAws_restXmlChangeResourceRecordSetsCommand
} from "../protocols/Aws_restXml";
import {
  getChangeResourceRecordSetsPlugin,
  getIdNormalizerPlugin
} from "@aws-sdk/middleware-sdk-route53";
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

export type ChangeResourceRecordSetsCommandInput = ChangeResourceRecordSetsRequest;
export type ChangeResourceRecordSetsCommandOutput = ChangeResourceRecordSetsResponse &
  __MetadataBearer;

export class ChangeResourceRecordSetsCommand extends $Command<
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ChangeResourceRecordSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ChangeResourceRecordSetsCommandInput,
    ChangeResourceRecordSetsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getChangeResourceRecordSetsPlugin(configuration));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

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
    input: ChangeResourceRecordSetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlChangeResourceRecordSetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ChangeResourceRecordSetsCommandOutput> {
    return deserializeAws_restXmlChangeResourceRecordSetsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
