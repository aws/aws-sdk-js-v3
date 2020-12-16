import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetArchiveRuleRequest, GetArchiveRuleResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetArchiveRuleCommand,
  serializeAws_restJson1GetArchiveRuleCommand,
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

export type GetArchiveRuleCommandInput = GetArchiveRuleRequest;
export type GetArchiveRuleCommandOutput = GetArchiveRuleResponse & __MetadataBearer;

/**
 * <p>Retrieves information about an archive rule.</p>
 */
export class GetArchiveRuleCommand extends $Command<
  GetArchiveRuleCommandInput,
  GetArchiveRuleCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetArchiveRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetArchiveRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetArchiveRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetArchiveRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetArchiveRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetArchiveRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetArchiveRuleCommandOutput> {
    return deserializeAws_restJson1GetArchiveRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
