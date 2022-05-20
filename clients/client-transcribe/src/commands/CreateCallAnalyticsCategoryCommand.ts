// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateCallAnalyticsCategoryRequest, CreateCallAnalyticsCategoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCallAnalyticsCategoryCommand,
  serializeAws_json1_1CreateCallAnalyticsCategoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface CreateCallAnalyticsCategoryCommandInput extends CreateCallAnalyticsCategoryRequest {}
export interface CreateCallAnalyticsCategoryCommandOutput
  extends CreateCallAnalyticsCategoryResponse,
    __MetadataBearer {}

/**
 * <p>Creates a call analytics category. Amazon Transcribe applies the conditions specified by your
 *             call analytics categories to your call analytics jobs. For each analytics category, you
 *             must create between 1 and 20 rules. For example, you can create a 'greeting'
 *             category with a rule that flags calls in which your agent does not use a specified
 *             phrase (for example: "Please note this call may be recorded.") in the first 15 seconds
 *             of the call. When you start a call analytics job, Amazon Transcribe applies all your existing call
 *             analytics categories to that job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateCallAnalyticsCategoryCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new CreateCallAnalyticsCategoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCallAnalyticsCategoryCommandInput} for command's `input` shape.
 * @see {@link CreateCallAnalyticsCategoryCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class CreateCallAnalyticsCategoryCommand extends $Command<
  CreateCallAnalyticsCategoryCommandInput,
  CreateCallAnalyticsCategoryCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCallAnalyticsCategoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCallAnalyticsCategoryCommandInput, CreateCallAnalyticsCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateCallAnalyticsCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCallAnalyticsCategoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCallAnalyticsCategoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCallAnalyticsCategoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCallAnalyticsCategoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCallAnalyticsCategoryCommandOutput> {
    return deserializeAws_json1_1CreateCallAnalyticsCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
