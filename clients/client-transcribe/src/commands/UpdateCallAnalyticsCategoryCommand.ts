import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateCallAnalyticsCategoryRequest, UpdateCallAnalyticsCategoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCallAnalyticsCategoryCommand,
  serializeAws_json1_1UpdateCallAnalyticsCategoryCommand,
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

export interface UpdateCallAnalyticsCategoryCommandInput extends UpdateCallAnalyticsCategoryRequest {}
export interface UpdateCallAnalyticsCategoryCommandOutput
  extends UpdateCallAnalyticsCategoryResponse,
    __MetadataBearer {}

/**
 * <p>Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code>
 *             operation overwrites all of the existing information with the values that you provide in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateCallAnalyticsCategoryCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateCallAnalyticsCategoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCallAnalyticsCategoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCallAnalyticsCategoryCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateCallAnalyticsCategoryCommand extends $Command<
  UpdateCallAnalyticsCategoryCommandInput,
  UpdateCallAnalyticsCategoryCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCallAnalyticsCategoryCommandInput) {
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
  ): Handler<UpdateCallAnalyticsCategoryCommandInput, UpdateCallAnalyticsCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "UpdateCallAnalyticsCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCallAnalyticsCategoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCallAnalyticsCategoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCallAnalyticsCategoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCallAnalyticsCategoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCallAnalyticsCategoryCommandOutput> {
    return deserializeAws_json1_1UpdateCallAnalyticsCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
