import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentsInput, ListDeploymentsOutput } from "../models/index";
import {
  deserializeAws_json1_1ListDeploymentsCommand,
  serializeAws_json1_1ListDeploymentsCommand,
} from "../protocols/Aws_json1_1";
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

export type ListDeploymentsCommandInput = ListDeploymentsInput;
export type ListDeploymentsCommandOutput = ListDeploymentsOutput & __MetadataBearer;

export class ListDeploymentsCommand extends $Command<
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentsCommandInput, ListDeploymentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

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

  private serialize(input: ListDeploymentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentsCommandOutput> {
    return deserializeAws_json1_1ListDeploymentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
