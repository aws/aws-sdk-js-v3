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
  DeleteCallAnalyticsCategoryRequest,
  DeleteCallAnalyticsCategoryRequestFilterSensitiveLog,
  DeleteCallAnalyticsCategoryResponse,
  DeleteCallAnalyticsCategoryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCallAnalyticsCategoryCommand,
  serializeAws_json1_1DeleteCallAnalyticsCategoryCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface DeleteCallAnalyticsCategoryCommandInput extends DeleteCallAnalyticsCategoryRequest {}
export interface DeleteCallAnalyticsCategoryCommandOutput
  extends DeleteCallAnalyticsCategoryResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a Call Analytics category. To use this operation, specify the name of the
 *             category you want to delete using <code>CategoryName</code>. Category names are case
 *             sensitive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteCallAnalyticsCategoryCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteCallAnalyticsCategoryCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteCallAnalyticsCategoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCallAnalyticsCategoryCommandInput} for command's `input` shape.
 * @see {@link DeleteCallAnalyticsCategoryCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class DeleteCallAnalyticsCategoryCommand extends $Command<
  DeleteCallAnalyticsCategoryCommandInput,
  DeleteCallAnalyticsCategoryCommandOutput,
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

  constructor(readonly input: DeleteCallAnalyticsCategoryCommandInput) {
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
  ): Handler<DeleteCallAnalyticsCategoryCommandInput, DeleteCallAnalyticsCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCallAnalyticsCategoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "DeleteCallAnalyticsCategoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCallAnalyticsCategoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteCallAnalyticsCategoryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCallAnalyticsCategoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCallAnalyticsCategoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCallAnalyticsCategoryCommandOutput> {
    return deserializeAws_json1_1DeleteCallAnalyticsCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
