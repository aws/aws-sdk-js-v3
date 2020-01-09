import {
  CodeCommitClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeCommitClient";
import {
  MergePullRequestByFastForwardInput,
  MergePullRequestByFastForwardOutput,
} from "../models/index";
import {
  deserializeAws_json1_1MergePullRequestByFastForwardCommand,
  serializeAws_json1_1MergePullRequestByFastForwardCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type MergePullRequestByFastForwardCommandInput = MergePullRequestByFastForwardInput;
export type MergePullRequestByFastForwardCommandOutput = MergePullRequestByFastForwardOutput;

export class MergePullRequestByFastForwardCommand extends $Command<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput, CodeCommitClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergePullRequestByFastForwardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergePullRequestByFastForwardCommandInput, MergePullRequestByFastForwardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: MergePullRequestByFastForwardCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1MergePullRequestByFastForwardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<MergePullRequestByFastForwardCommandOutput> {
    return deserializeAws_json1_1MergePullRequestByFastForwardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
