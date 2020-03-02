import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/index";
import {
  deserializeAws_restXmlGetGeoLocationCommand,
  serializeAws_restXmlGetGeoLocationCommand
} from "../protocols/Aws_restXml";
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

export type GetGeoLocationCommandInput = GetGeoLocationRequest;
export type GetGeoLocationCommandOutput = GetGeoLocationResponse &
  __MetadataBearer;

export class GetGeoLocationCommand extends $Command<
  GetGeoLocationCommandInput,
  GetGeoLocationCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGeoLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetGeoLocationCommandInput, GetGeoLocationCommandOutput> {
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
    input: GetGeoLocationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetGeoLocationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetGeoLocationCommandOutput> {
    return deserializeAws_restXmlGetGeoLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
