import {
  ElastiCacheClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElastiCacheClient";
import {
  DeleteCacheClusterMessage,
  DeleteCacheClusterResult
} from "../models/index";
import {
  deserializeAws_queryDeleteCacheClusterCommand,
  serializeAws_queryDeleteCacheClusterCommand
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

export type DeleteCacheClusterCommandInput = DeleteCacheClusterMessage;
export type DeleteCacheClusterCommandOutput = DeleteCacheClusterResult &
  __MetadataBearer;

export class DeleteCacheClusterCommand extends $Command<
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCacheClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput> {
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
    input: DeleteCacheClusterCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCacheClusterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCacheClusterCommandOutput> {
    return deserializeAws_queryDeleteCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
