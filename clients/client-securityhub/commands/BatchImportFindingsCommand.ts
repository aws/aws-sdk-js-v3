import {
  SecurityHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecurityHubClient";
import {
  BatchImportFindingsRequest,
  BatchImportFindingsResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1BatchImportFindingsCommand,
  serializeAws_restJson1_1BatchImportFindingsCommand,
} from "../protocols/Aws_restJson1_1";
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

export type BatchImportFindingsCommandInput = BatchImportFindingsRequest;
export type BatchImportFindingsCommandOutput = BatchImportFindingsResponse;

export class BatchImportFindingsCommand extends $Command<BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput, SecurityHubClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchImportFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchImportFindingsCommandInput, BatchImportFindingsCommandOutput> {
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
    input: BatchImportFindingsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1BatchImportFindingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<BatchImportFindingsCommandOutput> {
    return deserializeAws_restJson1_1BatchImportFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
