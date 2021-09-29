import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCodeRepositoriesInput, ListCodeRepositoriesOutput } from "../models/models_2";
import {
  deserializeAws_json1_1ListCodeRepositoriesCommand,
  serializeAws_json1_1ListCodeRepositoriesCommand,
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

export interface ListCodeRepositoriesCommandInput extends ListCodeRepositoriesInput {}
export interface ListCodeRepositoriesCommandOutput extends ListCodeRepositoriesOutput, __MetadataBearer {}

/**
 * <p>Gets a list of the Git repositories in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCodeRepositoriesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCodeRepositoriesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCodeRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCodeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListCodeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListCodeRepositoriesCommand extends $Command<
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCodeRepositoriesCommandInput) {
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
  ): Handler<ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListCodeRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCodeRepositoriesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListCodeRepositoriesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCodeRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCodeRepositoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCodeRepositoriesCommandOutput> {
    return deserializeAws_json1_1ListCodeRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
