import {
  ConfigServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ConfigServiceClient";
import {
  PutRemediationConfigurationsRequest,
  PutRemediationConfigurationsResponse
} from "../models/index";
import {
  deserializeAws_json1_1PutRemediationConfigurationsCommand,
  serializeAws_json1_1PutRemediationConfigurationsCommand
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

export type PutRemediationConfigurationsCommandInput = PutRemediationConfigurationsRequest;
export type PutRemediationConfigurationsCommandOutput = PutRemediationConfigurationsResponse &
  __MetadataBearer;

export class PutRemediationConfigurationsCommand extends $Command<
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRemediationConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutRemediationConfigurationsCommandInput,
    PutRemediationConfigurationsCommandOutput
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
    input: PutRemediationConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRemediationConfigurationsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRemediationConfigurationsCommandOutput> {
    return deserializeAws_json1_1PutRemediationConfigurationsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
