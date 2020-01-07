import {
  DAXClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DAXClient";
import {
  IncreaseReplicationFactorRequest,
  IncreaseReplicationFactorResponse
} from "../models/index";
import {
  deserializeAws_json1_1IncreaseReplicationFactorCommand,
  serializeAws_json1_1IncreaseReplicationFactorCommand
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type IncreaseReplicationFactorCommandInput = IncreaseReplicationFactorRequest;
export type IncreaseReplicationFactorCommandOutput = IncreaseReplicationFactorResponse;

export class IncreaseReplicationFactorCommand extends $Command<
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
  DAXClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IncreaseReplicationFactorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DAXClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    IncreaseReplicationFactorCommandInput,
    IncreaseReplicationFactorCommandOutput
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
    input: IncreaseReplicationFactorCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1IncreaseReplicationFactorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<IncreaseReplicationFactorCommandOutput> {
    return deserializeAws_json1_1IncreaseReplicationFactorCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
