import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { BatchDisassociateUserStackRequest, BatchDisassociateUserStackResult } from "../models/index";
import {
  deserializeAws_json1_1BatchDisassociateUserStackCommand,
  serializeAws_json1_1BatchDisassociateUserStackCommand,
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

export type BatchDisassociateUserStackCommandInput = BatchDisassociateUserStackRequest;
export type BatchDisassociateUserStackCommandOutput = BatchDisassociateUserStackResult & __MetadataBearer;

export class BatchDisassociateUserStackCommand extends $Command<
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateUserStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDisassociateUserStackCommandInput, BatchDisassociateUserStackCommandOutput> {
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

  private serialize(input: BatchDisassociateUserStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDisassociateUserStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateUserStackCommandOutput> {
    return deserializeAws_json1_1BatchDisassociateUserStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
