import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/index";
import {
  deserializeAws_restJson1ExecuteSqlCommand,
  serializeAws_restJson1ExecuteSqlCommand,
} from "../protocols/Aws_restJson1";
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

export type ExecuteSqlCommandInput = ExecuteSqlRequest;
export type ExecuteSqlCommandOutput = ExecuteSqlResponse & __MetadataBearer;

export class ExecuteSqlCommand extends $Command<
  ExecuteSqlCommandInput,
  ExecuteSqlCommandOutput,
  RDSDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteSqlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteSqlCommandInput, ExecuteSqlCommandOutput> {
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

  private serialize(input: ExecuteSqlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteSqlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteSqlCommandOutput> {
    return deserializeAws_restJson1ExecuteSqlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
