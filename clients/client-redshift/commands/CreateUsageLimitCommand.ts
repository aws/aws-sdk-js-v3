import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateUsageLimitMessage, UsageLimit } from "../models/index";
import {
  deserializeAws_queryCreateUsageLimitCommand,
  serializeAws_queryCreateUsageLimitCommand,
} from "../protocols/Aws_query";
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

export type CreateUsageLimitCommandInput = CreateUsageLimitMessage;
export type CreateUsageLimitCommandOutput = UsageLimit & __MetadataBearer;

export class CreateUsageLimitCommand extends $Command<
  CreateUsageLimitCommandInput,
  CreateUsageLimitCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUsageLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateUsageLimitMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UsageLimit.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUsageLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateUsageLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUsageLimitCommandOutput> {
    return deserializeAws_queryCreateUsageLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
