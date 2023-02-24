// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import {
  CreateCallAnalyticsCategoryRequest,
  CreateCallAnalyticsCategoryRequestFilterSensitiveLog,
  CreateCallAnalyticsCategoryResponse,
  CreateCallAnalyticsCategoryResponseFilterSensitiveLog,
} from "../models/models_0";
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
 * <p>Creates a new Call Analytics category.</p>
 *          <p>All categories are automatically applied to your Call Analytics transcriptions. Note that in
 *             order to apply categories to your transcriptions, you must create them before submitting your
 *             transcription request, as categories cannot be applied retroactively.</p>
 *          <p>When creating a new category, you can use the <code>InputType</code> parameter to
 *             label the category as a batch category (<code>POST_CALL</code>) or a streaming category
 *             (<code>REAL_TIME</code>). Batch categories can only be applied to batch transcriptions and
 *             streaming categories can only be applied to streaming transcriptions. If you do not include
 *             <code>InputType</code>, your category is created as a batch category by default.</p>
 *          <p>Call Analytics categories are composed of rules. For each category, you must create
 *             between 1 and 20 rules. Rules can include these parameters: , , , and .</p>
 *          <p>To update an existing category, see .</p>
 *          <p>To learn more about Call Analytics categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for batch
 *             transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
 *                 streaming transcriptions</a>.</p>
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

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCallAnalyticsCategoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "CreateCallAnalyticsCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCallAnalyticsCategoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCallAnalyticsCategoryResponseFilterSensitiveLog,
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
