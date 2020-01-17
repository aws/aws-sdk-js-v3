import {
  DocDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DocDBClient";
import { DBCluster, FailoverDBClusterMessage } from "../models/index";
import {
  deserializeAws_queryFailoverDBClusterCommand,
  serializeAws_queryFailoverDBClusterCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type FailoverDBClusterCommandInput = FailoverDBClusterMessage;
export type FailoverDBClusterCommandOutput = DBCluster;

export class FailoverDBClusterCommand extends $Command<
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FailoverDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput> {
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
    input: FailoverDBClusterCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryFailoverDBClusterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<FailoverDBClusterCommandOutput> {
    return deserializeAws_queryFailoverDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
