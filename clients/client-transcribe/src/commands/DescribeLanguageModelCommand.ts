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

import { DescribeLanguageModelRequest, DescribeLanguageModelResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLanguageModelCommand,
  serializeAws_json1_1DescribeLanguageModelCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface DescribeLanguageModelCommandInput extends DescribeLanguageModelRequest {}
export interface DescribeLanguageModelCommandOutput extends DescribeLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Provides information about a specific custom language model in your
 *             Amazon Web Services account.</p>
 *         <p>This operation also shows if the base language model you used to create your custom
 *             language model has been updated. If Amazon Transcribe has updated the base model, you can create a
 *             new custom language model using the updated base model.</p>
 *         <p>If you tried to create a new custom language model and the request wasn't successful,
 *             you can use this operation to help identify the reason. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DescribeLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DescribeLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DescribeLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DescribeLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class DescribeLanguageModelCommand extends $Command<
  DescribeLanguageModelCommandInput,
  DescribeLanguageModelCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLanguageModelCommandInput) {
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
  ): Handler<DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "DescribeLanguageModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLanguageModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLanguageModelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLanguageModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLanguageModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLanguageModelCommandOutput> {
    return deserializeAws_json1_1DescribeLanguageModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
