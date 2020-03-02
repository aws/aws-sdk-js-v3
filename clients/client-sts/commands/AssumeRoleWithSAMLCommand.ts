import {
  STSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../STSClient";
import {
  AssumeRoleWithSAMLRequest,
  AssumeRoleWithSAMLResponse
} from "../models/index";
import {
  deserializeAws_queryAssumeRoleWithSAMLCommand,
  serializeAws_queryAssumeRoleWithSAMLCommand
} from "../protocols/Aws_query";
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

export type AssumeRoleWithSAMLCommandInput = AssumeRoleWithSAMLRequest;
export type AssumeRoleWithSAMLCommandOutput = AssumeRoleWithSAMLResponse &
  __MetadataBearer;

export class AssumeRoleWithSAMLCommand extends $Command<
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssumeRoleWithSAMLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput> {
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
    input: AssumeRoleWithSAMLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAssumeRoleWithSAMLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssumeRoleWithSAMLCommandOutput> {
    return deserializeAws_queryAssumeRoleWithSAMLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
