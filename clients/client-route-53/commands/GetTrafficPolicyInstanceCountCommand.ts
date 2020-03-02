import {
  Route53ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53Client";
import {
  GetTrafficPolicyInstanceCountRequest,
  GetTrafficPolicyInstanceCountResponse
} from "../models/index";
import {
  deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand,
  serializeAws_restXmlGetTrafficPolicyInstanceCountCommand
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

export type GetTrafficPolicyInstanceCountCommandInput = GetTrafficPolicyInstanceCountRequest;
export type GetTrafficPolicyInstanceCountCommandOutput = GetTrafficPolicyInstanceCountResponse &
  __MetadataBearer;

export class GetTrafficPolicyInstanceCountCommand extends $Command<
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTrafficPolicyInstanceCountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetTrafficPolicyInstanceCountCommandInput,
    GetTrafficPolicyInstanceCountCommandOutput
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
    input: GetTrafficPolicyInstanceCountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetTrafficPolicyInstanceCountCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTrafficPolicyInstanceCountCommandOutput> {
    return deserializeAws_restXmlGetTrafficPolicyInstanceCountCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
