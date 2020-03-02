import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SecretsManagerClient";
import {
  ListSecretVersionIdsRequest,
  ListSecretVersionIdsResponse
} from "../models/index";
import {
  deserializeAws_json1_1ListSecretVersionIdsCommand,
  serializeAws_json1_1ListSecretVersionIdsCommand
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

export type ListSecretVersionIdsCommandInput = ListSecretVersionIdsRequest;
export type ListSecretVersionIdsCommandOutput = ListSecretVersionIdsResponse &
  __MetadataBearer;

export class ListSecretVersionIdsCommand extends $Command<
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecretVersionIdsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSecretVersionIdsCommandInput,
    ListSecretVersionIdsCommandOutput
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
    input: ListSecretVersionIdsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecretVersionIdsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecretVersionIdsCommandOutput> {
    return deserializeAws_json1_1ListSecretVersionIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
