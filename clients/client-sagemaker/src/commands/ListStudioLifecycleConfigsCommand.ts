import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListStudioLifecycleConfigsRequest, ListStudioLifecycleConfigsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListStudioLifecycleConfigsCommand,
  serializeAws_json1_1ListStudioLifecycleConfigsCommand,
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

export interface ListStudioLifecycleConfigsCommandInput extends ListStudioLifecycleConfigsRequest {}
export interface ListStudioLifecycleConfigsCommandOutput extends ListStudioLifecycleConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListStudioLifecycleConfigsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListStudioLifecycleConfigsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListStudioLifecycleConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioLifecycleConfigsCommandInput} for command's `input` shape.
 * @see {@link ListStudioLifecycleConfigsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStudioLifecycleConfigsCommand extends $Command<
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudioLifecycleConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStudioLifecycleConfigsCommandInput, ListStudioLifecycleConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListStudioLifecycleConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudioLifecycleConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudioLifecycleConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudioLifecycleConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudioLifecycleConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStudioLifecycleConfigsCommandOutput> {
    return deserializeAws_json1_1ListStudioLifecycleConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
